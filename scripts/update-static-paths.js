// Node.js script to update asset paths in demo HTML files for public deployment
const fs = require("fs");
const path = require("path");

// Only copy whitelisted public folders/files
const PUBLIC_WHITELIST = [
  "main.css",
  "components",
  "tokens",
  "assets",
  "icons",
  // add more as needed
];

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    // Only copy whitelisted top-level folders/files
    if (
      src === path.join(__dirname, "../design-system") &&
      !PUBLIC_WHITELIST.includes(item)
    )
      return;
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Find all HTML and JS files in docs, excluding built assets
const docsDir = path.join(__dirname, "../docs");
function findFilesToProcess(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    if (file === "node_modules") {
      return; // Skip node_modules entirely
    }
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      // Skip built asset directories
      if (file === "assets" || file === "sb-addons" || file === "sb-manager") {
        return;
      }
      results = results.concat(findFilesToProcess(filePath));
    } else if (file.endsWith(".html") || file.endsWith(".js")) {
      // Only process specific JS files, not all built assets
      const relativeDir = path.relative(docsDir, dir);
      const isAssetFile = relativeDir.includes("design-system") &&
        (file.match(/^[a-zA-Z-]+\-[A-Za-z0-9_-]{8,}\.(js|css)$/) || // Hashed build files
          file.includes("bundle.js") ||
          file.includes("runtime.js") ||
          file.includes("globals.js"));

      if (!isAssetFile) {
        results.push(filePath);
      }
    }
  });
  return results;
}
const filesToProcess = findFilesToProcess(docsDir);

// Determine mode from CLI args: --public, --local, --github, or --auto
let mode = null;
if (process.argv.includes("--public")) mode = "public";
if (process.argv.includes("--local")) mode = "local";
if (process.argv.includes("--github")) mode = "github";
if (process.argv.includes("--auto")) mode = "auto";

// Auto-detect mode when requested
if (mode === "auto") {
  // Prefer GitHub Pages mode when running in CI or when repository looks like the GH Pages repo
  const isCI = !!process.env.GITHUB_ACTIONS || !!process.env.CI || !!process.env.GITHUB_REPOSITORY;
  let repoName = null;
  try {
    const pkg = require(path.join(__dirname, '..', 'package.json'));
    if (pkg && pkg.repository) {
      if (typeof pkg.repository === 'string') repoName = pkg.repository;
      else if (pkg.repository && pkg.repository.url) repoName = pkg.repository.url;
    }
  } catch (e) {
    // ignore
  }
  const looksLikeGhPages = repoName && repoName.includes('dreisdesign/labs');
  if (isCI || looksLikeGhPages) {
    mode = 'github';
  } else {
    mode = 'public';
  }
  console.log(`update-static-paths: auto-detected mode='${mode}' (isCI=${isCI}, repo='${repoName}')`);
}

if (!mode) {
  console.error("Please specify a mode: --public, --local, --github, or --auto");
  process.exit(1);
}

