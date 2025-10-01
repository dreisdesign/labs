#!/usr/bin/env node
// Playwright-based deep readiness checker for Storybook UI
import { chromium } from 'playwright';

const STORYBOOK_URL = process.env.STORYBOOK_URL || 'http://localhost:6006/?path=/story/components-button--default';
const MAX_ATTEMPTS = parseInt(process.env.MAX_ATTEMPTS || '6');
const QUIET = process.env.QUIET === '1';
const DEBUG = process.env.LABS_RP_DEBUG === '1';
const READY_DEEP = process.env.READY_DEEP === '1';

function log(message) {
    if (!QUIET) console.log(message);
}

function debug(message) {
    if (DEBUG) console.log(`[DEBUG] ${message}`);
}

async function checkStorybookReady(attempt = 1) {
    let browser;
    try {
        debug(`Attempt ${attempt}: Launching browser for ${STORYBOOK_URL}`);
        browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();

        // Set timeout for page operations
        page.setDefaultTimeout(30000);

        debug('Navigating to Storybook URL...');
        await page.goto(STORYBOOK_URL, { waitUntil: 'networkidle' });

        if (READY_DEEP) {
            // Deep check: wait for preview iframe to be loaded and interactive
            debug('Waiting for preview iframe...');
            const previewFrame = await page.waitForSelector('#storybook-preview-iframe', { timeout: 20000 });

            if (previewFrame) {
                debug('Preview iframe found, checking content...');
                const frame = await previewFrame.contentFrame();
                if (frame) {
                    // Wait for content in the iframe
                    await frame.waitForSelector('#root', { timeout: 15000 });
                    debug('Root element found in preview iframe');

                    // Additional stability check - wait a bit and verify content is still there
                    await new Promise(resolve => setTimeout(resolve, 500));
                    const rootContent = await frame.$('#root');
                    if (rootContent) {
                        debug('Storybook UI is stable and ready');
                        return true;
                    }
                }
            }
        } else {
            // Basic check: just verify page loads
            debug('Basic readiness check passed');
            return true;
        }

        return false;
    } catch (error) {
        debug(`Check failed: ${error.message}`);
        if (!QUIET && attempt === 1) {
            console.error(`Storybook check failed: ${error.message}`);
        }
        return false;
    } finally {
        if (browser) {
            await browser.close();
        }
    }
}

async function waitWithRetry() {
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        const success = await checkStorybookReady(attempt);

        if (success) {
            // Require stability - check again after a short delay
            if (READY_DEEP && attempt === 1) {
                debug('First check passed, verifying stability...');
                await new Promise(resolve => setTimeout(resolve, 300));
                const stable = await checkStorybookReady(attempt + 1);
                if (stable) {
                    log('✅ Storybook UI is ready and stable');
                    return true;
                }
                // If stability check fails, continue with regular retry logic
                attempt++; // Account for the stability check attempt
            } else {
                log('✅ Storybook UI is ready');
                return true;
            }
        }

        if (attempt < MAX_ATTEMPTS) {
            const delay = Math.min(Math.pow(2, attempt - 1), 16); // Exponential backoff, max 16s
            debug(`Waiting ${delay}s before retry...`);
            await new Promise(resolve => setTimeout(resolve, delay * 1000));
        }
    }

    if (!QUIET) {
        console.error('❌ Storybook UI readiness check failed after all attempts');
    }
    return false;
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
    waitWithRetry()
        .then(success => {
            process.exit(success ? 0 : 1);
        })
        .catch(error => {
            if (!QUIET) {
                console.error(`Fatal error: ${error.message}`);
            }
            process.exit(2);
        });
}