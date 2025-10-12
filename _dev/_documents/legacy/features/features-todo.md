# LEGACY/ARCHIVED: All high-priority and migration tasks completed as of v2.4.7 (2025-10-12). This document is superseded by docs/DEVELOPMENT.md. See that file for all current migration, features, and roadmap documentation.
# 🆕 Feature & Task Wrangling Doc

---
## 🛠️ Development Workflow & AI Chat Policy

See [Development Workflow Instructions](../../.github/instructions/development-workflow.instructions.md) for the latest menu-driven workflow and AI Chat task continuation policy. All contributors should follow the explicit options and completion logic described there.

---
# 🆕 Feature & Task Wrangling Doc

## Purpose
This document tracks new features, improvements, and remaining tasks for the Labs Design System and Storybook UI. Use this as the single source of truth for ongoing and upcoming work.

---


1. **Delete old dependencies and lockfile in `design-system/`:**
  ```sh
  cd design-system
  rm -rf node_modules package-lock.json
  npm install
  ```
2. **Verify installed versions:**
  ```sh
  npm ls | grep storybook
  ```
  All Storybook packages should show the correct version (e.g., 9.1.2).
3. **Clean build artifacts and cache:**
  ```sh
  rm -rf storybook-static node_modules/.cache
  ```
4. **Rebuild and restart Storybook:**
  Use the menu system or your usual dev command.
5. **Hard refresh your browser:**
  Use `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows/Linux) to clear cache.

This will ensure the correct Storybook version is running and the upgrade banner disappears.

---

_Last updated: August 12, 2025_
