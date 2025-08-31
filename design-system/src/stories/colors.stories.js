import '../styles/main.css';
import { renderColors } from './colors-template';

// Extract the JavaScript logic from the template
function executeColorLogic() {
  function getRaw(n, el) { try { if (el && el.nodeType === 1) return getComputedStyle(el).getPropertyValue(n).trim() } catch (e) { } return getComputedStyle(document.documentElement).getPropertyValue(n).trim() }
  function resolveToken(n, seen, el) { seen = seen || []; var r = getRaw(n, el); if (!r) return { chain: [n], value: 'unset' }; r = r.trim(); if (r.indexOf('var(') === 0) { var i = r.slice(4, -1).trim(); var p = i.split(/,(.+)/).map(function (s) { return s && s.trim() }).filter(Boolean); var ref = p[0]; var fb = p[1] || null; if (!ref || seen.indexOf(ref) !== -1 || ref === n) return { chain: [n, ref], value: fb || r }; var nx = resolveToken(ref, seen.concat([n]), el); return { chain: [n].concat(nx.chain), value: nx.value } } return { chain: [n], value: r } }

  function parseColor(s) { if (!s) return null; s = s.trim(); try { if (s.indexOf('rgb') === 0) { var nums = s.replace(/[rgba()]/g, '').split(',').map(function (x) { return parseFloat(x.trim()) }); return { r: nums[0], g: nums[1], b: nums[2], a: nums[3] || 1 } } if (s[0] === '#') { var hex = s.slice(1); if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c }).join(''); var bigint = parseInt(hex, 16); return { r: (bigint >> 16) & 255, g: (bigint >> 8) & 255, b: bigint & 255, a: 1 } } } catch (e) { } return null }
  function toHex(n) { var v = Math.round(n || 0); var h = (v < 0 ? 0 : v > 255 ? 255 : v).toString(16); return h.length === 1 ? '0' + h : h }
  function colorToHex(s) { try { var c = parseColor(s); if (!c) return null; return '#' + toHex(c.r) + toHex(c.g) + toHex(c.b) } catch (e) { return null } }
  function normalizeHex(color) { try { if (!color || typeof color !== 'string') return color; var trimmed = color.trim(); if (trimmed[0] !== '#') return color; var hex = trimmed.slice(1).toLowerCase(); if (hex.length === 3) hex = hex.split('').map(function (c) { return c + c; }).join(''); if (hex.length === 6 && /^[0-9a-f]{6}$/.test(hex)) return '#' + hex; return color; } catch (e) { return color; } }
  function srgb(n) { n = n / 255; return n <= 0.03928 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4) }
  function luminance(c) { return 0.2126 * srgb(c.r) + 0.7152 * srgb(c.g) + 0.0722 * srgb(c.b) }
  function contrastRatio(a, b) { var L1 = luminance(a); var L2 = luminance(b); var hi = Math.max(L1, L2); var lo = Math.min(L1, L2); return (hi + 0.05) / (lo + 0.05) }

  // Token sets for chain resolution
  const tokenSets = {
    global: {
      tokens: ['--color-surface', '--color-surface-alt', '--color-success', '--color-warning', '--color-error'],
      palette: ['--palette-base-100', '--palette-base-800'],
      statusPalette: ['--palette-green-500', '--palette-yellow-500', '--palette-red-500']
    },
    vanilla: {
      semantic: ['--color-primary', '--color-primary-darker'],
      neutrals: ['--color-surface', '--color-background'],
      palette: ['--palette-vanilla-100', '--palette-vanilla-200', '--palette-vanilla-500', '--palette-vanilla-800'],
      accents: []
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
    }
  };

  // Helper: map a palette token name to a human-friendly label
  function tokenNameToLabel(token) {
    if (!token || typeof token !== 'string') return null;
    // Known simple mappings
    const m = token.match(/^--palette-([^-]+)-(\d+)$/);
    if (m) return m[1].charAt(0).toUpperCase() + m[1].slice(1) + ' ' + m[2];
    const m2 = token.match(/^--palette-([^-]+)-([a-zA-Z]+)$/);
    if (m2) return m2[1].charAt(0).toUpperCase() + m2[1].slice(1) + ' ' + m2[2];
    // Generic fallback: strip leading -- and replace - with space
    if (token.indexOf('--') === 0) return token.replace(/^--/, '').split('-').map(function (p) { return p.charAt(0).toUpperCase() + p.slice(1) }).join(' ');
    return token;
  }

  function populate() {
    // Resolved values for polaroid cards
    document.querySelectorAll('.polaroid-card').forEach(function (c) {
      var v = c.getAttribute('data-var');
      try {
        var ctx = c; while (ctx && ctx !== document.documentElement) { if (ctx.classList && Array.from(ctx.classList).some(function (cl) { return cl.indexOf('flavor-') === 0 || cl.indexOf('theme-') === 0 })) break; ctx = ctx.parentElement }
        var res = v ? resolveToken(v, undefined, ctx || document.documentElement) : null;
        // No visual updates needed for polaroids as they use CSS variables directly
      } catch (e) {
        console.error('Error resolving polaroid token:', v, e);
      }
    });


    // Resolved values for table cells
    document.querySelectorAll('[data-var]').forEach(function (el) {
      var v = el.getAttribute('data-var');
      if (!v) return;

      try {
        var ctx = el;
        while (ctx && ctx !== document.documentElement) {
          if (ctx.classList && Array.from(ctx.classList).some(function (cl) {
            return cl.indexOf('flavor-') === 0 || cl.indexOf('theme-') === 0;
          })) break;
          ctx = ctx.parentElement;
        }

        // If the resolved container is the global flavor wrapper, ignore the active
        // theme/flavor (Storybook toolbar) and resolve known semantic globals against
        // neutral/base palette tokens so the Global table remains flavor-agnostic.
        var useNeutralGlobal = false;
        if (ctx && ctx.classList && ctx.classList.contains('flavor-global')) {
          useNeutralGlobal = true;
        }

        var res = null;
        if (useNeutralGlobal) {
          // Map a small, curated set of semantic global tokens to their base palette anchors
          var neutralMap = {
            '--color-surface': '--palette-base-100',
            '--color-surface-alt': '--palette-base-800',
            '--color-success': '--palette-green-500',
            '--color-warning': '--palette-yellow-500',
            '--color-error': '--palette-red-500'
          };
          if (neutralMap[v]) {
            // Resolve the palette token directly (palette tokens are global anchors)
            var mapped = neutralMap[v];
            try {
              var mappedRes = resolveToken(mapped, undefined, document.documentElement);
              res = { chain: [v, mapped], value: mappedRes && mappedRes.value ? mappedRes.value : (getComputedStyle(document.documentElement).getPropertyValue(mapped).trim() || 'unset') };
            } catch (e) {
              res = { chain: [v, mapped], value: getComputedStyle(document.documentElement).getPropertyValue(mapped).trim() || 'unset' };
            }
          } else {
            // fallback to normal resolution if token not in the neutral map
            res = resolveToken(v, undefined, document.documentElement);
          }
        } else {
          res = resolveToken(v, undefined, ctx || document.documentElement);
        }
        var displayVal = res.value;

        // Update resolved value cells
        if (el.classList.contains('list-resolved')) {
          el.textContent = displayVal || 'unset';
        }

        // Update chain column with the base palette token that produces the resolved color
        if (el.classList.contains('list-chain')) {
          if (res && res.value && res.value !== 'unset') {
            var baseTokenFound = null;
            // Prefer to find a palette token from the resolution chain (most reliable across themes)
            try {
              if (res.chain && Array.isArray(res.chain)) {
                for (var i = 0; i < res.chain.length; i++) {
                  var item = res.chain[i];
                  if (item && typeof item === 'string' && item.indexOf('--palette-') === 0) {
                    baseTokenFound = tokenNameToLabel(item);
                    break;
                  }
                }
              }
            } catch (e) { }


            // Fallback: try mapping by resolved color hex
            if (!baseTokenFound) {
              var resolvedColor = res.value;
              // Add all palette tokens from the theme for mapping
              var colorToTokenMap = {
                // Base
                '#FBFBFD': 'Base 100',
                '#9E9E9E': 'Base 500',
                '#2A2A30': 'Base 800',
                // Status
                '#00800C': 'Green 500',
                '#FFB300': 'Yellow 500',
                '#D32F2F': 'Red 500',
                // Blueberry
                '#F0EEFF': 'Blueberry 100',
                '#DBD7FF': 'Blueberry 200',
                '#2E2B74': 'Blueberry 500',
                '#1E193E': 'Blueberry 800',
                // Vanilla
                '#F5F1E7': 'Vanilla 100',
                '#E8E2D6': 'Vanilla 200',
                '#6B5C4B': 'Vanilla 500',
                '#1B1C1F': 'Vanilla 800',
                // Strawberry
                '#FFF2F1': 'Strawberry 100',
                '#FFD3D2': 'Strawberry 200',
                '#800800': 'Strawberry 500',
                '#4A1614': 'Strawberry 800'
              };
              try {
                var hex = normalizeHex(colorToHex(resolvedColor) || resolvedColor);
                if (hex) {
                  // Be case-insensitive when looking up mapping keys (some keys are lower/upper cased)
                  var hexKeyLower = (hex || '').toLowerCase();
                  var hexKeyUpper = (hex || '').toUpperCase();
                  baseTokenFound = colorToTokenMap[hexKeyLower] || colorToTokenMap[hexKeyUpper];
                }
              } catch (e) { }
            }

            if (baseTokenFound) {
              el.innerHTML = '<code>' + baseTokenFound + '</code>';
            } else {
              // persist diagnostic info so we can inspect resolution chains in the browser
              try {
                window.__colors_last_resolutions = window.__colors_last_resolutions || [];
                window.__colors_last_resolutions.push({ token: v, resolved: res && res.value, chain: res && res.chain, ctx: (ctx && ctx.className) || null, ts: Date.now() });
              } catch (dErr) { }

              // show the chain and resolved value inline to help debugging in Storybook UI
              var chainHtml = '';
              try {
                if (res && Array.isArray(res.chain)) chainHtml = '<br/><small style="color:#aaa">' + res.chain.join(' → ') + '</small>';
                if (res && res.value) chainHtml += '<br/><small style="color:#aaa">' + (res.value) + '</small>';
              } catch (e) { chainHtml = ''; }

              el.innerHTML = '<small style="color:#888">Unknown base</small>' + chainHtml;
            }
          } else {
            el.innerHTML = '–';
          }
        }

        // Update swatch thumbs (make sure all get populated)
        if (el.classList.contains('swatch-thumb')) {
          if (displayVal && displayVal !== 'unset') {
            el.style.background = displayVal;
            // Remove any transparent background that might interfere
            el.style.backgroundColor = displayVal;
          } else {
            el.style.background = 'transparent';
            el.style.backgroundColor = 'transparent';
          }
        }

        // Update text color calculation and swatch
        if (el.classList.contains('list-text-color') && displayVal && displayVal !== 'unset') {
          var onVal = null;
          var tokenName = null; // Track the token name for display

          // For palette tokens, skip semantic token lookup and go straight to luminance calculation
          if (v.includes('--palette-')) {
            // Compute appropriate text color based on luminance for palette tokens
            try {
              var bg = parseColor(displayVal);
              if (bg) {
                var L = luminance(bg);
                // Use 0.5 as threshold for palette tokens - better contrast detection
                onVal = L > 0.5 ? '#000000' : '#ffffff';
              } else {
                onVal = '#ffffff';
              }
              // For palette tokens, show computed value since there's no semantic token
              tokenName = normalizeHex(onVal);
            } catch (e) {
              onVal = '#ffffff';
              tokenName = '#ffffff';
            }
          } else {
            // For semantic color tokens, try to find the corresponding on-color token
            if (v.startsWith('--color-')) {
              var baseKey = v.replace(/^--color-/, '');
              var onVar = '--color-on-' + baseKey;
              var onRes = resolveToken(onVar, undefined, ctx || document.documentElement);
              if (onRes.value && onRes.value !== 'unset') {
                onVal = onRes.value;
                tokenName = onVar; // Show the token name
              }
            }

            // Fallback to --color-on-background for non-primary tokens
            if (!onVal && !v.includes('primary')) {
              var onBgRes = resolveToken('--color-on-background', undefined, ctx || document.documentElement);
              if (onBgRes.value && onBgRes.value !== 'unset') {
                onVal = onBgRes.value;
                tokenName = '--color-on-background';
              }
            }

            // Final fallback: compute appropriate text color based on luminance
            if (!onVal || onVal === 'unset') {
              try {
                var bg = parseColor(displayVal);
                if (bg) {
                  var L = luminance(bg);
                  // Use 0.5 as threshold for semantic tokens
                  onVal = L > 0.5 ? '#000000' : '#ffffff';
                  tokenName = normalizeHex(onVal); // Show computed value as fallback
                } else {
                  onVal = '#ffffff';
                  tokenName = '#ffffff';
                }
              } catch (e) {
                onVal = '#ffffff';
                tokenName = '#ffffff';
              }
            }
          }

          // Display the token name instead of the hex value when available
          el.textContent = tokenName || 'unset';

          // Update text swatch - still use the actual color value, not the token name
          var textSwatch = el.parentElement.querySelector('.swatch-thumb-text');
          if (textSwatch && onVal && onVal !== 'unset') {
            var normalizedOnVal = normalizeHex(onVal);
            // Apply the computed on-color as the text color for the 'Aa' sample inside the swatch
            textSwatch.style.color = normalizedOnVal;
          }

          // Calculate and update contrast
          var contrastCell = el.parentElement.querySelector('.list-contrast');
          if (contrastCell && displayVal && onVal) {
            try {
              var bg = parseColor(displayVal);
              var fg = parseColor(onVal);
              if (bg && fg) {
                var contrast = contrastRatio(bg, fg);
                contrastCell.textContent = contrast.toFixed(1) + ':1';
                // Color-code the contrast ratio
                if (contrast >= 7) {
                  contrastCell.style.color = '#006600'; // AAA level
                  contrastCell.style.fontWeight = 'bold';
                } else if (contrast >= 4.5) {
                  contrastCell.style.color = '#006600'; // AA level
                  contrastCell.style.fontWeight = 'normal';
                } else if (contrast >= 3) {
                  contrastCell.style.color = '#cc6600'; // AA Large text
                  contrastCell.style.fontWeight = 'normal';
                } else {
                  contrastCell.style.color = '#cc0000'; // Insufficient
                  contrastCell.style.fontWeight = 'normal';
                }
                // Create a compact badge inside the cell for clearer affordance
                var badge = document.createElement('span');
                badge.className = 'contrast-badge';
                badge.textContent = contrast.toFixed(1) + ':1';
                // Use a white fill background for the compact contrast badge
                // while keeping color indications via badge text color.
                badge.style.background = '#FFFFFF';
                if (contrast >= 7) {
                  badge.style.color = '#006600';
                  badge.style.fontWeight = '700';
                } else if (contrast >= 4.5) {
                  badge.style.color = '#006600';
                  badge.style.fontWeight = '600';
                } else if (contrast >= 3) {
                  badge.style.color = '#cc6600';
                  badge.style.fontWeight = '600';
                } else {
                  badge.style.color = '#a00000';
                  badge.style.fontWeight = '600';
                }
                contrastCell.innerHTML = '';
                contrastCell.appendChild(badge);
              }
            } catch (e) {
              contrastCell.textContent = '–';
              contrastCell.style.color = '';
              contrastCell.style.fontWeight = '';
            }
          }
        }

      } catch (e) {
        console.error('Error processing element:', el, e);
        if (el.classList.contains('list-resolved')) {
          el.textContent = 'error';
        }
      }
    });
  }

  function fillTextSwatches() {
    var spans = document.querySelectorAll('.polaroid-card .swatch-text');
    spans.forEach(function (span) {
      try {
        var card = span.closest('.polaroid-card');
        if (!card) return;
        var ctx = card;
        while (ctx && ctx !== document.documentElement) {
          if (ctx.classList && Array.from(ctx.classList).some(function (cl) {
            return cl.indexOf('flavor-') === 0 || cl.indexOf('theme-') === 0;
          })) break;
          ctx = ctx.parentElement;
        }

        var varName = card.getAttribute('data-var');
        if (!varName) return;

        // Get the background color
        var bgRes = resolveToken(varName, undefined, ctx || document.documentElement);
        var bgVal = bgRes.value;

        if (bgVal && bgVal !== 'unset') {
          var onVal = null;

          // For palette tokens, skip semantic token lookup and compute based on luminance
          if (varName.includes('--palette-')) {
            try {
              var bg = parseColor(bgVal);
              if (bg) {
                var L = luminance(bg);
                onVal = L > 0.5 ? '#000000' : '#ffffff';
              } else {
                onVal = '#ffffff';
              }
            } catch (e) {
              onVal = '#ffffff';
            }
          } else {
            // For semantic color tokens, try the semantic approach first
            var baseKey = varName.replace(/^--color-/, '').replace(/^palette-/, '');
            var onVar = '--color-on-' + baseKey;

            // Try the on-color token first
            var onRes = resolveToken(onVar, undefined, ctx || document.documentElement);
            onVal = onRes.value;

            // If no specific on-color token, use fallbacks
            if (!onVal || onVal === 'unset') {
              if (varName.includes('primary')) {
                onVal = resolveToken('--color-on-primary', undefined, ctx || document.documentElement).value;
              }
              if (!onVal || onVal === 'unset') {
                onVal = resolveToken('--color-on-background', undefined, ctx || document.documentElement).value;
              }
            }

            // If still no token, compute appropriate color
            if (!onVal || onVal === 'unset') {
              try {
                var bg = parseColor(bgVal);
                if (bg) {
                  var L = luminance(bg);
                  onVal = L > 0.5 ? '#000000' : '#ffffff';
                } else {
                  onVal = '#ffffff';
                }
              } catch (e) {
                onVal = '#ffffff';
              }
            }
          }

          // Do not set inline color for polaroid label text; let the theme CSS variable control it.
          // Clear any inline color that might have been applied previously.
          // Apply computed on-color to the polaroid label text so it matches the 'Aa' sample
          try {
            if (onVal && onVal !== 'unset') {
              var normalizedOnVal = normalizeHex(onVal);
              // apply inline color to the polaroid label so it reflects computed on-color
              span.style.color = normalizedOnVal;
              // Do NOT set inline color on .card-token-label code; let it inherit from theme CSS
              var tiny = card.querySelector('.swatch-thumb-text');
              if (tiny) tiny.style.color = normalizedOnVal;
            } else {
              span.style.color = '';
              var labelCode = card.querySelector('.card-token-label code');
              if (labelCode) labelCode.style.color = '';
            }
          } catch (e) {
            span.style.color = '';
          }
        }
      } catch (e) {
        span.style.color = '#ffffff';
      }
    });
  }

  function fullPopulate() {
    populate();
    fillTextSwatches();
  }

  return fullPopulate;
}

