#!/bin/bash

# Development script to sync design system files
# Usage: 
#   ./dev-sync.sh        - Copy once and exit
#   ./dev-sync.sh watch  - Copy and watch for changes

echo "🔄 Syncing Labs Design System..."

# Function to copy files
copy_files() {
    echo "📦 Copying design system files..."
    
    # Create directories if they don't exist
    mkdir -p docs/design-system/components
    mkdir -p docs/design-system/tokens
    mkdir -p docs/design-system/icons
    
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

# Check if watch mode is requested
if [ "$1" = "watch" ]; then
    # Use fswatch to monitor changes (if available)
    if command -v fswatch >/dev/null 2>&1; then
        echo "🔍 Watching for changes... (Type 'q' and press Enter to exit)"
        
        # Start fswatch in background
        fswatch -o design-system/src/ design-system/icons/ | while read file; do
            echo "📁 Changes detected, copying files..."
            copy_files
        done &
        
        # Wait for 'q' input
        while read -r input; do
            if [ "$input" = "q" ]; then
                echo "👋 Stopping watch mode..."
                # Kill the fswatch background process
                jobs -p | xargs kill 2>/dev/null
                break
            else
                echo "💡 Type 'q' and press Enter to exit"
            fi
        done
    else
        echo "📋 Install fswatch for auto-copying: brew install fswatch"
        echo "💡 For now, run this script manually after making changes"
    fi
else
    echo "🎉 Sync complete! Files are ready for localhost testing."
fi
