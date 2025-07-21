# Labs Design System

A comprehensive design system and component library extracted from the proven patterns used across the Labs ecosystem of applications.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![Storybook](https://img.shields.io/badge/storybook-8.6.14-ff4785)

## 🎯 Overview

The Labs Design System ensures consistency, accessibility, and maintainability across all Labs applications including Tracker, Note, Timer, and the upcoming Today List app. Built from real-world usage patterns, every component and token has been battle-tested in production.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/dreisdesign/labs.git
cd labs/labs-design-system

# Install dependencies
npm install

# Start Storybook documentation
npm run storybook

# View demo environment
open ../demo/index.html
```

### Usage

1. **Import CSS tokens and components:**
   ```html
   <!-- Design tokens -->
   <link rel="stylesheet" href="./src/tokens/index.css">
   
   <!-- Individual components -->
   <link rel="stylesheet" href="./src/components/button.css">
   ```

2. **Use component classes:**
   ```html
   <button class="labs-button labs-button--primary">Primary Action</button>
   <button class="labs-button labs-button--secondary labs-button--lg">Large Secondary</button>
   ```

3. **Apply design tokens:**
   ```css
   .custom-element {
     background: var(--labs-color-surface);
     color: var(--labs-color-on-surface);
     padding: var(--labs-space-4);
     border-radius: var(--labs-border-radius-md);
   }
   ```

## 📁 Project Structure

```
labs-design-system/
├── src/
│   ├── tokens/              # Design token CSS files
│   │   ├── colors.css       # Color system with light/dark themes
│   │   ├── typography.css   # Font scales and weights
│   │   ├── spacing.css      # Consistent spacing system
│   │   ├── layout.css       # Layout utilities and breakpoints
│   │   ├── animations.css   # Animation tokens and transitions
│   │   └── index.css        # Combined token imports
│   ├── components/          # Component CSS files
│   │   └── button.css       # Button component with all variants
│   └── stories/             # Storybook documentation
│       ├── Welcome.mdx      # Design system home page
│       ├── Button.stories.js
│       ├── Colors.stories.js
│       └── Typography.stories.js
├── demo/                    # Testing environment
│   └── index.html          # Real-world component testing
├── .storybook/             # Storybook configuration
└── package.json
```

## 🎨 Design Principles

### Consistency
All components follow unified design patterns, interaction behaviors, and visual hierarchy extracted from the Tracker app's proven interface.

### Accessibility
- ARIA-compliant components with proper labeling
- Keyboard navigation support
- High contrast color ratios (WCAG 2.1 AA)
- Inclusive language ("inactive" vs "disabled")
- Focus management and visible focus indicators

### Theme Support
- Complete light and dark mode system
- CSS custom properties for easy theming
- Automatic browser UI color adaptation
- Smooth theme transitions

### Real-World Tested
Every component has been validated through production use in Labs applications with thousands of user interactions.

## 🧱 Available Components

### Button Component
- **Variants:** Primary, Secondary, Success, Error, Outline, Ghost
- **Sizes:** Small (sm), Default (md), Large (lg)
- **States:** Default, Hover, Active, Inactive, Loading
- **Modifiers:** Full-width, Icon-only
- **Features:** Smooth animations, accessibility support, theme adaptation

### Design Tokens
- **Colors:** 15+ semantic color variables with light/dark variants
- **Typography:** Variable font system with 7 weight options
- **Spacing:** 12-step spacing scale (4px base)
- **Layout:** Responsive breakpoints and container utilities
- **Animations:** Consistent transition timings and easing

## 📖 Documentation

### Storybook (Recommended)
Interactive component documentation with live examples:
```bash
npm run storybook
# Opens http://localhost:6006
```

**🌐 Public Documentation**: https://dreisdesign.github.io/labs/

### Demo Environment
Real-world testing playground:
```bash
open demo/index.html
```

Features:
- Component testing in realistic layouts
- Theme switching functionality
- Usage examples from actual applications
- Interactive logging for development

## 🎯 Supported Applications

The design system currently powers these Labs applications through direct CSS imports:

- **[Tracker](../tracker/)** - Time tracking and productivity metrics
- **[Note](../note/)** - Quick note-taking and thoughts capture
- **[Timer](../timer/)** - Pomodoro and focus session management
- **Today List** - Daily task management *(in development)*

**Integration Method**: Each app imports design system CSS files directly, ensuring automatic updates when the system changes.

## 🔄 Living Documentation

This design system maintains **1:1 parity** between:
- Storybook documentation
- Demo environment testing  
- Production application usage

Any changes automatically reflect across all environments, ensuring the documentation never goes stale.

## 🎯 Centralized Design System Workflow

### **Single Source of Truth**
All design decisions are centralized in this repository. When you make changes here, they automatically propagate to all applications that use the design system.

### **Change Once, Apply Everywhere**
```bash
# 1. Make a design change
vim src/tokens/colors.css  # Edit design tokens
vim src/components/button.css  # Update components

# 2. Commit and push
git add src/
git commit -m "feat: Update primary color contrast"
git push origin main

# 3. Automatic results:
# ✅ Public Storybook rebuilds and deploys
# ✅ Demo environment gets the new styles
# ✅ All Labs apps get the changes when they refresh
```

### **No Style Duplication**
- **Apps import** design system CSS files
- **No local style maintenance** required
- **Consistent design language** automatically maintained
- **Easy updates** - no need to update multiple codebases

### **Apps Integration**
```html
<!-- In any Labs app (Tracker, Note, Timer, Today List) -->
<link rel="stylesheet" href="../labs-design-system/src/tokens/index.css">
<link rel="stylesheet" href="../labs-design-system/src/components/button.css">

<!-- Use proven components -->
<button class="labs-button labs-button--primary">Track Time</button>
```

## 🛠 Development

### Scripts
```bash
npm run storybook          # Start Storybook dev server
npm run build-storybook    # Build static Storybook
npm run lint              # Check code quality
npm test                  # Run component tests
```

### Contributing
1. Follow existing naming conventions (`labs-*` prefixes)
2. Update both Storybook stories and demo examples
3. Test in both light and dark themes
4. Ensure accessibility compliance
5. Update CHANGELOG.md

### Adding New Components
1. Create CSS file in `src/components/`
2. Add Storybook story in `src/stories/`
3. Update demo environment with examples
4. Document usage patterns

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for detailed version history.

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

## 🤝 Support

- 📖 [Storybook Documentation](http://localhost:6006)
- 🧪 [Demo Environment](./demo/index.html)
- 📁 [Source Code](https://github.com/dreisdesign/labs)
- 📧 Contact: [daniel@dreisdesign.com](mailto:daniel@dreisdesign.com)

---

**Version:** 1.0.0  
**Last Updated:** July 2025  
**Maintained by:** Labs Team
