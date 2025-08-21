import fs from 'fs';

const flavorsCSS = fs.readFileSync('../design-system/src/styles/flavors.css', 'utf8');

console.log('Looking for theme selectors...');
const themeSelectors = flavorsCSS.match(/\.flavor-\w+\.theme-\w+ \{[^}]+\}/g) || [];

console.log(`Found ${themeSelectors.length} theme selectors:`);
themeSelectors.forEach((selector, i) => {
  console.log(`\n--- Selector ${i + 1} ---`);
  console.log(selector);

  console.log('\nSearching for palette definitions:');
  const paletteDefinitions = selector.match(/--palette-[a-z0-9-]+:\s*#[0-9A-Fa-f]{6}/g);
  if (paletteDefinitions && paletteDefinitions.length > 0) {
    console.log('❌ FOUND palette definitions:', paletteDefinitions);
  } else {
    console.log('✅ No palette definitions found');
  }
});
