const p={title:"Tokens/All",parameters:{docs:{description:{component:"All design tokens (colors, typography, spacing) used in the Labs Design System."}}}},a=()=>{const o=["color-primary","color-secondary","color-background","color-surface","color-success","color-error","color-on-primary","color-on-background","color-on-surface"],t=document.createElement("div");t.style.display="grid",t.style.gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))",t.style.gap="1rem";function r(e){if(e=e.trim(),e.startsWith("#")&&(e=e.slice(1)),e.startsWith("rgb")){const n=e.match(/\d+/g).map(Number);return .299*n[0]+.587*n[1]+.114*n[2]>186?"#222":"#fff"}if(e.length===3&&(e=e.split("").map(n=>n+n).join("")),e.length===6){const n=parseInt(e.substr(0,2),16),s=parseInt(e.substr(2,2),16),i=parseInt(e.substr(4,2),16);return .299*n+.587*s+.114*i>186?"#222":"#fff"}return"#222"}return o.forEach(e=>{const n=document.createElement("div"),s=getComputedStyle(document.documentElement).getPropertyValue(`--${e}`).trim();n.style.background=`var(--${e})`,n.style.color=r(s),n.style.padding="1.5rem",n.style.borderRadius="1rem",n.style.textAlign="center",n.innerHTML=`<strong>--${e}</strong><br/>${s}`,t.appendChild(n)}),t};a.storyName="Colors";const c=()=>{const o=["font-family-base","font-size-base","font-size-lg","font-size-sm","font-weight-regular","font-weight-bold"],t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem",o.forEach(r=>{const e=document.createElement("div");e.style.fontFamily=r==="font-family-base"?`var(--${r})`:"inherit",e.style.fontSize=r.startsWith("font-size")?`var(--${r})`:"1rem",e.style.fontWeight=r.startsWith("font-weight")?`var(--${r})`:"400",e.innerHTML=`<strong>--${r}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${r}`)}</span>`,t.appendChild(e)}),t};c.storyName="Typography";const l=()=>{const o=["space-xs","space-sm","space-md","space-lg","space-xl"],t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="1.5rem",o.forEach(r=>{const e=document.createElement("div");e.style.height=`var(--${r})`,e.style.width="200px",e.style.background="#eee",e.style.border="1px solid #ccc",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="flex-start",e.style.paddingLeft="1rem",e.innerHTML=`<strong>--${r}</strong> <span style="margin-left:0.5rem; color:#666;">${getComputedStyle(document.documentElement).getPropertyValue(`--${r}`)}</span>`,t.appendChild(e)}),t};l.storyName="Spacing";a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const colors = ['color-primary', 'color-secondary', 'color-background', 'color-surface', 'color-success', 'color-error', 'color-on-primary', 'color-on-background', 'color-on-surface'];
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
  container.style.gap = '1rem';
  // Helper to get best contrast text color (black/white) for a given background
  function getContrastTextColor(bgColor) {
    // Remove spaces and hash if present
    bgColor = bgColor.trim();
    if (bgColor.startsWith('#')) bgColor = bgColor.slice(1);
    // Support rgb/rgba
    if (bgColor.startsWith('rgb')) {
      const rgb = bgColor.match(/\\d+/g).map(Number);
      // Use luminance formula
      const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luminance > 186 ? '#222' : '#fff';
    }
    // Support hex
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
    // fallback
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
}`,...a.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:"() => {\n  const tokens = ['font-family-base', 'font-size-base', 'font-size-lg', 'font-size-sm', 'font-weight-regular', 'font-weight-bold'];\n  const container = document.createElement('div');\n  container.style.display = 'flex';\n  container.style.flexDirection = 'column';\n  container.style.gap = '1rem';\n  tokens.forEach(token => {\n    const item = document.createElement('div');\n    item.style.fontFamily = token === 'font-family-base' ? `var(--${token})` : 'inherit';\n    item.style.fontSize = token.startsWith('font-size') ? `var(--${token})` : '1rem';\n    item.style.fontWeight = token.startsWith('font-weight') ? `var(--${token})` : '400';\n    item.innerHTML = `<strong>--${token}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${token}`)}</span>`;\n    container.appendChild(item);\n  });\n  return container;\n}",...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`() => {
  const tokens = ['space-xs', 'space-sm', 'space-md', 'space-lg', 'space-xl'];
  const container = document.createElement('div');
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  container.style.gap = '1.5rem';
  tokens.forEach(token => {
    const item = document.createElement('div');
    item.style.height = \`var(--\${token})\`;
    item.style.width = '200px';
    item.style.background = '#eee';
    item.style.border = '1px solid #ccc';
    item.style.display = 'flex';
    item.style.alignItems = 'center';
    item.style.justifyContent = 'flex-start';
    item.style.paddingLeft = '1rem';
    item.innerHTML = \`<strong>--\${token}</strong> <span style="margin-left:0.5rem; color:#666;">\${getComputedStyle(document.documentElement).getPropertyValue(\`--\${token}\`)}</span>\`;
    container.appendChild(item);
  });
  return container;
}`,...l.parameters?.docs?.source}}};const d=["Colors","Typography","Spacing"];export{a as Colors,l as Spacing,c as Typography,d as __namedExportsOrder,p as default};
