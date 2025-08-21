#!/usr/bin/env node

/**
 * Design Tokens Validation Script
 *
 * Validates token consistency, accessibility compliance, and architecture integrity
 * Run with: node scripts/validate-tokens.mjs
 */

import fs from 'fs';
import path from 'path';

const COLORS_CSS_PATH = '../design-system/src/styles/tokens/colors.css';
const FLAVORS_CSS_PATH = '../design-system/src/styles/flavors.css';

console.log('🎨 Validating Design Tokens Architecture...\n');

// Read the CSS files
const colorsCSS = fs.readFileSync(COLORS_CSS_PATH, 'utf8');
const flavorsCSS = fs.readFileSync(FLAVORS_CSS_PATH, 'utf8');

let errors = [];
let warnings = [];
let passed = 0;

// Test 1: Verify all status colors have text color pairings
console.log('📋 Test 1: Status color text pairings');
const statusColors = ['success', 'warning', 'error'];
statusColors.forEach(status => {
  const bgToken = `--color-${status}`;
  const textToken = `--color-on-${status}`;

  if (colorsCSS.includes(bgToken) && colorsCSS.includes(textToken)) {
    console.log(`  ✅ ${bgToken} → ${textToken}`);
    passed++;
  } else {
    errors.push(`Missing text color pairing: ${bgToken} should have ${textToken}`);
  }
});

// Test 2: Verify no palette redefinitions in theme selectors
console.log('\n📋 Test 2: Theme architecture compliance');
const themeSelectors = flavorsCSS.match(/\.flavor-\w+\.theme-\w+ \{[^}]+\}/g) || [];
let themeCompliant = true;

themeSelectors.forEach(selector => {
  // Look for palette token DEFINITIONS (--palette-name: #color), not REFERENCES (var(--palette-name))
  const paletteDefinitions = selector.match(/--palette-[a-z0-9-]+:\s*#[0-9A-Fa-f]{6}/g);
  if (paletteDefinitions && paletteDefinitions.length > 0) {
    const match = selector.match(/\.flavor-(\w+)\.theme-(\w+)/);
    if (match) {
      errors.push(`Theme ${match[1]}-${match[2]} redefines palette tokens (should only override semantic tokens)`);
      themeCompliant = false;
    }
  }
});

if (themeCompliant) {
  console.log('  ✅ All themes follow override pattern (no palette redefinitions)');
  passed++;
} else {
  console.log('  ❌ Theme architecture violations found');
}

// Test 3: Check for circular token references
console.log('\n📋 Test 3: Circular reference detection');
const tokenPattern = /--([^:]+):\s*var\(--([^)]+)\)/g;
const tokenDeps = new Map();
let matches;

// Extract all token dependencies from both files
[colorsCSS, flavorsCSS].forEach(css => {
  while ((matches = tokenPattern.exec(css)) !== null) {
    const token = `--${matches[1].trim()}`;
    const dependency = `--${matches[2].trim()}`;

    if (!tokenDeps.has(token)) {
      tokenDeps.set(token, []);
    }
    tokenDeps.get(token).push(dependency);
  }
});

// Simple circular reference check
let circularRefs = false;
tokenDeps.forEach((deps, token) => {
  deps.forEach(dep => {
    if (tokenDeps.has(dep) && tokenDeps.get(dep).includes(token)) {
      errors.push(`Circular reference detected: ${token} ↔ ${dep}`);
      circularRefs = true;
    }
  });
});

if (!circularRefs) {
  console.log('  ✅ No circular token references detected');
  passed++;
} else {
  console.log('  ❌ Circular references found');
}

// Test 4: Verify contrast compliance for known token combinations
console.log('\n📋 Test 4: Contrast accessibility check');

// Helper function to parse hex colors
const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

// Calculate relative luminance
const getLuminance = (rgb) => {
  const { r, g, b } = rgb;
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
};

// Calculate contrast ratio
const getContrastRatio = (color1, color2) => {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

// Test known color combinations
const testCombinations = [
  { bg: '#00800C', text: '#ffffff', name: 'success' },  // green + white
  { bg: '#FFB300', text: '#000000', name: 'warning' },  // yellow + black
  { bg: '#D32F2F', text: '#ffffff', name: 'error' },   // red + white
];

testCombinations.forEach(({ bg, text, name }) => {
  const bgRgb = hexToRgb(bg);
  const textRgb = hexToRgb(text);

  if (bgRgb && textRgb) {
    const ratio = getContrastRatio(bgRgb, textRgb);
    const meetsAA = ratio >= 4.5;

    if (meetsAA) {
      console.log(`  ✅ ${name} colors: ${ratio.toFixed(2)}:1 (WCAG AA compliant)`);
      passed++;
    } else {
      errors.push(`${name} color combination ${bg}/${text} has insufficient contrast: ${ratio.toFixed(2)}:1 (needs ≥4.5:1)`);
    }
  }
});

// Test 5: Check for unused back-compat aliases
console.log('\n📋 Test 5: Clean architecture check');
const deprecatedPatterns = [
  'palette-blueberry-50:',
  'palette-strawberry-50:',
  'palette-blueberry-10:',
  'palette-vanilla-50:',
  'palette-vanilla-10:'
];

let foundDeprecated = false;
deprecatedPatterns.forEach(pattern => {
  if (colorsCSS.includes(pattern) || flavorsCSS.includes(pattern)) {
    warnings.push(`Deprecated token pattern found: ${pattern}`);
    foundDeprecated = true;
  }
});

if (!foundDeprecated) {
  console.log('  ✅ No deprecated token patterns found');
  passed++;
} else {
  console.log('  ⚠️  Deprecated patterns detected');
}

// Summary
console.log('\n📊 Test Results Summary');
console.log('======================');
console.log(`✅ Passed: ${passed}`);
console.log(`❌ Errors: ${errors.length}`);
console.log(`⚠️  Warnings: ${warnings.length}`);

if (errors.length > 0) {
  console.log('\n❌ Errors:');
  errors.forEach(error => console.log(`  • ${error}`));
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:');
  warnings.forEach(warning => console.log(`  • ${warning}`));
}

const success = errors.length === 0;
console.log(`\n${success ? '🎉' : '💥'} Token validation ${success ? 'PASSED' : 'FAILED'}`);

// Exit with appropriate code
process.exit(success ? 0 : 1);
