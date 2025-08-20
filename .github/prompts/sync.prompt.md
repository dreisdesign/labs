---
mode: agent
---
Define the task to achieve, including specific requirements, constraints, and success criteria.

Please help sync my local changes with the remote main branch and ensure everything is committed, merged, and up to date.

---

### Standard Solo Developer Workflow

1. **Start on a new branch:**
   Create a feature or fix branch from `main` (e.g., `git checkout -b feature/my-update`).

2. **Make and commit changes:**
   Work on your changes, staging and committing as you go.

3. **Push your branch:**
   Push the branch to the remote repo (`git push -u origin feature/my-update`).

4. **Create a PR:**
   Open a pull request from your feature branch to `main` on GitHub.
   - Even solo, this gives you a chance to review the diff, run CI, and see Copilot or other bot suggestions before merging.

5. **Review and merge:**
   Review the PR (optionally address any suggestions), then merge it into `main` using the GitHub UI.

6. **Sync your local main:**
   After merging, check out `main` locally and pull the latest changes:
   ```sh
   git checkout main
   git pull origin main
   ```

7. **Delete the feature branch:**
   Optionally delete the feature branch locally and remotely to keep things tidy.

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
