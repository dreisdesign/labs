#!/bin/sh
# Update Labs index.html timestamp with latest git commit date
STAMP=$(git log -1 --format='%cd' --date='format:%B %d, %Y, %I:%M %p %Z')
# Replace the Last updated line with the new timestamp
sed -i '' "s|Last updated:.*|Last updated: $STAMP|g" index.html
