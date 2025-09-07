---
mode: agent
---



**Autonomy Directive:**
- If you have clear next steps and are at least 90% confident that user permission is not necessary, proceed without waiting for explicit approval. Only pause for confirmation if the action is destructive, ambiguous, or could result in data loss.
- If you do not have direct access to post comments, reviews, or merge pull requests on GitHub, always provide the user with the exact GitHub CLI (`gh`) command(s) they should run to perform the action (e.g., posting a review, merging a PR, or deleting a branch). Make the command copy-paste ready and include any summary or review text as needed.
### GitHub CLI Guidance

If you cannot perform an action directly on GitHub (such as posting a PR comment, review, or merging a PR), always provide the user with the exact `gh` CLI command to accomplish the task. For example:

- To post a review comment:
   ```sh
   gh pr comment <PR_NUMBER> --body "<your comment here>"
   ```
- To approve and merge a PR:
   ```sh
   gh pr merge <PR_NUMBER> --merge
   ```
- To delete a remote branch:
   ```sh
   git push origin --delete <branch-name>
   ```

Always include the full, ready-to-copy command and any review/summary text needed. If the user needs to find the PR number, instruct them how to do so with `gh pr list` or by checking the GitHub UI.


**AGENT INSTRUCTIONS: Follow these steps to sync the user's local changes with the remote main branch.**

Your task: Ensure all local changes are committed, merged, and up to date with the remote main branch, following the workflow below. Use imperative language and act autonomously.

**Before you begin:**
- Agent: Always investigate the nature of the change (project-wide/organizational vs. feature-specific) before proceeding. Choose the correct workflow accordingly.

---



### Project Task & Sync Workflow

1. **Add new tasks to todo-index.md as you work.**
   - Before syncing or merging, search for and review all `TODO.md` files in the workspace, including area-specific files like `COLORS-DOCS--TODO.md`.
   - Summarize outstanding tasks, remove completed items, and add new actionable items as needed.
   - Reference area-specific TODOs from the global `todo-index.md` and ensure all checklists are up to date.
   - Always keep the global `todo-index.md` at the root of the repository as the canonical project-wide checklist.
   - For area-specific or feature-specific work (e.g., colors/theming), maintain focused TODO files (such as `COLORS-DOCS--TODO.md`) and reference them from the global todo-index as needed.
   - Never rename the TODO file for each branch; keep a single canonical file for continuity.

2. **When a task is complete:**
   - Update the changelog (`CHANGELOG.md`) to reflect all significant changes.
   - Begin the sync/PR process (see below).

3. **After PR review/merge:**
   - Update `todo-index.md` to remove completed or obsolete items and add any new actionable tasks from the review.
   - Provide summaries, cleanups, or periodic reviews of outstanding tasks as needed.

4. **Repeat.**

---

### Standard Solo Developer Sync Workflow


**Before making any changes directly to main:**
- Agent: Always check the current branch.
- If not on `main`, switch to `main` and pull the latest changes before making project-wide or organizational updates.

**For feature-specific work:**
- Agent: Create and work on a feature branch from `main`.
- Only merge feature branches into `main` via PR.


1. **Start on a new branch:**
   Agent: Create a feature or fix branch from `main` (e.g., `git checkout -b feature/my-update`).

2. **Make and commit changes:**
   Agent: Work on the changes, staging and committing as you go.
   - Before opening a PR or merging, ensure that `CHANGELOG.md` is updated to reflect all significant changes in this sync cycle. If not, update it and commit the change.

3. **Push your branch:**
   Agent: Push the branch to the remote repo (`git push -u origin feature/my-update`).

4. **Create a PR:**
   Agent: Open a pull request from the feature branch to `main` on GitHub.
   - Even solo, this gives you a chance to review the diff, run CI, and see Copilot or other bot suggestions before merging.

5. **Review and merge:**
   Agent: Review the PR (optionally address any suggestions), then merge it into `main` using the GitHub UI.

6. **Sync your local main:**
   Agent: After merging, check out `main` locally and pull the latest changes:
   ```sh
   git checkout main
   git pull origin main
   ```

   Agent: Optionally delete the feature branch locally and remotely to keep things tidy.

---
**Why do this as a solo dev?**
- Keeps your main branch clean and always deployable.
- Lets you review your own work before merging.
- Enables automated checks and suggestions (like Copilot’s).
- Makes it easy to roll back or audit changes.

---

**Shortcut for quick changes:**
If you’re making a tiny fix and don’t need review/history, you can commit directly to `main`. But for anything non-trivial, the PR workflow is best practice—even solo.

---

### Autonomous `/sync` behavior

- When the agent receives the explicit `/sync` command, act autonomously to perform the full sync workflow below unless a blocking problem is detected.
- Choose the single recommended action and execute it — do not present multiple alternative next steps to the user. Only pause to ask the user if a destructive action is required (force-push, hard reset, irreversible branch deletion) or if a permission error prevents completion.

Autonomous `/sync` workflow (one-shot):
1. Confirm the working tree is clean. If not, stash or abort and inform the user with exact commands to resolve.
   - Command: `git status --porcelain` (if non-empty, run `git stash --include-untracked` or prompt user).
2. Ensure `main` is up to date:
   - Command: `git checkout main && git pull origin main`.
3. Create a feature branch from `main` with a deterministic name (unless user provided one):
   - Example: `git checkout -b chore/sync-$(date +%F)`.
4. Run repository checks (lint, tests, builds where applicable). If any checks fail, report failures and stop.
   - Example: `npm run lint && npm test && npm run build-storybook` (adjust per project).
5. Update `CHANGELOG.md` and `todo-index.md` as needed; include those edits in the commit.
6. Commit staged changes with a descriptive message and push the branch:
   - `git add -A && git commit -m "chore(sync): <short description>" && git push -u origin <branch>`
7. Open a PR with a clear body and testing instructions using `gh pr create`; add labels and request reviewers if configured.
8. After CI succeeds and repo policy allows automatic merging, merge the PR using the chosen strategy (squash by default) and delete the remote branch:
   - `gh pr merge <PR_NUMBER> --squash --delete-branch`
9. Sync local `main` and prune remotes:
   - `git checkout main && git pull origin main && git fetch --prune`
10. Report a concise summary: branch name, PR URL, merge status, and any next recommended actions (deploy, build, or manual checks).

Safety and permission rules:
- If the agent lacks permission for any GitHub action, provide the exact `gh`/`git` commands the user should run and explain why the agent couldn't run them.
- For destructive actions (force-push, hard reset, branch deletion), require explicit user confirmation.
- If tests or builds fail, include the failing output and stop; do not open or merge a PR.

Progress reporting rules:
- After each major step (branch create, commit, push, PR create, merge), post a short progress update showing the command run, success/failure, and the next step.

---
