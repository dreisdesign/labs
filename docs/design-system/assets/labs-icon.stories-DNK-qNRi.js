import"./labs-icon-D1sweX60.js";import{i as a}from"./icons-list-C5cNKhua.js";const m={title:"Icons/Default",tags:["autodocs"],argTypes:{name:{control:{type:"select"},options:a,defaultValue:"cancel",description:"Icon name from the icon registry"},size:{control:{type:"number",min:16,max:128,step:4},description:"Icon size in pixels"},color:{control:{type:"color",presetColors:[]},description:"Icon color"}},parameters:{docs:{description:{component:"@type { import('@storybook/web-components').Meta }"}}}},t={render:n=>{const e=n.size||48,s=n.color||"currentColor",o=document.createElement("div");o.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 2rem;
      background: var(--color-surface);
      border-radius: 8px;
      border: 1px solid var(--color-primary-25);
      min-width: ${e+32}px;
      min-height: ${e+32}px;
      box-sizing: border-box;
      overflow: visible;
    `;const r=document.createElement("labs-icon");r.setAttribute("name",n.name),r.setAttribute("size",e.toString()),r.style.cssText=`
      color: ${s};
      display: block;
      width: ${e}px;
      height: ${e}px;
      min-width: ${e}px;
      min-height: ${e}px;
      box-sizing: content-box;
      overflow: visible;
    `;const c=document.createElement("div");c.textContent=`Icon: ${n.name}`,c.style.cssText=`
      color: var(--color-on-surface);
      font-size: 0.875rem;
      text-align: center;
    `;const i=document.createElement("code");return i.textContent=`<labs-icon name="${n.name}"></labs-icon>`,i.style.cssText=`
  background: var(--color-surface);
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      color: var(--color-on-background);
    `,o.appendChild(r),o.appendChild(c),o.appendChild(i),o},args:{name:"settings",size:48,color:"currentColor"},parameters:{docs:{description:{story:"Default icon story with live controls for name, size, and color."}}}},p=["Default"];t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const size = args.size || 48;
    const color = args.color || "currentColor";
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
      min-width: \${size + 32}px;
      min-height: \${size + 32}px;
      box-sizing: border-box;
      overflow: visible;
    \`;
    const icon = document.createElement("labs-icon");
    icon.setAttribute("name", args.name);
    icon.setAttribute("size", size.toString());
    icon.style.cssText = \`
      color: \${color};
      display: block;
      width: \${size}px;
      height: \${size}px;
      min-width: \${size}px;
      min-height: \${size}px;
      box-sizing: content-box;
      overflow: visible;
    \`;
    const label = document.createElement("div");
    label.textContent = \`Icon: \${args.name}\`;
    label.style.cssText = \`
      color: var(--color-on-surface);
      font-size: 0.875rem;
      text-align: center;
    \`;
    const code = document.createElement("code");
    code.textContent = \`<labs-icon name=\\"\${args.name}\\"></labs-icon>\`;
    code.style.cssText = \`
  background: var(--color-surface);
      padding: 0.5rem;
      border-radius: 4px;
      font-size: 0.75rem;
      color: var(--color-on-background);
    \`;
    container.appendChild(icon);
    container.appendChild(label);
    container.appendChild(code);
    return container;
  },
  args: {
    name: "settings",
    size: 48,
    color: "currentColor"
  },
  parameters: {
    docs: {
      description: {
        story: "Default icon story with live controls for name, size, and color."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:"Default icon story",...t.parameters?.docs?.description}}};export{t as Default,p as __namedExportsOrder,m as default};
