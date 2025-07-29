#!/usr/bin/env node
// Always run from workspace root
process.chdir('/Users/danielreis/labs');
// Interactive menu for Labs build, deploy, and preview workflows (ESM version)
import inquirer from 'inquirer';
import { execSync, exec } from 'child_process';

async function main() {
    try {
        const { action } = await inquirer.prompt([
            {
                type: 'list',
                name: 'action',
                message: 'What would you like to do?',
                choices: [
                    { name: 'Preview Storybook (local, always up-to-date, for dev)', value: 'previewStorybook' },
                    { name: 'Build & Deploy (publishes, then preview demo)', value: 'deploy' },
                    { name: 'Exit', value: 'exit' }
                ]
            }
        ]);

        if (action === 'previewStorybook') {
            const port = 6006; // Default Storybook port
            let portInUse = false;
            try {
                // Check if port is in use
                execSync(`lsof -i :${port} | grep LISTEN`);
                portInUse = true;
            } catch (e) {
                // Port is not in use
            }

            const storybookUrl = `http://localhost:${port}`;

            const openBrowser = () => {
                console.log(`\nOpening Storybook at ${storybookUrl} ...`);
                try {
                    execSync(`open -a "Google Chrome" ${storybookUrl}`);
                } catch (e) {
                    console.log('Google Chrome not found, opening in default browser...');
                    try {
                        execSync(`open ${storybookUrl}`);
                    } catch (e2) {
                        console.log(`\nCould not open browser automatically. Please visit ${storybookUrl}`);
                    }
                }
            };

            if (portInUse) {
                console.log(`\nStorybook is already running on port ${port}.`);
                openBrowser();
            } else {
                console.log('\nStarting the Storybook dev server...');
                // Run storybook in the background
                const storybookProcess = exec('npm run storybook', { cwd: './design-system' });

                storybookProcess.stdout.on('data', (data) => {
                    console.log(data.toString());
                    // A better check would be to see if the server is connectable
                    if (data.toString().includes('Storybook started')) {
                        openBrowser();
                    }
                });

                storybookProcess.stderr.on('data', (data) => {
                    console.error(data.toString());
                });

                console.log('\nStorybook dev server is starting in the background. It may take a moment.');
                console.log('You can close this menu. The server will continue to run.');
            }

        } else if (action === 'deploy') {
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
        } else if (action === 'exit') {
            console.log('Goodbye!');
            process.exit(0);
        }
    } catch (error) {
        if (error.message.includes('User force closed the prompt')) {
            console.log('\nMenu closed.');
            process.exit(0);
        } else {
            console.error('\nAn unexpected error occurred:', error);
            process.exit(1);
        }
    }
}

main();