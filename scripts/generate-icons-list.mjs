// Auto-generated icons list from SVG files in design-system/icons/
// This script scans the icons directory and exports an array of icon names
import fs from 'fs';
import path from 'path';

const iconsDir = path.resolve(process.cwd(), 'design-system/icons');
const files = fs.readdirSync(iconsDir);
const iconNames = files
    .filter(f => f.endsWith('--labs-icons.svg'))
    .map(f => f.replace('--labs-icons.svg', ''));

const output = `export default ${JSON.stringify(iconNames, null, 2)};\n`;
fs.writeFileSync(path.resolve(process.cwd(), 'design-system/components/icons-list.js'), output);
console.log('Updated icons-list.js with', iconNames.length, 'icons.');
