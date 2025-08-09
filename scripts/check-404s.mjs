#!/usr/bin/env node

/**
 * Automated 404 Checker for Labs Demo
 * 
 * This script starts a local server and checks for 404 errors in the console
 * by monitoring server logs for failed requests.
 * 
 * Usage:
 *   node scripts/check-404s.mjs
 *   OR
 *   npm run check-404s (if added to package.json)
 */

import { spawn } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, '..');

console.log('🔍 Starting 404 checker for Labs demo...\n');

// Start Python HTTP server in background
const server = spawn('python3', ['-m', 'http.server', '8080'], {
    cwd: rootDir,
    stdio: 'pipe'
});

const errors = [];
let requestCount = 0;

// Monitor server output for 404 errors
server.stderr.on('data', (data) => {
    const output = data.toString();
    const lines = output.split('\n');

    lines.forEach(line => {
        if (line.includes('HTTP/1.1')) {
            requestCount++;

            // Check for 404 errors
            if (line.includes('404') || line.includes('File not found')) {
                const match = line.match(/"GET ([^"]+)"/);
                const path = match ? match[1] : 'unknown path';

                errors.push({
                    path,
                    line: line.trim(),
                    timestamp: new Date().toISOString()
                });

                console.log(`❌ 404 Error: ${path}`);
            } else if (line.includes('200')) {
                // Successful request (optional: show only in verbose mode)
                const match = line.match(/"GET ([^"]+)"/);
                const path = match ? match[1] : 'unknown path';
                console.log(`✅ ${path.substring(0, 50)}${path.length > 50 ? '...' : ''}`);
            }
        }
    });
});

// Wait for initial page load and requests
setTimeout(() => {
    console.log(`\n📊 Analysis complete after ${requestCount} requests:`);

    if (errors.length === 0) {
        console.log('🎉 No 404 errors found! All resources loaded successfully.');
    } else {
        console.log(`\n⚠️  Found ${errors.length} 404 error(s):`);
        errors.forEach((error, index) => {
            console.log(`\n${index + 1}. ${error.path}`);
            console.log(`   Time: ${error.timestamp}`);
            console.log(`   Log: ${error.line}`);
        });

        console.log('\n🔧 To fix these issues:');
        errors.forEach(error => {
            if (error.path.includes('.js')) {
                console.log(`   - Copy missing JS file: cp design-system/src/**/${error.path.split('/').pop()} docs/design-system/tokens/`);
            } else if (error.path.includes('.css')) {
                console.log(`   - Copy missing CSS file: cp design-system/src/**/${error.path.split('/').pop()} docs/design-system/tokens/`);
            } else {
                console.log(`   - Check and copy: ${error.path}`);
            }
        });
    }

    console.log('\n🛑 Stopping server...');
    server.kill();
    process.exit(errors.length > 0 ? 1 : 0);
}, 5000); // Wait 5 seconds for page to fully load

// Handle server startup
server.stdout.on('data', (data) => {
    const output = data.toString();
    if (output.includes('Serving HTTP')) {
        console.log('🚀 Server started. Loading demo page...\n');

        // Simulate opening the demo page
        setTimeout(() => {
            console.log('📄 Loading http://localhost:8080/docs/demo/\n');

            // Make a request to trigger resource loading
            import('http').then(http => {
                const req = http.default.get('http://localhost:8080/docs/demo/', (res) => {
                    console.log('✅ Demo page loaded. Monitoring for 404s...\n');
                });

                req.on('error', (err) => {
                    console.error('❌ Failed to load demo page:', err.message);
                    server.kill();
                    process.exit(1);
                });
            });
        }, 1000);
    }
});

// Handle server errors
server.on('error', (err) => {
    console.error('❌ Server error:', err.message);
    process.exit(1);
});

// Handle process termination
process.on('SIGINT', () => {
    console.log('\n👋 Interrupted. Stopping server...');
    server.kill();
    process.exit(0);
});
