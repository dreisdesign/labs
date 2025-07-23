// Helper to recursively copy a directory
// Only copy whitelisted public folders/files
const PUBLIC_WHITELIST = [
    'main.css',
    'components',
    'tokens',
    'assets',
    // add more as needed
];
function copyDirSync(src, dest) {
    if (!fs.existsSync(src)) return;
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach(item => {
        if (!PUBLIC_WHITELIST.includes(item)) return;
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);
        if (fs.statSync(srcPath).isDirectory()) {
            copyDirSync(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    });
}
// Node.js script to update asset paths in demo HTML files for public deployment
const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '../docs');

function findHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(findHtmlFiles(filePath));
        } else if (file.endsWith('.html')) {
            results.push(filePath);
        }
    });
    return results;
}


const htmlFiles = findHtmlFiles(docsDir);

const mode = process.argv.includes('--public') ? 'public'
    : process.argv.includes('--local') ? 'local'
        : process.argv.includes('--github') ? 'github'
            : null;

if (!mode) {
    console.error('Please specify a mode: --public, --local, or --github');
    process.exit(1);
}

// Copy main.css to public location for both modes
const srcStylesPath = path.join(__dirname, '../design-system/src/styles/main.css');
const mainCssDest = path.join(__dirname, '../design-system/main.css');
if (fs.existsSync(srcStylesPath)) {
    fs.copyFileSync(srcStylesPath, mainCssDest);
    console.log('Copied main.css to public location');
}

// Copy all JS components to public location for both modes
const srcComponentsDir = path.join(__dirname, '../design-system/src/components');
const componentsDest = path.join(__dirname, '../design-system/components');
if (fs.existsSync(srcComponentsDir)) {
    if (!fs.existsSync(componentsDest)) {
        fs.mkdirSync(componentsDest, { recursive: true });
    }
    fs.readdirSync(srcComponentsDir).forEach(file => {
        if (file.endsWith('.js')) {
            fs.copyFileSync(path.join(srcComponentsDir, file), path.join(componentsDest, file));
        }
    });
    console.log('Copied JS components to public location');
}

if (!mode) {
    console.error('Please specify a mode: --public or --local');
    process.exit(1);
}

