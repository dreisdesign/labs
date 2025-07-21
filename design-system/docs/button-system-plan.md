# Labs Design System – Button System Redesign Plan

## Overview
This document tracks the plan and requirements for building a comprehensive, unified Button component for the Labs Design System. The goal is to create a single source of truth for all apps, using best practices and full tokenization.

---

## Button System: Unified API & Features

**Variants:**
- `primary` (default), `secondary`, `success`, `error`, `outline`, `ghost`

**Sizes:**
- `sm` (small), `md` (default), `lg` (large)

**States:**
- Default, `hover`, `active`, `inactive` (disabled), `loading`

**Modifiers:**
- `fullWidth` (block-level), `icon` (icon-only/circular)

**Accessibility:**
- Proper ARIA attributes (`aria-disabled`, `aria-busy` for loading)
- Keyboard focus ring (visible, accessible)
- Semantic `<button>` element (or `<a role="button">` if needed)
- Label for icon-only buttons (visually hidden text)

**Props/Args Example:**
```js
{
  variant: 'primary' | 'secondary' | 'success' | 'error' | 'outline' | 'ghost',
  size: 'sm' | 'md' | 'lg',
  disabled: boolean,
  loading: boolean,
  fullWidth: boolean,
  icon: boolean,
  text: string,
  onClick: function,
  ariaLabel?: string // for icon-only
}
```

**CSS/Token Usage:**
- All colors, spacing, typography, and transitions use design tokens.
- BEM-inspired class naming: `.labs-button`, `.labs-button--primary`, `.labs-button--sm`, etc.

**Storybook Stories:**
- One story per variant, size, and state.
- Playground for all props.
- Accessibility notes in docs.

---

## Next Steps
1. **Token Audit & Foundation:**
   - Review and update all necessary design tokens (colors, spacing, typography, transitions) before Button implementation.
2. **Button Implementation:**
   - Build the new Button component and stories using the finalized tokens.
3. **App Migration:**
   - Plan for updating all apps to use the new Button system.

---

*This plan is tracked here for ongoing reference and updates as the Button system evolves.*
