# RP Readiness Improvements Project

This project implements reliable server readiness checks for the `npm run rp` development workflow, ensuring browsers open only when Storybook UI is fully hydrated.

## Problem
The current `rp` script opens browser tabs immediately after starting servers, often before Storybook's UI is ready, leading to connection errors and manual refreshes.

## Solution
Implement layered readiness checks:
1. HTTP port availability check
2. Deep UI hydration check using Playwright
3. Stability verification (consecutive successful checks)
4. Prevent duplicate tab opening via environment variable

## Files Modified/Added
- `scripts/menu.mjs` - Honor `LABS_NO_AUTO_OPEN` environment variable
- `scripts/rp.mjs` - New orchestrator script (replaces inline package.json logic)
- `scripts/check-sb-console.mjs` - Playwright-based deep readiness checker
- `scripts/wait-for-url.sh` - HTTP port availability checker
- `scripts/wait-for-storybook-ui.sh` - Quiet wrapper for deep checks
- `package.json` - Update `rp` script to use new orchestrator

## Usage
```bash
npm run rp  # Reliable startup with proper readiness checks

# Advanced usage with environment variables
LABS_RP_DEBUG=1 npm run rp           # Enable debug logging
LABS_NO_AUTO_OPEN=1 npm run rp       # Skip browser opening
STORYBOOK_TIMEOUT=600 npm run rp     # Extend timeout for slow builds
```

## Implementation Status
✅ **COMPLETED** - All core functionality implemented and tested:
- HTTP port readiness checks
- Playwright-based deep UI hydration verification
- Stability checking (consecutive successful checks)
- Environment variable configuration
- Graceful fallbacks and error handling
- Updated package.json and menu.mjs integration

## Quick Test
```bash
# Verify scripts work
./scripts/wait-for-url.sh https://example.com "Test" 10 1
STORYBOOK_URL="https://example.com" node scripts/check-sb-console.mjs

# Install Playwright browsers (one-time setup)
npx playwright install chromium

# Run the improved rp command
npm run rp
```

See `implementation-plan.md` for detailed technical specifications.