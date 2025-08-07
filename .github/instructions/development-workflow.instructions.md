---
applyTo: '**'
---

# Labs Development Workflow & VS Code Instructions

**Current workflows and development guidelines for the Labs monorepo.**

## 🚀 **Quick Start Commands**

### **Menu-Driven Development (Recommended)**
```bash
# Interactive menu with all options
npm run menu

# Option 1: Local Storybook development
# Option 2: Build and deploy to GitHub Pages
```

### **Direct Commands (Available as fallback)**
```bash
# Start local Storybook development
npm run storybook

# Build for production deployment  
npm run build-storybook

# Deploy to GitHub Pages
npm run deploy
```

## 📁 **Project Structure**

```
/Users/danielreis/labs/          # Project root (start here)
├── design-system/               # Labs Design System v2.1.0
│   ├── src/                    # Components, tokens, stories
│   ├── .storybook/             # Storybook configuration
│   └── storybook-static/       # Generated production build
├── docs/                       # GitHub Pages deployment
│   ├── design-system/          # Deployed Storybook
│   ├── timer/, tracker/, etc.  # Deployed apps
└── scripts/                    # Build and deployment automation
```

## 🔧 **Enhanced Build System**

### **Auto-Port-Kill Features**
- **Automatic port management** - No manual intervention for port 6006 conflicts
- **Pre-error checking** - Validates environment before building
- **Build size reporting** - Tracks bundle size and file count
- **Icon generation** - Automatically updates icon lists and imports

### **Production Deployment**
- **One-command deployment** - `npm run menu` → Option 2
- **GitHub Pages integration** - Automatic deployment from `docs/` folder
- **Multi-app deployment** - All apps and Storybook deployed together

## 📖 **Documentation System**

### **Primary Documentation**
- **[📖 Main README](../../README.md)** - Project overview and index
- **[📋 Global Changelog](../../CHANGELOG.md)** - Project milestones
- **[🎨 Design System README](../../design-system/README.md)** - Component docs
- **[📋 Storybook Improvements](../../design-system/STORYBOOK_IMPROVEMENTS.md)** - Current UI priorities

### **Documentation Principles**
- **One README per project** - Single source of truth
- **One CHANGELOG per project** - Clear release tracking
- **Hierarchical organization** - Main → Project → Component docs
- **Archive outdated content** - Keep only current, relevant docs

## 🤖 **AI Assistant Guidelines**

### **Command Preferences**
- **Use menu system** - `npm run menu` for all Storybook operations
- **Avoid new terminals** - Use existing sessions when possible
- **Reference documentation** - Use main README and design system docs for project overview

### **Development Workflow**
1. **Start from project root** - `/Users/danielreis/labs/`
2. **Use menu commands** - Interactive interface for common tasks
3. **Commit frequently** - Document changes and progress
4. **Deploy automatically** - Menu option 2 for production updates

## 🎯 **Current Development Priorities**

### **High Priority (Storybook UI)**
- [ ] **Light theme default** - Switch from dark theme
- [ ] **Controls positioning** - Default to right side
- [ ] **Component visibility** - Fix icon-only buttons
- [ ] **Color token display** - Improve light/dark visibility

### **Technical Infrastructure**
- ✅ **Icon path resolution** - Fixed GitHub Pages 404s
- ✅ **Auto-port-kill scripts** - Seamless development workflow
- ✅ **Menu-driven commands** - Simplified developer interface
- ✅ **Documentation consolidation** - Clean hierarchical structure

## 🛠️ **Troubleshooting**

### **Common Issues**
- **Port conflicts** - Auto-resolved by enhanced build scripts
- **Icon 404s** - Fixed with hostname-based path detection
- **Build failures** - Pre-validation prevents common issues

### **Development Environment**
- **VS Code workspace** - Open entire `labs/` folder
- **Terminal usage** - Built-in terminal opens in workspace root
- **Path consistency** - Use root-relative paths in all scripts

## 📋 **Technical Stack**

- **Web Components** - Native browser APIs, framework-agnostic
- **Lit** - Lightweight web component library
- **Storybook v9.1.1** - Component development and docs
- **Vite** - Fast build tool and development server
- **GitHub Pages** - Static site hosting and deployment

---

## 🎉 **Recent Achievements**

### **v2.1.0 Features**
- ✅ **Production stability** - Reliable GitHub Pages deployment
- ✅ **Enhanced workflows** - Menu-driven development experience
- ✅ **Documentation overhaul** - Clean, hierarchical organization
- ✅ **Build automation** - Pre-error checking and validation

---

*Keep development focused on menu-driven workflows and the current documentation system.*
