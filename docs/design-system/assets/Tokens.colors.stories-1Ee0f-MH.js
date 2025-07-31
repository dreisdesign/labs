const i={title:"Tokens/Colors",parameters:{docs:{description:{component:"All color tokens used in the Labs Design System."}}}},t=()=>{const c=["color-primary","color-secondary","color-primary-darker","color-background","color-surface","color-success","color-error","color-error-inactive","color-on-primary","color-on-background","color-on-surface","color-on-error","color-on-error-inactive","color-primary-75","color-primary-25","color-secondary-75","color-on-surface-75","settings-icon-color"],n=document.createElement("div");n.style.display="grid",n.style.gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))",n.style.gap="1rem";function s(r){if(r=r.trim(),r.startsWith("#")&&(r=r.slice(1)),r.startsWith("rgb")){const o=r.match(/\d+/g).map(Number);return .299*o[0]+.587*o[1]+.114*o[2]>186?"#222":"#fff"}if(r.length===3&&(r=r.split("").map(o=>o+o).join("")),r.length===6){const o=parseInt(r.substr(0,2),16),e=parseInt(r.substr(2,2),16),a=parseInt(r.substr(4,2),16);return .299*o+.587*e+.114*a>186?"#222":"#fff"}return"#222"}return c.forEach(r=>{const o=document.createElement("div"),e=getComputedStyle(document.documentElement).getPropertyValue(`--${r}`).trim();o.style.background=`var(--${r})`,o.style.color=s(e),o.style.padding="1.5rem",o.style.borderRadius="1rem",o.style.textAlign="center",o.innerHTML=`<strong>--${r}</strong><br/>${e}`,n.appendChild(o)}),n};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const colors = ['color-primary', 'color-secondary', 'color-primary-darker', 'color-background', 'color-surface', 'color-success', 'color-error', 'color-error-inactive', 'color-on-primary', 'color-on-background', 'color-on-surface', 'color-on-error', 'color-on-error-inactive', 'color-primary-75', 'color-primary-25', 'color-secondary-75', 'color-on-surface-75', 'settings-icon-color'];
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
  container.style.gap = '1rem';
  function getContrastTextColor(bgColor) {
    bgColor = bgColor.trim();
    if (bgColor.startsWith('#')) bgColor = bgColor.slice(1);
    if (bgColor.startsWith('rgb')) {
      const rgb = bgColor.match(/\\d+/g).map(Number);
      const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luminance > 186 ? '#222' : '#fff';
    }
    if (bgColor.length === 3) {
      bgColor = bgColor.split('').map(x => x + x).join('');
    }
    if (bgColor.length === 6) {
      const r = parseInt(bgColor.substr(0, 2), 16);
      const g = parseInt(bgColor.substr(2, 2), 16);
      const b = parseInt(bgColor.substr(4, 2), 16);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 186 ? '#222' : '#fff';
    }
    return '#222';
  }
  colors.forEach(token => {
    const swatch = document.createElement('div');
    const bgValue = getComputedStyle(document.documentElement).getPropertyValue(\`--\${token}\`).trim();
    swatch.style.background = \`var(--\${token})\`;
    swatch.style.color = getContrastTextColor(bgValue);
    swatch.style.padding = '1.5rem';
    swatch.style.borderRadius = '1rem';
    swatch.style.textAlign = 'center';
    swatch.innerHTML = \`<strong>--\${token}</strong><br/>\${bgValue}\`;
    container.appendChild(swatch);
  });
  return container;
}`,...t.parameters?.docs?.source}}};const m=["Colors"];export{t as Colors,m as __namedExportsOrder,i as default};
