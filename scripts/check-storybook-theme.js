#!/usr/bin/env node
const puppeteer = require('puppeteer');

const url = process.argv[2] || 'http://localhost:6006/iframe.html?id=tokens-colors--colors';

async function run() {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(30000);
  await page.goto(url, { waitUntil: 'networkidle2' });
  // wait longer for Storybook preview scripts and decorators to run
  await new Promise(r => setTimeout(r, 2000));

  const initial = await page.evaluate(() => {
    const classes = document.documentElement.className;
    const vars = {};
    const keys = ['--color-primary', '--color-background', '--color-surface', '--color-on-primary'];
    keys.forEach(k => { try { vars[k] = getComputedStyle(document.documentElement).getPropertyValue(k).trim() } catch (e) { vars[k] = null } });
    return { classes, vars };
  });

  // Ensure an applyTheme helper exists in the page (inject if missing)
  await page.evaluate(() => {
    if (!window.applyTheme || typeof window.applyTheme !== 'function') {
      window.applyTheme = function ({ flavor = 'blueberry', theme = 'light' } = {}) {
        const root = document.documentElement;
        // best-effort removal list (keep in sync with flavors.css)
        ['blueberry', 'strawberry'].forEach(f => root.classList.remove(`flavor-${f}`));
        root.classList.add(`flavor-${flavor}`);
        root.classList.remove('theme-light', 'theme-dark');
        root.classList.add(`theme-${theme}`);
        try { root.setAttribute('data-color-scheme', theme); } catch (e) { }
      };
    }
  });

  // detect whether the story content forces a flavor locally (e.g., data-only-flavor or tokens-doc-root with flavor class)
  const storyForces = await page.evaluate(() => {
    const el = document.querySelector('.tokens-doc-root') || document.body;
    const dataOnly = el && el.getAttribute && el.getAttribute('data-only-flavor');
    if (dataOnly) return { present: true, flavor: dataOnly };
    // check for flavor- classes on local containers
    const local = el && el.className && /(flavor-\w+)/.exec(el.className);
    if (local) return { present: true, flavor: local[1].replace('flavor-', '') };
    return { present: false };
  });

  // Call the page's applyTheme to toggle flavor/theme
  const after = await page.evaluate(async () => {
    const result = { calledApplyTheme: false };
    try {
      if (window.applyTheme && typeof window.applyTheme === 'function') {
        window.applyTheme({ flavor: 'strawberry', theme: 'dark' });
        result.calledApplyTheme = true;
      } else {
        result.error = 'no applyTheme available';
      }
    } catch (e) {
      result.error = String(e);
    }
    // wait a tiny bit for CSS to update
    await new Promise(r => setTimeout(r, 250));
    result.classes = document.documentElement.className;
    result.vars = {};
    const keys = ['--color-primary', '--color-background', '--color-surface', '--color-on-primary'];
    keys.forEach(k => { try { result.vars[k] = getComputedStyle(document.documentElement).getPropertyValue(k).trim() } catch (e) { result.vars[k] = null } });
    return result;
  });

  after.storyForces = storyForces;

  console.log(JSON.stringify({ url, initial, after }, null, 2));
  await browser.close();
}

run().catch(e => { console.error(e); process.exit(2); });
