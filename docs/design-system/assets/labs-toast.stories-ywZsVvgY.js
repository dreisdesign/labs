import"./labs-toast-Dmd2L4o2.js";const r={title:"Components/Toast",tags:["autodocs"],args:{open:!1},argTypes:{open:{control:{type:"boolean"},description:"Open toast on render"}}},a={render:()=>{const e=document.createElement("div"),t=document.createElement("labs-toast");document.body.appendChild(t);const n=document.createElement("labs-button");return n.setAttribute("variant","primary"),n.setAttribute("pill",""),n.textContent="Show undo toast",n.addEventListener("click",()=>{t.show("Item deleted",{actionText:"Undo",duration:4e3}),t.addEventListener("action",o=>{const s=document.createElement("p");s.textContent=`Action clicked: ${o.detail.message}`,e.appendChild(s)},{once:!0}),t.addEventListener("dismiss",()=>{const o=document.createElement("p");o.textContent="Toast dismissed",e.appendChild(o)},{once:!0})}),e.appendChild(n),e},play:async({args:e})=>{if(!e.open)return;let t=document.querySelector("labs-toast");t||(t=document.createElement("labs-toast"),document.body.appendChild(t)),t.show("Item deleted",{actionText:"Undo",duration:4e3})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const root = document.createElement('div');
    const toast = document.createElement('labs-toast');
    // ensure single instance in document body for demo
    document.body.appendChild(toast);
    const btn = document.createElement('labs-button');
    btn.setAttribute('variant', 'primary');
    btn.setAttribute('pill', '');
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
  },
  play: async ({
    args
  }) => {
    if (!args.open) return;
    let toast = document.querySelector('labs-toast');
    if (!toast) {
      toast = document.createElement('labs-toast');
      document.body.appendChild(toast);
    }
    toast.show('Item deleted', {
      actionText: 'Undo',
      duration: 4000
    });
  }
}`,...a.parameters?.docs?.source}}};const c=["Default"];export{a as Default,c as __namedExportsOrder,r as default};
