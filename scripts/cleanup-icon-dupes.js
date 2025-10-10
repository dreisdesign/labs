#!/usr/bin/env node
// Renames unsuffixed .svg files in design-system/icons/ by adding --labs-icons.svg suffix if a suffixed version does not already exist
const fs = require('fs');
const path = require('path');

const iconsDir = path.join(__dirname, '../design-system/icons');
const files = fs.readdirSync(iconsDir).filter(f => f.endsWith('.svg'));
const suffixed = new Set();
files.forEach(file => {
    if (file.endsWith('--labs-icons.svg')) {
        suffixed.add(file.replace('--labs-icons.svg', ''));
    }
});

let renamed = 0;
let skipped = 0;
files.forEach(file => {
    if (!file.endsWith('--labs-icons.svg')) {
        const base = file.replace('.svg', '');
        const suffixedName = `${base}--labs-icons.svg`;
        if (suffixed.has(base)) {
            // If a suffixed version exists, remove the unsuffixed one
            fs.unlinkSync(path.join(iconsDir, file));
            console.log(`🗑️  Removed duplicate: ${file}`);
            skipped++;
        } else {
            // Otherwise, rename the unsuffixed file to add the suffix
            fs.renameSync(
                path.join(iconsDir, file),
                path.join(iconsDir, suffixedName)
            );
            console.log(`✏️  Renamed: ${file} → ${suffixedName}`);
            renamed++;
        }
    }
});

if (renamed === 0 && skipped === 0) {
    console.log('✅ No unsuffixed icons found.');
} else {
    if (renamed > 0) console.log(`✅ Renamed ${renamed} unsuffixed icon(s).`);
    if (skipped > 0) console.log(`✅ Removed ${skipped} unsuffixed duplicate icon(s).`);
}