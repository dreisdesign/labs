#!/bin/bash

# Labs Design System - Auto Build Storybook Script
# Automatically kills any development processes and builds static Storybook

PORT=6006
echo "🏗️  Building Labs Design System Storybook..."

# Check if port is in use and kill development server
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "📡 Stopping development server on port $PORT..."
    
    # Get the process ID and kill it
    PID=$(lsof -Pi :$PORT -sTCP:LISTEN -t)
    if [ ! -z "$PID" ]; then
        echo "🔪 Killing process $PID on port $PORT"
        kill -9 $PID
        sleep 2
    fi
    
    echo "✅ Development server stopped"
fi

# Run the prebuild script (icon generation)
echo "🔧 Generating icons list..."
npm run generate-icons-list

# Build static Storybook
echo "📦 Building static Storybook..."
npx storybook build

echo "✅ Build complete! Output in storybook-static/"
