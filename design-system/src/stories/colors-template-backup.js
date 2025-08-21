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
      palette: ['--palette-blueberry-100', '--palette-blueberry-200', '--palette-blueberry-300', '--palette-blueberry-500', '--palette-blueberry-800'],
      accents: []
    },
    strawberry: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-strawberry-100', '--palette-strawberry-200', '--palette-strawberry-300', '--palette-strawberry-500', '--palette-strawberry-800'],
      accents: []
    },
    vanilla: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-vanilla-100', '--palette-vanilla-200', '--palette-vanilla-300', '--palette-vanilla-500', '--palette-vanilla-800'],
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
          function getRaw(n,el){try{if(el&&el.nodeType===1)return getComputedStyle(el).getPropertyValue(n).trim()}catch(e){}return getComputedStyle(document.documentElement).getPropertyValue(n).trim()}
          function resolveToken(n,seen,el){seen=seen||[];var r=getRaw(n,el);if(!r)return{chain:[n],value:'unset'};r=r.trim();if(r.indexOf('var(')===0){var i=r.slice(4,-1).trim();var p=i.split(/,(.+)/).map(function(s){return s&&s.trim()}).filter(Boolean);var ref=p[0];var fb=p[1]||null;if(!ref||seen.indexOf(ref)!==-1||ref===n)return{chain:[n,ref],value:fb||r};var nx=resolveToken(ref,seen.concat([n]),el);return{chain:[n].concat(nx.chain),value:nx.value}}return{chain:[n],value:r}}

          function parseColor(s){if(!s)return null;s=s.trim();try{if(s.indexOf('rgb')===0){var nums=s.replace(/[rgba()]/g,'').split(',').map(function(x){return parseFloat(x.trim())});return {r:nums[0],g:nums[1],b:nums[2],a:nums[3]||1}}if(s[0]==='#'){var hex=s.slice(1);if(hex.length===3)hex=hex.split('').map(function(c){return c+c}).join('');var bigint=parseInt(hex,16);return {r:(bigint>>16)&255,g:(bigint>>8)&255,b:bigint&255,a:1}}}catch(e){}return null}
          function toHex(n){var v=Math.round(n||0);var h=(v<0?0:v>255?255:v).toString(16);return h.length===1? '0'+h : h}
          function colorToHex(s){try{var c=parseColor(s);if(!c) return null;return '#'+toHex(c.r)+toHex(c.g)+toHex(c.b)}catch(e){return null}}
          function srgb(n){n=n/255;return n<=0.03928? n/12.92 : Math.pow((n+0.055)/1.055,2.4)}
          function luminance(c){return 0.2126*srgb(c.r)+0.7152*srgb(c.g)+0.0722*srgb(c.b)}
          function contrastRatio(a,b){var L1=luminance(a);var L2=luminance(b);var hi=Math.max(L1,L2);var lo=Math.min(L1,L2);return (hi+0.05)/(lo+0.05)}

          function computeContrastForCard(card){
            try{
              var ctx=card;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx=ctx.parentElement}
              var root=ctx||document.documentElement;
              var varName = card.getAttribute('data-var');
              if(!varName) return;
              var baseVal = resolveToken(varName,undefined,root).value;
              // derive on-color token name
              var baseKey = varName.replace(/^--color-/, '');
              var onVar = '--color-on-' + baseKey;
              var onVal = resolveToken(onVar,undefined,root).value;
              if(!onVal || onVal==='unset'){
                onVal = resolveToken('--color-on-background',undefined,root).value || onVal;
              }
              var parsedP = parseColor(baseVal);
              var parsedO = parseColor(onVal);
              var out = null;
              if(parsedP && parsedO){ out = contrastRatio(parsedP,parsedO); }
              return out;
            }catch(e){ var el = card.querySelector('.contrast-value'); if(el) el.textContent = 'n/a' }
          }

          function populate(){
            // Resolved values for token cards
        document.querySelectorAll('.polaroid-card').forEach(function(c){
              var v=c.getAttribute('data-var');
              var r=c.querySelector('.resolved-value');
              try{
                var ctx=c;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx=ctx.parentElement}
          var res = v ? resolveToken(v,undefined,ctx||document.documentElement) : null;
                if(r){
                  // If resolveToken returned a var-chain, show it. Otherwise try reverse-lookup against known palettes.
                  if(res && res.chain && res.chain.length>1){
                    var chainStr = res.chain.join(' → ');
                    r.textContent = (res.value || 'unset') + ' \u2934';
                    r.title = 'resolve chain: ' + chainStr;
                    try{
                      var chainEl = r.parentElement.querySelector('.resolve-chain');
                      if(!chainEl){ chainEl = document.createElement('div'); chainEl.className = 'resolve-chain'; r.parentElement.appendChild(chainEl); }
                      chainEl.textContent = chainStr;
                    }catch(e){}
                  } else {
                    // no explicit var() chain; display value and attempt to find a matching palette token
                    var displayVal = res ? res.value : 'unset';
                    r.textContent = displayVal;
                    r.title = '';
                    try{var chainEl = r.parentElement.querySelector('.resolve-chain'); if(chainEl) chainEl.parentElement.removeChild(chainEl);}catch(e){}

                    try{
                      if(displayVal && displayVal !== 'unset'){
                        var found = null;
                        // Check global status palette first
                        if(tokenSets.global && tokenSets.global.statusPalette){
                          tokenSets.global.statusPalette.forEach(function(pv){
                            if(found) return;
                            try{
                              var pvVal = resolveToken(pv,undefined,ctx||document.documentElement).value;
                              if(pvVal){
                                var a = colorToHex(pvVal) || pvVal;
                                var b = colorToHex(displayVal) || displayVal;
                                if(a === b) found = pv;
                              }
                            }catch(e){}
                          });
                        }
                        // Then check theme palettes
                        ['blueberry','strawberry'].forEach(function(fl){
                          if(found) return;
                          var pal = tokenSets[fl] && tokenSets[fl].palette || [];
                          pal.forEach(function(pv){
                            if(found) return;
                            try{
                              var pvVal = resolveToken(pv,undefined,ctx||document.documentElement).value;
                                        if(pvVal){
                                          var a = colorToHex(pvVal) || pvVal;
                                          var b = colorToHex(displayVal) || displayVal;
                                          if(a === b) found = pv;
                                        }
                            }catch(e){}
                          });
                        });
                        if(found){
                          var chainStr2 = [v, found].join(' → ');
                          r.textContent = displayVal + ' \u2934';
                          r.title = 'resolve chain: ' + chainStr2;
                          var chainEl2 = r.parentElement.querySelector('.resolve-chain');
                          if(!chainEl2){ chainEl2 = document.createElement('div'); chainEl2.className='resolve-chain'; r.parentElement.appendChild(chainEl2); }
                          chainEl2.textContent = chainStr2;
                        }
                      }
                    }catch(e){}
                  }
                }
              }catch(e){ if(r) r.textContent='unset' }

              // update swatch text color and compute contrast per card
              try{
                var sw = c.querySelector('.card-swatch');
                var swText = c.querySelector('.swatch-text');
                if(sw && swText && v){
                  // derive on-color token name and try to get a resolved color
                  var baseKey = v.replace(/^--color-/,'');
                  var ctx2=c;while(ctx2&&ctx2!==document.documentElement){if(ctx2.classList&&Array.from(ctx2.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx2=ctx2.parentElement}
                  var onResolved;
                  // Special handling for status palette tokens
                  if(v === '--palette-green-500') {
                    onResolved = resolveToken('--color-on-success', undefined, ctx2||document.documentElement).value;
                  } else if(v === '--palette-yellow-500') {
                    onResolved = resolveToken('--color-on-warning', undefined, ctx2||document.documentElement).value;
                  } else if(v === '--palette-red-500') {
                    onResolved = resolveToken('--color-on-error', undefined, ctx2||document.documentElement).value;
                  } else {
                    // Default fallback chain
                    var onVar = '--color-on-' + baseKey;
                    onResolved = resolveToken(onVar,undefined,ctx2||document.documentElement).value;
                    if((!onResolved || onResolved==='unset') && /^--palette-/.test(v)){
                      onResolved = resolveToken('--color-on-surface',undefined,ctx2||document.documentElement).value;
                      if(!onResolved || onResolved==='unset'){
                        onResolved = resolveToken('--color-on-background',undefined,ctx2||document.documentElement).value;
                      }
                    } else if(!onResolved || onResolved==='unset'){
                      onResolved = resolveToken('--color-on-background',undefined,ctx2||document.documentElement).value || onResolved;
                    }
                  }
                  // Prefer primary on-color for palette 500/800 stops so demo text matches primary examples
                  var useOn = onResolved;
                  try{
                    if(/--palette-.*-(500|800)$/.test(v)){
                      var primOn = resolveToken('--color-on-primary', undefined, ctx2||document.documentElement).value;
                      if(primOn && primOn !== 'unset') useOn = primOn;
                    }
                  }catch(e){}
                  // If the swatch background is very dark, force text to white for contrast
                  var bgVal = resolveToken(v,undefined,ctx2||document.documentElement).value;
                  var parsedBg = parseColor(bgVal);
                  var forceWhite = false;
                  if(parsedBg){
                    // Calculate luminance, force white if below threshold (e.g. < 0.2)
                    var lum = luminance(parsedBg);
                    if(lum < 0.2) forceWhite = true;
                  }
                  if(forceWhite){
                    // Use semantic token for very dark backgrounds, never hardcoded white
                    var whiteToken = resolveToken('--color-on-surface-alt', undefined, ctx2||document.documentElement).value;
                    if (whiteToken && whiteToken !== 'unset') {
                      swText.style.color = whiteToken;
                    } else {
                      // Fallback to --color-on-background if alt is unset
                      var fallbackToken = resolveToken('--color-on-background', undefined, ctx2||document.documentElement).value;
                      if (fallbackToken && fallbackToken !== 'unset') {
                        swText.style.color = fallbackToken;
                      } else {
                        swText.style.color = '';
                      }
                    }
                  } else if(useOn && useOn!=='unset'){
                    try{ swText.style.color = colorToHex(useOn) || useOn; }catch(e){}
                  }
                }
              }catch(e){}
            });

            // Compute contrast/AAA pass for every polaroid card and set indicator
            document.querySelectorAll('.polaroid-card').forEach(function(card){
              try{
                // reuse computeContrastForCard to get numeric ratio
                var ctx=card;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx=ctx.parentElement}
                var root=ctx||document.documentElement;
                var varName = card.getAttribute('data-var'); if(!varName) return;
                var baseVal = resolveToken(varName,undefined,root).value;
                var baseKey = varName.replace(/^--color-/,'');
                var onVar = '--color-on-' + baseKey;
                var onVal = resolveToken(onVar,undefined,root).value;
                if(!onVal || onVal==='unset') onVal = resolveToken('--color-on-background',undefined,root).value || onVal;
                var p = parseColor(baseVal); var o = parseColor(onVal);
                var ratio = null; if(p && o) ratio = contrastRatio(p,o);
                var aaa = false; if(ratio) aaa = ratio >= 7.0; // AAA requires 7:1 for normal text
                // contrast now displayed in the token tables; polaroids are visual only
              }catch(e){/* ignore per-card errors */}
            });

            // Fill token list table cells
            document.querySelectorAll('.list-resolved[data-var]').forEach(function(td){
              var v = td.getAttribute('data-var');
              try{
                var ctx=td;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx=ctx.parentElement}
                var res = resolveToken(v,undefined,ctx||document.documentElement);
                if(res && res.chain && res.chain.length>1){
                  var chainStr = res.chain.join(' → ');
                  td.innerHTML = '<span class="resolved-val">' + (res.value || 'unset') + ' \u2934</span>';
                  td.title = 'resolve chain: ' + chainStr;
                  try{
                    var chainEl = td.querySelector('.resolve-chain');
                    if(!chainEl){ chainEl = document.createElement('div'); chainEl.className = 'resolve-chain'; td.appendChild(chainEl); }
                    chainEl.textContent = chainStr;
                  }catch(e){}
                } else {
                  td.textContent = res ? res.value : 'unset';
                  td.title = '';
                  try{var chainEl = td.querySelector('.resolve-chain'); if(chainEl) chainEl.parentElement.removeChild(chainEl);}catch(e){}

                  // attempt reverse lookup against known palettes
                  try{
                    var displayVal = res ? res.value : null;
                    if(displayVal){
                      var found2 = null;
                      // Check global status palette first
                      if(tokenSets.global && tokenSets.global.statusPalette){
                        tokenSets.global.statusPalette.forEach(function(pv){
                          if(found2) return;
                          try{
                            var pvVal = resolveToken(pv,undefined,ctx||document.documentElement).value;
                            if(pvVal){
                              var a=colorToHex(pvVal)||pvVal;
                              var b=colorToHex(displayVal)||displayVal;
                              if(a===b) found2 = pv;
                            }
                          }catch(e){}
                        });
                      }
                      // Then check theme palettes
                      ['blueberry','strawberry'].forEach(function(fl){
                        if(found2) return;
                        var pal = tokenSets[fl] && tokenSets[fl].palette || [];
                        pal.forEach(function(pv){
                          if(found2) return;
                          try{ var pvVal = resolveToken(pv,undefined,ctx||document.documentElement).value; if(pvVal){ var a=colorToHex(pvVal)||pvVal; var b=colorToHex(displayVal)||displayVal; if(a===b) found2 = pv; } }catch(e){}
                        });
                      });
                      if(found2){
                        var chainStr2 = [v, found2].join(' → ');
                        td.innerHTML = '<span class="resolved-val">' + (displayVal || 'unset') + ' \u2934</span>';
                        td.title = 'resolve chain: ' + chainStr2;
                        var chainEl2 = td.querySelector('.resolve-chain'); if(!chainEl2){ chainEl2 = document.createElement('div'); chainEl2.className='resolve-chain'; td.appendChild(chainEl2);}
                        chainEl2.textContent = chainStr2;
                      }
                    }
                  }catch(e){}
                }
              }catch(e){ td.textContent='unset' }
            });
            // Fill text-color column for tokens (show token name, not hex) and fill contrast
            document.querySelectorAll('.list-text-color[data-var]').forEach(function(td){
              var v = td.getAttribute('data-var');
              try{
                var ctx=td;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0}))break;ctx=ctx.parentElement}
                var baseKey = v.replace(/^--color-/,'');
                var onVar = '--color-on-' + baseKey;
                var resolvedOn = resolveToken(onVar,undefined,ctx||document.documentElement);
                var onRes = resolvedOn && resolvedOn.value;
                var tokenName = (resolvedOn && resolvedOn.chain && resolvedOn.chain.length>1) ? resolvedOn.chain[resolvedOn.chain.length-1] : (resolvedOn && resolvedOn.token) || onVar;

                // Fix typo: color-on-on-surface -> color-on-surface
                if(tokenName === '--color-on-on-surface') tokenName = '--color-on-surface';


                // Robust mapping for palette tokens
                var showToken = false;
                if (/^--palette-blueberry-100$/.test(v)) {
                  tokenName = '--color-on-background';
                  onRes = resolveToken('--color-on-background',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if (/^--palette-blueberry-800$/.test(v)) {
                  tokenName = '--color-on-surface-alt';
                  onRes = resolveToken('--color-on-surface-alt',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if (/^--palette-/.test(v)) {
                  // Only show a text color token if this palette stop is mapped to a semantic background
                  var mappedSemantic = null;
                  var thisVal = resolveToken(v,undefined,ctx||document.documentElement).value;
                  // Check if this palette stop is used by a semantic token
                  var semanticTokens = ['--color-surface','--color-surface-alt','--color-primary','--color-primary-darker','--color-background'];
                  for (var i=0; i<semanticTokens.length; ++i) {
                    var semVal = resolveToken(semanticTokens[i],undefined,ctx||document.documentElement).value;
                    if (semVal && thisVal && colorToHex(semVal) === colorToHex(thisVal)) {
                      mappedSemantic = semanticTokens[i];
                      break;
                    }
                  }
                  if (mappedSemantic) {
                    // Use the correct on-color for the mapped semantic
                    let resolvedVar = null;
                    if (mappedSemantic === '--color-surface') {
                      resolvedVar = '--color-on-surface';
                    } else if (mappedSemantic === '--color-surface-alt') {
                      resolvedVar = '--color-on-surface-alt';
                    } else if (mappedSemantic === '--color-primary') {
                      resolvedVar = '--color-on-primary';
                    } else if (mappedSemantic === '--color-primary-darker') {
                      resolvedVar = '--color-on-primary-darker';
                    } else if (mappedSemantic === '--color-background') {
                      resolvedVar = '--color-on-background';
                    }
                    let resolved = resolveToken(resolvedVar,undefined,ctx||document.documentElement);
                    tokenName = (resolved && resolved.chain && resolved.chain.length > 1)
                      ? resolved.chain.join(' → ')
                      : (resolvedVar || '--color-on-background');
                    onRes = resolved && resolved.value;
                    showToken = !!(onRes && onRes !== 'unset');
                  } else {
                    // Not mapped to a semantic background, so fallback to a sensible text color
                    let fallbackResolved = resolveToken('--color-on-background',undefined,ctx||document.documentElement);
                    tokenName = (fallbackResolved && fallbackResolved.chain && fallbackResolved.chain.length > 1)
                      ? fallbackResolved.chain.join(' → ')
                      : '--color-on-background';
                    onRes = fallbackResolved && fallbackResolved.value;
                    showToken = !!(onRes && onRes !== 'unset');
                  }
                } else if (onRes && onRes !== 'unset' && tokenName.startsWith('--color-on-') && getComputedStyle(document.documentElement).getPropertyValue(tokenName)) {
                  showToken = true;
                }


                // For semantic tokens, use the correct on-color if defined
                if(['--color-primary','--color-primary-darker'].includes(v)) {
                  tokenName = '--color-on-primary';
                  onRes = resolveToken('--color-on-primary',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if(['--color-surface','--color-surface-darker'].includes(v)) {
                  tokenName = '--color-on-surface';
                  onRes = resolveToken('--color-on-surface',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if(['--color-background','--color-background-darker'].includes(v)) {
                  tokenName = '--color-on-background';
                  onRes = resolveToken('--color-on-background',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                }

                // For status tokens: use their specific on-color tokens
                if(v === '--color-success' && resolveToken('--color-on-success',undefined,ctx||document.documentElement).value && resolveToken('--color-on-success',undefined,ctx||document.documentElement).value !== 'unset') {
                  tokenName = '--color-on-success';
                  onRes = resolveToken('--color-on-success',undefined,ctx||document.documentElement).value;
                  showToken = true;
                } else if(v === '--color-warning' && resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value && resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value !== 'unset') {
                  tokenName = '--color-on-warning';
                  onRes = resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value;
                  showToken = true;
                } else if(v === '--color-error' && resolveToken('--color-on-error',undefined,ctx||document.documentElement).value && resolveToken('--color-on-error',undefined,ctx||document.documentElement).value !== 'unset') {
                  tokenName = '--color-on-error';
                  onRes = resolveToken('--color-on-error',undefined,ctx||document.documentElement).value;
                  showToken = true;
                }

                // For status palette tokens: use their corresponding semantic on-color tokens
                if(v === '--palette-green-500') {
                  tokenName = '--color-on-success';
                  onRes = resolveToken('--color-on-success',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if(v === '--palette-yellow-500') {
                  tokenName = '--color-on-warning';
                  onRes = resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                } else if(v === '--palette-red-500') {
                  tokenName = '--color-on-error';
                  onRes = resolveToken('--color-on-error',undefined,ctx||document.documentElement).value;
                  showToken = !!(onRes && onRes !== 'unset');
                }

                // If no text color token is used, show the resolved value or 'none'
                if (!showToken) {
                  tokenName = tokenName === 'n/a' ? 'n/a' : (onRes && onRes !== 'unset' ? onRes : 'n/a');
                }

                // Show both the variable chain and the resolved color value
                if (showToken && onRes && onRes !== 'unset') {
                  var colorVal = colorToHex(onRes) || onRes;
                  td.innerHTML = '<span title="' + tokenName + '">' + tokenName + '</span><br><span style="font-size:11px;color:#888">' + colorVal + '</span>';
                } else {
                  td.textContent = tokenName || 'n/a';
                }
                // populate contrast cell too
                try{
                  var contrastCell = td.parentElement.querySelector('.list-contrast[data-var="'+v+'"]');
                  if(contrastCell){
                    // Always resolve to the final computed color value for both background and text
                    var baseVal = resolveToken(v,undefined,ctx||document.documentElement).value;
                    var textVal = (showToken && tokenName && tokenName.startsWith('--color-on-'))
                      ? resolveToken(tokenName,undefined,ctx||document.documentElement).value
                      : (onRes && !onRes.startsWith('--') ? onRes : null);
                    var p = parseColor(baseVal);
                    var o = parseColor(textVal);
                    var ratio = (p && o) ? Math.round(contrastRatio(p,o)*100)/100 : null;
                    var aaa = ratio ? (ratio >= 7.0) : false;
                    contrastCell.textContent = (ratio && isFinite(ratio)) ? ratio : 'n/a';
                    if(aaa) contrastCell.textContent = '✅ ' + contrastCell.textContent;
                  }
                }catch(e){}
              }catch(e){ td.textContent = 'none' }
            });
          }

          // Copy-on-click and keyboard support for polaroid cards
          function copyText(text){try{if(!text) return;var ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.left='-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta);return true}catch(e){return false}}
          document.addEventListener('click', function(ev){var card=ev.target.closest('.polaroid-card');if(!card) return;var v=card.getAttribute('data-var');if(v){copyText(v);card.setAttribute('data-copied','true');setTimeout(function(){card.removeAttribute('data-copied')},900)}});
          document.addEventListener('keydown', function(ev){
            if(ev.key==='Enter' || ev.key===' '){
              try{
                var el=document.activeElement;
                if(el && el.classList && el.classList.contains('polaroid-card')){
                  // guard: only trigger click if the element belongs to this document/window
                  try{ if(el.ownerDocument === document){ el.click(); } }catch(e){}
                  ev.preventDefault();
                }
              }catch(e){}
            }
          });

          // Initial populate and observers
          function fillTextSwatches() {
            document.querySelectorAll('.swatch-thumb-text[data-var]').forEach(function(span){
              var v = span.getAttribute('data-var');
              try {
                // Use the closest .tokens-doc-root as context for variable resolution
                var ctx=span;while(ctx&&ctx!==document.documentElement){if(ctx.classList&&Array.from(ctx.classList).some(function(cl){return cl.indexOf('tokens-doc-root')===0||cl.indexOf('flavor-')===0||cl.indexOf('theme-')===0))break;ctx=ctx.parentElement}
                var baseKey = v.replace(/^--color-/,'');
                var onVar = '--color-on-' + baseKey;
                var resolvedOn = resolveToken(onVar,undefined,ctx||document.documentElement);
                var onRes = resolvedOn && resolvedOn.value;
                // For palette tokens, try to map to semantic token
                if (/^--palette-/.test(v)) {
                  var mappedSemantic = null;
                  var thisVal = resolveToken(v,undefined,ctx||document.documentElement).value;
                  var semanticTokens = ['--color-surface','--color-surface-alt','--color-primary','--color-primary-darker','--color-background'];
                  for (var i=0; i<semanticTokens.length; ++i) {
                    var semVal = resolveToken(semanticTokens[i],undefined,ctx||document.documentElement).value;
                    if (semVal && thisVal && colorToHex(semVal) === colorToHex(thisVal)) {
                      mappedSemantic = semanticTokens[i];
                      break;
                    }
                  }
                  if (mappedSemantic === '--color-surface') {
                    onRes = resolveToken('--color-on-surface',undefined,ctx||document.documentElement).value;
                  } else if (mappedSemantic === '--color-surface-alt') {
                    onRes = resolveToken('--color-on-surface-alt',undefined,ctx||document.documentElement).value;
                  } else if (mappedSemantic === '--color-primary') {
                    onRes = resolveToken('--color-on-primary',undefined,ctx||document.documentElement).value;
                  } else if (mappedSemantic === '--color-primary-darker') {
                    onRes = resolveToken('--color-on-primary-darker',undefined,ctx||document.documentElement).value;
                  } else if (mappedSemantic === '--color-background') {
                    onRes = resolveToken('--color-on-background',undefined,ctx||document.documentElement).value;
                  }
                }
                // For semantic tokens, use the correct on-color if defined
                if(['--color-primary','--color-primary-darker'].includes(v)) {
                  onRes = resolveToken('--color-on-primary',undefined,ctx||document.documentElement).value;
                } else if(['--color-surface','--color-surface-darker'].includes(v)) {
                  onRes = resolveToken('--color-on-surface',undefined,ctx||document.documentElement).value;
                } else if(['--color-background','--color-background-darker'].includes(v)) {
                  onRes = resolveToken('--color-on-background',undefined,ctx||document.documentElement).value;
                }
                // For status tokens: use their specific on-color tokens
                if(v === '--color-success' && resolveToken('--color-on-success',undefined,ctx||document.documentElement).value && resolveToken('--color-on-success',undefined,ctx||document.documentElement).value !== 'unset') {
                  onRes = resolveToken('--color-on-success',undefined,ctx||document.documentElement).value;
                } else if(v === '--color-warning' && resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value && resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value !== 'unset') {
                  onRes = resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value;
                } else if(v === '--color-error' && resolveToken('--color-on-error',undefined,ctx||document.documentElement).value && resolveToken('--color-on-error',undefined,ctx||document.documentElement).value !== 'unset') {
                  onRes = resolveToken('--color-on-error',undefined,ctx||document.documentElement).value;
                }

                // For status palette tokens: use their corresponding semantic on-color tokens
                if(v === '--palette-green-500') {
                  onRes = resolveToken('--color-on-success',undefined,ctx||document.documentElement).value;
                } else if(v === '--palette-yellow-500') {
                  onRes = resolveToken('--color-on-warning',undefined,ctx||document.documentElement).value;
                } else if(v === '--palette-red-500') {
                  onRes = resolveToken('--color-on-error',undefined,ctx||document.documentElement).value;
                }
                // If no text color token is used, fallback to none
                if (!onRes || onRes === 'unset') {
                  onRes = '#fff';
                }
                span.style.background = onRes;
              } catch(e) { span.style.background = '#fff'; }
            });
          }
          function fullPopulate() {
            populate();
            fillTextSwatches();
          }
          
          // Ensure DOM is ready before executing
          setTimeout(function() {
            console.log('Script executing, looking for cards...');
            var cards = document.querySelectorAll('.polaroid-card');
            console.log('Found cards:', cards.length);
            if (cards.length > 0) {
              console.log('Cards found, executing fullPopulate...');
              fullPopulate();
            } else {
              console.log('No cards found, retrying...');
              setTimeout(arguments.callee, 100);
            }
          }, 100);
          
          // Also try on animation frame for immediate execution if DOM is ready
          requestAnimationFrame(fullPopulate);
          
          // Re-run on theme changes
          setTimeout(fullPopulate,120);
          new MutationObserver(function(m){
            if(m.some(function(x){return x.attributeName==='class'})) fullPopulate();
          }).observe(document.documentElement,{attributes:true,attributeFilter:['class']});
        })()
      </script>
    </div>
  `;

  return html;
}
