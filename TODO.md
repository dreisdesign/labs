# 📝 Labs Project TODO

This file tracks all actionable, in-progress, and planned work for the Labs monorepo. For completed work and release notes, see `CHANGELOG.md`.

---

## 🚧 In Progress / High Priority
- Storybook UI Improvements — Light theme default, improved controls layout
- Component Visibility Fixes — Icon-only buttons and "All Apps" visibility
- Color Token Display — Better light/dark mode visibility in swatches
- Production Testing — Comprehensive testing of GitHub Pages deployment

## 🟡 Medium Priority
- Documentation Consolidation — Complete migration to new structure
- Token Showcase Improvements — Better typography and spacing displays
- Icon Grid Enhancements — Larger default size, improved controls
- App Feature Expansions — Enhanced functionality across all apps

## 🛠️ Technical Debt
- Archive Management — Complete migration of outdated documentation
- Build Optimization — Further bundle size reduction
- Performance Testing — Comprehensive performance analysis
- Accessibility Audit — Full accessibility compliance review

## 🗺️ Roadmap
- Complete CSF3 migration for all stories (advanced controls, future-proofing)
- Integrate labs-alert for all notification/undo patterns
- Refactor overlays for consistent close button usage and modularity

## 🎨 Theming & Token System: Suggested Next Steps
1. Perform mechanical cleanup to ensure `tokens/colors.css` contains only `--palette-*` anchors and move any `.theme-*` or `:root` semantic fallbacks into `main.css` (low-risk, reversible).
2. Run the token usage scan to find any semantic tokens used by components that lack fallback or flavor mappings.
3. Add a small grep-based CI check to fail on undeclared `--color-*` usages.
4. Add the early-load IIFE to pages missing it to prevent FOUC.

---

For details, see the main docs and `COLORS-DOCS.md`. This file is the single source for all actionable and planned work.
