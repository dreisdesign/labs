
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

# 4. Update demo timestamp version indicator
TIMESTAMP=$(date '+%Y%m%d-%H%M%S')
sed -i.bak "s/__DEPLOY_TIMESTAMP__/$TIMESTAMP/g" docs/demo/index.html
rm -f docs/demo/index.html.bak

# 4. Copy web components and styles for public demo compatibility
# Components are now included in the Storybook build, but ensure they're available
mkdir -p docs/design-system/components
if [ -d "design-system/storybook-static/components" ]; then
    cp design-system/storybook-static/components/*.js docs/design-system/components/
    echo "✅ Using components from Storybook build"
else
    cp design-system/src/components/*.js docs/design-system/components/
    echo "⚠️  Fallback: Using components from src"
fi

# Copy additional assets that may be needed
cp design-system/components/*.js docs/design-system/components/ 2>/dev/null || true
cp design-system/src/styles/components/*.css docs/design-system/components/ 2>/dev/null || true
cp design-system/src/styles/main.css docs/design-system/ 2>/dev/null || true
mkdir -p docs/design-system/styles/tokens
cp design-system/src/styles/tokens/*.css docs/design-system/styles/tokens/ 2>/dev/null || true
mkdir -p docs/design-system/tokens
cp design-system/src/styles/tokens/*.css docs/design-system/tokens/ 2>/dev/null || true

git add docs/design-system docs/demo/index.html
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push

# Automated GitHub Pages validation
echo ""
echo "🚀 Deployment complete! Starting automated validation..."
echo "📋 Relevant testing links:"
echo "   🎨 Storybook: https://dreisdesign.github.io/labs/design-system/"
echo "   🔧 Settings Overlay: https://dreisdesign.github.io/labs/design-system/?path=/story/components-settings-overlay--default"
echo "   🏠 Demo Page: https://dreisdesign.github.io/labs/demo/"
echo "   📝 Today List: https://dreisdesign.github.io/labs/today-list/"
echo "   🎯 Homepage: https://dreisdesign.github.io/labs/"
echo ""
echo "⏳ Waiting for GitHub Pages to update (checking every 30 seconds)..."

# Get the timestamp we just deployed
DEPLOYED_TIMESTAMP="$TIMESTAMP"
echo "🎯 Looking for timestamp: $DEPLOYED_TIMESTAMP"

# Start validation script in background
node ../scripts/validate-github-pages.mjs "$DEPLOYED_TIMESTAMP" &
VALIDATION_PID=$!

echo "✅ Validation running in background (PID: $VALIDATION_PID)"
echo "🌐 Opening Storybook for immediate testing..."

# Open the main Storybook page
if command -v open >/dev/null 2>&1; then
    open "https://dreisdesign.github.io/labs/design-system/"
else
    echo "🔗 Open manually: https://dreisdesign.github.io/labs/design-system/"
fi
