import"./iframe-CmtmUGKZ.js";import"./labs-card-D2Mfv5yJ.js";import"./preload-helper-PPVm8Dsz.js";const c={title:"2. Components/Card/Welcome",component:"labs-card",parameters:{docs:{description:{component:"Canonical labs-card story. Use this as a reference for the base card component."}}}},n=()=>{const t=document.createElement("labs-card");t.setAttribute("variant","welcome"),t.setAttribute("align","center");const a=document.createElement("div");a.slot="header",a.textContent="Welcome to Today List";const r=document.createElement("div");r.textContent="Start your day by adding the most important tasks. Use the Add button to create your first item.";const e=document.createElement("labs-button");return e.setAttribute("variant","primary"),e.setAttribute("slot","actions"),e.textContent="Add first item",t.appendChild(a),t.appendChild(r),t.appendChild(e),t};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'welcome');
  el.setAttribute('align', 'center');
  const header = document.createElement('div');
  header.slot = 'header';
  header.textContent = 'Welcome to Today List';
  const desc = document.createElement('div');
  desc.textContent = 'Start your day by adding the most important tasks. Use the Add button to create your first item.';
  const addBtn = document.createElement('labs-button');
  addBtn.setAttribute('variant', 'primary');
  addBtn.setAttribute('slot', 'actions');
  addBtn.textContent = 'Add first item';
  el.appendChild(header);
  el.appendChild(desc);
  el.appendChild(addBtn);
  return el;
}`,...n.parameters?.docs?.source}}};const i=["Default"];export{n as Default,i as __namedExportsOrder,c as default};
