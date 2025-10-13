import"./labs-list-item-DatCmgQS.js";import"./labs-checkbox-XNLbBo6c.js";import"./iframe-CVK4Cw3I.js";import"./preload-helper-PPVm8Dsz.js";const k={title:"2. Components/List Item",component:"labs-list-item",parameters:{docs:{description:{component:"Canonical labs-list-item story. Shows the raw API, attributes, and slots for the base list item component."}}},argTypes:{variant:{control:{type:"select"},options:["text-only","timestamp","task"],description:"Variant of the list item"},state:{control:{type:"select"},options:["","archived"],description:"State of the list item (e.g., archived)"},text:{control:"text",description:"Text content for the list item"},timestamp:{control:"text",description:"Timestamp (ISO string)"},checked:{control:"boolean",description:"Checked state (only for task variant)",if:{arg:"variant",eq:"task"}}},args:{variant:"text-only",state:"",text:"Sample item",timestamp:"",checked:!1}},i=({variant:s,state:m,text:r,timestamp:d,checked:p})=>{const t=document.createElement("labs-list-item");if(t.setAttribute("variant",s),t.innerHTML="",t.removeAttribute("timestamp"),t.removeAttribute("checked"),m?t.setAttribute("state",m):t.removeAttribute("state"),s==="text-only"){const e=document.createElement("span");e.setAttribute("slot","content"),e.textContent=r,t.appendChild(e)}if(s==="timestamp"){d&&t.setAttribute("timestamp",d);const e=document.createElement("labs-icon");e.setAttribute("slot","control"),e.setAttribute("name","check"),e.setAttribute("aria-hidden","true"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("slot","content"),n.textContent=r||"Timestamped item",t.appendChild(n)}if(s==="task"){p&&t.setAttribute("checked","");const e=document.createElement("labs-checkbox");e.setAttribute("slot","control"),p&&e.setAttribute("checked",""),t.appendChild(e);const n=document.createElement("div");n.setAttribute("slot","content"),n.textContent=r,t.appendChild(n);const l=document.createElement("labs-dropdown");l.setAttribute("slot","actions"),t.appendChild(l)}return t},o=i.bind({});o.args={variant:"text-only",text:"Sample item",timestamp:"",checked:!1};o.storyName="Text Only";const c=i.bind({});c.args={variant:"timestamp",text:"Timestamped item",timestamp:new Date().toISOString(),checked:!1};c.storyName="Timestamp";const a=i.bind({});a.args={variant:"task",text:"Task item",timestamp:"",checked:!0};a.storyName="Task";i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  variant,
  state,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');
  if (state) item.setAttribute('state', state);else item.removeAttribute('state');

  // TEXT-ONLY variant: match wrapped story
  if (variant === 'text-only') {
    const content = document.createElement('span');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
  }

  // TIMESTAMP variant: match wrapped story
  if (variant === 'timestamp') {
    if (timestamp) item.setAttribute('timestamp', timestamp);
    const icon = document.createElement('labs-icon');
    icon.setAttribute('slot', 'control');
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'true');
    item.appendChild(icon);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text || 'Timestamped item';
    item.appendChild(content);
  }

  // TASK variant: match wrapped story
  if (variant === 'task') {
    if (checked) item.setAttribute('checked', '');
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (checked) checkbox.setAttribute('checked', '');
    item.appendChild(checkbox);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');
    item.appendChild(dropdown);
  }
  return item;
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  variant,
  state,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');
  if (state) item.setAttribute('state', state);else item.removeAttribute('state');

  // TEXT-ONLY variant: match wrapped story
  if (variant === 'text-only') {
    const content = document.createElement('span');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
  }

  // TIMESTAMP variant: match wrapped story
  if (variant === 'timestamp') {
    if (timestamp) item.setAttribute('timestamp', timestamp);
    const icon = document.createElement('labs-icon');
    icon.setAttribute('slot', 'control');
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'true');
    item.appendChild(icon);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text || 'Timestamped item';
    item.appendChild(content);
  }

  // TASK variant: match wrapped story
  if (variant === 'task') {
    if (checked) item.setAttribute('checked', '');
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (checked) checkbox.setAttribute('checked', '');
    item.appendChild(checkbox);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');
    item.appendChild(dropdown);
  }
  return item;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  variant,
  state,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');
  if (state) item.setAttribute('state', state);else item.removeAttribute('state');

  // TEXT-ONLY variant: match wrapped story
  if (variant === 'text-only') {
    const content = document.createElement('span');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
  }

  // TIMESTAMP variant: match wrapped story
  if (variant === 'timestamp') {
    if (timestamp) item.setAttribute('timestamp', timestamp);
    const icon = document.createElement('labs-icon');
    icon.setAttribute('slot', 'control');
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'true');
    item.appendChild(icon);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text || 'Timestamped item';
    item.appendChild(content);
  }

  // TASK variant: match wrapped story
  if (variant === 'task') {
    if (checked) item.setAttribute('checked', '');
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (checked) checkbox.setAttribute('checked', '');
    item.appendChild(checkbox);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');
    item.appendChild(dropdown);
  }
  return item;
}`,...c.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  variant,
  state,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');
  if (state) item.setAttribute('state', state);else item.removeAttribute('state');

  // TEXT-ONLY variant: match wrapped story
  if (variant === 'text-only') {
    const content = document.createElement('span');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
  }

  // TIMESTAMP variant: match wrapped story
  if (variant === 'timestamp') {
    if (timestamp) item.setAttribute('timestamp', timestamp);
    const icon = document.createElement('labs-icon');
    icon.setAttribute('slot', 'control');
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'true');
    item.appendChild(icon);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text || 'Timestamped item';
    item.appendChild(content);
  }

  // TASK variant: match wrapped story
  if (variant === 'task') {
    if (checked) item.setAttribute('checked', '');
    const checkbox = document.createElement('labs-checkbox');
    checkbox.setAttribute('slot', 'control');
    if (checked) checkbox.setAttribute('checked', '');
    item.appendChild(checkbox);
    const content = document.createElement('div');
    content.setAttribute('slot', 'content');
    content.textContent = text;
    item.appendChild(content);
    const dropdown = document.createElement('labs-dropdown');
    dropdown.setAttribute('slot', 'actions');
    item.appendChild(dropdown);
  }
  return item;
}`,...a.parameters?.docs?.source}}};const x=["Default","TextOnly","Timestamp","Task"];export{i as Default,a as Task,o as TextOnly,c as Timestamp,x as __namedExportsOrder,k as default};
