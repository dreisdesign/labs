
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

git add docs/design-system docs/demo/index.html
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push
