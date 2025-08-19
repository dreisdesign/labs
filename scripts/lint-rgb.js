#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..', 'design-system', 'src', 'styles');
const exts = ['.css', '.scss', '.md'];
let found = [];

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const it of items) {
    const p = path.join(dir, it.name);
    if (it.isDirectory()) walk(p);
    else {
      if (!exts.includes(path.extname(it.name))) continue;
      const txt = fs.readFileSync(p, 'utf8');
      const re = /rgb\(/ig;
      if (re.test(txt)) found.push(p);
    }
  }
}

walk(root);
if (found.length) {
  console.error('\nFound rgb(...) usages in token/style files:');
  found.forEach(f => console.error(' -', f));
  process.exitCode = 2;
} else {
  console.log('No rgb(...) usages found in', root);
}
