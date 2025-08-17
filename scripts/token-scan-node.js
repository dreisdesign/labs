#!/usr/bin/env node
/*
  Node-based token scanner: scans design-system/src for used CSS variables (var(--name))
  and declared variables (--name:) and writes reports to tmp-token-scan and tmp-token-report.
  Usage: node scripts/token-scan-node.js
*/
const fs = require('fs');
const path = require('path');

const workspace = path.resolve(__dirname, '..');
const srcDir = path.join(workspace, 'design-system', 'src');
const outDir = path.join(workspace, 'tmp-token-scan');
const reportDir = path.join(workspace, 'tmp-token-report');

function ensureDir(d) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

ensureDir(outDir);
ensureDir(reportDir);

const exts = new Set(['.js', '.ts', '.css', '.html', '.md', '.json']);

function walk(dir, cb) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const full = path.join(dir, it.name);
    if (it.isDirectory()) walk(full, cb);
    else cb(full);
  }
}

const used = new Map(); // token -> Set(files:line)
const declared = new Map();

const varUsageRe = /var\(--([a-zA-Z0-9_-]+)/g;
const declRe = /(^|[^\w-])--([a-zA-Z0-9_-]+)\s*:/g;

function addMap(map, key, file, line) {
  if (!map.has(key)) map.set(key, new Set());
  map.get(key).add(`${file}:${line}`);
}

if (!fs.existsSync(srcDir)) {
  console.error('source dir not found:', srcDir);
  process.exit(1);
}

walk(srcDir, (file) => {
  if (!exts.has(path.extname(file))) return;
  const content = fs.readFileSync(file, 'utf8');
  const lines = content.split(/\r?\n/);
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    let m;
    varUsageRe.lastIndex = 0;
    while ((m = varUsageRe.exec(line))) {
      const token = m[1];
      addMap(used, token, path.relative(workspace, file), i + 1);
    }
    declRe.lastIndex = 0;
    while ((m = declRe.exec(line))) {
      const token = m[2];
      addMap(declared, token, path.relative(workspace, file), i + 1);
    }
  }
});

// Write used and declared lists
const usedList = Array.from(used.keys()).sort();
const declaredList = Array.from(declared.keys()).sort();
fs.writeFileSync(path.join(outDir, 'used_tokens.txt'), usedList.map(t => '--' + t).join('\n'));
fs.writeFileSync(path.join(outDir, 'declared_tokens.txt'), declaredList.map(t => '--' + t).join('\n'));

// missing = used - declared
const missing = usedList.filter(t => !declared.has(t));
fs.writeFileSync(path.join(outDir, 'missing_tokens.txt'), missing.map(t => '--' + t).join('\n'));

console.log('Scan complete. Results in', outDir);
console.log('Used tokens:', usedList.length);
console.log('Declared tokens:', declaredList.length);
console.log('Missing tokens (used but not declared):', missing.length);

// produce per-token reports (up to N usages)
for (const token of usedList) {
  const fpath = path.join(reportDir, token + '.txt');
  const lines = [];
  lines.push('TOKEN: --' + token);
  lines.push('');
  if (declared.has(token)) {
    lines.push('Declared in:');
    for (const d of declared.get(token)) lines.push('  ' + d);
  } else {
    lines.push('Not declared in source.');
  }
  lines.push('');
  lines.push('Usages:');
  for (const u of used.get(token)) lines.push('  ' + u);
  fs.writeFileSync(fpath, lines.join('\n'));
}

// print small sample of missing tokens
if (missing.length) {
  console.log('\nMissing tokens (sample):');
  missing.slice(0, 200).forEach(t => console.log('--' + t));
}

process.exit(0);
