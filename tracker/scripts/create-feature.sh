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

# Read the feature description from user input
echo -n "Enter a short description for this feature (e.g. 'Theme Toggle Enhancements'): "
read -r feature_description

# Add new version section to CHANGELOG.md and update table of contents
awk -v ver="$new_version" -v date="$today" -v desc="$feature_description" '
BEGIN { 
    table_updated = 0;
    print_line = 1;
}
/^## Table of Contents/ {
    print;
    while (getline line) {
        if (line ~ /^-/) {
            if (!table_updated && line !~ /\[Unreleased\]/) {
                # Add new version entry right after Unreleased
                link = ver;
                gsub(/\./, "", link);
                printf("- [%s](#%s) - %s\n", ver, link, desc);
                table_updated = 1;
            }
        }
        print line;
        if (line !~ /^-/) break;
    }
    next;
}
/^## \[Unreleased\]/ {
    print $0 "\n";
    print "## [" ver "] - " date "\n";
    next;
}
{ if (print_line) print }
' "$TRACKER_DIR/CHANGELOG.md" > "$TRACKER_DIR/CHANGELOG.md.tmp" && mv "$TRACKER_DIR/CHANGELOG.md.tmp" "$TRACKER_DIR/CHANGELOG.md"

echo "✓ Created feature branch feature/v$new_version"
echo "✓ Updated version numbers in files"
echo "✓ Added new version section to changelog with description"

echo "Committing version bump and changelog update..."
git add "$TRACKER_DIR/index.html" "$TRACKER_DIR/styles/main.css" "$TRACKER_DIR/CHANGELOG.md"
git commit -m "chore: start feature v$new_version - $feature_description"
echo "✓ Commit complete. You now have a clean starting point for your feature branch."
echo ""
echo "Next steps:"
echo "1. Make your changes"
echo "2. Stage and commit your feature work"