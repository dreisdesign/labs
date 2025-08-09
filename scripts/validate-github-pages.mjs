#!/usr/bin/env node

/**
 * GitHub Pages Deployment Validator
 * Checks if the deployed timestamp matches the expected one
 * Provides visual and audio feedback when deployment is live
 */

import https from 'https';
import { exec } from 'child_process';

const GITHUB_PAGES_DEMO_URL = 'https://dreisdesign.github.io/labs/demo/';
const CHECK_INTERVAL = 30000; // 30 seconds
const MAX_ATTEMPTS = 20; // 10 minutes total
const EXPECTED_TIMESTAMP = process.argv[2];

if (!EXPECTED_TIMESTAMP) {
    console.log('❌ Error: Expected timestamp not provided');
    process.exit(1);
}

console.log(`🔍 Validating GitHub Pages deployment...`);
console.log(`🎯 Expected timestamp: ${EXPECTED_TIMESTAMP}`);
console.log(`🌐 Checking URL: ${GITHUB_PAGES_DEMO_URL}`);

let attempts = 0;

function fetchPageContent() {
    return new Promise((resolve, reject) => {
        https.get(GITHUB_PAGES_DEMO_URL, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                resolve(data);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

function extractTimestamp(html) {
    // Look for the version indicator pattern: v20250809-070148
    const match = html.match(/v(\d{8}-\d{6})/);
    return match ? match[1] : null;
}

function playSuccessSound() {
    // Try to play system success sound
    if (process.platform === 'darwin') {
        exec('afplay /System/Library/Sounds/Glass.aiff', () => { });
    } else if (process.platform === 'linux') {
        exec('paplay /usr/share/sounds/alsa/Front_Left.wav', () => { });
    }
}

function showDesktopNotification() {
    if (process.platform === 'darwin') {
        exec(`osascript -e 'display notification "GitHub Pages updated successfully!" with title "Labs Deployment" sound name "Glass"'`, () => { });
    }
}

function openTestingPages() {
    const testingUrls = [
        'https://dreisdesign.github.io/labs/design-system/?path=/story/components-settings-overlay--default',
        'https://dreisdesign.github.io/labs/demo/',
        'https://dreisdesign.github.io/labs/today-list/'
    ];

    console.log('🌐 Opening testing pages...');
    testingUrls.forEach(url => {
        if (process.platform === 'darwin') {
            exec(`open "${url}"`, () => { });
        }
    });
}

async function checkDeployment() {
    attempts++;

    try {
        console.log(`📡 Attempt ${attempts}/${MAX_ATTEMPTS} - Checking deployment...`);

        const html = await fetchPageContent();
        const currentTimestamp = extractTimestamp(html);

        if (!currentTimestamp) {
            console.log('⚠️  Could not find timestamp in page');
        } else if (currentTimestamp === EXPECTED_TIMESTAMP) {
            console.log('');
            console.log('🎉 SUCCESS! GitHub Pages has been updated!');
            console.log(`✅ Current timestamp: ${currentTimestamp}`);
            console.log(`✅ Expected timestamp: ${EXPECTED_TIMESTAMP}`);
            console.log('');
            console.log('🧪 Opening testing pages...');

            // Celebrate!
            playSuccessSound();
            showDesktopNotification();
            openTestingPages();

            console.log('');
            console.log('📋 Quick testing checklist:');
            console.log('   ☐ Settings overlay opens without extra buttons');
            console.log('   ☐ Today List shows empty tasks by default');
            console.log('   ☐ Task overlay opens when clicking "+ Add Task"');
            console.log('   ☐ Icons load correctly (no 404s in dev tools)');
            console.log('   ☐ Theme toggle works in settings');
            console.log('');

            process.exit(0);
        } else {
            console.log(`⏳ Still waiting... Current: ${currentTimestamp}, Expected: ${EXPECTED_TIMESTAMP}`);
        }

    } catch (error) {
        console.log(`❌ Error checking deployment: ${error.message}`);
    }

    if (attempts >= MAX_ATTEMPTS) {
        console.log('');
        console.log('⏰ Maximum attempts reached. GitHub Pages may be slow to update.');
        console.log(`🎯 Expected: ${EXPECTED_TIMESTAMP}`);
        console.log(`🌐 Check manually: ${GITHUB_PAGES_DEMO_URL}`);
        console.log('');
        process.exit(1);
    }

    // Schedule next check
    setTimeout(checkDeployment, CHECK_INTERVAL);
}

// Start checking
checkDeployment();
