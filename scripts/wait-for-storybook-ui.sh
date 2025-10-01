#!/usr/bin/env bash
# Enhanced Storybook readiness check - waits for actual UI to be built
set -euo pipefail

URL=${1:-http://localhost:6006}
TIMEOUT=${2:-120}
INTERVAL=${3:-3}

echo "⏳ Verifying Storybook UI readiness..."

# Function to check if Storybook is actually ready (not just serving HTML)
check_storybook_ready() {
    local main_page_response
    local iframe_response
    local has_js_assets
    
    # Check main page loads
    main_page_response=$(curl -s -w "%{http_code}" "$URL" -o /tmp/sb-main.html 2>/dev/null || echo "000")
    if [ "$main_page_response" != "200" ]; then
        return 1
    fi
    
    # Check iframe endpoint
    iframe_response=$(curl -s -w "%{http_code}" "$URL/iframe.html" -o /dev/null 2>/dev/null || echo "000")
    if [ "$iframe_response" != "200" ]; then
        return 1
    fi
    
    # More specific check: look for actual built assets in the HTML
    # Storybook includes script/link tags with bundle paths when built
    if grep -q -E "(sb-manager|sb-addons).+\.js" /tmp/sb-main.html 2>/dev/null; then
        has_js_assets=1
    else
        has_js_assets=0
    fi
    
    # Additional check: verify a key JavaScript bundle is actually accessible
    local js_bundle
    js_bundle=$(grep -o -E "\./sb-manager/[^\"']+\.js" /tmp/sb-main.html 2>/dev/null | head -1 || echo "")
    
    if [ -n "$js_bundle" ]; then
        local bundle_response
        bundle_response=$(curl -s -w "%{http_code}" "$URL/$js_bundle" -o /dev/null 2>/dev/null || echo "000")
        if [ "$bundle_response" != "200" ]; then
            return 1
        fi
    elif [ "$has_js_assets" = "0" ]; then
        # No assets found, likely still building
        return 1
    fi
    
    # Final check: ensure iframe has actual story content, not just loading state
    # Try to access a default story iframe to see if stories are built
    local iframe_story_response
    iframe_story_response=$(curl -s -w "%{http_code}" "$URL/iframe.html?id=components-button--default" -o /dev/null 2>/dev/null || echo "000")
    if [ "$iframe_story_response" != "200" ]; then
        # If default story doesn't exist, just check iframe.html has some content
        local iframe_content
        iframe_content=$(curl -s "$URL/iframe.html" 2>/dev/null | wc -c)
        if [ "$iframe_content" -lt 1000 ]; then
            # Iframe content too small, likely still loading
            return 1
        fi
    fi
    
    # If we get here, Storybook appears to be built and serving assets
    return 0
}

# Wait loop with more sophisticated checking
count=0
while [ $count -lt $TIMEOUT ]; do
    if check_storybook_ready; then
        echo "✅ Storybook UI is ready and built"
        rm -f /tmp/sb-main.html 2>/dev/null || true
        exit 0
    fi
    
    sleep $INTERVAL
    count=$((count + INTERVAL))
done

echo "❌ Storybook UI readiness check timed out after ${TIMEOUT}s"
rm -f /tmp/sb-main.html 2>/dev/null || true
exit 1