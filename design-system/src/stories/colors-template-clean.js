// Clean renderer for Colors stories
export function renderColors(opts = {}) {
  const only = opts && opts.onlyFlavor ? String(opts.onlyFlavor) : '';

  const polaroid = (flavor, label, varName, baseVar) => `
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
    })()}</div>
      </div>
      <div class="card-token-label"><code>${varName}</code></div>
      ${baseVar ? `<div class="card-base-label"><code>${baseVar}</code></div>` : ''}
    </div>
  `;

  const hideIfNot = (f) => (only && only !== f) ? 'style="display:none;"' : '';
  // Curated token sets per flavor
  const tokenSets = {
    global: {
      label: 'Global',
      // surface and on-surface are semantic tokens mapped to base palette stops in the global context; background is a theme-level responsibility and removed from global
      tokens: ['--color-surface', '--color-surface-alt', '--color-success', '--color-warning', '--color-error'],
      palette: [
        '--palette-base-100',
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

  const renderTokenList = (flavor, list) => list.map(v => polaroid(flavor.charAt(0).toUpperCase() + flavor.slice(1), v.replace(/^--/, ''), v)).join('');

  const flavorClass = only ? `flavor-${only} theme-light` : 'flavor-vanilla theme-light';
  const dataAttr = only ? `data-only-flavor="${only}"` : '';

  const html = `
    <div class="tokens-doc-root ${flavorClass}" ${dataAttr}>
      <style>
  .tokens-doc-root{padding:16px 40px;font-family:var(--font-family-base);}
    /* Responsive grid of compact polaroids */
  .polaroid-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:10px;margin-bottom:12px}
  details.flavor-column{margin-bottom:12px;border-radius:8px;padding:8px;border:1px solid rgba(0,0,0,0.04);background:var(--color-surface)}
  details.flavor-column[open]{box-shadow:0 1px 0 rgba(0,0,0,0.04)}
  details.flavor-column summary{list-style:none;cursor:pointer;padding:6px 8px}
  details.flavor-column summary::-webkit-details-marker{display:none}
  details.flavor-column summary h3{font-size:15px;display:inline}
  .polaroid-card{border-radius:8px;padding:10px;border:1px solid var(--color-outline);background:var(--color-surface,#FBFBFD);}
  /* Make the swatch a square (1:1) so color area is consistent */
  .card-swatch{width:100%;aspect-ratio:1/1;border-radius:6px;background-size:cover;margin-bottom:8px;position:relative;display:flex;align-items:center;justify-content:center;background:var(--color-surface,#FBFBFD);}
  .swatch-text{font-weight:700;font-size:16px;line-height:1;color:var(--color-on-primary);pointer-events:none;text-shadow:0 1px 0 rgba(0,0,0,0.15);}
  /* polaroids are purely visual now; contrast is shown in the token tables */
  /* Theme layout: primary in a larger main column, other tokens flow in a masonry-like nested grid */
  /* Theme grid: primary column slightly larger, rest flow in a responsive grid */
  .theme-grid{display:grid;grid-template-columns:minmax(140px,46%) 1fr;gap:12px;align-items:start;max-width:920px;margin:0 auto}
  .theme-main{display:block;max-width:clamp(320px,46%,560px)}
  /* Center and constrain the overall flavors area so cards fill available space better
    without the primary growing excessively on wide viewports */
  #flavors-top{max-width:1100px;margin:0 auto;padding:0 40px;box-sizing:border-box}
  details.flavor-column{width:100%;max-width:1100px;margin:0 auto}
  .theme-rest{display:grid;grid-auto-flow:row;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px;align-items:start;grid-auto-rows:auto}
  /* Stack theme grid on narrow viewports and make polaroids shrink more */
  /* Keep stacked single-column layout until larger widths for a smoother transition */
  @media (max-width:820px){
    .theme-grid{grid-template-columns:1fr;}
    /* slightly larger minimums so cards don't pop to two columns too early */
  /* keep cards comfortable on large phone / small tablet sizes */
  .polaroid-row, .theme-rest{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:10px}
    .card-swatch{aspect-ratio:1/1;}
    .swatch-text{font-size:16px}
    .card-token-label, .card-base-label{font-size:11px}
  }
  /* unified swatch-text size: 16px for all polaroids */
  /* Prevent cards from stretching; keep height:auto */
  .polaroid-card{align-self:start;height:auto}
  .theme-rest .polaroid-card{height:auto}
  .polaroid-card[data-copied]{outline:2px solid rgba(0,0,0,0.08)}
  .card-token-label{font-size:12px;color:var(--color-on-background);margin-top:6px;word-break:break-all}
  .card-base-label{font-size:11px;color:var(--color-on-background);opacity:0.8;margin-top:4px;word-break:break-all}
  .resolve-chain{font-size:11px;color:rgba(28,27,31,0.6);margin-top:6px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}

  /* Larger polaroids for Global and flavor palettes */
  .flavor-global .polaroid-row{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}
  .flavor-global .polaroid-card{padding:12px}
  .polaroid-palette{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:12px}
  .polaroid-palette .polaroid-card{padding:12px}

        /* Compact token list/table */
        .token-list-wrap{margin-top:8px}
  .token-list{width:100%;border-collapse:collapse;font-size:13px}
  .token-list th,.token-list td{border:1px solid rgba(0,0,0,0.06);padding:6px 8px;text-align:left}
  .token-list th{background:rgba(0,0,0,0.02);font-weight:600}
  .token-list code{font-size:12px}
  .swatch-thumb { box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
  .swatch-thumb-text { box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
      </style>
      ${!only ? `
      <div id="flavors-top">
        <h1 style="margin:8px 0">Design Tokens — Palette</h1>
        <details class="flavor-column flavor-global" ${hideIfNot('global')} ${(!only || only === 'global') ? 'open' : ''} style="margin-bottom:18px">
        <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Global</h3></summary>
        <div style="font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:8px">Semantic Tokens</div>
        <div class="polaroid-row">
          ${renderTokenList('Global', tokenSets.global.tokens)}
        </div>
        <div style="font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:8px">Base Palette</div>
        <div class="polaroid-row polaroid-palette">
          ${renderTokenList('Global', tokenSets.global.palette)}
        </div>
        <div style="font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:8px">Status Palette</div>
        <div class="polaroid-row polaroid-palette">
          ${renderTokenList('Global', tokenSets.global.statusPalette)}
        </div>
        <div class="token-list-wrap">
          <table class="token-list">
            <thead><tr><th>Token</th><th>Swatch</th><th>Resolved value</th><th>Text color</th><th>Text Swatch</th><th>Contrast</th></tr></thead>
            <tbody>
              <!-- Semantic tokens -->
              <tr><td colspan="6" style="font-size:12px;color:rgba(0,0,0,0.5);background:rgba(0,0,0,0.03)">Semantic</td></tr>
              ${tokenSets.global.tokens.map(t => `
                <tr>
                  <td><code>${t}</code></td>
                  <td><span class="swatch-thumb" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:var(${t});vertical-align:middle;"></span></td>
                  <td class="list-resolved" data-var="${t}">resolving...</td>
                  <td class="list-text-color" data-var="${t}">computing...</td>
                  <td><span class="swatch-thumb-text" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:#fff;vertical-align:middle;"></span></td>
                  <td class="list-contrast" data-var="${t}">–</td>
                </tr>
              `).join('')}
              <!-- Base palette -->
              <tr><td colspan="6" style="font-size:12px;color:rgba(0,0,0,0.5);background:rgba(0,0,0,0.03)">Base Palette</td></tr>
              ${tokenSets.global.palette.map(t => `
                <tr>
                  <td><code>${t}</code></td>
                  <td><span class="swatch-thumb" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:var(${t});vertical-align:middle;"></span></td>
                  <td class="list-resolved" data-var="${t}">resolving...</td>
                  <td class="list-text-color" data-var="${t}">computing...</td>
                  <td><span class="swatch-thumb-text" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:#fff;vertical-align:middle;"></span></td>
                  <td class="list-contrast" data-var="${t}">–</td>
                </tr>
              `).join('')}
              <!-- Status palette -->
              <tr><td colspan="6" style="font-size:12px;color:rgba(0,0,0,0.5);background:rgba(0,0,0,0.03)">Status Palette</td></tr>
              ${tokenSets.global.statusPalette.map(t => `
                <tr>
                  <td><code>${t}</code></td>
                  <td><span class="swatch-thumb" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:var(${t});vertical-align:middle;"></span></td>
                  <td class="list-resolved" data-var="${t}">resolving...</td>
                  <td class="list-text-color" data-var="${t}">computing...</td>
                  <td><span class="swatch-thumb-text" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:#fff;vertical-align:middle;"></span></td>
                  <td class="list-contrast" data-var="${t}">–</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
  </details>
      ` : ''}
  ${['vanilla', 'blueberry', 'strawberry'].map(f => `
          <details class="flavor-column flavor-${f}" ${hideIfNot(f)} ${only ? 'open' : ''} style="margin-top:12px">
            <summary style="margin:8px 0"><h3 style="display:inline;margin:0">Theme: ${f.charAt(0).toUpperCase() + f.slice(1)}</h3></summary>
            <div class="theme-grid">
              <div class="theme-main">
                ${polaroid(f.charAt(0).toUpperCase() + f.slice(1), '--color-primary', '--color-primary', tokenSets[f].palette[3])}
              </div>
              <div class="theme-rest">
                ${[tokenSets[f].semantic[1], tokenSets[f].neutrals[0], tokenSets[f].neutrals[1]]
      .filter(Boolean)
      .map(v => {
        var base = v;
        if (typeof v === 'string' && v.indexOf('--color-') === 0) {
          if (/primary/.test(v)) base = tokenSets[f].palette[3];
          if (/surface/.test(v)) base = '';
          else if (/background/.test(v)) base = tokenSets[f].palette[1] || base;
        }
        return polaroid(f.charAt(0).toUpperCase() + f.slice(1), v.replace(/^--/, ''), v, base);
      }).join('')}
              </div>
            </div>
            <hr style="width:100%;border:none;border-top:1px solid rgba(0,0,0,0.06);margin:12px 0">
            <div style="font-size:12px;color:rgba(0,0,0,0.5);margin-bottom:8px">${f.charAt(0).toUpperCase() + f.slice(1)} Palette</div>
            <div class="polaroid-row polaroid-palette">
              ${renderTokenList(f, tokenSets[f].palette)}
            </div>
            <div class="polaroid-row polaroid-palette">
              ${renderTokenList(f, tokenSets[f].accents)}
            </div>
            <!-- contrast example removed; each card now shows its own contrast -->

            <div class="token-list-wrap">
              <table class="token-list">
                <thead><tr><th>Token</th><th>Swatch</th><th>Resolved value</th><th>Text color</th><th>Text Swatch</th><th>Contrast</th></tr></thead>
                <tbody>
                  ${[...tokenSets[f].semantic, ...tokenSets[f].neutrals, ...tokenSets[f].palette, ...tokenSets[f].accents].map(t => `
                    <tr>
                      <td><code>${t}</code></td>
                      <td><span class="swatch-thumb" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:var(${t});vertical-align:middle;"></span></td>
                      <td class="list-resolved" data-var="${t}">resolving...</td>
                      <td class="list-text-color" data-var="${t}">computing...</td>
                      <td><span class="swatch-thumb-text" data-var="${t}" style="display:inline-block;width:20px;height:20px;border-radius:4px;border:1px solid #ccc;background:#fff;vertical-align:middle;"></span></td>
                      <td class="list-contrast" data-var="${t}">–</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </details>
        `).join('')}
      </div>
    </div>
  `;

  return html;
}
