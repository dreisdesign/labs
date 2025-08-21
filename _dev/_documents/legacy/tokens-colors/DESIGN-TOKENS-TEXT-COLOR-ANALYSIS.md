# Design Token Text Color System - Simplified Architecture

## Issues Identified

1. **Complex text color system** - Too many similar tokens confusing developers
2. **Theme switching problems** - Text colors change when preview background doesn't match
3. **Status colors overridden per theme** - Should inherit from global for consistency
4. **Warning text color hardcoded** - Should use semantic token for better theming

## Root Cause Analysis

The current system has evolved organically and has these problems:

### Text Color Token Confusion
- `--color-on-surface-alt` (#fbfbfd) - Light text for dark surfaces
- `--color-on-background` (varies by theme) - Text for theme background
- `--color-on-error` (#ffffff) - White text for error backgrounds

**Problem**: These serve different purposes but names don't make this clear.

### Theme Override Issues
- Status colors (success, warning, error) were being overridden per theme
- This created inconsistency and accessibility problems
- Themes should only override layout/branding colors, not semantic feedback colors

## Simplified Solution

### 1. Clarified Text Color Purposes

```css
/* Global text colors - for consistent contrast */
--color-on-surface: var(--base-800);     /* Dark text for light backgrounds */
--color-on-surface-alt: var(--base-100); /* Light text for dark backgrounds */
--color-on-background: var(--base-800);  /* Default text (themes can override) */

/* Status text colors - inherit globally for accessibility consistency */
--color-on-success: #fff;                /* White on green background */
--color-on-warning: var(--color-on-surface); /* Dark text on yellow background */
--color-on-error: #fff;                  /* White on red background */
```

### 2. Global Status Colors (No Theme Overrides)

```css
/* Status colors - consistent across all themes for accessibility */
--color-success: var(--palette-green-500); /* #00800C - WCAG AA compliant */
--color-warning: var(--palette-yellow-500); /* #FFB300 */
--color-error: var(--palette-red-500);      /* #D32F2F */
```

### 3. Theme-Specific Colors Only

```css
/* Themes only override branding and layout colors */
.flavor-blueberry.theme-light {
  --color-primary: var(--palette-blueberry-500);
  --color-background: var(--palette-blueberry-200);
  --color-on-primary: var(--palette-white);
  --color-on-background: var(--palette-blueberry-900);
  /* Status colors inherit globally - no overrides */
}
```

## Benefits

1. **Simplified mental model** - Fewer text color tokens to remember
2. **Consistent accessibility** - Status colors same across all themes
3. **Easier debugging** - Clear purpose for each token
4. **Better maintainability** - Changes in one place affect all themes

## Migration Impact

- ✅ All existing themes continue to work
- ✅ Status colors now consistent and accessible
- ✅ Reduced complexity in theme files
- ✅ Better Storybook documentation clarity

## Storybook Display Issues

The light/dark theme switching issue in Storybook occurs because:
1. Theme switcher changes CSS classes on components
2. Storybook preview iframe background stays white
3. Dark theme text colors become invisible on white background

**Solution**: Storybook should set preview background to match theme background color.
