#!/usr/bin/env node
// Orchestrator for npm run rp - reliable server startup with readiness checks
import { execSync, spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

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

// Utility: tail a log file and print new lines as they appear
function tailLog(file, onLine) {
    let lastSize = 0;
    const interval = setInterval(() => {
        try {
            const stats = fs.statSync(file);
            if (stats.size > lastSize) {
                const stream = fs.createReadStream(file, {
                    start: lastSize,
                    end: stats.size
                });
                let buffer = '';
                stream.on('data', chunk => {
                    buffer += chunk.toString();
                });
                stream.on('end', () => {
                    buffer.split(/\r?\n/).forEach(line => {
                        if (line.trim()) onLine(line);
                    });
                });
                lastSize = stats.size;
            }
        } catch (err) {
            // File might not exist yet, ignore
        }
    }, 500);
    return interval;
}

async function main() {
    try {
        log('🚀 Starting Labs development servers...');

        // Step 1: Update static paths for local preview
        log('📝 Updating static paths for local preview...');
        runCommand('node scripts/update-static-paths.js --local');

        // Step 2: Kill any existing servers on ports 6006 and 8000
        try {
            log('🛑 Killing any running dev servers on ports 6006 and 8000...');
            execSync('lsof -ti:6006,8000 | xargs kill -9', { stdio: 'ignore' });
            await new Promise(res => setTimeout(res, 1000)); // Wait for ports to free
        } catch (e) {
            // Ignore errors if no servers are running
        }

        // Step 3: Start docs server and show live progress
        log('⚡ Starting Labs Homepage server...');
        const docsStartTime = Date.now();
        const docsLogPath = join(workspaceRoot, 'debug-docs.log');
        if (fs.existsSync(docsLogPath)) fs.writeFileSync(docsLogPath, '');

        const docsLogStream = fs.openSync(docsLogPath, 'a');
        const docsProc = spawn('python3', ['-m', 'http.server', '8000'], {
            cwd: join(workspaceRoot, 'docs'),  // Serve from docs directory
            stdio: ['ignore', docsLogStream, docsLogStream],
            detached: true
        });
        docsProc.unref(); // Allow parent to exit

        log('🔄 Docs server starting...');
        let docsReady = false;
        const docsLogInterval = tailLog(docsLogPath, line => {
            log('  ' + line);
            if (/Serving HTTP|GET|0\.0\.0\.0:8000|started/i.test(line)) {
                docsReady = true;
            }
        });

        // Wait for docs server (with shorter timeout since it starts fast)
        const docsTimeout = 10000; // 10 seconds
        while (!docsReady && (Date.now() - docsStartTime) < docsTimeout) {
            await new Promise(res => setTimeout(res, 500));
        }
        clearInterval(docsLogInterval);

        const docsElapsed = ((Date.now() - docsStartTime) / 1000).toFixed(2);
        if (docsReady) {
            log(`✅ Labs Homepage ready at http://localhost:8000 (${docsElapsed}s)`);
        } else {
            // Check if port is actually listening (server might be ready but no log output)
            try {
                const portCheck = execSync('lsof -ti:8000', { stdio: 'pipe' }).toString().trim();
                if (portCheck) {
                    log(`✅ Labs Homepage ready at http://localhost:8000 (detected via port, ${docsElapsed}s)`);
                    docsReady = true;
                } else {
                    log(`⚠️  Docs server not detected after ${docsElapsed}s - check debug-docs.log`);
                }
            } catch (e) {
                log(`⚠️  Docs server not detected after ${docsElapsed}s - check debug-docs.log`);
            }
        }

        // Step 4: Start Storybook and show live progress
        log('⚡ Starting Storybook...');
        const storybookStartTime = Date.now();
        const storybookLogPath = join(workspaceRoot, 'debug-storybook.log');
        if (fs.existsSync(storybookLogPath)) fs.writeFileSync(storybookLogPath, '');

        const storybookLogStream = fs.openSync(storybookLogPath, 'a');
        const storybookProc = spawn('npm', ['--prefix', 'design-system', 'run', 'storybook'], {
            cwd: workspaceRoot,
            stdio: ['ignore', storybookLogStream, storybookLogStream],
            detached: true
        });
        storybookProc.unref(); // Allow parent to exit

        log('🔄 Storybook building...');
        let storybookReady = false;
        const storybookLogInterval = tailLog(storybookLogPath, line => {
            // Show relevant build progress
            if (/Storybook.*started|built|ready|running|Local:|Network:|ERR|WARN/i.test(line)) {
                log('  ' + line);
            }
            if (/Storybook.*started|Local:.*http|ready/i.test(line)) {
                storybookReady = true;
            }
        });

        // Wait for Storybook (with timeout)
        while (!storybookReady && (Date.now() - storybookStartTime) < STORYBOOK_TIMEOUT * 1000) {
            await new Promise(res => setTimeout(res, 500));
        }
        clearInterval(storybookLogInterval);

        const storybookElapsed = ((Date.now() - storybookStartTime) / 1000).toFixed(2);
        if (storybookReady) {
            log(`✅ Storybook ready at http://localhost:6006 (${storybookElapsed}s)`);
        } else {
            log(`⚠️  Storybook timeout after ${storybookElapsed}s - check debug-storybook.log`);
        }

        // Step 5: Open browsers if both are ready
        if (docsReady && storybookReady) {
            await new Promise(res => setTimeout(res, 3000)); // Wait for UI to stabilize
            openUrl('http://localhost:8000/', 'Labs Homepage');
            openUrl('http://localhost:6006', 'Storybook');
        }

        // Step 6: Write status for debugging
        const status = {
            startedAt: new Date().toISOString(),
            docsReady,
            storybookReady,
            storybook_url: 'http://localhost:6006',
            docs_url: 'http://localhost:8000',
            auto_open_disabled: NO_AUTO_OPEN
        };

        try {
            fs.writeFileSync('/tmp/labs-rp.status', JSON.stringify(status, null, 2));
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