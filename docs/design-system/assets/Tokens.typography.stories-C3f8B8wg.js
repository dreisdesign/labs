const a={title:"Tokens/Typography",parameters:{docs:{description:{component:"All typography tokens used in the Labs Design System."}}}},o=()=>{const s=["font-family-base","font-size-base","font-size-lg","font-size-sm","font-weight-regular","font-weight-bold"],t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="1rem",s.forEach(e=>{const n=document.createElement("div");n.style.fontFamily=e==="font-family-base"?`var(--${e})`:"inherit",n.style.fontSize=e.startsWith("font-size")?`var(--${e})`:"1rem",n.style.fontWeight=e.startsWith("font-weight")?`var(--${e})`:"400",n.innerHTML=`<strong>--${e}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${e}`)}</span>`,t.appendChild(n)}),t};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const tokens = ["font-family-base", "font-size-base", "font-size-lg", "font-size-sm", "font-weight-regular", "font-weight-bold"];
  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "1rem";
  tokens.forEach(token => {
    const item = document.createElement("div");
    item.style.fontFamily = token === "font-family-base" ? \`var(--\${token})\` : "inherit";
    item.style.fontSize = token.startsWith("font-size") ? \`var(--\${token})\` : "1rem";
    item.style.fontWeight = token.startsWith("font-weight") ? \`var(--\${token})\` : "400";
    item.innerHTML = \`<strong>--\${token}</strong>: <span style='font-family:var(--font-family-base);'>\${getComputedStyle(document.documentElement).getPropertyValue(\`--\${token}\`)}</span>\`;
    container.appendChild(item);
  });
  return container;
}`,...o.parameters?.docs?.source}}};const r=["Typography"];export{o as Typography,r as __namedExportsOrder,a as default};
