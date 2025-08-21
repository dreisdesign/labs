# Design Tokens Migration Plan

_Referenced from: [Project TODO](TODO.md) → [Color/Theming TODOs](design-system/src/styles/COLORS-DOCS--TODO.md)_

This document outlines a comprehensive plan to modernize the Labs Design System color token architecture, following industry best practices while maintaining backward compatibility.

## Current State Assessment

**Strengths:**
- ✅ Clear separation between palette (raw colors) and semantic tokens
- ✅ Consistent naming conventions
- ✅ Working theme system with inheritance
- ✅ Good Storybook documentation

**Areas for Improvement:**
- ❌ Complex token resolution chains make debugging difficult
- ❌ Inconsistent text color pairing strategy
- ❌ Mixed approaches between themes (some redefine, others override)
- ❌ Unused tokens and back-compat aliases add complexity

## Migration Phases

### Phase 1: Standardize Global Tokens (Week 1)
**Goal:** Create consistent foundation for all themes

- [ ] **Audit Current Tokens** (`tokens/colors.css`)
  - [ ] Document all existing global semantic tokens
  - [ ] Identify missing `--color-on-*` pairings
  - [ ] Map dependencies and resolution chains

- [ ] **Ensure Text Color Completeness**
  - [ ] Add `--color-on-surface-alt` if missing
  - [ ] Add `--color-on-background` globally
  - [ ] Verify all background colors have text color pairs

- [ ] **Remove Duplicates**
  - [ ] Consolidate duplicate definitions between global and theme files
  - [ ] Remove unused palette stops (old neutral references)
  - [ ] Clean up back-compat aliases that are no longer needed

- [ ] **Update Storybook Documentation**
  - [ ] Ensure all new tokens appear in color docs
  - [ ] Verify text color swatches show correct values
  - [ ] Test all themes render properly

### Phase 2: Simplify Theme Architecture (Week 2)
**Goal:** Reduce complexity while maintaining functionality

- [ ] **Implement Override Pattern** (`flavors.css`)
  - [ ] Convert themes to only override necessary tokens
  - [ ] Remove theme-specific palette redefinitions
  - [ ] Use direct mappings instead of nested variable chains

- [ ] **Standardize Class Names**
  - [ ] Ensure consistent `.theme-light`, `.theme-dark` usage
  - [ ] Verify `.theme-[flavor]` pattern across all themes
  - [ ] Remove any legacy theme class patterns

- [ ] **Test Theme Combinations**
  - [ ] Verify all flavor + theme combinations work
  - [ ] Test theme switching in Storybook
  - [ ] Validate theme inheritance in demo apps

- [ ] **Simplify Token Resolution**
  - [ ] Eliminate deep variable chains (>2 levels)
  - [ ] Prefer direct color values or single-level references
  - [ ] Document recommended resolution patterns

### Phase 3: Clean Up & Documentation (Week 3)
**Goal:** Finalize architecture and improve maintainability

- [ ] **Remove Technical Debt**
  - [ ] Delete unused palette stops
  - [ ] Remove commented-out code and debug statements
  - [ ] Consolidate similar token definitions

- [ ] **Component Integration**
  - [ ] Update component CSS to use semantic tokens only
  - [ ] Remove any hardcoded palette references in components
  - [ ] Verify components work across all themes

- [ ] **Comprehensive Documentation**
  - [ ] Create token usage guide for developers
  - [ ] Document recommended patterns and anti-patterns
  - [ ] Add migration guide for existing components

- [ ] **Quality Assurance**
  - [ ] Add automated tests for token consistency
  - [ ] Validate contrast requirements are met
  - [ ] Test performance with large token sets

## Recommended Final Structure

```
src/styles/
├── tokens/
│   ├── colors.css          # Global semantic tokens + raw palette
│   ├── typography.css      # Typography tokens
│   └── spacing.css         # Layout tokens
├── themes/
│   ├── base.css           # Base theme (light mode defaults)
│   ├── dark.css           # Dark theme overrides
│   └── flavors.css        # Brand flavor overrides (blueberry, strawberry, vanilla)
├── components/            # Component-specific styles
└── main.css              # Main entry point
```

## Success Metrics

**Technical:**
- [ ] Token resolution depth ≤ 2 levels for all semantic tokens
- [ ] 100% text/background color pairing coverage
- [ ] Zero circular token references
- [ ] All themes pass contrast accessibility requirements

**Developer Experience:**
- [ ] Debugging theme issues takes <5 minutes
- [ ] New themes can be created in <1 hour
- [ ] Token usage patterns are documented and clear
- [ ] Storybook docs reflect real-world usage

**Performance:**
- [ ] No measurable impact on CSS parse time
- [ ] Minimal theme switching FOUC
- [ ] Optimized token bundle size

## Implementation Notes

**Backward Compatibility:**
- Keep old token names as aliases during transition
- Gradual migration allows testing at each phase
- Component updates can happen incrementally

**Testing Strategy:**
- Visual regression tests for all theme combinations
- Automated contrast ratio validation
- Token dependency analysis
- Performance benchmarking

**Rollback Plan:**
- Each phase is independently committable
- Changes are additive where possible
- Clear rollback procedures documented

---

For detailed task tracking, see [COLORS-DOCS--TODO.md](design-system/src/styles/COLORS-DOCS--TODO.md).
