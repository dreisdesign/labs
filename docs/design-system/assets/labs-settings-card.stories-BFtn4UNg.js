import"./labs-settings-card-DqYT963n.js";import"./iframe-DVmFY04n.js";import"./preload-helper-PPVm8Dsz.js";const d={title:"2. Components/Card/Settings",component:"labs-settings-card",parameters:{docs:{description:{component:"Canonical labs-settings-card story. Use this as a reference for the base settings card component."}}}},t=()=>{const e=document.createElement("labs-settings-card"),n=document.createElement("div");n.slot="header",n.textContent="Settings";const r=document.createElement("div");r.textContent="Settings content goes here.";const o=document.createElement("div");return o.slot="footer",o.textContent="Footer actions",e.appendChild(n),e.appendChild(r),e.appendChild(o),e};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('labs-settings-card');
  // Optionally add header, content, and footer slots for demo
  const header = document.createElement('div');
  header.slot = 'header';
  header.textContent = 'Settings';
  const content = document.createElement('div');
  content.textContent = 'Settings content goes here.';
  const footer = document.createElement('div');
  footer.slot = 'footer';
  footer.textContent = 'Footer actions';
  el.appendChild(header);
  el.appendChild(content);
  el.appendChild(footer);
  return el;
}`,...t.parameters?.docs?.source}}};const l=["Default"];export{t as Default,l as __namedExportsOrder,d as default};
