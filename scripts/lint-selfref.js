#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Walk design-system/src/styles and flag any CSS var declarations that reference themselves
const root = path.resolve(__dirname, '..', 'design-system', 'src', 'styles');
// Match exact self-references like: --foo: var(--foo) or --foo: var(--foo, fallback)
const pattern = /--([a-z0-9-]+)\s*:\s*var\(--\1(?:\s*,|\s*\))/mi;
let failures = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.isFile() && p.endsWith('.css')) {
      const s = fs.readFileSync(p, 'utf8');
      const lines = s.split(/\r?\n/);
      lines.forEach((line, idx) => {
        if (pattern.test(line)) failures.push({ file: p, line: idx + 1, text: line.trim() });
      });
    }
  }
}

walk(root);
if (failures.length) {
  console.error('Self-referential CSS variable assignments found:');
  failures.forEach(f => console.error(`${f.file}:${f.line}  ${f.text}`));
  process.exitCode = 2;
} else {
  console.log('No self-referential CSS variable assignments detected.');
}
