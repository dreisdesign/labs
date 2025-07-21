#!/bin/bash
set -e

echo "Building Storybook..."
cd design-system
npm run build-storybook
cd ..

echo "Preparing clean deployment..."
# Create or update the public directory for deployment
DEPLOY_DIR="public"
mkdir -p "$DEPLOY_DIR/design-system"

# Copy built Storybook to public/design-system
echo "Copying built Storybook..."
rm -rf "$DEPLOY_DIR/design-system"/*
cp -r design-system/storybook-static/* "$DEPLOY_DIR/design-system/"

# Optionally copy other committed files (additive, non-destructive)
# Example: cp -r note "$DEPLOY_DIR/"
# Add more as needed, or remove this comment if not needed

echo "Deploying to gh-pages..."
# Switch to deployment branch
git checkout --orphan gh-pages-deploy 2>/dev/null || git checkout gh-pages-deploy

# Only copy public/* to root, do not delete anything else
cp -r "$DEPLOY_DIR"/* .

# Commit and push
git add .
git commit -m "deploy: $(date '+%Y-%m-%d %H:%M:%S')"
git push -f origin gh-pages-deploy:gh-pages

# Go back to main
git checkout main
git branch -D gh-pages-deploy 2>/dev/null || true

echo "✅ Deployment complete!"
echo "🌐 Site available at: https://dreisdesign.github.io/labs/design-system/"
