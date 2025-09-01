## Contributing to Labs

Short, practical rules for making changes and opening PRs.

- Branching
  - Branch from `main` for new work. Use prefixes: `feat/`, `fix/`, `chore/` (e.g. `feat/button-variants`).
  - Keep branches small and focused.

- Commits
  - Write clear, imperative commit messages: `fix: ...`, `feat: ...`, `chore: ...`.
  - Group related small commits; rebase/squash locally before opening a PR if necessary.

- Pull Requests
  - Create a PR for any non-trivial change. Use the PR template in `.github/PULL_REQUEST_TEMPLATE.md`.
  - Include testing steps, screenshots for visual changes, and mention the affected packages (for monorepo).
  - Assign reviewers and add relevant labels (`chore`, `fix`, `feat`).

- CHANGELOG
  - Update the relevant `CHANGELOG.md` (package-level for design-system, top-level for repo-wide releases) with a short bullet describing user-facing changes.

- Tests & CI
  - Run linting and tests locally before pushing. CI must pass before merging.

- Merging
  - Prefer `Squash and merge` for small, single-feature PRs to keep history tidy.
  - Use `Create merge commit` if preserving branch history is useful.
  - After merge, delete the branch locally and remotely: `git branch -d branch-name` and `git push origin --delete branch-name`.

Thank you for contributing!
