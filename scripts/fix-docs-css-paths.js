const fs = require('fs');
const path = require('path');

const mainCssPath = path.join(__dirname, '../docs/design-system/styles/main.css');

if (fs.existsSync(mainCssPath)) {
  let mainCssContent = fs.readFileSync(mainCssPath, 'utf8');

  if (mainCssContent.includes('@import "./tokens/')) {
    mainCssContent = mainCssContent.replace(/@import "\.\/tokens\//g, '@import "../tokens/');
    fs.writeFileSync(mainCssPath, mainCssContent);
    console.log('Corrected CSS import paths in docs/design-system/styles/main.css');
  } else {
    console.log('CSS import paths in docs/design-system/styles/main.css are already correct.');
  }
} else {
  console.error('Could not find docs/design-system/styles/main.css');
}
