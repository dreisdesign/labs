---
applyTo: 'design-system/**'
---

# Web Component Layout & Container Issues

## Critical: Button Width Problems in Containers

### The Problem
When custom elements with shadow DOM (like `labs-button`) are used in containers, external CSS cannot reach nested elements:

```html
<!-- This CSS CANNOT reach the internal <button> -->
<style>
.dropdown labs-button button { width: 100% !important; } /* ❌ Fails */
</style>

<div class="dropdown">
  <labs-button>Archive</labs-button> <!-- Host element can be styled -->
  <!-- but internal <button> remains narrow -->
</div>
```

### Root Cause Analysis
1. **Shadow DOM boundary** blocks external CSS selectors
2. **`display: inline-flex`** on internal button prevents width stretching
3. **Host element styling** doesn't automatically cascade to internal elements

### The Working Solution Pattern

**❌ Don't Fight the Shadow Boundary**
```css
/* These approaches repeatedly fail */
.menu labs-button button { width: 100% !important; }
.menu labs-button { display: block !important; }
```

**✅ Use Component-Level Attributes**
```html
<!-- This works universally -->
<labs-button fullwidth variant="secondary">Archive</labs-button>
<labs-button fullwidth variant="destructive">Delete</labs-button>
```

### Implementation Guide

#### For Component Authors
When creating web components, always include layout attributes:

```css
/* In the component's shadow DOM styles */
:host([fullwidth]) {
  display: block;
  width: 100%;
}

:host([fullwidth]) button {
  display: flex !important;
  width: 100% !important;
  justify-content: flex-end;
}
```

#### For Component Users
Always prefer semantic attributes over external CSS targeting:

```html
<!-- Instead of CSS hacks -->
<div class="container">
  <labs-button fullwidth>Full Width Button</labs-button>
</div>
```

## Component Attribute Patterns

### Layout Attributes
- `fullwidth` - Makes component fill container width
- `metric` - For large numeric/data displays  
- `text-only` - Simplified version without interactive elements

### Variant Attributes
- Use semantic names that describe purpose, not appearance
- Test variants in multiple container contexts
- Document all variants in Storybook with examples

## Testing Checklist

### Container Testing
Before finalizing any component:
- [ ] Test in dropdown menus
- [ ] Test in card containers
- [ ] Test in flex containers
- [ ] Test in grid layouts
- [ ] Test at different viewport sizes

### Modularity Validation
Ask yourself: **"Is this modular?"**
- [ ] Works in different parent contexts
- [ ] No container-specific CSS required
- [ ] Semantic attributes handle layout needs
- [ ] Solution scales to other similar components

## User Feedback Recognition

### Success Indicators
Watch for these phrases in user feedback:
- **"Finally!"** - Previous attempts failed, this approach works
- **"great!"** - Solution is working as expected
- **"Perfect!"** - User validates the solution
- **"Is this modular?"** - User checking solution quality

### Failure Indicators
- **"the width is not 100%"** - CSS targeting failing
- **"the button is still not getting 100%"** - Shadow DOM boundary issue
- **"Is there inline styles overriding?"** - Desperation debugging

## Prevention Strategy

### Component Design Phase
1. **Identify common container scenarios** early in design
2. **Add layout attributes** during initial implementation
3. **Test in shadow DOM inspector** before considering complete
4. **Document usage patterns** in component stories

### Code Review Questions
- Does this component work in all common containers?
- Are layout needs handled internally with attributes?
- Would external CSS targeting be required for basic usage?
- Is the component truly self-contained?

## Related Components Reference

Components that correctly implement this pattern:
- `labs-button` with `fullwidth` attribute
- `labs-card` with `metric` variant
- `labs-list-item` with `text-only` variant

Study these implementations when creating new components or variants.