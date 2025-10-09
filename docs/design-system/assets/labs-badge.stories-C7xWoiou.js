import"./labs-badge-BIUBxhY5.js";const s={title:"2. Components/Badge",argTypes:{variant:{control:{type:"select",options:["","secondary","success","warning","error"]}},text:{control:"text"}}},e=({variant:a="",text:r="Badge"}={})=>{const t=document.createElement("labs-badge");return a&&t.setAttribute("variant",a),t.textContent=r,t};e.args={variant:"",text:"Badge"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  variant = '',
  text = 'Badge'
} = {}) => {
  const el = document.createElement('labs-badge');
  if (variant) el.setAttribute('variant', variant);
  el.textContent = text;
  return el;
}`,...e.parameters?.docs?.source}}};const o=["Default"];export{e as Default,o as __namedExportsOrder,s as default};
