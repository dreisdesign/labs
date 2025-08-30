import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

addons.setConfig({
  theme: create({
    base: 'auto',
    brandTitle: 'Labs Storybook',
    brandUrl: '/',
    brandImage: 'smoothie.svg', // Custom logo in public folder
  }),
});

// Listen for theme sync messages from the preview iframe and apply classes
function applyThemePayload(payload) {
  const root = document.documentElement;
  if (payload.theme) {
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(`theme-${payload.theme}`);
    // Also set data-color-scheme to help form controls and native UI
    root.setAttribute('data-color-scheme', payload.theme === 'dark' ? 'dark' : 'light');
  }
  if (payload.flavor) {
    root.classList.remove('flavor-blueberry', 'flavor-strawberry');
    root.classList.add(`flavor-${payload.flavor}`);
  }
}

window.addEventListener('message', (ev) => {
  try {
    const data = ev.data || {};
    if (data && data.type === 'STORYBOOK_SYNC_THEME') {
      applyThemePayload(data);
    }
    if (data && data.type === 'STORYBOOK_SET_TOOL_VISIBILITY' && data.tool === 'Theme') {
      try {
        const hide = Boolean(data.hide);
        // Find a toolbar button that looks like the theme toggle and hide/show it
        const buttons = Array.from(document.querySelectorAll('[role="toolbar"] button, [role="toolbar"] a'));
        const themeBtn = buttons.find(b => {
          const title = (b.getAttribute('title') || '').toLowerCase();
          const label = (b.getAttribute('aria-label') || '').toLowerCase();
          return title.includes('theme') || label.includes('theme');
        });
        if (themeBtn) themeBtn.style.display = hide ? 'none' : '';
      } catch (e) {
        // ignore
      }
    }

    if (data && data.type === 'STORYBOOK_CLEAR_THEME') {
      try {
        // Remove theme classes from the manager/document so any synced theme is cleared
        const root = document.documentElement;
        root.classList.remove('theme-light', 'theme-dark');
        // Also try to clear theme classes inside any preview iframe if accessible
        const iframes = Array.from(document.querySelectorAll('iframe'));
        iframes.forEach((f) => {
          try {
            const doc = f.contentDocument || f.contentWindow && f.contentWindow.document;
            if (doc && doc.documentElement) {
              doc.documentElement.classList.remove('theme-light', 'theme-dark');
            }
          } catch (e) {
            // cross-origin or not accessible - ignore
          }
        });
      } catch (e) {
        // ignore
      }
    }
  } catch (e) {
    // ignore malformed messages
  }
});

// Initialize manager theme from existing document classes if present
(() => {
  const root = document.documentElement;
  const isDark = root.classList.contains('theme-dark') || root.getAttribute('data-color-scheme') === 'dark';
  applyThemePayload({ theme: isDark ? 'dark' : 'light' });
})();

