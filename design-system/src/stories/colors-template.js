// Clean renderer for Colors stories
export function renderColors(opts = {}) {
  const only = opts && opts.onlyFlavor ? String(opts.onlyFlavor) : '';


  // Map palette tokens to their semantic role for dynamic bold labels
  const paletteRoleLabels = {
    'global': {
      '--palette-base-100': 'Surface',
      '--palette-base-500': 'Outline',
      '--palette-base-800': 'Text',
      '--palette-green-500': 'Success',
      '--palette-yellow-500': 'Warning',
      '--palette-red-500': 'Error'
    },
    'vanilla': {
      '--palette-vanilla-100': 'Background',
      '--palette-vanilla-500': 'Primary',
      '--palette-vanilla-800': 'Primary Darker'
    },
    'blueberry': {
      '--palette-blueberry-200': 'Background',
      '--palette-blueberry-500': 'Primary',
      '--palette-blueberry-800': 'Primary Darker'
    },
    'strawberry': {
      '--palette-strawberry-200': 'Background',
      '--palette-strawberry-500': 'Primary',
      '--palette-strawberry-800': 'Primary Darker'
    }
  };

  const polaroid = (flavor, label, varName, baseVar) => {
    // Add dynamic bold label for palette tokens on separate line
    let extraLabel = '';
    if (paletteRoleLabels[flavor] && paletteRoleLabels[flavor][varName]) {
      extraLabel = `<br><span style="font-weight:bold;font-size:13px;opacity:0.8;">${paletteRoleLabels[flavor][varName]}</span>`;
    }
    return `
    <div class="polaroid-card${varName === '--color-primary' ? ' polaroid-primary' : ''}" data-var="${varName}" role="button" tabindex="0" title="Copy ${varName}">
      <div class="card-swatch" style="background:var(${varName});">
        <div class="swatch-text">${(() => {
        const short = String(varName).replace(/^--/, '');
        const m = short.match(/^palette-([^-]+)-(\d+)$/);
        if (m) return m[1].charAt(0).toUpperCase() + m[1].slice(1) + ' ' + m[2];
        const m2 = short.match(/^palette-([^-]+)-([a-zA-Z]+)$/);
        if (m2) return m2[1].charAt(0).toUpperCase() + m2[1].slice(1) + ' ' + m2[2];
        const c = short.replace(/^color-/, '').split('-').map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1) }).join(' ');
        return c || short;
      })()}${extraLabel}</div>
      </div>
      <div class="card-token-label"><code>${varName}</code></div>
      ${baseVar ? `<div class="card-base-label"><code>${baseVar}</code></div>` : ''}
    </div>
    `;
  };

  const hideIfNot = (f) => (only && only !== f) ? 'style="display:none;"' : '';
  // Curated token sets per flavor
  const tokenSets = {
    global: {
      label: 'Global',
      // surface and on-surface are semantic tokens mapped to base palette stops in the global context; background is a theme-level responsibility and removed from global
      tokens: ['--color-surface', '--color-surface-alt', '--color-success', '--color-warning', '--color-error'],
      palette: [
        '--palette-base-100',
        '--palette-base-500',
        '--palette-base-800'
      ],
      statusPalette: [
        '--palette-green-500',
        '--palette-yellow-500',
        '--palette-red-500'
      ]
    },
    blueberry: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-blueberry-100', '--palette-blueberry-200', '--palette-blueberry-500', '--palette-blueberry-800'],
      accents: []
    },
    strawberry: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-strawberry-100', '--palette-strawberry-200', '--palette-strawberry-500', '--palette-strawberry-800'],
      accents: []
    },
    vanilla: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-vanilla-100', '--palette-vanilla-200', '--palette-vanilla-500', '--palette-vanilla-800'],
      accents: []
    }
  };

  // contrastPolaroid removed — individual polaroids now show contrast and label

  // sample button removed; keep UI focused on tokens and palette

  // Only pass correct flavor key for polaroid
  const renderTokenList = (flavor, list) => list.map(v => polaroid(flavor, v.replace(/^--/, ''), v)).join('');

  // Helper to get all semantic tokens for a theme (include neutrals)
  const getSemanticTokens = (flavor) => {
    const set = tokenSets[flavor];
    // Include semantic tokens AND neutrals for complete theme coverage
    return Array.from(new Set([...(set.semantic || []), ...(set.neutrals || [])]));
  };

  const flavorClass = only ? `flavor-${only} theme-light` : 'flavor-vanilla theme-light';
  const dataAttr = only ? `data-only-flavor="${only}"` : '';


  let flavorSections = '';
  if (!only) {
    // Only show global palette for the global story
    flavorSections = '';
  } else if (['vanilla', 'blueberry', 'strawberry'].includes(only)) {
    // Only show the selected flavor for individual flavor stories
    const f = only;
    flavorSections = `
      <details class="flavor-column flavor-${f}" open style="margin-top:12px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${f.charAt(0).toUpperCase() + f.slice(1)}</h3></summary>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${tokenSets[f].palette.map(t => polaroid(f, t.replace(/^--/, ''), t)).join('')}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${getSemanticTokens(f).map(t => `
                <tr>
                  <td><code>${t}</code></td>
                  <td><span class="swatch-thumb" data-var="${t}" style="background:var(${t});"></span></td>
                  <td class="list-resolved" data-var="${t}">resolving...</td>
                  <td class="list-chain" data-var="${t}">–</td>
                  <td><span class="swatch-thumb-text" data-var="${t}"></span></td>
                  <td class="list-text-color" data-var="${t}">computing...</td>
                  <td class="list-contrast" data-var="${t}">–</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </details>
    `;
  }

  const html = `
    <div class="tokens-doc-root ${flavorClass}" ${dataAttr}>
      <style>
  .tokens-doc-root{padding:16px 40px;font-family:var(--font-family-base);}
  /* ...existing code... */
      </style>
      <div id="flavors-top">
        <h1 style="margin:8px 0">Design Tokens — Palette</h1>
        <details class="flavor-column flavor-global" ${hideIfNot('global')} ${(!only || only === 'global') ? 'open' : ''} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
        <div style="font-size:14px;color:rgba(0,0,0,0.6);margin-bottom:12px;font-weight:600;">Base Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${tokenSets.global.palette.map(t => polaroid('global', t.replace(/^--/, ''), t)).join('')}
        </div>
        <div style="font-size:14px;color:rgba(0,0,0,0.6);margin-bottom:12px;font-weight:600;">Status Palette</div>
        <div class="polaroid-row polaroid-palette" style="margin-bottom:18px;">
          ${tokenSets.global.statusPalette.map(t => polaroid('global', t.replace(/^--/, ''), t)).join('')}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Semantic</th><th>Swatch</th><th>Resolved</th><th>Base</th><th>Text</th><th>Text color</th><th>Contrast</th></tr></thead>
            <tbody>
              ${tokenSets.global.tokens.map(t => `
                <tr>
                  <td><code>${t}</code></td>
                  <td><span class="swatch-thumb" data-var="${t}" style="background:var(${t});"></span></td>
                  <td class="list-resolved" data-var="${t}">resolving...</td>
                  <td class="list-chain" data-var="${t}">–</td>
                  <td><span class="swatch-thumb-text" data-var="${t}"></span></td>
                  <td class="list-text-color" data-var="${t}">computing...</td>
                  <td class="list-contrast" data-var="${t}">–</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        </details>
        ${flavorSections}
      </div>
    </div>
  `;

  // Add click-to-copy for swatches (main and text swatch)
  setTimeout(() => {
    document.querySelectorAll('.swatch-thumb, .swatch-thumb-text').forEach(el => {
      el.addEventListener('click', function (e) {
        const v = el.getAttribute('data-var');
        if (!v) return;
        let val = getComputedStyle(document.documentElement).getPropertyValue(v).trim();
        if (!val) val = v;
        navigator.clipboard.writeText(val);
        el.style.outline = '2px solid #007aff';
        setTimeout(() => { el.style.outline = ''; }, 600);
      });
    });
  }, 300);
  return html;
}
