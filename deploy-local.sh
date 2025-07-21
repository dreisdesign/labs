#!/bin/bash
set -e

# 1. Build Storybook
cd design-system
npm run build-storybook
cd ..

# 2. Prepare public directory
rm -rf public
mkdir -p public

# 3. Copy landing page files
cp index.html favicon.svg manifest.json sw.js LICENSE README.md public/

# 4. Copy Note app
cp -r note public/

# 5. Copy Timer app
cp -r timer public/

# 6. Copy Tracker app
cp -r tracker public/

# 7. Copy Storybook to design-system
mkdir -p public/design-system
cp -r design-system/storybook-static/* public/design-system/

# 8. Deploy to gh-pages branch
# (Optional: uncomment to auto-push)
# git checkout --orphan gh-pages
# git --work-tree=public add --all
# git --work-tree=public commit -m "deploy: static site"
# git push -f origin gh-pages
# git checkout main

echo "Build complete. Review the 'public/' directory and push to gh-pages branch to deploy."
