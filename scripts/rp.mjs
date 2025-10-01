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
        debug(`Opening ${url} in Chrome...`);
        if (process.platform === 'darwin') {
            execSync(`open -a "Google Chrome" "${url}"`, { stdio: 'ignore' });
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
        try {
            runCommand(`bash scripts/wait-for-url.sh http://localhost:8000 "Docs Preview" ${DOCS_TIMEOUT} 2`);

            // Open docs immediately when ready
            openUrl('http://localhost:8000/', 'Labs Homepage');

        } catch (error) {
            log('⚠️  Docs server check failed, continuing with Storybook...');
        }

        // Show building message immediately after docs opens
        log('⏳ Building Storybook UI...');

        // Wait for Storybook HTTP port
        runCommand(`bash scripts/wait-for-url.sh http://localhost:6006 "Storybook" ${STORYBOOK_TIMEOUT} 2`);

        // Step 4: Enhanced readiness check for Storybook (waits for actual build)
        try {
            runCommand(`bash scripts/wait-for-storybook-ui.sh "http://localhost:6006" 120 3`);

            // Open Storybook only after build is complete and UI is ready
            openUrl('http://localhost:6006', 'Storybook');

        } catch (error) {
            log('⚠️  Storybook build/readiness check failed');
            log('🔗 You may need to open http://localhost:6006 manually');

            // Fallback: still try to open if not in CI, but with longer delay
            if (!NO_AUTO_OPEN) {
                setTimeout(() => openUrl('http://localhost:6006', 'Storybook (fallback)'), 10000);
            }
        }        // Step 5: Start background smoke tests
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