// In public mode, copy built assets before updating HTML
if (mode === 'public') {
    const staticDir = path.join(__dirname, '../design-system/storybook-static');
    const assetsSrc = path.join(staticDir, 'assets');
    const assetsDest = path.join(__dirname, '../design-system/assets');
    const srcStylesPath = path.join(__dirname, '../design-system/src/styles/main.css');
    const mainCssDest = path.join(__dirname, '../design-system/main.css');

    // Copy source main.css to public location (since Storybook doesn't output it)
    if (fs.existsSync(srcStylesPath)) {
        fs.copyFileSync(srcStylesPath, mainCssDest);
        console.log('Copied main.css from src/styles to public location');
    }

    // Copy all token CSS files
    const tokensDir = path.join(__dirname, '../design-system/src/styles/tokens');
    const tokensDest = path.join(__dirname, '../design-system/tokens');
    if (fs.existsSync(tokensDir)) {
        if (!fs.existsSync(tokensDest)) {
            fs.mkdirSync(tokensDest, { recursive: true });
        }
        fs.readdirSync(tokensDir).forEach(file => {
            if (file.endsWith('.css')) {
                fs.copyFileSync(path.join(tokensDir, file), path.join(tokensDest, file));
            }
        });
        console.log('Copied token CSS files to public location');
    }

    // Copy all JS components to public location
    const srcComponentsDir = path.join(__dirname, '../design-system/src/components');
    const componentsDest = path.join(__dirname, '../design-system/components');
    if (fs.existsSync(srcComponentsDir)) {
        if (!fs.existsSync(componentsDest)) {
            fs.mkdirSync(componentsDest, { recursive: true });
        }
        fs.readdirSync(srcComponentsDir).forEach(file => {
            if (file.endsWith('.js')) {
                fs.copyFileSync(path.join(srcComponentsDir, file), path.join(componentsDest, file));
            }
        });
        console.log('Copied JS components to public location');
    }

    // Copy all styles to public location
    const srcStylesDir = path.join(__dirname, '../design-system/src/styles');
    const stylesDest = path.join(__dirname, '../design-system/src/styles');
    // Styles are already in the right location for public access

    // Copy all assets
    if (fs.existsSync(assetsSrc)) {
        if (!fs.existsSync(assetsDest)) {
            fs.mkdirSync(assetsDest, { recursive: true });
        }
        fs.readdirSync(assetsSrc).forEach(file => {
            fs.copyFileSync(path.join(assetsSrc, file), path.join(assetsDest, file));
        });
        console.log('Copied all assets from storybook-static to public location');
    }
} htmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;

    if (mode === 'public') {
        // Set all asset paths to public (local development)
        // Relative paths
        content = content.replace(/\..\/design-system\/src\/styles\/main\.css/g, '../design-system/main.css');
        content = content.replace(/\..\/design-system\/src\/components\/([A-Za-z0-9_-]+)\.js/g, '../design-system/assets/$1.stories-*.js');
        // Root-relative paths (for local server)
        content = content.replace(/\/labs\/design-system\/main\.css/g, '/design-system/main.css');
        content = content.replace(/\/labs\/design-system\/components\/([A-Za-z0-9_-]+)\.js/g, '/design-system/components/$1.js');
        content = content.replace(/\/design-system\/src\/styles\/main\.css/g, '/design-system/main.css');
        content = content.replace(/\/design-system\/src\/components\/([A-Za-z0-9_-]+)\.js/g, '/design-system/components/$1.js');

        // Automate Button.stories-*.js filename update in demo HTML
        if (filePath.endsWith('demo/index.html')) {
            // For demo, use the actual component, not the Storybook story
            content = content.replace(/\/design-system\/assets\/Button\.stories-[^"']*\.js/g, '/design-system/components/Button.js');
        }
    } else if (mode === 'github') {
        // Copy all public assets to docs/design-system for GitHub Pages
        const publicDir = path.join(__dirname, '../design-system');
        const docsPublicDir = path.join(__dirname, '../docs/design-system');
        copyDirSync(publicDir, docsPublicDir);
        console.log('Copied all public assets to docs/design-system for GitHub Pages');
        // Set all asset paths for GitHub Pages deployment (/labs/design-system/)
        // Relative paths
        content = content.replace(/\..\/design-system\/src\/styles\/main\.css/g, '../design-system/main.css');
        content = content.replace(/\..\/design-system\/src\/components\/([A-Za-z0-9_-]+)\.js/g, '../design-system/assets/$1.stories-*.js');
        // Root-relative paths (for GitHub Pages)
        content = content.replace(/\/design-system\/main\.css/g, '/labs/design-system/main.css');
        content = content.replace(/\/design-system\/components\/([A-Za-z0-9_-]+)\.js/g, '/labs/design-system/components/$1.js');
        content = content.replace(/\/design-system\/src\/styles\/main\.css/g, '/labs/design-system/main.css');
        content = content.replace(/\/design-system\/src\/components\/([A-Za-z0-9_-]+)\.js/g, '/labs/design-system/components/$1.js');

        // Normalize any repeated /labs/ prefixes to a single /labs/
        content = content.replace(/(\/labs)+\/design-system\//g, '/labs/design-system/');

        // Automate Button.stories-*.js filename update in demo HTML
        if (filePath.endsWith('demo/index.html')) {
            // For demo, use the actual component, not the Storybook story
            content = content.replace(/\/labs\/design-system\/assets\/Button\.stories-[^"']*\.js/g, '/labs/design-system/components/Button.js');
        }
    } else if (mode === 'local') {
        // Set all asset paths to local development
        // Relative paths
        content = content.replace(/\.\.\/design-system\/main\.css/g, '../design-system/src/styles/main.css');
        content = content.replace(/\.\.\/design-system\/assets\/([A-Za-z0-9_-]+)\.stories-.*\.js/g, '../design-system/src/components/$1.js');
        // Root-relative paths - convert from GitHub Pages format
        content = content.replace(/\/labs\/design-system\/main\.css/g, '/design-system/src/styles/main.css');
        content = content.replace(/\/labs\/design-system\/components\/([A-Za-z0-9_-]+)\.js/g, '/design-system/src/components/$1.js');
        // Root-relative paths - convert from public format
        content = content.replace(/\/design-system\/main\.css/g, '/design-system/src/styles/main.css');
        content = content.replace(/\/design-system\/components\/([A-Za-z0-9_-]+)\.js/g, '/design-system/src/components/$1.js');
        content = content.replace(/\/design-system\/assets\/([A-Za-z0-9_-]+)\.stories-.*\.js/g, '/design-system/src/components/$1.js');
    }

    // You can add more patterns here as needed

    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated asset paths in ${filePath}`);
    } else {
        console.log(`No asset path changes needed in ${filePath}`);
    }
});

console.log(`All docs/ HTML asset paths set to ${mode}.`);