filesToProcess.forEach((filePath) => {
  let content = fs.readFileSync(filePath, "utf8");
  let original = content;

  if (mode === "public") {
    // Set all asset paths to public (local development)
    content = content.replace(/\/labs\/design-system\//g, "/design-system/");
    content = content.replace(/\.\.\/design-system\//g, "/design-system/");
    content = content.replace(/\/labs\/today-list\//g, "/today-list/");
    content = content.replace(/\/labs\/tracker\//g, "/tracker/");
  } else if (mode === "github") {
    // For GitHub Pages, all paths must be absolute from the repo root.
    // This is a safer, more targeted replacement.
    // Robustly rewrite asset paths for production
    content = content.replace(/href="\.\.\/design-system\//g, 'href="/labs/design-system/');
    content = content.replace(/src="\.\.\/design-system\//g, 'src="/labs/design-system/');
    content = content.replace(/href="\/design-system\//g, 'href="/labs/design-system/');
    content = content.replace(/src="\/design-system\//g, 'src="/labs/design-system/');
    content = content.replace(/href="\.\.\.\/design-system\//g, 'href="/labs/design-system/');
    content = content.replace(/src="\.\.\.\/design-system\//g, 'src="/labs/design-system/');
    // Remove any accidental multiple dots in asset paths
    content = content.replace(/href="\.+\/design-system\//g, 'href="/labs/design-system/');
    content = content.replace(/src="\.+\/design-system\//g, 'src="/labs/design-system/');

    // Handle paths to app directories (generic pattern for any app)
    content = content.replace(
      /src="\/([^/]+)\//g,
      (match, appName) => {
        // Only transform paths that look like app directories (not design-system)
        if (appName !== 'design-system' && !appName.includes('.')) {
          return `src="/labs/${appName}/`;
        }
        return match;
      }
    );
    content = content.replace(
      /href="\/([^/]+)\//g,
      (match, appName) => {
        // Only transform paths that look like app directories (not design-system)
        if (appName !== 'design-system' && !appName.includes('.')) {
          return `href="/labs/${appName}/`;
        }
        return match;
      }
    );

    // Handle JavaScript import statements
    content = content.replace(
      /import\s+['"]\/design-system\//g,
      "import '/labs/design-system/",
    );
    content = content.replace(
      /from\s+['"]\/design-system\//g,
      "from '/labs/design-system/",
    );

    // Prevent runaway replacement
    content = content.replace(/\/labs\/labs\//g, "/labs/");

    // Copy all public assets to docs/design-system for GitHub Pages
    const publicDir = path.join(__dirname, "../design-system");
    const docsPublicDir = path.join(__dirname, "../docs/design-system");
    copyDirSync(publicDir, docsPublicDir);
    console.log(
      "Copied all public assets to docs/design-system for GitHub Pages",
    );
  } else if (mode === "local") {
    // Set all asset paths for local preview (python http.server from root)
    content = content.replace(/\/labs\/design-system\//g, "../design-system/");
    content = content.replace(/\/design-system\//g, "../design-system/");
  }

  // Inline shared includes for pre-upgrade CSS and early theme script to avoid
  // FOUC — replace markers with file contents when present. This keeps the
  // small script/CSS inlined early in <head> (Option A).
  try {
    const includesDir = path.join(__dirname, '..', 'docs', '_includes');
    const earlyThemePath = path.join(includesDir, 'early-theme.js');
    const preupgradeCssPath = path.join(includesDir, 'preupgrade.css');
    let earlyThemeContent = '';
    let preupgradeCssContent = '';
    if (fs.existsSync(earlyThemePath)) {
      earlyThemeContent = fs.readFileSync(earlyThemePath, 'utf8');
    }
    if (fs.existsSync(preupgradeCssPath)) {
      preupgradeCssContent = fs.readFileSync(preupgradeCssPath, 'utf8');
    }

    // Replace markers in HTML files if present
    if (earlyThemeContent) {
      content = content.replace(/<!--\s*EARLY_THEME_INCLUDE\s*-->/g, `<script>${earlyThemeContent}</script>`);
    }
    if (preupgradeCssContent) {
      content = content.replace(/<!--\s*PREUPGRADE_CSS_INCLUDE\s*-->/g, `<style>${preupgradeCssContent}</style>`);
    }
  } catch (e) {
    // ignore include inlining errors — not fatal
  }

  // You can add more patterns here as needed

  if (content !== original) {
    fs.writeFileSync(filePath, content, "utf8");
    console.log(`Updated asset paths in ${filePath}`);
  } else {
    console.log(`No asset path changes needed in ${filePath}`);
  }
});

const staticDir = path.join(__dirname, "../design-system/storybook-static");
const assetsSrc = path.join(staticDir, "assets");
const assetsDest = path.join(__dirname, "../design-system/assets");
const srcStylesPath = path.join(
  __dirname,
  "../design-system/src/styles/main.css",
);
const mainCssDest = path.join(__dirname, "../design-system/main.css");

// Copy source main.css to public location (since Storybook doesn't output it)
if (fs.existsSync(srcStylesPath)) {
  fs.copyFileSync(srcStylesPath, mainCssDest);
  console.log("Copied main.css from src/styles to public location");

  // Also create a version for docs with corrected import paths
  const docsStylesDir = path.join(__dirname, "../docs/design-system/styles");
  const docsMainCssDest = path.join(docsStylesDir, "main.css");

  if (!fs.existsSync(docsStylesDir)) {
    fs.mkdirSync(docsStylesDir, { recursive: true });
  }

  // Read source file and transform import paths
  let mainCssContent = fs.readFileSync(srcStylesPath, 'utf8');
  // Transform ./tokens/ imports to ../tokens/ for docs serving
  mainCssContent = mainCssContent.replace(/@import "\.\/tokens\//g, '@import "../tokens/');

  fs.writeFileSync(docsMainCssDest, mainCssContent);
  console.log("Copied main.css to docs with corrected import paths");
}

// Copy shared Today List styles (tl-entry.css) to public and docs locations
const srcTlEntry = path.join(__dirname, "../design-system/src/styles/tl-entry.css");
const publicTlEntryDest = path.join(__dirname, "../design-system/styles/tl-entry.css");
const docsTlEntryDest = path.join(__dirname, "../docs/design-system/styles/tl-entry.css");
if (fs.existsSync(srcTlEntry)) {
  if (!fs.existsSync(path.dirname(publicTlEntryDest))) fs.mkdirSync(path.dirname(publicTlEntryDest), { recursive: true });
  fs.copyFileSync(srcTlEntry, publicTlEntryDest);
  if (!fs.existsSync(path.dirname(docsTlEntryDest))) fs.mkdirSync(path.dirname(docsTlEntryDest), { recursive: true });
  fs.copyFileSync(srcTlEntry, docsTlEntryDest);
  console.log("Copied tl-entry.css to public and docs styles directories");
}

// Copy all token CSS files to both public and docs locations
const tokensSrcDir = path.join(__dirname, "../design-system/src/styles/tokens");
const publicTokensDestDir = path.join(__dirname, "../design-system/tokens");
const docsTokensDestDir = path.join(__dirname, "../docs/design-system/tokens");

if (fs.existsSync(tokensSrcDir)) {
  [publicTokensDestDir, docsTokensDestDir].forEach(destDir => {
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.readdirSync(tokensSrcDir).forEach((file) => {
      if (file.endsWith(".css")) {
        fs.copyFileSync(path.join(tokensSrcDir, file), path.join(destDir, file));
      }
    });
  });
  console.log("Copied token CSS files to public and docs locations");
}

// Copy flavors.css to docs styles directory
const srcFlavorsPath = path.join(__dirname, "../design-system/src/styles/flavors.css");
const docsFlavorsPath = path.join(__dirname, "../docs/design-system/styles/flavors.css");
if (fs.existsSync(srcFlavorsPath)) {
  fs.copyFileSync(srcFlavorsPath, docsFlavorsPath);
  console.log("Copied flavors.css to docs styles directory");
}

// Copy all JS components to public location
const srcComponentsDir = path.join(
  __dirname,
  "../design-system/src/components",
);
const componentsDest = path.join(__dirname, "../design-system/components");
if (fs.existsSync(srcComponentsDir)) {
  if (!fs.existsSync(componentsDest)) {
    fs.mkdirSync(componentsDest, { recursive: true });
  }
  fs.readdirSync(srcComponentsDir).forEach((file) => {
    if (file.endsWith(".js")) {
      fs.copyFileSync(
        path.join(srcComponentsDir, file),
        path.join(componentsDest, file),
      );
    }
  });
  console.log("Copied JS components to public location");
}

// Copy utility JS files (e.g., date-format.js) into docs/design-system/utils
const srcUtilsDir = path.join(__dirname, "../design-system/src/utils");
const docsUtilsDest = path.join(__dirname, "../docs/design-system/utils");
if (fs.existsSync(srcUtilsDir)) {
  if (!fs.existsSync(docsUtilsDest)) fs.mkdirSync(docsUtilsDest, { recursive: true });
  fs.readdirSync(srcUtilsDir).forEach((file) => {
    if (file.endsWith('.js')) {
      fs.copyFileSync(path.join(srcUtilsDir, file), path.join(docsUtilsDest, file));
    }
  });
  console.log("Copied utils to docs/design-system/utils");
}

// Ensure all assets (including icons) are present in storybook-static/assets
const publicAssetsSrc = path.join(__dirname, "../design-system/assets");
const storybookAssetsDest = path.join(
  __dirname,
  "../design-system/storybook-static/assets",
);
function copyAllAssets(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  fs.readdirSync(src).forEach((item) => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    if (fs.statSync(srcPath).isDirectory()) {
      copyAllAssets(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}
copyAllAssets(publicAssetsSrc, storybookAssetsDest);
console.log(
  "Copied all assets (including icons) from design-system/assets to storybook-static/assets",
);

// Copy icons from design-system/icons to docs/design-system/icons
const iconsSrc = path.join(__dirname, "../design-system/icons");
const docsIconsDest = path.join(__dirname, "../docs/design-system/icons");
if (fs.existsSync(iconsSrc)) {
  if (!fs.existsSync(docsIconsDest)) {
    fs.mkdirSync(docsIconsDest, { recursive: true });
  }
  fs.readdirSync(iconsSrc).forEach((file) => {
    if (file.endsWith('.svg')) {
      fs.copyFileSync(
        path.join(iconsSrc, file),
        path.join(docsIconsDest, file)
      );
    }
  });
  console.log("Copied icons from design-system/icons to docs/design-system/icons");
}

// Copy app-specific JS from src to docs for apps like tracker/today-list
const appsToMirror = ['tracker', 'today-list', 'note', 'pad'];
appsToMirror.forEach((appName) => {
  const srcAppJs = path.join(__dirname, `../src/${appName}/js`);
  const docsAppJs = path.join(__dirname, `../docs/${appName}/js`);
  if (fs.existsSync(srcAppJs)) {
    if (!fs.existsSync(docsAppJs)) fs.mkdirSync(docsAppJs, { recursive: true });
    fs.readdirSync(srcAppJs).forEach((file) => {
      if (file.endsWith('.js')) {
        fs.copyFileSync(path.join(srcAppJs, file), path.join(docsAppJs, file));
      }
    });
    console.log(`Copied app JS for ${appName} to docs/${appName}/js`);
  }
});

console.log(`All docs/ HTML asset paths set to ${mode}.`);
