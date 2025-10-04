# Labs Documentation Index

> **Single source of truth for all project documentation locations and purposes**

---

## 📚 Quick Navigation

### Getting Started
- [**Main README**](README.md) — Repository overview, quick start, live apps
- [**Contributing Guide**](CONTRIBUTING.md) — How to contribute, PR process, commit standards
- [**Development Workflow**](docs/DEVELOPMENT.md) — Local setup, build process, deployment

### Design System
- [**Design System README**](design-system/README.md) — Component library overview
- [**Smoothie Philosophy**](design-system/smoothie.md) — Design metaphor and concepts
- [**Roadmap**](design-system/ROADMAP.md) — Planned features and enhancements
- [**Changelog**](design-system/CHANGELOG.md) — Design system version history

### Project Management
- [**Global TODO Index**](todo-index.md) — Canonical project-wide task tracking
- [**Storybook Sitemap**](STORYBOOK_SITEMAP.md) — Auto-generated component story index

---

## 📂 Documentation Structure

### Root Level (`/`)
- `README.md` — Main repository overview
- `CHANGELOG.md` — Repository-wide version history
- `CONTRIBUTING.md` — Contribution guidelines
- `DOCUMENTATION.md` — This file (navigation index)
- `todo-index.md` — Global TODO index (canonical)
- `STORYBOOK_SITEMAP.md` — Auto-generated Storybook structure

### Design System (`/design-system/`)
- `README.md` — Design system overview and status
- `ROADMAP.md` — Future plans and component development
- `CHANGELOG.md` — Design system version history
- `smoothie.md` — Design philosophy and metaphor
- `TODO.md` — Design system tasks
- `TODO-list-item-dropdown.md` — Feature-specific component work

### Documentation Folder (`/docs/`)
- `README.md` — Public-facing homepage documentation
- `DEVELOPMENT.md` — Developer workflow and deployment guide

**Note:** The `docs/` folder is primarily the GitHub Pages deployment directory. It contains built apps and the design system, not general documentation.

### Project Documentation (`/_docs/`)
- `releases/` — Release notes and QA checklists
  - `release-2025-09-21.md` — v2.4.6 release notes
  - `release-v2.4.6-qa.md` — v2.4.6 QA checklist
- `planning/` — Research and planning documents
  - `typography-todo.md` — Typography audit and consolidation plan

### App Documentation (`/docs/{app}/`)
Each app contains:
- `README.md` — App-specific overview and features
- `TODO.md` — App-specific tasks and migration plans
- `ROADMAP.md` — App-specific roadmap (where applicable)

**Active Apps:**
- `/docs/timer/` — Focus Timer (Pomodoro-style)
- `/docs/tracker/` — Daily Tracker (habit tracking)
- `/docs/note/` — Daily Note (note-taking)
- `/docs/pad/` — Drawing Pad
- `/docs/today-list/` — Daily Task List
- `/docs/home/` — Labs Homepage

### Developer Resources (`/_dev/`)
- `_documents/legacy/` — Archived documentation (historical reference)
  - [Legacy Documentation Index](_dev/_documents/legacy/README.md) — Complete legacy docs catalog
  - Notable: Migration guides, Storybook planning, token system documentation
- `projects/` — Feature branch planning and implementation logs

---

## 🎯 Documentation by Purpose

### For Contributors
1. Read [README.md](README.md) for project overview
2. Review [CONTRIBUTING.md](CONTRIBUTING.md) for workflow
3. Check [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) for local setup
4. Browse [design-system/README.md](design-system/README.md) for component info
5. Review [Modularity Guidelines](.github/instructions/modularity.instructions.md) for component design

### For Design System Work
1. [design-system/smoothie.md](design-system/smoothie.md) — Understanding the design philosophy
2. [design-system/ROADMAP.md](design-system/ROADMAP.md) — Current priorities
3. [design-system/TODO.md](design-system/TODO.md) — Active tasks
4. [Storybook (Live)](https://dreisdesign.github.io/labs/design-system/) — Component documentation

### For App Development
1. [todo-index.md](todo-index.md) — Find app-specific TODO files
2. `/docs/{app}/README.md` — App-specific documentation
3. `/docs/{app}/TODO.md` — App-specific tasks
4. [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md) — Build and deployment workflow
5. [Design System Migration Guide](_dev/_documents/legacy/migration/design-system-migration-guide.md) — Legacy migration reference

### For Design System Work
1. [design-system/smoothie.md](design-system/smoothie.md) — Understanding the design philosophy
2. [design-system/ROADMAP.md](design-system/ROADMAP.md) — Current priorities
3. [design-system/TODO.md](design-system/TODO.md) — Active tasks
4. [Storybook (Live)](https://dreisdesign.github.io/labs/design-system/) — Component documentation
5. [Modularity Guidelines](.github/instructions/modularity.instructions.md) — Component design principles

### For Release Management
1. [CHANGELOG.md](CHANGELOG.md) — Repository-wide changes
2. [design-system/CHANGELOG.md](design-system/CHANGELOG.md) — Design system changes
3. [_docs/releases/](_docs/releases/) — Release notes and QA checklists

---

## 📝 Documentation Standards

### File Naming Conventions
- `README.md` — Overview and getting started
- `CHANGELOG.md` — Version history (follows Keep a Changelog format)
- `TODO.md` — Task tracking
- `ROADMAP.md` — Future planning
- Feature-specific: `{FEATURE}-TODO.md` or `{TOPIC}-todo.md`

### Maintenance Guidelines
- **Keep todo-index.md canonical** — Never rename (per task management instructions)
- **Update CHANGELOGs** — Document all user-facing changes
- **Archive old docs** — Move outdated content to `_dev/_documents/legacy/`
- **Link liberally** — Cross-reference related documentation
- **Date stamp planning docs** — Include "Last reviewed: YYYY-MM-DD"

### Auto-Generated Files
- `STORYBOOK_SITEMAP.md` — Generated by Storybook build process
- Don't manually edit auto-generated files

---

## 🔍 Finding Information

**"How do I...?"**
- Set up locally → [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md)
- Create a component → [design-system/smoothie.md](design-system/smoothie.md)
- Deploy changes → [docs/DEVELOPMENT.md](docs/DEVELOPMENT.md#deployment-workflow)
- Contribute code → [CONTRIBUTING.md](CONTRIBUTING.md)

**"Where is...?"**
- Component status → [design-system/README.md](design-system/README.md)
- Design tokens → [Live Storybook](https://dreisdesign.github.io/labs/design-system/)
- Release notes → [_docs/releases/](_docs/releases/)
- Task lists → [todo-index.md](todo-index.md)

**"What's planned?"**
- Design system → [design-system/ROADMAP.md](design-system/ROADMAP.md)
- Specific app → `/docs/{app}/TODO.md` or `/docs/{app}/ROADMAP.md`
- All tasks → [todo-index.md](todo-index.md)

---

**Last Updated:** October 4, 2025
