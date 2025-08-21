# Design Tokens Migration Audit

_Generated: 2025-01-21_
_Migration Plan: [DESIGN-TOKENS-MIGRATION.md](DESIGN-TOKENS-MIGRATION.md)_

## Phase 1 Audit: Current Token Inventory

### Global Semantic Tokens (colors.css)
**Background/Surface Tokens:**
- ✅ `--color-surface: var(--base-100)` → Has pair `--color-on-surface`
- ✅ `--color-surface-alt: var(--base-800)` → Has pair `--color-on-surface-alt`
- ✅ `--color-primary: var(--palette-blueberry-500)` → Has pair `--color-on-primary`

**Text/Foreground Tokens:**
- ✅ `--color-on-surface: var(--base-800)` → Pairs with `--color-surface`
- ✅ `--color-on-surface-alt: var(--base-100)` → Pairs with `--color-surface-alt`
- ✅ `--color-on-primary: #fff` → Pairs with `--color-primary`

**Status Tokens:**
- ✅ `--color-success: var(--palette-green-500)` → ❌ Missing `--color-on-success`
- ✅ `--color-warning: var(--palette-yellow-500)` → ❌ Missing `--color-on-warning`
- ✅ `--color-error: var(--palette-red-500)` → ❌ Missing `--color-on-error`

### Theme-Specific Tokens (flavors.css)
**Common Pattern Across All Themes:**
- ✅ `--color-primary` → ✅ `--color-on-primary`
- ✅ `--color-primary-darker` → ✅ `--color-on-primary-darker`
- ✅ `--color-background` → ✅ `--color-on-background`
- ✅ `--color-error` → ❌ Missing `--color-on-error` (themes override error but not its text pair)

**Theme-specific unique tokens:**
- `--settings-icon-color` (Blueberry/Strawberry only)

### Missing Text Color Pairings

**High Priority (Global):**
1. `--color-on-success` for `--color-success`
2. `--color-on-warning` for `--color-warning`
3. `--color-on-error` for `--color-error`

**Medium Priority (Theme-specific):**
4. Theme error tokens need consistent text color strategy

### Resolution Chain Complexity Analysis

**Simple (Good - 1 level):**
- `--color-on-primary: #fff` ← Direct value
- `--base-100: var(--palette-base-100)` ← Single reference

**Moderate (Acceptable - 2 levels):**
- `--color-surface: var(--base-100)` → `var(--palette-base-100)` ← 2 levels

**Complex (Needs Simplification - 3+ levels):**
- None currently found ✅

### Duplicate/Redundant Definitions

**Back-compat aliases (can be removed after migration):**
- `--palette-blueberry-50: var(--palette-blueberry-100)`
- `--palette-strawberry-50: var(--palette-strawberry-100)`
- `--palette-blueberry: var(--palette-blueberry-500)`
- `--palette-strawberry: var(--palette-strawberry-500)`

**Theme redefinitions (inconsistent pattern):**
- Blueberry/Strawberry themes redefine their palette stops within theme selectors
- Vanilla theme only overrides semantic tokens (cleaner pattern)

### Recommended Immediate Fixes

1. **Add Missing Global Text Colors**
2. **Standardize Theme Architecture**
3. **Clean Up Back-compat Aliases**
4. **Simplify Blueberry/Strawberry Theme Pattern**

## Next Steps

Phase 1 implementation should focus on:
1. Adding missing `--color-on-*` tokens globally
2. Ensuring consistent text color strategy across themes
3. Testing all combinations in Storybook
4. Updating documentation to reflect completeness

---

See [COLORS-DOCS--TODO.md](design-system/src/styles/COLORS-DOCS--TODO.md) for detailed implementation tasks.
