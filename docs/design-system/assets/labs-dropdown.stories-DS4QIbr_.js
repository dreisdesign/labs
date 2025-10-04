import"./labs-list-item-DczhaX0n.js";const c={title:"Components/Dropdown",component:"labs-dropdown",tags:["autodocs"],argTypes:{open:{control:"boolean"},archived:{control:"boolean"},restored:{control:"boolean"},only:{name:"Only Menu Items",description:"Multi-select which menu items to render (archive, delete)",control:{type:"inline-check"},options:["archive","delete"]}},args:{open:!1,archived:!1,restored:!1,only:[]}},i=({open:r=!1,archived:o=!1,restored:s=!1,only:n=[]}={})=>{const e=document.createElement("div");e.style.padding="20px",e.style.display="flex",e.style.alignItems="center",e.style.gap="12px",e.innerHTML="";const t=document.createElement("labs-dropdown");r?t.setAttribute("open",""):t.removeAttribute("open"),o?t.setAttribute("archived",""):t.removeAttribute("archived"),s?t.setAttribute("restored",""):t.removeAttribute("restored"),Array.isArray(n)&&n.length?t.setAttribute("only",n.join(",")):typeof n=="string"&&n&&t.setAttribute("only",n);const l=document.createElement("div");return l.textContent="More actions",l.style.fontSize="0.95rem",l.style.color="var(--color-on-surface-variant, #666)",e.appendChild(l),e.appendChild(t),e};i.args={only:[]};const a=({open:r=!0,archived:o=!1,restored:s=!1,only:n=[]}={})=>{const e=document.createElement("div");e.style.padding="20px",e.innerHTML="";const t=document.createElement("labs-dropdown");return r&&t.setAttribute("open",""),Array.isArray(n)&&n.length?t.setAttribute("only",n.join(",")):typeof n=="string"&&n&&t.setAttribute("only",n),o&&t.setAttribute("archived",""),s&&t.setAttribute("restored",""),e.appendChild(t),e};a.args={open:!0};const d=({open:r=!1,archived:o=!1,restored:s=!1,only:n=[]}={})=>{const e=document.createElement("div");e.style.padding="8px",e.style.width="40px",e.style.display="flex",e.style.alignItems="center",e.style.justifyContent="center",e.style.boxSizing="border-box",e.innerHTML="";const t=document.createElement("labs-dropdown");return r&&t.setAttribute("open",""),o&&t.setAttribute("archived",""),s&&t.setAttribute("restored",""),Array.isArray(n)&&n.length?t.setAttribute("only",n.join(",")):typeof n=="string"&&n&&t.setAttribute("only",n),e.appendChild(t),e};d.args={only:[]};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  open = false,
  archived = false,
  restored = false,
  only = []
} = {}) => {
  // Render dropdown inline with a short label to show typical placement
  const wrap = document.createElement('div');
  wrap.style.padding = '20px';
  wrap.style.display = 'flex';
  wrap.style.alignItems = 'center';
  wrap.style.gap = '12px';
  wrap.innerHTML = '';
  const dd = document.createElement('labs-dropdown');
  if (open) dd.setAttribute('open', '');else dd.removeAttribute('open');
  if (archived) dd.setAttribute('archived', '');else dd.removeAttribute('archived');
  if (restored) dd.setAttribute('restored', '');else dd.removeAttribute('restored');
  if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));else if (typeof only === 'string' && only) dd.setAttribute('only', only);
  const label = document.createElement('div');
  label.textContent = 'More actions';
  label.style.fontSize = '0.95rem';
  label.style.color = 'var(--color-on-surface-variant, #666)';
  wrap.appendChild(label);
  wrap.appendChild(dd);
  return wrap;
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  open = true,
  archived = false,
  restored = false,
  only = []
} = {}) => {
  const wrap = document.createElement('div');
  wrap.style.padding = '20px';
  wrap.innerHTML = '';
  const dd = document.createElement('labs-dropdown');
  if (open) dd.setAttribute('open', '');
  if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));else if (typeof only === 'string' && only) dd.setAttribute('only', only);
  if (archived) dd.setAttribute('archived', '');
  if (restored) dd.setAttribute('restored', '');
  wrap.appendChild(dd);
  return wrap;
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  open = false,
  archived = false,
  restored = false,
  only = []
} = {}) => {
  // Render the dropdown in a tight container so only the trigger (icon button)
  // is visible. This makes IconOnly visually distinct from Default.
  const wrap = document.createElement('div');
  wrap.style.padding = '8px';
  wrap.style.width = '40px';
  wrap.style.display = 'flex';
  wrap.style.alignItems = 'center';
  wrap.style.justifyContent = 'center';
  wrap.style.boxSizing = 'border-box';
  wrap.innerHTML = '';
  const dd = document.createElement('labs-dropdown');
  if (open) dd.setAttribute('open', '');
  if (archived) dd.setAttribute('archived', '');
  if (restored) dd.setAttribute('restored', '');
  if (Array.isArray(only) && only.length) dd.setAttribute('only', only.join(','));else if (typeof only === 'string' && only) dd.setAttribute('only', only);
  // Closed by default so only the icon trigger is visible in this tight layout
  wrap.appendChild(dd);
  return wrap;
}`,...d.parameters?.docs?.source}}};const u=["Default","Open","IconOnly"];export{i as Default,d as IconOnly,a as Open,u as __namedExportsOrder,c as default};
