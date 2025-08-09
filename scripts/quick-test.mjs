#!/usr/bin/env node

/**
 * Quick Test Script
 * Opens all relevant testing pages for manual validation
 */

import { exec } from 'child_process';

const testingUrls = [
    {
        name: 'Storybook - Settings Overlay',
        url: 'https://dreisdesign.github.io/labs/design-system/?path=/story/components-settings-overlay--default'
    },
    {
        name: 'Demo Page',
        url: 'https://dreisdesign.github.io/labs/demo/'
    },
    {
        name: 'Today List App',
        url: 'https://dreisdesign.github.io/labs/today-list/'
    },
    {
        name: 'Labs Homepage',
        url: 'https://dreisdesign.github.io/labs/'
    },
    {
        name: 'Storybook Main',
        url: 'https://dreisdesign.github.io/labs/design-system/'
    }
];

console.log('🧪 Opening all testing pages...');
console.log('');

testingUrls.forEach((page, index) => {
    console.log(`${index + 1}. ${page.name}`);
    console.log(`   🔗 ${page.url}`);

    if (process.platform === 'darwin') {
        exec(`open "${page.url}"`, () => { });
    } else {
        console.log(`   ℹ️  Open manually: ${page.url}`);
    }
});

console.log('');
console.log('📋 Testing checklist:');
console.log('   ☐ Settings overlay: No duplicate buttons, theme toggle works');
console.log('   ☐ Demo page: Icons load, no 404 errors in dev tools');
console.log('   ☐ Today List: Empty tasks by default, overlay opens for new tasks');
console.log('   ☐ Homepage: All app links work, descriptions are accurate');
console.log('   ☐ Storybook: All stories load, components render correctly');
console.log('');
