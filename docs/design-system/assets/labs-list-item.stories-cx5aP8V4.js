import"./labs-list-item-D8_J5uIu.js";import"./labs-checkbox-XNLbBo6c.js";import"./iframe-BqgNTvrc.js";import"./preload-helper-PPVm8Dsz.js";const A={title:"2. Components/List Item",component:"labs-list-item",parameters:{docs:{description:{component:"Canonical labs-list-item story. Shows the raw API, attributes, and slots for the base list item component."}}},argTypes:{variant:{control:{type:"select"},options:["text-only","timestamp","task"],description:"Variant of the list item"},text:{control:"text",description:"Text content for the list item"},timestamp:{control:"text",description:"Timestamp (ISO string)"},checked:{control:"boolean",description:"Checked state (only for task variant)",if:{arg:"variant",eq:"task"}}},args:{variant:"text-only",text:"Sample item",timestamp:"",checked:!1}},o=({variant:r,text:s,timestamp:m,checked:d})=>{const t=document.createElement("labs-list-item");if(t.setAttribute("variant",r),t.innerHTML="",t.removeAttribute("timestamp"),t.removeAttribute("checked"),r==="text-only"){const e=document.createElement("span");e.setAttribute("slot","content"),e.textContent=s,t.appendChild(e)}if(r==="timestamp"){m&&t.setAttribute("timestamp",m);const e=document.createElement("labs-icon");e.setAttribute("slot","control"),e.setAttribute("name","check"),e.setAttribute("aria-hidden","true"),t.appendChild(e);const n=document.createElement("div");n.setAttribute("slot","content"),n.textContent=s||"Timestamped item",t.appendChild(n)}if(r==="task"){d&&t.setAttribute("checked","");const e=document.createElement("labs-checkbox");e.setAttribute("slot","control"),d&&e.setAttribute("checked",""),t.appendChild(e);const n=document.createElement("div");n.setAttribute("slot","content"),n.textContent=s,t.appendChild(n);const p=document.createElement("labs-dropdown");p.setAttribute("slot","actions"),t.appendChild(p)}return t},i=o.bind({});i.args={variant:"text-only",text:"Sample item",timestamp:"",checked:!1};i.storyName="Text Only";const c=o.bind({});c.args={variant:"timestamp",text:"Timestamped item",timestamp:new Date().toISOString(),checked:!1};c.storyName="Timestamp";const a=o.bind({});a.args={variant:"task",text:"Task item",timestamp:"",checked:!0};a.storyName="Task";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  variant,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');

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
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  variant,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');

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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  variant,
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');

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
  text,
  timestamp,
  checked
}) => {
  const item = document.createElement('labs-list-item');
  item.setAttribute('variant', variant);
  item.innerHTML = '';
  item.removeAttribute('timestamp');
  item.removeAttribute('checked');

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
}`,...a.parameters?.docs?.source}}};const k=["Default","TextOnly","Timestamp","Task"];export{o as Default,a as Task,i as TextOnly,c as Timestamp,k as __namedExportsOrder,A as default};
