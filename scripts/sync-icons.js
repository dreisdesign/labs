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

    // Only copy suffixed icons
    const files = fs.readdirSync(src).filter(f => f.endsWith('--labs-icons.svg'));
    let copiedCount = 0;
    files.forEach(file => {
        fs.copyFileSync(
            path.join(src, file),
            path.join(dest, file)
        );
        copiedCount++;
    });

    console.log(`✅ ${description}: ${copiedCount} icons copied (suffixed only)`);
    return true;
}

console.log('🔄 Syncing icons across all directories...\n');

const iconsSrc = path.join(__dirname, '../design-system/icons');

// Duplicate detection BEFORE any copying
const files = fs.readdirSync(iconsSrc).filter(f => f.endsWith('.svg'));
const baseNames = new Set();
const suffixed = new Set();
files.forEach(file => {
    if (file.endsWith('--labs-icons.svg')) {
        suffixed.add(file.replace('--labs-icons.svg', ''));
    } else {
        baseNames.add(file.replace('.svg', ''));
    }
});
const duplicateWarnings = [];
baseNames.forEach(name => {
    if (suffixed.has(name)) {
        duplicateWarnings.push(`${name}.svg and ${name}--labs-icons.svg both exist in ${iconsSrc}`);
    }
});
if (duplicateWarnings.length > 0) {
    console.log('\n❌ Duplicate icon files detected:');
    duplicateWarnings.forEach(w => console.log('  - ' + w));
    console.log('  Please manually resolve these in the source directory before running the sync script again.');
    process.exit(1);
}

// Copy to docs/design-system/icons (for Today List and other docs apps)
const docsIconsDest = path.join(__dirname, '../docs/design-system/icons');
copyIcons(iconsSrc, docsIconsDest, 'docs/design-system/icons');

// Copy to storybook-static/icons (for built Storybook)
const storybookIconsDest = path.join(__dirname, '../design-system/storybook-static/icons');
copyIcons(iconsSrc, storybookIconsDest, 'storybook-static/icons');

console.log('\n🎉 Icon sync complete!');
