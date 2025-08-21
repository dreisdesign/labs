#!/bin/zsh
# fix-flavors-tokens.sh
# Update all --color-surface and --color-on-surface assignments in flavors.css to use semantic tokens
# Backs up the original file as flavors.css.bak

set -e

FLAVORS="design-system/flavors.css"
BACKUP="design-system/flavors.css.bak"

cp "$FLAVORS" "$BACKUP"

echo "Backup created: $BACKUP"

echo "Updating --color-surface assignments..."
sed -i '' 's/--color-surface: *var(--palette-[a-zA-Z0-9-]\+);/--color-surface: var(--color-surface);/g' "$FLAVORS"

echo "Updating --color-on-surface assignments..."
sed -i '' 's/--color-on-surface: *var(--palette-[a-zA-Z0-9-]\+);/--color-on-surface: var(--color-on-surface);/g' "$FLAVORS"

# Remove any trailing whitespace
sed -i '' 's/[ \t]*$//' "$FLAVORS"

echo "Done. All theme blocks in flavors.css now use semantic tokens for surface and on-surface."
