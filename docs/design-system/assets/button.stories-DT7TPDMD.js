import"./iframe-DJqNhYZN.js";import"./preload-helper-D9Z9MdNV.js";const d=document.createElement("style");d.innerHTML=`
  .labs-autodocs-surface {
    background: none !important;
    box-shadow: none !important;
  }
`;document.head.appendChild(d);const l={title:"Components/Button",component:"labs-button",tags:["autodocs"],parameters:{docs:{description:{component:"Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","destructive","transparent"],description:"Button variant style"},size:{control:{type:"select"},options:["small","medium","large"],description:"Button size"},disabled:{control:{type:"boolean"},description:"Disable the button"},text:{control:{type:"text"},description:"Button text content"},leftIcon:{control:{type:"text"},description:"Left icon name (optional)"},rightIcon:{control:{type:"text"},description:"Right icon name (optional)"}},args:{variant:"primary",size:"medium",disabled:!1,text:"Button",leftIcon:"",rightIcon:""}},e={name:"Default",render:n=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button
        variant="${n.variant}"
        ${n.size?`size="${n.size}"`:""}
        ${n.disabled?"disabled":""}
      >
        ${n.leftIcon?`<labs-icon slot="icon-left" name="${n.leftIcon}"></labs-icon>`:""}
        ${n.text}
        ${n.rightIcon?`<labs-icon slot="icon-right" name="${n.rightIcon}"></labs-icon>`:""}
      </labs-button>
    </div>
  `},o={name:"Primary",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">Primary</labs-button>
    </div>
  `},t={name:"Secondary",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="secondary">Secondary</labs-button>
    </div>
  `},a={name:"With Left Icon",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        With Left Icon
      </labs-button>
    </div>
  `},r={name:"With Right Icon",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        With Right Icon
        <labs-icon slot="icon-right" name="edit"></labs-icon>
      </labs-button>
    </div>
  `},s={name:"Destructive",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="destructive">Destructive</labs-button>
    </div>
  `},i={name:"Transparent",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="transparent">Transparent</labs-button>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: args => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button
        variant="\${args.variant}"
        \${args.size ? \`size="\${args.size}"\` : ''}
        \${args.disabled ? 'disabled' : ''}
      >
        \${args.leftIcon ? \`<labs-icon slot="icon-left" name="\${args.leftIcon}"></labs-icon>\` : ''}
        \${args.text}
        \${args.rightIcon ? \`<labs-icon slot="icon-right" name="\${args.rightIcon}"></labs-icon>\` : ''}
      </labs-button>
    </div>
  \`
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">Primary</labs-button>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="secondary">Secondary</labs-button>
    </div>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'With Left Icon',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        With Left Icon
      </labs-button>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'With Right Icon',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        With Right Icon
        <labs-icon slot="icon-right" name="edit"></labs-icon>
      </labs-button>
    </div>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Destructive',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="destructive">Destructive</labs-button>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Transparent',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="transparent">Transparent</labs-button>
    </div>
  \`
}`,...i.parameters?.docs?.source}}};const u=["Default","Primary","Secondary","WithLeftIcon","WithRightIcon","Destructive","Transparent"];export{e as Default,s as Destructive,o as Primary,t as Secondary,i as Transparent,a as WithLeftIcon,r as WithRightIcon,u as __namedExportsOrder,l as default};
