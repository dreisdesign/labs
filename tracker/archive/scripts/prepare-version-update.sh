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

echo "Current version: $current_version"

# Ask for the type of update
echo "What type of update is this? (Select a number)"
echo "1. PATCH: Backwards-compatible bug fixes (v$major.$minor.$((patch + 1)))"
echo "2. MINOR: Backwards-compatible new features (v$major.$((minor + 1)).0)"
echo "3. MAJOR: Incompatible API changes (v$((major + 1)).0.0)"
read -r update_type

# Set new version based on the update type
case $update_type in
    1)
        new_version="$major.$minor.$((patch + 1))"
        ;;
    2)
        new_version="$major.$((minor + 1)).0"
        ;;
    3)
        new_version="$((major + 1)).0.0"
        ;;
    *)
        echo "Invalid choice. Defaulting to patch update."
        new_version="$major.$minor.$((patch + 1))"
        ;;
esac

today=$(date +%Y-%m-%d)

echo "New version: $new_version"

# Check if the branch already exists
if git show-ref --verify --quiet "refs/heads/feature/v$new_version"; then
    echo "Error: Branch 'feature/v$new_version' already exists. Please remove it or choose a different version."
    exit 1
fi

# Create new feature branch
git checkout -b "feature/v$new_version"

# Update version in index.html using perl for better compatibility
perl -pi -e "s/v[0-9]+\\.[0-9]+\\.[0-9]+/v$new_version/" "$TRACKER_DIR/index.html"

# Update version in styles/main.css - specifically target the content property with version
sed -i '' "s/content: \\"v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+\\"/content: \\"v$new_version\\"/" "$TRACKER_DIR/styles/main.css"

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