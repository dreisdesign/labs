import"./iframe-Cv1Tuenz.js";import"./labs-card-BAnoYprD.js";import"./preload-helper-PPVm8Dsz.js";const m={title:"Components/Card"},r=()=>{const e=document.createElement("labs-card");e.setAttribute("variant","welcome");const t=document.createElement("div");t.slot="header",t.textContent="Welcome to Today List";const n=document.createElement("div");n.textContent="Start your day by adding the most important tasks. Use the Add button to create your first item.";const o=document.createElement("div");o.slot="actions";const c=document.createElement("labs-button");return c.setAttribute("variant","primary"),c.textContent="Add first item",o.appendChild(c),e.appendChild(t),e.appendChild(n),e.appendChild(o),e},a=()=>{const e=document.createElement("labs-card");return e.innerHTML=`<div style="display:flex;flex-direction:column;gap:4px">
    <div style="font-size:12px;color:var(--color-on-surface-variant)">Entries</div>
    <div style="font-size:28px;font-weight:700">42</div>
  </div>`,e},d=()=>{const e=document.createElement("labs-card");e.setAttribute("variant","metric");const t=document.createElement("div");t.slot="media",t.innerHTML='<div class="metric-label">Errors</div>';const n=document.createElement("div");return n.innerHTML='<div class="metric-value">0</div>',e.appendChild(t),e.appendChild(n),e};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const card = document.createElement('labs-card');
  card.innerHTML = \`<div style="display:flex;flex-direction:column;gap:4px">
    <div style="font-size:12px;color:var(--color-on-surface-variant)">Entries</div>
    <div style="font-size:28px;font-weight:700">42</div>
  </div>\`;
  return card;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-card');
  el.setAttribute('variant', 'metric');
  const label = document.createElement('div');
  label.slot = 'media';
  label.innerHTML = '<div class="metric-label">Errors</div>';
  const value = document.createElement('div');
  value.innerHTML = '<div class="metric-value">0</div>';
  el.appendChild(label);
  el.appendChild(value);
  return el;
}`,...d.parameters?.docs?.source}}};const u=["Welcome","Metric","MetricZero"];export{a as Metric,d as MetricZero,r as Welcome,u as __namedExportsOrder,m as default};
