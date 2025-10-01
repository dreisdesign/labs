# RP Readiness Improvements - Implementation Plan

## Overview
Implement reliable server readiness checks for `npm run rp` to prevent premature browser opening and improve developer experience.

## Current State Analysis
- `package.json` `rp` script opens browsers immediately after starting servers
- `scripts/menu.mjs` contains server startup logic but no readiness coordination
- Playwright is available in `design-system/package.json`
- `scripts/check-docs-smoke.sh` exists for basic HTTP checks

## Recommended Changes (Priority Order)

### 1. Layered Readiness Checks ⭐
**What**: HTTP port check followed by deep UI hydration verification with stability requirements.

**Why**: Storybook may open ports while UI is still building/hot-reloading. Require consecutive successful checks to avoid opening during transient states.

**Implementation**:
- Use Playwright to load Storybook story URL and wait for preview iframe DOMContentLoaded
- Require 2 consecutive successful checks separated by 300-500ms
- Fallback to HTTP iframe check if Playwright unavailable

### 2. Dependency Locality ⭐
**What**: Run Playwright checks from `design-system/` where it's already installed.

**Why**: Avoid dependency conflicts and missing packages.

**Implementation**: Execute checker with `cwd: design-system/` or via `npm --prefix design-system`

### 3. Prevent Duplicate Tabs ⭐
**What**: Make `scripts/menu.mjs` honor `LABS_NO_AUTO_OPEN=1` environment variable.

**Why**: Prevent duplicate browser tabs when orchestrator will open them.

**Implementation**: Single conditional check around existing `openUrls()` calls.

### 4. Timeout and Retry Logic ⭐
**What**: Exponential backoff retries with configurable timeouts.

**Why**: Handle server restarts and HMR rebuilds gracefully.

**Implementation**:
- Default: 6 attempts with delays 1s, 2s, 4s, 8s, 16s
- Environment variables: `STORYBOOK_TIMEOUT=300`, `DOCS_TIMEOUT=120`

### 5. Stability Verification ⭐
**What**: Only open browser after 2+ consecutive successful deep checks.

**Why**: Avoid opening during short-lived success states followed by rebuilds.

**Implementation**: 300-500ms delay between checks, require both to pass.

### 6. Non-blocking Concurrent Opens
**What**: Open docs immediately when ready, Storybook only after deep check passes.

**Why**: Docs are static/fast, Storybook needs more verification.

**Implementation**: Parallel check execution in `rp.mjs`

### 7. Quiet Mode with Debug Option
**What**: Minimal terminal output by default, detailed logs when debugging.

**Why**: Clean normal usage, actionable debugging information.

**Implementation**:
- `LABS_RP_DEBUG=1` enables verbose logging to `/tmp/labs-storybook-check.log`
- Terminal shows: "⏳ Building Storybook..." → "✅ Storybook UI ready"

### 8. Fallback Behavior
**What**: If Playwright fails, fallback to HTTP checks and print URLs.

**Why**: Keep workflow usable even if heavy dependencies fail.

**Implementation**: Try-catch around Playwright with graceful degradation.

### 9. Configurable Timeouts
**What**: Environment variable overrides for timeout values.

**Why**: Different projects/systems have different build times.

**Implementation**: 
```bash
STORYBOOK_TIMEOUT=300 DOCS_TIMEOUT=120 npm run rp
```

### 10. CI Environment Detection
**What**: Skip browser opening in CI/headless environments.

**Why**: Avoid CI errors and noise.

**Implementation**: Check `process.env.CI` or `LABS_NO_AUTO_OPEN`

## Implementation Files

### `scripts/rp.mjs` (New)
Main orchestrator that:
- Starts menu with `LABS_NO_AUTO_OPEN=1`
- Waits for ports and runs deep checks
- Opens browsers when ready
- Spawns background smoke tests

### `scripts/check-sb-console.mjs` (New)
Playwright-based checker that:
- Loads Storybook story URL
- Waits for preview iframe hydration
- Implements retry logic with exponential backoff
- Supports quiet mode and debug logging

### `scripts/wait-for-url.sh` (New)
Simple HTTP port checker with curl/timeout.

### `scripts/wait-for-storybook-ui.sh` (New)
Quiet wrapper around Playwright checker.

### `scripts/menu.mjs` (Modified)
Add `LABS_NO_AUTO_OPEN` check to skip browser opening.

### `package.json` (Modified)
Update `rp` script to: `node scripts/rp.mjs`

## Testing Strategy

### Manual Verification
1. Run `npm run rp`
2. Verify terminal shows building/ready messages
3. Confirm docs open first, then Storybook
4. Check no duplicate tabs
5. Test with server restarts during build

### Automated Checks
- Status file written to `/tmp/labs-rp.status` with JSON results
- Smoke test integration via existing `check-docs-smoke.sh`

### Local Commands
```bash
# Install Playwright browsers (if needed)
cd design-system && npx playwright install

# Run with debug logging
LABS_RP_DEBUG=1 npm run rp

# Run without auto-opening browsers
LABS_NO_AUTO_OPEN=1 npm run rp
```

## Expected Final Flow

1. User runs `npm run rp`
2. Orchestrator starts servers in background with `LABS_NO_AUTO_OPEN=1`
3. Terminal prints "⏳ Building Storybook..." when port opens
4. Deep check waits for UI hydration with stability verification
5. Terminal prints "✅ Storybook UI ready" and "✅ Docs Preview ready"
6. Browser opens docs first, then Storybook (perfectly timed)
7. Background smoke tests run automatically

## Configuration Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `LABS_NO_AUTO_OPEN` | unset | Skip browser opening (useful for CI) |
| `LABS_RP_DEBUG` | unset | Enable verbose logging |
| `STORYBOOK_TIMEOUT` | 300 | Max seconds to wait for Storybook |
| `DOCS_TIMEOUT` | 120 | Max seconds to wait for docs |
| `CI` | unset | Auto-detected CI environment (skips opens) |

## Risk Mitigation

- **Playwright dependency**: Fallback to HTTP checks if unavailable
- **Long build times**: Configurable timeouts with sensible defaults  
- **HMR interference**: Consecutive success requirement prevents premature opens
- **CI compatibility**: Environment detection skips browser operations
- **Debug complexity**: Detailed logging only when explicitly enabled