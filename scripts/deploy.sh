
#!/bin/bash
set -e

# 1. Build Storybook static output
cd design-system
npm install
npm run build-storybook
cd ..



# 2. Update asset paths for GitHub Pages and copy assets (disabled for now)
echo "\nRunning update-static-paths (auto mode) to rewrite paths & copy assets..."
node scripts/update-static-paths.js --auto || true


# 3. Copy static build to deploy directory
cp -r design-system/storybook-static/* docs/design-system/


# 4. Sync design system files using dev-sync script
echo "📦 Syncing design system files..."
./scripts/dev-sync.sh

# Ensure all CSS stylesheets are always copied for production
mkdir -p docs/design-system/styles
cp design-system/src/styles/*.css docs/design-system/styles/ 2>/dev/null || true

git add docs/design-system
git add design-system/components
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public and built assets in docs/design-system and design-system/components for GitHub Pages"
git commit -m "$commit_msg"
git push
