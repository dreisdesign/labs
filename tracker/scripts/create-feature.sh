#!/bin/bash

# Get directory of the script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
TRACKER_DIR="$(dirname "$SCRIPT_DIR")"

# Get current version from index.html
current_version=$(grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' "$TRACKER_DIR/index.html" | head -n 1 | sed 's/v//')

if [ -z "$current_version" ]; then
    echo "Error: Could not find version number in index.html"
    exit 1
fi

# Split version into components
IFS='.' read -r major minor patch <<< "$current_version"

# Increment patch version
new_patch=$((patch + 1))
new_version="$major.$minor.$new_patch"
today=$(date +%Y-%m-%d)

echo "Current version: $current_version"
echo "New version: $new_version"

# Create new feature branch
git checkout -b "feature/v$new_version"

# Update version in index.html
sed -i '' "s/v$current_version/v$new_version/" "$TRACKER_DIR/index.html"

# Update version in styles/main.css
sed -i '' "s/v$current_version/v$new_version/" "$TRACKER_DIR/styles/main.css"

# Add new version section to CHANGELOG.md
awk -v ver="$new_version" -v date="$today" '
/^## \[Unreleased\]/ {
    print $0 "\n";
    print "## [" ver "] - " date "\n";
    next
}
{ print }
' "$TRACKER_DIR/CHANGELOG.md" > "$TRACKER_DIR/CHANGELOG.md.tmp" && mv "$TRACKER_DIR/CHANGELOG.md.tmp" "$TRACKER_DIR/CHANGELOG.md"

echo "✓ Created feature branch feature/v$new_version"
echo "✓ Updated version numbers in files"
echo "✓ Added new version section to changelog"
echo ""
echo "Next steps:"
echo "1. Make your changes"
echo "2. Stage and commit the version updates"