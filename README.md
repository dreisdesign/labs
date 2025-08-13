# 🧪 Labs - Design System & Apps

> **Modular design system and productivity apps built with Web Components**

## 🌐 Live Applications

| App | Purpose | Live URL |
|-----|---------|----------|
| **🎨 Design System** | Component library & tokens | [Storybook](https://dreisdesign.github.io/labs/design-system/) |
| **⏰ Focus Timer** | Pomodoro-style productivity timer | [Timer App](https://dreisdesign.github.io/labs/timer/) |
| **📊 Daily Tracker** | Habit and activity tracking | [Tracker App](https://dreisdesign.github.io/labs/tracker/) |
| **📝 Daily Note** | Simple daily note-taking | [Note App](https://dreisdesign.github.io/labs/note/) |
| **✅ Today List** | Daily task management | [Today List](https://dreisdesign.github.io/labs/today-list/) |
| **🏠 Labs Homepage** | App launcher and overview | [Homepage](https://dreisdesign.github.io/labs/) |

## 🏗️ Repository Structure

```
labs/
├── design-system/          # 🎨 Labs Design System v2.1.0
│   ├── src/                # Components, tokens, styles  
│   ├── .storybook/         # Storybook configuration
│   └── README.md           # Design system documentation
├── docs/                   # 📦 GitHub Pages deployment
│   ├── design-system/      # Built Storybook (production)
│   ├── timer/              # Timer app (production)
│   ├── tracker/            # Tracker app (production)
│   ├── note/               # Note app (production)
│   ├── today-list/         # Today List app (production)
│   └── README.md           # Public documentation
├── scripts/                # 🔧 Build and deployment automation
└── _dev/                   # 👨‍💻 Developer tools and documentation
```

## 🚀 Quick Start

### **Development**
```bash
# Start Storybook with auto-port-kill
npm run menu
# Choose option 1 for local development

# Or run directly
npm run storybook
```

### **Deployment**
```bash
# Build and deploy to GitHub Pages
npm run menu  
# Choose option 2 for production deployment

# Or run deploy script directly
npm run deploy
```

## 📚 Documentation

### **Design System**
- **[📖 Design System README](design-system/README.md)** - Setup, usage, components
- **[📋 Design System Changelog](design-system/CHANGELOG.md)** - Releases and updates
- **[🎨 Storybook (Live)](https://dreisdesign.github.io/labs/design-system/)** - Interactive component docs

### **Applications**
- **[📝 Timer Documentation](docs/timer/README.md)** - Focus timer features and usage
- **[📊 Tracker Documentation](docs/tracker/README.md)** - Habit tracking and analytics  
- **[📓 Note Documentation](docs/note/README.md)** - Daily note-taking features
- **[✅ Today List Documentation](docs/today-list/README.md)** - Task management features

### **Project Management**
- **[📋 Global Changelog](CHANGELOG.md)** - Overall project updates
- **[🔧 Development Documentation](_dev/_documents/)** - Development guides and plans

## ✨ Key Features

### **🎨 Design System v2.1.0**
- **Modular Web Components** - Self-contained, portable components
- **CSS Custom Properties** - Extensive theming and customization
- **Shadow DOM Encapsulation** - No style conflicts or dependencies
- **Automatic Icon Generation** - Dynamic icon loading and management
- **Theme Toggle System** - Light/dark mode with persistence

### **📱 Application Features**
- **Progressive Web Apps** - Installable with offline support
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Data Persistence** - Local storage with export/import
- **Shared Design Language** - Consistent UI across all apps
- **No Framework Dependencies** - Vanilla JavaScript with Web Components


## 🛠️ Development Workflow & AI Chat Policy

### Menu-Driven Workflow (Recommended)
All development and testing should use the menu-driven workflow for consistency and automation:

```bash
echo "1" | npm run menu
```

This ensures the correct environment, auto-port-kill, and the interactive "continue" button in the VS Code terminal. Avoid using `npm run menu` alone for AI-driven workflows.

### Explicit AI Chat Task Continuation Policy
For all AI-driven development, the assistant will:
- Always provide explicit, numbered options for next steps
- Only prompt for completion when all tasks are truly complete
- Never end a turn without either fully completing all tasks or providing the next actionable step
- See `.github/instructions/development-workflow.instructions.md` for the full policy and details

**Reference:** See [Development Workflow Instructions](.github/instructions/development-workflow.instructions.md) for the latest workflow and AI Chat guidelines.

---


### **Enhanced Build System**
- **Auto-Port-Kill** - Seamless development without port conflicts
- **Pre-Error Checking** - Validates build environment before compilation
- **Automatic Icon Generation** - Updates icon lists and imports
- **Build Size Reporting** - Tracks bundle size and optimization
- **Menu-Driven Commands** - Simple interface for common tasks

### **Deployment Pipeline**
- **GitHub Pages Integration** - Automatic deployment from `docs/` folder
- **Build Automation** - One-command build and deploy process
- **Production Optimization** - Minified builds with asset optimization
- **Multi-App Deployment** - All apps and Storybook deployed together

## 🔧 Technical Stack

**Web Components** - Native browser APIs, no framework lock-in
**Lit** - Lightweight web component base class
**Storybook v9.1.2** - Component development and documentation
**Vite** - Fast build tool and development server
**GitHub Pages** - Static site hosting and deployment

---
**Troubleshooting Storybook version issues?**
See the new troubleshooting section in `design-system/FEATURES-TODO.md` for step-by-step fixes if the version or upgrade banner is wrong.

## 🏆 Recent Achievements

### **v2.1.0 - Icon Path Resolution (Aug 7, 2025)**
- ✅ **Fixed Production 404s** - Icons now load correctly in GitHub Pages
- ✅ **Clean Path Detection** - Hostname-based environment detection
- ✅ **Enhanced Build Scripts** - Auto-port-kill and error prevention
- ✅ **Theme Toggle Implementation** - Working across all UI patterns

### **v2.0.0 - Modular Architecture (July 2025)**
- ✅ **Complete Rewrite** - Modern Web Components architecture
- ✅ **Design System Upgrade** - Comprehensive token system
- ✅ **Storybook Integration** - Interactive component documentation
- ✅ **Build System Overhaul** - Automated deployment pipeline

---

## 🤝 Contributing

This is a personal project showcasing modern web development practices. The codebase demonstrates:

- **Modularity-First Design** - Every component is self-contained and portable
- **Progressive Enhancement** - Works without JavaScript, enhanced with it
- **Performance Optimization** - Minimal bundle sizes and efficient loading
- **Developer Experience** - Comprehensive tooling and documentation

For development guidelines, see [Modularity Instructions](.github/instructions/Modularity.instructions.md).

---

**Built with ❤️ using modern web standards**
