Legacy Documents — guidance and best practices

This folder contains legacy documentation and archived artifacts kept for historical/reference purposes. Treat this area as read-only reference: prefer to keep active content under `src/` and `docs/`.

Goals
- Make it easy to find and restore old artifacts when needed.
- Keep legacy files out of the build/test graph (so Storybook/Vite won't parse them).
- Keep repository history clean and avoid committing large, generated build files.

Best practices

1) Keep a single canonical archive location
- Use the repo `_archive/` for large, zipped archives of historical artifacts (you already use `_archive/built-YYYY-MM-DD/`).
- Keep small "legacy" docs in `older/` or `_dev/_documents/` for quick reference, but mark them read-only and documented.

2) Don't keep large generated builds or binaries in git
- Zip and move large builds to `_archive/` and keep the zip out of git (add to `.gitignore` if needed).
- Keep a short index (filename, date, checksum, summary) next to each archive for quick lookup.

3) Make archives discoverable
- Add a lightweight README (this file) with content summary and a short index of important archives.
- Optionally maintain a `archives.json` or `archives-index.md` with entries like:
  - name, path, created, size, sha256 checksum, short description, how-to-restore

4) Avoid source-scannable legacy paths
- Don't leave legacy files under `design-system/src/` (or any `src/`) because build tools (Vite/Storybook) will scan them and may attempt to import/transform them.
- If you must keep historical source, put it under `_archive/` or `older/` (outside `src/`) and optionally add a top-level marker (e.g., `_archived_source/`).

5) Add a short restore & verification workflow
- How to restore:
  - unzip to a temporary location
  - verify checksums
  - review and, if needed, re-add only the necessary files into `src/` (prefer new PR/branch)

6) Provide quick search & indexing tips
- Use ripgrep (`rg`) for fast text search across archives (or unzip to temp and search if compressed). Example:

```bash
# search for 'footer-with-settings' inside older/ (uncompressed files)
rg "footer-with-settings" older/ -n

# Quick index: list zip contents
unzip -l _archive/built-2025-10-03/your-archive.zip | head -n 40
```

- If you maintain many archives, consider generating a `archives-index.json` with an excerpt of file lists to make searching faster.

7) Automate basic housekeeping
- Add a small script (`scripts/archive-status.sh`) that prints archive sizes and last-modified times so you can decide what to remove or offload to external storage.
- Keep a retention policy: e.g., move archives older than N months to cold storage (S3 Glacier or external drive).

8) Document contact & risk
- Add a short note who to contact before deleting anything from `_archive/` (team or owner). Mark high-risk archives with `KEEP` or `DO NOT DELETE` in the filename or README.

Example quick commands

```bash
# create a timestamped zip of the built archive and checksum it
zip -r _archive/built-$(date +%F).zip design-system/storybook-static/ docs/design-system/assets/
shasum -a 256 _archive/built-$(date +%F).zip > _archive/built-$(date +%F).zip.sha256

# restore an archive to a temporary location
mkdir -p /tmp/labs-restore && unzip _archive/built-2025-10-03/index.zip -d /tmp/labs-restore
```

Next actions (suggested)
- Add a small `archives-index.md` at `_archive/archives-index.md` summarizing major archives and checksums.
- Add a tiny `scripts/` helper to list/remove/archive older files.

If you'd like, I can:
- Create an `archives-index.md` in `_archive/` summarizing the `built-2025-10-03` archive contents (fast, read-only list).
- Add a small `scripts/archive-status.sh` that prints last-modified, size, and checksum for archives.

Tell me which of those you want me to create and I'll add them.
