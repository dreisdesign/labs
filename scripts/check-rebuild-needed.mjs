#!/usr/bin/env node
// Simple heuristic: compare mtimes of src/ and docs/design-system to decide if rebuild needed
import fs from 'fs';
import path from 'path';

const repoRoot = path.resolve(new URL(import.meta.url).pathname, '..', '..');
const srcDir = path.join(repoRoot, 'design-system', 'src');
const docsAssets = path.join(repoRoot, 'docs', 'design-system');

function latestMtime(dir) {
    let latest = 0;
    const stack = [dir];
    while (stack.length) {
        const p = stack.pop();
        try {
            const stat = fs.statSync(p);
            if (stat.isFile()) {
                latest = Math.max(latest, stat.mtimeMs);
            } else if (stat.isDirectory()) {
                const children = fs.readdirSync(p).map(c => path.join(p, c));
                for (const c of children) stack.push(c);
            }
        } catch (e) { }
    }
    return latest;
}

const srcM = latestMtime(srcDir);
const docsM = latestMtime(docsAssets);

if (!srcM || !docsM) {
    console.log('Could not determine mtimes reliably; skipping check.');
    process.exit(0);
}

if (srcM > docsM + 1000) {
    console.log('Rebuild recommended: source is newer than docs built assets.');
    process.exit(1);
} else {
    console.log('No rebuild needed based on mtimes.');
    process.exit(0);
}
