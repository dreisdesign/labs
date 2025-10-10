#!/usr/bin/env node


// Standalone script to check icon filenames and sync if valid
const fs = require('fs');
const path = require('path');

const ICON_SUFFIX = '--labs-icons.svg';
const iconsSrc = path.join(__dirname, '../design-system/icons');
const docsIconsDest = path.join(__dirname, '../docs/design-system/icons');
const storybookIconsDest = path.join(__dirname, '../design-system/storybook-static/icons');

function getIconIssues(srcDir) {
    const files = fs.readdirSync(srcDir).filter(f => f.endsWith('.svg'));
    const issues = [];
    const seen = new Set();
    const baseNames = {};
    for (const file of files) {
        if (!file.endsWith(ICON_SUFFIX)) {
            issues.push(`❌ Unsuffixed icon: ${file}`);
        }
        // Check for duplicate base names (e.g., gesture.svg and gesture--labs-icons.svg)
        const base = file.replace(ICON_SUFFIX, '').replace(/\.svg$/, '');
        if (!baseNames[base]) baseNames[base] = [];
        baseNames[base].push(file);
    }
    for (const base in baseNames) {
        if (baseNames[base].length > 1) {
            issues.push(`❌ Duplicate icon base: ${base} → [${baseNames[base].join(', ')}]`);
        }
    }
    return issues;
}

function printCleanupCommand() {
    const cleanupCmd = 'node scripts/cleanup-icon-dupes.js && npm run rp';
    console.log(`\n⚠️  Icon filename issues detected. To fix, run:\n\n    ${cleanupCmd}\n`);
}

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

console.log('🔄 Checking icon filenames in design-system/icons...\n');

if (!fs.existsSync(iconsSrc)) {
    console.error(`❌ Source directory not found: ${iconsSrc}`);
    process.exit(1);
}

const issues = getIconIssues(iconsSrc);
if (issues.length > 0) {
    issues.forEach(i => console.error(i));
    printCleanupCommand();
    process.exit(1);
}

console.log('✅ All icon filenames are valid. Proceeding with sync...\n');
copyIcons(iconsSrc, docsIconsDest, 'docs/design-system/icons');
copyIcons(iconsSrc, storybookIconsDest, 'storybook-static/icons');
console.log('\n🎉 Icon sync complete!');
