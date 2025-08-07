#!/bin/bash

# Labs Design System - Auto Storybook Script
# Automatically kills any process on port 6006 and starts Storybook

PORT=6006
echo "🚀 Starting Labs Design System Storybook..."

# Check if port is in use
if lsof -Pi :$PORT -sTCP:LISTEN -t >/dev/null ; then
    echo "📡 Port $PORT is in use. Killing existing processes..."
    
    # Get the process ID and kill it
    PID=$(lsof -Pi :$PORT -sTCP:LISTEN -t)
    if [ ! -z "$PID" ]; then
        echo "🔪 Killing process $PID on port $PORT"
        kill -9 $PID
        sleep 2
    fi
    
    echo "✅ Port $PORT is now available"
else
    echo "✅ Port $PORT is available"
fi

# Run the prestorybook script (icon generation)
echo "🔧 Generating icons list..."
npm run generate-icons-list

# Start Storybook
echo "📚 Starting Storybook on port $PORT..."
npx storybook dev -p $PORT --no-open

# Note: --no-open prevents automatic browser opening
# Remove --no-open if you want the browser to open automatically
