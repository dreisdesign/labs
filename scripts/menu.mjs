#!/usr/bin/env node
// Always run from workspace root
process.chdir('/Users/danielreis/labs');
// Interactive menu for Labs build, deploy, and preview workflows (ESM version)
import inquirer from 'inquirer';
import { execSync } from 'child_process';

async function main() {
    const { action } = await inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do?',
            choices: [
                { name: 'Preview Labs', value: 'previewLabs' },
                { name: 'Preview Storybook (rebuilds first)', value: 'previewStorybook' },
                { name: 'Deploy Storybook (Rebuild, push, and update Labs demo with public components)', value: 'deploy' },
                { name: 'Exit', value: 'exit' }
            ]
        }
    ]);

    if (action === 'previewLabs') {
        // Reset paths to local mode before preview
        console.log('\nSetting up local preview paths...');
        execSync('node scripts/update-static-paths.js --local', { stdio: 'inherit' });

        const port = 8080;
        let portInUse = false;
        let pid = null;
        try {
            // Check if port is in use (macOS/Linux)
            const lsofOut = execSync(`lsof -i :${port} | grep LISTEN || true`).toString();
            if (lsofOut) {
                portInUse = true;
                // Try to extract PID
                const match = lsofOut.match(/\b(\d+)\b/);
                if (match) pid = match[1];
            }
        } catch (e) {
            // Ignore errors
        }
        const openBrowser = () => {
            const url = 'http://localhost:8080/index.html';
            if (process.platform === 'darwin') {
                try {
                    execSync(`open -a "Google Chrome" ${url}`);
                } catch (e) {
                    console.log('Google Chrome not found, opening in default browser...');
                    try {
                        execSync(`open ${url}`);
                    } catch (e2) {
                        console.log(`\nCould not open browser automatically. Please visit ${url}`);
                    }
                }
            } else if (process.platform === 'win32') {
                execSync(`start chrome ${url}`);
            } else {
                try {
                    execSync(`google-chrome ${url}`);
                } catch (e) {
                    try {
                        execSync(`xdg-open ${url}`);
                    } catch (e2) {
                        console.log(`\nCould not open browser automatically. Please visit ${url}`);
                    }
                }
            }
        };
        const startServerAndOpen = async () => {
            const cp = await import('child_process');
            const { spawn } = cp;
            const server = spawn('python3', ['-m', 'http.server', '8080'], { detached: true });
            setTimeout(openBrowser, 1200);
            console.log("\nPress 'q' to stop the server and exit.");
            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.on('data', (data) => {
                if (data.toString().toLowerCase() === 'q') {
                    process.kill(server.pid);
                    console.log('\nServer stopped. Exiting.');
                    process.exit(0);
                }
            });
        };
        if (portInUse && pid) {
            console.log(`\nPort ${port} is already in use by process PID ${pid}.`);
            const { killIt } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'killIt',
                    message: `Do you want to kill process ${pid} and start the server?`,
                    default: false
                }
            ]);
            if (killIt) {
                try {
                    execSync(`kill ${pid}`);
                    console.log(`Process ${pid} killed. Starting server...`);
                    await startServerAndOpen();
                } catch (e) {
                    console.error('Failed to kill process or start server:', e.message);
                }
            } else {
                console.log('Aborted starting local preview server.');
            }
        } else if (portInUse) {
            console.log(`\nPort ${port} is already in use. Unable to determine PID. Aborting.`);
        } else {
            console.log('\nStarting local preview server...');
            await startServerAndOpen();
        }
    }
    if (action === 'previewStorybook') {
        const port = 8080;
        let portInUse = false;
        let pid = null;
        try {
            const lsofOut = execSync(`lsof -i :${port} | grep LISTEN || true`).toString();
            if (lsofOut) {
                portInUse = true;
                const match = lsofOut.match(/\b(\d+)\b/);
                if (match) pid = match[1];
            }
        } catch (e) { }
        const openBrowser = () => {
            const url = 'http://localhost:8080/design-system/storybook-static/';
            if (process.platform === 'darwin') {
                try {
                    execSync(`open -a "Google Chrome" ${url}`);
                } catch (e) {
                    console.log('Google Chrome not found, opening in default browser...');
                    try {
                        execSync(`open ${url}`);
                    } catch (e2) {
                        console.log(`\nCould not open browser automatically. Please visit ${url}`);
                    }
                }
            } else if (process.platform === 'win32') {
                execSync(`start chrome ${url}`);
            } else {
                try {
                    execSync(`google-chrome ${url}`);
                } catch (e) {
                    try {
                        execSync(`xdg-open ${url}`);
                    } catch (e2) {
                        console.log(`\nCould not open browser automatically. Please visit ${url}`);
                    }
                }
            }
        };
        const startServerAndOpen = async () => {
            const cp = await import('child_process');
            const { spawn } = cp;
            // Always run from workspace root
            console.log('\nRebuilding Storybook and updating public assets from workspace root...');
            execSync('npm run build-storybook', { stdio: 'inherit', cwd: process.env.HOME + '/labs/design-system' });
            execSync('npm run public', { stdio: 'inherit', cwd: process.env.HOME + '/labs/design-system' });
            const server = spawn('python3', ['-m', 'http.server', '8080'], { detached: true, cwd: process.env.HOME + '/labs' });
            setTimeout(openBrowser, 1200);
            console.log("\nPress 'q' to stop the server and exit.");
            process.stdin.setRawMode(true);
            process.stdin.resume();
            process.stdin.on('data', (data) => {
                if (data.toString().toLowerCase() === 'q') {
                    process.kill(server.pid);
                    console.log('\nServer stopped. Exiting.');
                    process.exit(0);
                }
            });
        };
        if (portInUse && pid) {
            console.log(`\nPort ${port} is already in use by process PID ${pid}.`);
            const { killIt } = await inquirer.prompt([
                {
                    type: 'confirm',
                    name: 'killIt',
                    message: `Do you want to kill process ${pid} and start the server?`,
                    default: false
                }
            ]);
            if (killIt) {
                try {
                    execSync(`kill ${pid}`);
                    console.log(`Process ${pid} killed. Starting server...`);
                    await startServerAndOpen();
                } catch (e) {
                    console.error('Failed to kill process or start server:', e.message);
                }
            } else {
                console.log('Aborted starting local preview server.');
            }
        } else if (portInUse) {
            console.log(`\nPort ${port} is already in use. Unable to determine PID. Aborting.`);
        } else {
            console.log('\nStarting local preview server...');
            await startServerAndOpen();
        }
    }
    if (action === 'public') {
        console.log('\nBuilding Storybook and copying public assets...');
        execSync('npm run public', { stdio: 'inherit' });
    }
    if (action === 'deploy') {
        console.log('\nBuilding and deploying to GitHub Pages, and updating demo...');
        execSync('npm run deploy', { stdio: 'inherit' });
        // Open public Storybook URL after deploy using native method
        const url = 'https://dreisdesign.github.io/labs/design-system/?path=/docs/stories-about--docs';
        if (process.platform === 'darwin') {
            try {
                execSync(`open -a "Google Chrome" ${url}`);
            } catch (e) {
                console.log('Google Chrome not found, opening in default browser...');
                try {
                    execSync(`open ${url}`);
                } catch (e2) {
                    console.log(`\nCould not open browser automatically. Please visit ${url}`);
                }
            }
        } else if (process.platform === 'win32') {
            execSync(`start chrome ${url}`);
        } else {
            try {
                execSync(`google-chrome ${url}`);
            } catch (e) {
                try {
                    execSync(`xdg-open ${url}`);
                } catch (e2) {
                    console.log(`\nCould not open browser automatically. Please visit ${url}`);
                }
            }
        }
    }
    if (action === 'exit') {
        console.log('Goodbye!');
        process.exit(0);
    }
}

main();
