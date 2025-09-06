import"./labs-input-mjzwpLHe.js";const s={title:"Components/Input"},e=()=>{const t=document.createElement("div"),n=document.createElement("labs-input");return n.setAttribute("placeholder","Add item and press Enter"),n.addEventListener("submit",r=>{const d=document.createElement("p");d.textContent=`Submitted: ${r.detail.value}`,t.appendChild(d)}),t.appendChild(n),t};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const el = document.createElement('div');
  const input = document.createElement('labs-input');
  input.setAttribute('placeholder', 'Add item and press Enter');
  input.addEventListener('submit', e => {
    const p = document.createElement('p');
    p.textContent = \`Submitted: \${e.detail.value}\`;
    el.appendChild(p);
  });
  el.appendChild(input);
  return el;
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,s as default};
