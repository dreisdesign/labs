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

1. **Add new tasks to TODO.md as you work.**
   - Always keep the global `TODO.md` at the root of the repository as the canonical project-wide checklist.
   - For area-specific or feature-specific work (e.g., colors/theming), maintain focused TODO files (such as `COLORS-DOCS--TODO.md`) and reference them from the global TODO as needed.
   - Never rename the TODO file for each branch; keep a single canonical file for continuity.

2. **When a task is complete:**
   - Update the changelog (`CHANGELOG.md`) to reflect all significant changes.
   - Begin the sync/PR process (see below).

3. **After PR review/merge:**
   - Update `TODO.md` to remove completed or obsolete items and add any new actionable tasks from the review.
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

7. **Delete the feature branch:**
   Agent: Optionally delete the feature branch locally and remotely to keep things tidy.

---

**Why do this as a solo dev?**
- Keeps your main branch clean and always deployable.
- Lets you review your own work before merging.
- Preserves a clear, atomic history for future reference.
- Enables automated checks and suggestions (like Copilot’s).
- Makes it easy to roll back or audit changes.

---

**Shortcut for quick changes:**
If you’re making a tiny fix and don’t need review/history, you can commit directly to `main`. But for anything non-trivial, the PR workflow is best practice—even solo.

---
