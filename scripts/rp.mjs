#!/usr/bin/env node
// Orchestrator for npm run rp - reliable server startup with readiness checks
import { execSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const workspaceRoot = join(__dirname, '..');

// Configuration from environment variables
const STORYBOOK_TIMEOUT = parseInt(process.env.STORYBOOK_TIMEOUT || '300');
const DOCS_TIMEOUT = parseInt(process.env.DOCS_TIMEOUT || '120');
const NO_AUTO_OPEN = process.env.LABS_NO_AUTO_OPEN === '1' || process.env.CI === 'true';
const DEBUG = process.env.LABS_RP_DEBUG === '1';

function log(message) {
    console.log(message);
}

function debug(message) {
    if (DEBUG) console.log(`[DEBUG] ${message}`);
}

function runCommand(command, options = {}) {
    debug(`Running: ${command}`);
    try {
        return execSync(command, {
            cwd: workspaceRoot,
            stdio: DEBUG ? 'inherit' : 'ignore',
            ...options
        });
    } catch (error) {
        if (!options.allowFailure) {
            console.error(`Command failed: ${command}`);
            console.error(error.message);
            process.exit(1);
        }
        return null;
    }
}

function openUrl(url, name) {
    if (NO_AUTO_OPEN) {
        log(`🔗 ${name}: ${url} (auto-open disabled)`);
        return;
    }

    try {
        debug(`Opening ${url} in default browser...`);
        if (process.platform === 'darwin') {
            try {
                execSync(`open -a "Google Chrome" "${url}"`, { stdio: 'ignore' });
            } catch (e) {
                // If Chrome is not installed, fall back to default browser
                execSync(`open "${url}"`, { stdio: 'ignore' });
            }
        } else if (process.platform === 'win32') {
            execSync(`start chrome "${url}"`, { stdio: 'ignore' });
        } else {
            execSync(`xdg-open "${url}"`, { stdio: 'ignore' });
        }
        log(`🚀 Opened ${name}`);
    } catch (error) {
        log(`⚠️  Failed to open ${name}: ${url} (please open manually)`);
    }
}

async function main() {
    try {
        log('🚀 Starting Labs development servers...');

        // Step 1: Update static paths for local preview
        log('📝 Updating static paths for local preview...');
        runCommand('node scripts/update-static-paths.js --local');

        // Step 2: Start servers via menu with NO_AUTO_OPEN
        log('⚡ Starting servers via menu (background)...');
        const menuEnv = {
            ...process.env,
            LABS_NO_AUTO_OPEN: '1'
        };

        spawn('bash', ['-lc', 'echo "3" | npm run menu'], {
            cwd: workspaceRoot,
            env: menuEnv,
            stdio: DEBUG ? 'inherit' : 'ignore',
            detached: true
        });

        // Step 3: Wait for servers to be ready
        log('⏳ Waiting for servers to start...');

        // Wait for docs server (quick)
        let docsReady = false;
        let storybookReady = false;
        try {
            runCommand(`bash scripts/wait-for-url.sh http://localhost:8000 "Docs Preview" ${DOCS_TIMEOUT} 2`);
            docsReady = true;
        } catch (error) {
            log('⚠️  Docs server check failed, continuing with Storybook...');
        }
        // Kill all servers on ports 6006 and 8000 before starting
        try {
            console.log('🛑 Killing any running dev servers on ports 6006 and 8000...');
            execSync('lsof -ti:6006,8000 | xargs kill -9', { stdio: 'ignore' });
        } catch (e) {
            // Ignore errors if no servers are running
        }
        // Wait until ports are fully free before proceeding
        let portsFree = false;
        for (let i = 0; i < 20; i++) { // up to 10 seconds
            try {
                const out = execSync('lsof -ti:6006,8000', { stdio: 'pipe' }).toString().trim();
                if (!out) {
                    portsFree = true;
                    break;
                }
            } catch (e) {
                // If lsof fails, assume ports are free
                portsFree = true;
                break;
            }
            await new Promise(res => setTimeout(res, 500));
        }
        if (!portsFree) {
            console.log('⚠️  Warning: ports 6006 or 8000 may still be in use. Proceeding anyway.');
        }

        log('⏳ Building Storybook UI...');
        try {
            runCommand(`bash scripts/wait-for-url.sh http://localhost:6006 "Storybook" ${STORYBOOK_TIMEOUT} 2`);
            runCommand(`bash scripts/wait-for-storybook-ui.sh "http://localhost:6006" 120 3`);
            storybookReady = true;
        } catch (error) {
            log('⚠️  Storybook build/readiness check failed');
            log('🔗 You may need to open http://localhost:6006 manually');
        }

        // Only open browsers if both are ready
        if (docsReady && storybookReady) {
            // Wait 5 seconds to ensure UI is fully rendered before opening browsers
            await new Promise(res => setTimeout(res, 5000));
            openUrl('http://localhost:8000/', 'Labs Homepage');
            openUrl('http://localhost:6006', 'Storybook');
        } else {
            if (docsReady) log('🔗 Labs Homepage is ready: http://localhost:8000/ (open manually)');
            if (storybookReady) log('🔗 Storybook is ready: http://localhost:6006 (open manually)');
        }
        log('🧪 Starting background smoke tests...');
        spawn('bash', ['-lc', '/Users/danielreis/labs/scripts/check-docs-smoke.sh http://localhost:8000 > /tmp/labs-smoke.log 2>&1 &'], {
            stdio: 'ignore',
            detached: true
        });

        // Step 6: Write status for debugging
        const status = {
            startedAt: new Date().toISOString(),
            pid: process.pid,
            storybook_url: 'http://localhost:6006',
            docs_url: 'http://localhost:8000',
            auto_open_disabled: NO_AUTO_OPEN
        };

        try {
            require('fs').writeFileSync('/tmp/labs-rp.status', JSON.stringify(status, null, 2));
        } catch (e) {
            debug('Could not write status file');
        }

        log('✅ Development servers are ready!');
        log('');
        log('📚 Storybook: http://localhost:6006');
        log('🏠 Labs Homepage: http://localhost:8000');
        log('');
        log('🎯 Servers are running in background. To stop them:');
        log('   lsof -ti:6006,8000 | xargs kill -9');
        log('   or: npm run menu → Utilities → Kill all servers');
        log('');
        log('💡 Terminal is now available for other commands.');

        // Exit cleanly, leaving servers running in background
        process.exit(0);

    } catch (error) {
        console.error('❌ Failed to start development servers:', error.message);
        process.exit(1);
    }
}

// Remove SIGINT handler since we want to exit cleanly and leave servers running
main().catch(error => {
    console.error('Fatal error:', error);
    process.exit(1);
});