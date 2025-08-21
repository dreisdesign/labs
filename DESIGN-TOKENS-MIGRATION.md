# Design Tokens Migration Plan

## Phase 1: Standardize Global Tokens (Week 1)
- [ ] Consolidate all global semantic tokens in `tokens/colors.css`
- [ ] Ensure every `--color-*` token has a corresponding `--color-on-*` token
- [ ] Remove duplicate definitions between global and theme files
- [ ] Update Storybook docs to reflect simplified structure

## Phase 2: Simplify Theme Architecture (Week 2)
- [ ] Convert theme-specific files to use override pattern instead of redefinition
- [ ] Standardize theme class names (`.theme-light`, `.theme-dark`, `.theme-[flavor]`)
- [ ] Remove complex inheritance chains in favor of direct mappings
- [ ] Test all themes in Storybook and applications

## Phase 3: Clean Up & Documentation (Week 3)
- [ ] Remove unused palette stops and back-compat aliases
- [ ] Update all component CSS to use semantic tokens only
- [ ] Create comprehensive token documentation
- [ ] Add automated tests for token consistency

## Recommended Final Structure

```
tokens/
├── colors.css          # Global semantic tokens + raw palette
├── themes/
│   ├── light.css       # Light theme overrides
│   ├── dark.css        # Dark theme overrides
│   └── flavors.css     # Brand flavor overrides (blueberry, strawberry, vanilla)
└── typography.css      # Typography tokens
```

## Benefits of This Approach
1. **Simpler mental model**: Clear separation of concerns
2. **Better maintainability**: Changes in one place affect all themes
3. **Industry standard**: Follows Material Design 3 token patterns
4. **Better tooling**: Easier to generate themes programmatically
5. **Clearer documentation**: Self-documenting token relationships
