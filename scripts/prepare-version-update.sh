#!/bin/bash

# prepare-version-update.sh - Creates a new version branch for any project
# Usage: ./prepare-version-update.sh <project-name>
# Example: ./prepare-version-update.sh tracker
#          ./prepare-version-update.sh note

# Check if project name is provided
if [ -z "$1" ]; then
    echo "Error: Project name is required"
    echo "Usage: $0 <project-name>"
    echo "Available projects:"
    ls -d /Users/danielreis/labs/*/ | grep -v "scripts" | xargs basename -a
    exit 1
fi

PROJECT_NAME="$1"
PROJECT_DIR="/Users/danielreis/labs/$PROJECT_NAME"

# Verify project directory exists
if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Project directory '$PROJECT_DIR' not found"
    exit 1
fi

# Get current version from index.html
current_version=$(grep -o 'v[0-9]\+\.[0-9]\+\.[0-9]\+' "$PROJECT_DIR/index.html" | head -n 1 | sed 's/v//')

if [ -z "$current_version" ]; then
    echo "Error: Could not find version number in $PROJECT_DIR/index.html"
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

# Check if current directory is a git repository
if [ ! -d "$PROJECT_DIR/.git" ]; then
    # Check if parent directory is a git repository
    if [ ! -d "$(dirname "$PROJECT_DIR")/.git" ]; then
        echo "Error: Not in a git repository. This script must be run from within a git repository."
        exit 1
    fi
    
    # We're in a subdirectory of a git repository
    cd "$(dirname "$PROJECT_DIR")"
fi

# Check if the branch already exists
if git show-ref --verify --quiet "refs/heads/feature/$PROJECT_NAME-v$new_version"; then
    echo "Error: Branch 'feature/$PROJECT_NAME-v$new_version' already exists. Please remove it or choose a different version."
    exit 1
fi

# Create new feature branch
git checkout -b "feature/$PROJECT_NAME-v$new_version"

# Update version in index.html using perl for better compatibility
perl -pi -e "s/v[0-9]+\\.[0-9]+\\.[0-9]+/v$new_version/" "$PROJECT_DIR/index.html"

# Project-specific updates
if [ -f "$PROJECT_DIR/styles/main.css" ]; then
    # Check if the file contains a version string to update
    if grep -q "content: \"v[0-9]\+\.[0-9]\+\.[0-9]\+\"" "$PROJECT_DIR/styles/main.css"; then
        # Update version in styles/main.css - specifically target the content property with version
        sed -i '' "s/content: \"v[0-9]\\+\\.[0-9]\\+\\.[0-9]\\+\"/content: \"v$new_version\"/" "$PROJECT_DIR/styles/main.css"
        echo "✓ Updated version in styles/main.css"
    fi
fi

# Read the feature description from user input
echo -n "Enter a short description for this feature (e.g. 'Theme Toggle Enhancements'): "
read -r feature_description

# Check if CHANGELOG.md exists
if [ -f "$PROJECT_DIR/CHANGELOG.md" ]; then
    # Check if CHANGELOG has a table of contents to update
    if grep -q "^## Table of Contents" "$PROJECT_DIR/CHANGELOG.md"; then
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
        ' "$PROJECT_DIR/CHANGELOG.md" > "$PROJECT_DIR/CHANGELOG.md.tmp" && mv "$PROJECT_DIR/CHANGELOG.md.tmp" "$PROJECT_DIR/CHANGELOG.md"
        echo "✓ Updated CHANGELOG.md with new version section"
    else
        # Simple update for changelogs without table of contents
        sed -i '' "/^## \[Unreleased\]/a\\
\\
## [$new_version] - $today\\
\\
" "$PROJECT_DIR/CHANGELOG.md"
        echo "✓ Added new version section to CHANGELOG.md"
    fi
else
    echo "⚠️ No CHANGELOG.md found. Consider creating one."
fi

echo "✓ Created feature branch feature/$PROJECT_NAME-v$new_version"
echo "✓ Updated version numbers in files"

echo "Committing version bump and changelog update..."
git add "$PROJECT_DIR/index.html"
[ -f "$PROJECT_DIR/styles/main.css" ] && git add "$PROJECT_DIR/styles/main.css"
[ -f "$PROJECT_DIR/CHANGELOG.md" ] && git add "$PROJECT_DIR/CHANGELOG.md"

git commit -m "chore($PROJECT_NAME): start feature v$new_version - $feature_description"
echo "✓ Commit complete. You now have a clean starting point for your feature branch."
echo ""
echo "Next steps:"
echo "1. Make your changes to project $PROJECT_NAME"
echo "2. Stage and commit your feature work"
