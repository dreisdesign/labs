import"./labs-card-B1H2P0RF.js";import"./iframe-D2--qRxS.js";import"./preload-helper-D9Z9MdNV.js";const i={title:"Components/Card"},e=()=>{const t=document.createElement("labs-card");t.setAttribute("variant","welcome");const n=document.createElement("div");n.slot="header",n.textContent="Welcome to Today List";const o=document.createElement("div");o.textContent="Start your day by adding the most important tasks. Use the Add button to create your first item.";const a=document.createElement("div");a.slot="actions";const d=document.createElement("labs-button");return d.setAttribute("variant","primary"),d.textContent="Add first item",a.appendChild(d),t.appendChild(n),t.appendChild(o),t.appendChild(a),t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'welcome');
  const header = document.createElement('div');
  header.slot = 'header';
  header.textContent = 'Welcome to Today List';
  const desc = document.createElement('div');
  desc.textContent = 'Start your day by adding the most important tasks. Use the Add button to create your first item.';
  const actions = document.createElement('div');
  actions.slot = 'actions';
  const addBtn = document.createElement('labs-button');
  addBtn.setAttribute('variant', 'primary');
  addBtn.textContent = 'Add first item';
  actions.appendChild(addBtn);
  el.appendChild(header);
  el.appendChild(desc);
  el.appendChild(actions);
  return el;
}`,...e.parameters?.docs?.source}}};const m=["Welcome"];export{e as Welcome,m as __namedExportsOrder,i as default};
