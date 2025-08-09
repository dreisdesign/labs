
#!/bin/bash
set -e

# 1. Build Storybook static output
cd design-system
npm install
npm run build-storybook
cd ..



# 2. Update asset paths for GitHub Pages and copy assets (disabled for now)
# npm run github


# 3. Copy static build to deploy directory
cp -r design-system/storybook-static/* docs/design-system/

# 4. Copy web components and required assets for public demo compatibility
echo "📦 Copying design system components and assets..."

# Create necessary directories
mkdir -p docs/design-system/components
mkdir -p docs/design-system/tokens
mkdir -p docs/design-system/icons

# Copy components
cp design-system/src/components/*.js docs/design-system/components/ 2>/dev/null || true

# Copy main CSS
cp design-system/src/styles/main.css docs/design-system/ 2>/dev/null || true

# Copy token CSS files (critical for main.css imports)
cp design-system/src/styles/tokens/*.css docs/design-system/tokens/ 2>/dev/null || true

# Copy token JS files
cp design-system/src/tokens/*.js docs/design-system/tokens/ 2>/dev/null || true

# Copy icons (critical for labs-icon component)
cp design-system/icons/*.svg docs/design-system/icons/ 2>/dev/null || true

echo "✅ Design system assets copied successfully"

git add docs/design-system docs/demo/index.html
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push
