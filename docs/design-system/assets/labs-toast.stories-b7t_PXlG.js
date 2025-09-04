import"./labs-toast-fgwwwf7I.js";const c={title:"Components/Toast"},o=()=>{const t=document.createElement("div"),e=document.createElement("labs-toast");document.body.appendChild(e);const d=document.createElement("button");return d.textContent="Show undo toast",d.addEventListener("click",()=>{e.show("Item deleted",{actionText:"Undo",duration:4e3}),e.addEventListener("action",n=>{const s=document.createElement("p");s.textContent=`Action clicked: ${n.detail.message}`,t.appendChild(s)},{once:!0}),e.addEventListener("dismiss",()=>{const n=document.createElement("p");n.textContent="Toast dismissed",t.appendChild(n)},{once:!0})}),t.appendChild(d),t};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const root = document.createElement('div');
  const toast = document.createElement('labs-toast');
  // ensure single instance in document body for demo
  document.body.appendChild(toast);
  const btn = document.createElement('button');
  btn.textContent = 'Show undo toast';
  btn.addEventListener('click', () => {
    toast.show('Item deleted', {
      actionText: 'Undo',
      duration: 4000
    });
    toast.addEventListener('action', e => {
      const p = document.createElement('p');
      p.textContent = \`Action clicked: \${e.detail.message}\`;
      root.appendChild(p);
    }, {
      once: true
    });
    toast.addEventListener('dismiss', () => {
      const p = document.createElement('p');
      p.textContent = 'Toast dismissed';
      root.appendChild(p);
    }, {
      once: true
    });
  });
  root.appendChild(btn);
  return root;
}`,...o.parameters?.docs?.source}}};const r=["Default"];export{o as Default,r as __namedExportsOrder,c as default};
