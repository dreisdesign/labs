import"./labs-flavor-button-D9aMHAuY.js";import"./iframe-BSSRKtkQ.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"Patterns/Buttons/Flavor Button",argTypes:{variant:{control:{type:"select",options:["primary","secondary","destructive","icon"]}},flavor:{control:"text"}}},r=({flavor:o="blueberry",variant:e="secondary"})=>{const t=document.createElement("div");t.style.maxWidth="360px",t.innerHTML=`<labs-flavor-button variant="${e}"></labs-flavor-button>`;const a=document.documentElement;return a.classList.remove("flavor-vanilla","flavor-blueberry","flavor-strawberry"),a.classList.add(`flavor-${o.toLowerCase()}`),t};r.args={flavor:"blueberry",variant:"secondary"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};const v=["FlavorButton"];export{r as FlavorButton,v as __namedExportsOrder,c as default};
