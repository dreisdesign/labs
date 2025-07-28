const r={title:"Tokens/Spacing",parameters:{docs:{description:{component:"All spacing tokens used in the Labs Design System."}}}},n=()=>{const o=["space-xs","space-sm","space-md","space-lg","space-xl"],t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="1.5rem",o.forEach(s=>{const e=document.createElement("div");e.style.height=`var(--${s})`,e.style.width="200px",e.style.background="#eee",e.style.border="1px solid #ccc",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="flex-start",e.style.paddingLeft="1rem",e.innerHTML=`<strong>--${s}</strong> <span style="margin-left:0.5rem; color:#666;">${getComputedStyle(document.documentElement).getPropertyValue(`--${s}`)}</span>`,t.appendChild(e)}),t};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const c=["Spacing"];export{n as Spacing,c as __namedExportsOrder,r as default};
