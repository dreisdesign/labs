# Design System Workflow Guide

This document outlines the recommended workflow for developing, testing, and deploying components in the design system.

## 1. Local Development (Storybook)

- **Purpose:** Use Storybook for rapid, iterative development and testing of components in a local, unpublished environment.
- **Command:** `npm run storybook` (from the `design-system` directory)
- **Workflow:**
  1.  Make changes to your components.
  2.  Run Storybook to see your changes in real-time.
  3.  Use Storybook's tools to test different states and variations of your components.

## 2. Public Demo (GitHub Pages)

- **Purpose:** The public demo page serves as a living showcase and documentation for the _published_ design system. It allows you and your users to verify that components work as expected in the production environment.
- **Workflow:**
  1.  Once you are satisfied with your changes in Storybook, you are ready to deploy.
  2.  Run the deploy script: `node scripts/menu.mjs` and select "Build & Deploy".
  3.  This will build the design system, deploy it to GitHub Pages, and open the public demo page in your browser.

## 3. Final Recommendations

- **Menu:**
  - **Preview Storybook (local, always up-to-date, for dev):** Use this for local development.
  - **Build & Deploy (publishes, then preview demo):** Use this to publish your changes and update the public demo.
  - **Exit:** Exits the menu.
- **Demo Page:**
  - Only use published components.
  - Never use unpublished/dev components in the demo.
- **Cache:**
  - Add cache-busting to assets if you see stale files after deploy.
  - Remind users to hard-refresh after deploy.
