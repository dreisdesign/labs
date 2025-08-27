import"./iframe-Ds_r7HSn.js";import{i as e}from"./icons-list-C5cNKhua.js";import"./preload-helper-D9Z9MdNV.js";const f={title:"Patterns/Buttons",component:"labs-button",tags:["autodocs"],argTypes:{variant:{control:{type:"select"},options:["primary","secondary","destructive"],description:"Visual variant for the button (icon-only usage is provided as a Pattern)"},size:{control:{type:"select"},options:["small","medium","large"],description:"Button size"},"icon-left":{control:{type:"select"},options:e,description:"Name of left icon (optional)"},"icon-right":{control:{type:"select"},options:e,description:"Name of right icon (optional)"},children:{control:"text",name:"Label",description:"Button label text"}}},o={args:{variant:"primary",size:"medium","icon-left":"","icon-right":"",children:"Button"},render:({variant:i,size:r,"icon-left":t,"icon-right":n,children:s})=>{const a=t?`<labs-icon name="${t}"></labs-icon>`:"",c=n?`<labs-icon name="${n}"></labs-icon>`:"",l=t?`icon-left="${t}"`:"",p=n?`icon-right="${n}"`:"";return`<labs-button variant="${i}" size="${r}" ${l} ${p}>${a}${s}${c}</labs-button>`},parameters:{docs:{description:{story:"Default button example. Use controls to change variant, size and icons."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'medium',
    'icon-left': '',
    'icon-right': '',
    children: 'Button'
  },
  render: ({
    variant,
    size,
    'icon-left': iconLeft,
    'icon-right': iconRight,
    children
  }) => {
    const left = iconLeft ? \`<labs-icon name="\${iconLeft}"></labs-icon>\` : '';
    const right = iconRight ? \`<labs-icon name="\${iconRight}"></labs-icon>\` : '';
    const leftAttr = iconLeft ? \`icon-left="\${iconLeft}"\` : '';
    const rightAttr = iconRight ? \`icon-right="\${iconRight}"\` : '';
    return \`<labs-button variant="\${variant}" size="\${size}" \${leftAttr} \${rightAttr}>\${left}\${children}\${right}</labs-button>\`;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default button example. Use controls to change variant, size and icons.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const g=["Default"];export{o as Default,g as __namedExportsOrder,f as default};