export default {
  title: 'Tokens/Colors',
  parameters: { viewMode: 'docs', layout: 'fullscreen' }
};

export const Colors = {
  name: 'Global',
  render: () => renderColors(),
  play: async () => {
    const execute = executeColorLogic();
    console.log('Colors story: executing color logic');

    // Wait a bit for DOM to be ready and execute multiple times
    setTimeout(() => {
      console.log('Colors story: first execution');
      execute();
    }, 100);
    setTimeout(() => {
      console.log('Colors story: second execution');
      execute();
    }, 300);
    setTimeout(() => {
      console.log('Colors story: third execution');
      execute();
    }, 600);

    // Set up mutation observer for theme changes
    setTimeout(() => {
      try {
        // avoid multiple observers across hot reloads
        if (window.__colors_observer) {
          try { window.__colors_observer.disconnect(); } catch (e) { }
          window.__colors_observer = null;
        }
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.attributeName === 'class' || mutation.attributeName === 'data-color-scheme') {
              console.log('Colors story: root attribute change detected, re-executing');
              try { execute(); } catch (e) { console.error(e); }
            }
          });
        });
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-color-scheme'] });
        window.__colors_observer = observer;
      } catch (e) { /* ignore */ }
    }, 100);
    // Final delayed run to catch late theme initialization
    setTimeout(() => { try { execute(); } catch (e) { console.error(e); } }, 1200);
  }
};

export const Blueberry = {
  name: 'Theme: Blueberry',
  render: () => renderColors({ onlyFlavor: 'blueberry' }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
    setTimeout(execute, 1200);
    // ensure observer runs for late theme changes
    setTimeout(() => {
      try {
        if (window.__colors_observer) { window.__colors_observer.disconnect(); window.__colors_observer = null; }
        const obs = new MutationObserver(() => { try { execute(); } catch (e) { } });
        obs.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-color-scheme'] });
        window.__colors_observer = obs;
      } catch (e) { }
    }, 120);
  }
};

export const Strawberry = {
  name: 'Theme: Strawberry',
  render: () => renderColors({ onlyFlavor: 'strawberry' }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
    setTimeout(execute, 1200);
  }
};

export const Vanilla = {
  name: 'Theme: Vanilla',
  render: () => renderColors({ onlyFlavor: 'vanilla' }),
  play: async () => {
    const execute = executeColorLogic();
    setTimeout(execute, 100);
    setTimeout(execute, 300);
    setTimeout(execute, 600);
  }
};
