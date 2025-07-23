
#!/bin/bash
set -e

# 1. Build Storybook static output
cd design-system
npm install
npm run build-storybook
cd ..

# 2. Update public asset paths and copy assets
npm run public

# 3. Copy static build to deploy directory
cp -r design-system/storybook-static/* docs/design-system/

# 4. Commit and push
git add docs/design-system
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push
