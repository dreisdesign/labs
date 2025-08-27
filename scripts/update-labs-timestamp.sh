#!/bin/sh
# Update Labs index.html timestamp with latest git commit date
STAMP=$(git log -1 --format='%cd' --date='format:%B %d, %Y, %I:%M %p %Z')
# Replace the Last updated line with the new timestamp in both index.html and docs/index.html
sed -i '' "s|Last updated:.*|Last updated: $STAMP|g" index.html
sed -i '' "s|Last updated:.*|Last updated: $STAMP|g" docs/index.html
