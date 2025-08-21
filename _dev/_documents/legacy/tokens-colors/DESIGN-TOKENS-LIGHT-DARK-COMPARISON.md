# Design Tokens - Light vs Dark Theme Comparison

This table shows how the same semantic tokens resolve to different values in light vs dark themes, demonstrating the power of the two-layer token architecture.

## Vanilla Flavor

| Token | Light Theme | Dark Theme | Purpose |
|-------|-------------|------------|---------|
| `--color-primary` | #6B5C4B (vanilla-500) | #A89B8C (vanilla-300) | Primary brand color |
| `--color-background` | #F5F1E7 (vanilla-100) | #372116 (vanilla-800) | Page background |
| `--color-on-background` | #372116 (vanilla-800) | #FFFFFF | Text on background |
| `--color-success` | #00800C (global) | #00800C (global) | Success feedback |
| `--color-warning` | #FFB300 (global) | #FFB300 (global) | Warning feedback |
| `--color-error` | #D32F2F (global) | #D32F2F (global) | Error feedback |

## Blueberry Flavor

| Token | Light Theme | Dark Theme | Purpose |
|-------|-------------|------------|---------|
| `--color-primary` | #2E2B74 (blueberry-500) | #2E2B74 (blueberry-500) | Primary brand color |
| `--color-background` | #DBD7FF (blueberry-200) | #000000 (black) | Page background |
| `--color-on-background` | #15122B (blueberry-900) | #F0EEFF (blueberry-100) | Text on background |
| `--color-success` | #00800C (global) | #00800C (global) | Success feedback |
| `--color-warning` | #FFB300 (global) | #FFB300 (global) | Warning feedback |
| `--color-error` | #D32F2F (global) | #D32F2F (global) | Error feedback |

## Strawberry Flavor

| Token | Light Theme | Dark Theme | Purpose |
|-------|-------------|------------|---------|
| `--color-primary` | #800800 (strawberry-500) | #800800 (strawberry-500) | Primary brand color |
| `--color-background` | #FFD3D2 (strawberry-200) | #2A2A30 (base-800) | Page background |
| `--color-on-background` | #5C1A18 (strawberry-900) | #FFF2F1 (strawberry-100) | Text on background |
| `--color-success` | #00800C (global) | #00800C (global) | Success feedback |
| `--color-warning` | #FFB300 (global) | #FFB300 (global) | Warning feedback |
| `--color-error` | #D32F2F (global) | #D32F2F (global) | Error feedback |

## Key Insights

1. **Status colors are global** - Success, warning, and error colors are the same across all themes for accessibility consistency.

2. **Background contrast inverts** - Light themes use light backgrounds with dark text, dark themes use dark backgrounds with light text.

3. **Brand colors stay consistent** - Primary colors usually don't change between light/dark to maintain brand recognition.

4. **Automatic contrast** - The `--color-on-*` tokens automatically provide appropriate contrast for their paired background colors.

5. **Semantic layer abstraction** - Components use semantic tokens like `--color-primary`, not palette tokens like `--palette-blueberry-500`, making them theme-agnostic.

## Architecture Benefits

This two-layer approach means:
- **Components are theme-agnostic** - They reference semantic tokens only
- **Themes are focused** - They only define brand and layout mappings
- **Global consistency** - Status colors work the same everywhere
- **Easy maintenance** - Change palette, all themes update automatically
