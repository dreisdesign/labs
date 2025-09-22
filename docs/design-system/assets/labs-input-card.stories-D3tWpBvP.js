import"./labs-input-card-CKscVP7Z.js";import"./labs-overlay-AWkXp-xX.js";const c={title:"Components/Input Card",tags:["autodocs"],argTypes:{rows:{control:{type:"number",min:1,max:8},defaultValue:2},maxWidth:{control:"text",defaultValue:"520px"},overlaySize:{control:{type:"select",options:["small","medium","large","full"]},defaultValue:"medium"},transparent:{control:"boolean",defaultValue:!0}}},e=({rows:r,maxWidth:n})=>{const a=document.createElement("div");a.style.padding="20px";const t=document.createElement("labs-input-card");return t.style.maxWidth=n,setTimeout(()=>{const o=t.shadowRoot?.querySelector("#cardInput")||t.querySelector("#cardInput");o&&(o.rows=r)},0),a.appendChild(t),a};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  rows,
  maxWidth
}) => {
  const host = document.createElement('div');
  host.style.padding = '20px';
  const card = document.createElement('labs-input-card');
  card.style.maxWidth = maxWidth;
  // Wait for custom element to render its internals
  setTimeout(() => {
    const ta = card.shadowRoot?.querySelector('#cardInput') || card.querySelector('#cardInput');
    if (ta) ta.rows = rows;
  }, 0);
  host.appendChild(card);
  return host;
}`,...e.parameters?.docs?.source}}};const l=["Standalone"];export{e as Standalone,l as __namedExportsOrder,c as default};