// Variant-aware runtime inliner: inline smoothie logos and swap between light/dark variants
// depending on manager theme (theme-light / theme-dark). This ensures the manager uses the
// proper prepared SVG for each theme without requiring a static rebuild.
(() => {
  const selector = 'img[src*="smoothie"]';
  const wrapperClass = 'smoothie-inline-wrapper';
  const managed = new Set();
  const variants = { light: null, dark: null };

  function firstUrlFromSrcset(srcset) {
    if (!srcset) return null;
    const first = srcset.split(',')[0].trim().split(/\s+/)[0];
    return first || null;
  }

  async function fetchText(url) {
    try {
      const hasQuery = url.includes('?');
      const fetchUrl = url + (hasQuery ? '&' : '?') + '_inline_ts=' + Date.now();
      const res = await fetch(fetchUrl, { cache: 'no-cache' });
      if (!res.ok) return null;
      return await res.text();
    } catch (e) {
      return null;
    }
  }

  function prepareSvgFromText(text) {
    if (!text) return null;
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'image/svg+xml');
    const svg = doc.querySelector('svg');
    if (!svg) return null;

    // Rewrite explicit fill attributes to currentColor, skip url(...) and 'none'
    const walkers = svg.querySelectorAll('[fill]');
    walkers.forEach((el) => {
      const v = el.getAttribute('fill') || '';
      if (!v) return;
      const low = v.trim().toLowerCase();
      if (low === 'none') return;
      if (low.startsWith('url(')) return;
      el.setAttribute('fill', 'currentColor');
    });

    // Ensure .content rule exists and takes precedence
    const rule = '.content{fill:currentColor}';
    const existingStyle = svg.querySelector('style');
    if (existingStyle) {
      if (!existingStyle.textContent.includes(rule)) {
        existingStyle.textContent = rule + '\n' + existingStyle.textContent;
      }
    } else {
      const s = doc.createElement('style');
      s.textContent = rule;
      svg.insertBefore(s, svg.firstChild);
    }

    // Ensure display block for predictable layout
    if (!svg.getAttribute('style')) svg.setAttribute('style', 'display:block');

    // Make the svg responsive so it scales to its container
    try {
      svg.setAttribute('width', '100%');
      svg.setAttribute('height', '100%');
      if (!svg.getAttribute('preserveAspectRatio')) svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
    } catch (e) {
      // ignore if svg is read-only
    }

    // set role for accessibility
    svg.setAttribute('role', 'img');
    return svg;
  }

  async function ensureVariants(basePath) {
    // try common filenames at basePath
    if (variants.light && variants.dark) return;
    const tryLight = basePath + 'smoothie-light.svg';
    const tryDark = basePath + 'smoothie-dark.svg';

    const [tLight, tDark] = await Promise.all([fetchText(tryLight), fetchText(tryDark)]);
    if (tLight) variants.light = prepareSvgFromText(tLight);
    if (tDark) variants.dark = prepareSvgFromText(tDark);
  }

  function chooseVariantKey() {
    return document.documentElement.classList.contains('theme-dark') ? 'dark' : 'light';
  }

  function cloneSvg(svg) {
    return svg ? svg.cloneNode(true) : null;
  }

  function applyAltToSvg(svg, alt) {
    if (!svg) return;
    if (alt) svg.setAttribute('aria-label', alt);
    return svg;
  }

  async function inlineImg(img) {
    try {
      // avoid double-managing
      if (img.dataset && img.dataset.smoothieManaged) return;

      let src = img.getAttribute('src') || '';
      if (!src) {
        const srcset = img.getAttribute('srcset');
        src = firstUrlFromSrcset(srcset) || '';
      }
      if (!src) return;

      // derive base path (keep trailing slash)
      const idx = src.lastIndexOf('/');
      const base = idx >= 0 ? src.slice(0, idx + 1) : '/';
      await ensureVariants(base);

      // choose which variant to render
      const key = chooseVariantKey();
      let svg = variants[key] ? cloneSvg(variants[key]) : null;

      // fallback: if we didn't get variants, fetch the original src and prepare it
      if (!svg) {
        const text = await fetchText(src);
        const prepared = prepareSvgFromText(text);
        svg = prepared ? cloneSvg(prepared) : null;
      }

      // create wrapper and copy non-src attributes for semantics
      const wrapper = document.createElement('span');
      wrapper.className = wrapperClass;
      wrapper.dataset.smoothieManaged = '1';
      // ensure wrapper uses inline-block so svg width:100% scales to it
      if (!wrapper.style.display) wrapper.style.display = 'inline-block';
      // keep vertical alignment similar to images
      if (!wrapper.style.verticalAlign) wrapper.style.verticalAlign = 'middle';

      // copy alt/title into aria on svg for accessibility
      const alt = img.getAttribute('alt') || img.getAttribute('aria-label') || img.getAttribute('title') || '';

      if (svg) applyAltToSvg(svg, alt);

      // copy size/style-related attributes to the wrapper (so layout is preserved)
      Array.from(img.attributes).forEach((a) => {
        if (a.name === 'src' || a.name === 'srcset') return;
        // copy width/height/style/class/aria-* into the wrapper so layout and semantics match
        wrapper.setAttribute(a.name, a.value);
      });

      if (svg) wrapper.appendChild(svg);
      img.replaceWith(wrapper);
      managed.add(wrapper);
    } catch (e) {
      // ignore
    }
  }

  function scanAndInline(root = document) {
    const imgs = Array.from(root.querySelectorAll(selector));
    imgs.forEach(img => inlineImg(img));
  }

  function updateAllForTheme() {
    const key = chooseVariantKey();
    managed.forEach((wrapper) => {
      try {
        // pick variant; fallback to prepared original if variants missing
        let next = variants[key] ? cloneSvg(variants[key]) : null;
        if (!next) {
          // try to reuse existing child if available
          const existing = wrapper.querySelector('svg');
          if (existing) return; // nothing to do
        }

        // copy aria/alt from wrapper into svg
        const alt = wrapper.getAttribute('alt') || wrapper.getAttribute('aria-label') || wrapper.getAttribute('title') || '';
        // remove old svg children
        const old = wrapper.querySelector('svg');
        if (old) old.remove();
        if (next) {
          applyAltToSvg(next, alt);
          wrapper.appendChild(next);
        }
      } catch (e) {
        // ignore per-node errors
      }
    });
  }

  // initial pass
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => scanAndInline(document));
  } else {
    scanAndInline(document);
  }

  // watch for late-insertions
  const mo = new MutationObserver((list) => {
    for (const m of list) {
      if (m.addedNodes && m.addedNodes.length) {
        m.addedNodes.forEach(n => {
          if (n.nodeType === 1) scanAndInline(n);
        });
      }
    }
  });
  mo.observe(document.documentElement || document.body, { childList: true, subtree: true });

  // watch for theme class changes on the documentElement and swap variants
  const attrObserver = new MutationObserver((list) => {
    for (const m of list) {
      if (m.type === 'attributes' && m.attributeName === 'class') {
        updateAllForTheme();
        break;
      }
    }
  });
  attrObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
})();

// smoothie inliner: runtime inliner ensures logos are inlined and swapped between
// light/dark variants when the manager theme changes.
