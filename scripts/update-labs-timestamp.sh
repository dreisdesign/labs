#!/bin/sh
# Update Labs index.html timestamp placeholder with latest git commit date
STAMP=$(git log -1 --format='%cd' --date='format:%B %d, %Y, %I:%M %p %Z')
sed -i '' "s|<!--GIT_TIMESTAMP-->|$STAMP|g" index.html
