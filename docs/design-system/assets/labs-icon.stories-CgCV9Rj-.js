import"./labs-icon-mNfcruWU.js";import{i}from"./icons-list-DSoMNQaz.js";const m={title:"Icons/Default",argTypes:{name:{control:{type:"select"},options:i,defaultValue:"cancel"},size:{control:{type:"number",min:16,max:128,step:4},description:"Icon size in pixels"},color:{control:{type:"color",presetColors:[]},description:"Icon color"}}},o=e=>{const a=e.size||48,s=e.color||"currentColor",n=document.createElement("div");n.style.cssText=`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: var(--color-surface);
    border-radius: 8px;
    border: 1px solid var(--color-primary-25);
  `;const t=document.createElement("labs-icon");t.setAttribute("name",e.name),t.setAttribute("size",a.toString()),t.style.cssText=`
    color: ${s};
    display: flex;
    align-items: center;
    justify-content: center;
  `;const r=document.createElement("div");r.textContent=`Icon: ${e.name}`,r.style.cssText=`
    color: var(--color-on-surface);
    font-size: 0.875rem;
    text-align: center;
  `;const c=document.createElement("code");return c.textContent=`<labs-icon name="${e.name}"></labs-icon>`,c.style.cssText=`
    background: var(--color-background);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: var(--color-on-background);
  `,n.appendChild(t),n.appendChild(r),n.appendChild(c),n};o.args={name:"settings",size:48,color:"currentColor"};const p=["Default"];o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`args => {
  const size = args.size || 48; // Increased default size
  const color = args.color || "currentColor";

  // Create a container with better presentation
  const container = document.createElement("div");
  container.style.cssText = \`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    padding: 2rem;
    background: var(--color-surface);
    border-radius: 8px;
    border: 1px solid var(--color-primary-25);
  \`;
  const icon = document.createElement("labs-icon");
  icon.setAttribute("name", args.name);
  icon.setAttribute("size", size.toString());
  icon.style.cssText = \`
    color: \${color};
    display: flex;
    align-items: center;
    justify-content: center;
  \`;
  const label = document.createElement("div");
  label.textContent = \`Icon: \${args.name}\`;
  label.style.cssText = \`
    color: var(--color-on-surface);
    font-size: 0.875rem;
    text-align: center;
  \`;
  const code = document.createElement("code");
  code.textContent = \`<labs-icon name="\${args.name}"></labs-icon>\`;
  code.style.cssText = \`
    background: var(--color-background);
    padding: 0.5rem;
    border-radius: 4px;
    font-size: 0.75rem;
    color: var(--color-on-background);
  \`;
  container.appendChild(icon);
  container.appendChild(label);
  container.appendChild(code);
  return container;
}`,...o.parameters?.docs?.source}}};export{o as Default,p as __namedExportsOrder,m as default};
