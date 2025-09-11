#!/usr/bin/env node

// Standalone script to sync icons from design-system to docs and storybook-static
const fs = require('fs');
const path = require('path');

function copyIcons(src, dest, description) {
    if (!fs.existsSync(src)) {
        console.log(`⚠️  Source directory not found: ${src}`);
        return false;
    }

    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    let copiedCount = 0;
    fs.readdirSync(src).forEach((file) => {
        if (file.endsWith('.svg')) {
            fs.copyFileSync(
                path.join(src, file),
                path.join(dest, file)
            );
            copiedCount++;
        }
    });

    console.log(`✅ ${description}: ${copiedCount} icons copied`);
    return true;
}

console.log('🔄 Syncing icons across all directories...\n');

const iconsSrc = path.join(__dirname, '../design-system/icons');

// Copy to docs/design-system/icons (for Today List and other docs apps)
const docsIconsDest = path.join(__dirname, '../docs/design-system/icons');
copyIcons(iconsSrc, docsIconsDest, 'docs/design-system/icons');

// Copy to storybook-static/icons (for built Storybook)
const storybookIconsDest = path.join(__dirname, '../design-system/storybook-static/icons');
copyIcons(iconsSrc, storybookIconsDest, 'storybook-static/icons');

console.log('\n🎉 Icon sync complete!');
