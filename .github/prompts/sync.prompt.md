---
mode: agent
---


**Autonomy Directive:**
- If you have clear next steps and are at least 90% confident that user permission is not necessary, proceed without waiting for explicit approval. Only pause for confirmation if the action is destructive, ambiguous, or could result in data loss.

**AGENT INSTRUCTIONS: Follow these steps to sync the user's local changes with the remote main branch.**

Your task: Ensure all local changes are committed, merged, and up to date with the remote main branch, following the workflow below. Use imperative language and act autonomously.

**Before you begin:**
- Agent: Always investigate the nature of the change (project-wide/organizational vs. feature-specific) before proceeding. Choose the correct workflow accordingly.

---


### Standard Solo Developer Workflow


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
