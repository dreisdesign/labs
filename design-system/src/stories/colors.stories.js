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

        var res = resolveToken(v, undefined, ctx || document.documentElement);
        var displayVal = res.value;

        // Update resolved value cells
        if (el.classList.contains('list-resolved')) {
          el.textContent = displayVal || 'unset';
        }

        // Update chain column with the base palette token that produces the resolved color
        if (el.classList.contains('list-chain')) {
          if (res && res.value && res.value !== 'unset') {
            var resolvedColor = res.value;
            var baseTokenFound = null;

            // Create a mapping of known color values to their palette tokens
            var colorToTokenMap = {
              '#FBFBFD': 'Base 100',      // --palette-base-100
              '#9E9E9E': 'Base 500',      // --palette-base-500
              '#2A2A30': 'Base 800',      // --palette-base-800
              '#2E2B74': 'Blueberry 500', // --palette-blueberry-500
              '#1E193E': 'Blueberry 800', // --palette-blueberry-800
              '#DBD7FF': 'Blueberry 200', // --palette-blueberry-200
              '#F0EEFF': 'Blueberry 100', // --palette-blueberry-100
              '#800800': 'Strawberry 500', // --palette-strawberry-500
              '#4A1614': 'Strawberry 800', // --palette-strawberry-800
              '#FFD3D2': 'Strawberry 200', // --palette-strawberry-200
              '#FFF2F1': 'Strawberry 100', // --palette-strawberry-100
              '#6B5C4B': 'Vanilla 500',   // --palette-vanilla-500
              '#372116': 'Vanilla 800',   // --palette-vanilla-800
              '#E8E2D6': 'Vanilla 200',   // --palette-vanilla-200
              '#F5F1E7': 'Vanilla 100',   // --palette-vanilla-100
              '#00800C': 'Green 500',     // --palette-green-500
              '#FFB300': 'Yellow 500',    // --palette-yellow-500
              '#D32F2F': 'Red 500'        // --palette-red-500
            };

            // Look up the resolved color in our mapping
            baseTokenFound = colorToTokenMap[resolvedColor.toUpperCase()];

            if (baseTokenFound) {
              el.innerHTML = '<code>' + baseTokenFound + '</code>';
            } else {
              // If we can't find it in our mapping, show a simplified version
              el.innerHTML = '<small style="color:#888">Unknown base</small>';
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
            textSwatch.style.background = normalizedOnVal;
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

          span.style.color = onVal;
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
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'class') {
            console.log('Colors story: class change detected, re-executing');
            execute();
          }
        });
      });
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    }, 100);
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
