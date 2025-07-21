# Storybook v9.x Design System Plan

## 1. Directory Structure

**Recommended (Monorepo):**
```
labs/
  design-system/
    src/
      components/
        Button/
          Button.js
          Button.stories.mdx
          Button.test.js
        ...
      index.js
    .storybook/
      main.js
      preview.js
    package.json
    README.md
  today-list/
    ...
  note/
    ...
  timer/
    ...
  tracker/
    ...
  demo/
    ...
  scripts/
    ...
  README.md
```
- All shared UI lives in `design-system/`.
- Each app (today-list, note, etc.) imports from `design-system/`.
- `demo/` is for manual component testing/playground.

**Improvements:**
- Use npm workspaces or pnpm/yarn workspaces for dependency management and local linking.
- Keep all Storybook config inside `design-system/.storybook/`.
- Place all stories in `src/components/**` or `src/stories/`.

---

## 2. Storybook v9.x Requirements

- Use `@storybook/html-vite` (or `@storybook/react-vite` if you use React).
- For docs-only pages (Welcome, Introduction), use MDX v2 with YAML frontmatter only (no React imports or `<Meta />`).
- Addons:
  - `@storybook/addon-docs` (for MDX/Docs)
  - `@storybook/addon-essentials` (optional, for controls, actions, backgrounds, etc.)
  - `@storybook/addon-links` (optional, for linking stories)
- All addons must be v9.x compatible.
- In `.storybook/main.js`:
  ```js
  module.exports = {
    framework: '@storybook/html-vite',
    stories: [
      '../src/stories/Introduction.mdx',
      '../src/components/**/*.stories.@(js|mdx)'
    ],
    addons: [
      '@storybook/addon-docs',
      // '@storybook/addon-essentials', // if needed
      // '@storybook/addon-links',      // if needed
    ],
    docs: { autodocs: true }
  };
  ```
- For a Welcome/Introduction page, use:
  ```mdx
  ---
  title: 'Introduction'
  ---

  # Welcome to the Labs Design System

  ...content...
  ```

---

## 3. Local Build & Maintenance

- All Storybook commands run locally in `design-system/`.
- Add scripts to `design-system/package.json`:
  ```json
  "scripts": {
    "storybook": "storybook dev",
    "build-storybook": "storybook build"
  }
  ```
- No GitHub Actions required for local dev/testing.
- Deploy static build to `/design-system/` on GitHub Pages.

---

## 4. Living Documentation & Component Usage

- All components documented in Storybook with stories and MDX.
- Changes in `design-system/` propagate to all apps.
- Use npm workspaces for easy local development and cross-app updates.

---

## 5. Demo & Testing

- `demo/` folder for manual component testing.
- Each app imports from `design-system/` for real-world integration.
- Add a new `today-list/` app as a consumer.

---

## 6. Monorepo vs. Separate Repo

**Monorepo (Recommended for you):**
- Pros: Easier local development, atomic commits, single source of truth, easier cross-app updates, no need for npm publish.
- Cons: Slightly more complex dependency management, but workspaces solve this.

**Separate Repo:**
- Pros: If you want to open-source or share the design system independently, or if you have a large team with separate release cycles.
- Cons: More overhead (publishing, versioning, syncing), harder to keep in sync with apps.

**Conclusion:**  
Stick with a monorepo unless you have a strong reason to split (e.g., public npm package, external consumers, or very large team).

---

## 7. Deployment

**Deployment is from the main branch.**

- GitHub Pages should be set to deploy from the main branch (not gh-pages).
- No changes to GitHub settings are needed if you already have Pages set to main.
- The static Storybook build (design-system/storybook-static/) is committed to main and served from there.
- If you want to keep main clean, you can use a deploy script to push only the static files to a separate branch, but for most cases, deploying from main is simpler.

**Sample Deploy Script (from project root):**
```sh
cd design-system
npm install
npm run build-storybook
cd ..
cp -r design-system/storybook-static/* design-system/
git add design-system/
git commit -m "Deploy Storybook build"
git push
```
This will build Storybook, copy the static files to the correct location, and push to main. GitHub Pages will serve the updated site.

---

## 8. Next Steps

1. Scaffold `design-system/` with Storybook v9.x.
2. Add Introduction.mdx as the default docs page.
3. Move shared components into `src/components/`.
4. Set up npm workspaces for local linking.
5. Update each app to import from `design-system/`.
6. Document the workflow in the root README.
