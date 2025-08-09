#!/bin/bash

# Development script to auto-copy design system files
# This watches for changes and copies them to docs/ automatically

echo "🔄 Starting Labs Development Server with Auto-Sync..."

# Function to copy files
copy_files() {
    echo "📦 Copying design system files..."
    
    # Copy components
    cp design-system/src/components/*.js docs/design-system/components/ 2>/dev/null || true
    
    # Copy main CSS
    cp design-system/src/styles/main.css docs/design-system/ 2>/dev/null || true
    
    # Copy token CSS files
    cp design-system/src/styles/tokens/*.css docs/design-system/tokens/ 2>/dev/null || true
    
    # Copy token JS files
    cp design-system/src/tokens/*.js docs/design-system/tokens/ 2>/dev/null || true
    
    # Copy icons
    cp design-system/icons/*.svg docs/design-system/icons/ 2>/dev/null || true
    
    echo "✅ Files copied successfully"
}

# Initial copy
copy_files

# Use fswatch to monitor changes (if available)
if command -v fswatch >/dev/null 2>&1; then
    echo "🔍 Watching for changes..."
    fswatch -o design-system/src/ design-system/icons/ | while read file; do
        echo "📁 Changes detected, copying files..."
        copy_files
    done
else
    echo "📋 Install fswatch for auto-copying: brew install fswatch"
    echo "💡 For now, run this script manually after making changes"
fi
