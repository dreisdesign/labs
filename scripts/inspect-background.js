#!/usr/bin/env node
const puppeteer = require('puppeteer');
const url = process.argv[2] || 'http://localhost:6006/iframe.html?path=/story/components-button--default';

(async function () {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 500));
  const result = await page.evaluate(() => {
    const out = {};
    out.url = location.href;
    out.rootClasses = document.documentElement.className;
    const keys = ['--color-primary', '--color-background', '--color-surface', '--color-on-primary'];
    out.vars = {};
    keys.forEach(k => { try { out.vars[k] = getComputedStyle(document.documentElement).getPropertyValue(k).trim() } catch (e) { out.vars[k] = null } });

    function isTransparent(color) {
      if (!color) return true;
      return color === 'rgba(0, 0, 0, 0)' || color === 'transparent' || color === 'rgba(0,0,0,0)';
    }

    const elems = Array.from(document.querySelectorAll('body, body *'));
    const hits = [];
    for (let el of elems) {
      const cs = getComputedStyle(el);
      const bg = cs.backgroundColor || cs.background;
      if (!isTransparent(bg)) {
        const inlineBg = (el.style && el.style.background) ? el.style.background : null;
        const usesVarInline = inlineBg && inlineBg.indexOf('var(--color-background)') !== -1;
        // compare computed bg to var value
        const varVal = out.vars['--color-background'];
        const matchesVar = varVal && (bg === varVal || bg.indexOf(varVal) !== -1);
        hits.push({ tag: el.tagName, id: el.id || null, class: el.className || null, inlineBg, computedBg: bg, usesVarInline, matchesVar });
        if (hits.length >= 6) break;
      }
    }
    out.hits = hits;
    return out;
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})();
