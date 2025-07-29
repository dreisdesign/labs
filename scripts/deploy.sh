
#!/bin/bash
set -e


# 1. Build Storybook static output
cd design-system
npm install
npm run build-storybook
# Ensure icons are included in the static output
cp -r icons storybook-static/
cd ..


# 2. Update asset paths for GitHub Pages and copy assets
npm run github

# 3. Copy static build to deploy directory
 cp -r design-system/storybook-static/* docs/design-system/
 # Ensure icons directory is present in deploy output
 cp -r design-system/icons docs/design-system/icons

git add docs/design-system docs/design-system/icons docs/demo/index.html
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push

# Open the deployed Storybook in the browser
if command -v open > /dev/null; then
  open "https://dreisdesign.github.io/labs/design-system/"
elif command -v xdg-open > /dev/null; then
  xdg-open "https://dreisdesign.github.io/labs/design-system/"
else
  echo "Deployed! Visit: https://dreisdesign.github.io/labs/design-system/"
fi
