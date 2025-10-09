import"./labs-flavor-button-D9aMHAuY.js";const s={title:"4. Patterns/Button - Theme/Flavor",argTypes:{variant:{control:{type:"select"},options:["primary","secondary","destructive","icon"]},flavor:{control:"text"}}},r=({flavor:t="blueberry",variant:o="secondary"})=>{const a=document.createElement("div");a.style.maxWidth="360px",a.innerHTML=`<labs-flavor-button variant="${o}"></labs-flavor-button>`;const e=document.documentElement;return e.classList.remove("flavor-vanilla","flavor-blueberry","flavor-strawberry"),e.classList.add(`flavor-${t.toLowerCase()}`),a};r.args={flavor:"blueberry",variant:"secondary"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  flavor = 'blueberry',
  variant = 'secondary'
}) => {
  const wrap = document.createElement('div');
  wrap.style.maxWidth = '360px';
  wrap.innerHTML = \`<labs-flavor-button variant="\${variant}"></labs-flavor-button>\`;
  // Set initial flavor based on the story arg. The component will handle subsequent cycles.
  const root = document.documentElement;
  root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
  root.classList.add(\`flavor-\${flavor.toLowerCase()}\`);
  return wrap;
}`,...r.parameters?.docs?.source}}};const l=["Flavor"];export{r as Flavor,l as __namedExportsOrder,s as default};
