#!/bin/bash
set -e
npm run build-storybook
npm run github
git add .
commit_msg="Deploy (automation): $(date '+%Y-%m-%d %H:%M') - ensure all public assets in docs/design-system for GitHub Pages"
git commit -m "$commit_msg"
git push
