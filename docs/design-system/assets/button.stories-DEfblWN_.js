import"./iframe-uJWqsDVy.js";import{i as l}from"./icons-list-BKmguoAm.js";import"./preload-helper-PPVm8Dsz.js";const c=document.createElement("style");c.innerHTML=`
  .labs-autodocs-surface {
    background: none !important;
    box-shadow: none !important;
  }
`;document.head.appendChild(c);const m={title:"Components/Button",component:"labs-button",tags:["autodocs"],parameters:{docs:{description:{component:"Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling."}}},argTypes:{variant:{control:{type:"select"},options:["primary","secondary","destructive","transparent"],description:"Button variant style"},size:{control:{type:"inline-radio"},options:["small","medium","large"],description:"Button size variant",table:{defaultValue:{summary:"medium"}}},disabled:{control:{type:"boolean"},description:"Disable the button"},text:{control:{type:"text"},description:"Button text content"},leftIcon:{control:{type:"select"},options:l,description:"Left icon name (optional)"},rightIcon:{control:{type:"select"},options:l,description:"Right icon name (optional)"}},args:{variant:"primary",size:"medium",disabled:!1,text:"Button",leftIcon:"",rightIcon:"",pill:!0}},e={name:"Default",render:n=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button
        variant="${n.variant}"
        ${n.disabled?"disabled":""}
        ${n.size?`size="${n.size}"`:""}
        ${n.pill?"pill":""}
      >
        ${n.leftIcon?`<labs-icon slot="icon-left" name="${n.leftIcon}"></labs-icon>`:""}
        ${n.text}
        ${n.rightIcon?`<labs-icon slot="icon-right" name="${n.rightIcon}"></labs-icon>`:""}
      </labs-button>
    </div>
  `},t={name:"Primary",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">Primary</labs-button>
    </div>
  `},a={name:"Secondary",render:()=>`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="secondary">Secondary</labs-button>
    </div>
  `},o={name:"With Left Icon",render:()=>`
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
  `},d={name:"Pill",render:()=>`
    <div style="display:flex;gap:12px;padding:8px;background:transparent;align-items:center;">
      <labs-button pill variant="primary" size="medium">Primary</labs-button>
      <labs-button pill variant="secondary" size="medium">Secondary</labs-button>
      <labs-button pill variant="destructive" size="medium">Destructive</labs-button>
      <labs-button pill variant="transparent" size="medium">Transparent</labs-button>
      <labs-button pill variant="primary" size="medium"><labs-icon slot="icon-left" name="add"></labs-icon>Add</labs-button>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: args => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button
        variant="\${args.variant}"
        \${args.disabled ? 'disabled' : ''}
        \${args.size ? \`size="\${args.size}"\` : ''}
        \${args.pill ? 'pill' : ''}
      >
        \${args.leftIcon ? \`<labs-icon slot="icon-left" name="\${args.leftIcon}"></labs-icon>\` : ''}
        \${args.text}
        \${args.rightIcon ? \`<labs-icon slot="icon-right" name="\${args.rightIcon}"></labs-icon>\` : ''}
      </labs-button>
    </div>
  \`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">Primary</labs-button>
    </div>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="secondary">Secondary</labs-button>
    </div>
  \`
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'With Left Icon',
  render: () => \`
    <div style="background: none; box-shadow: none; padding: 0; border: none;">
      <labs-button variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        With Left Icon
      </labs-button>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Pill',
  render: () => \`
    <div style="display:flex;gap:12px;padding:8px;background:transparent;align-items:center;">
      <labs-button pill variant="primary" size="medium">Primary</labs-button>
      <labs-button pill variant="secondary" size="medium">Secondary</labs-button>
      <labs-button pill variant="destructive" size="medium">Destructive</labs-button>
      <labs-button pill variant="transparent" size="medium">Transparent</labs-button>
      <labs-button pill variant="primary" size="medium"><labs-icon slot="icon-left" name="add"></labs-icon>Add</labs-button>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};const v=["Default","Primary","Secondary","WithLeftIcon","WithRightIcon","Destructive","Transparent","Pill"];export{e as Default,s as Destructive,d as Pill,t as Primary,a as Secondary,i as Transparent,o as WithLeftIcon,r as WithRightIcon,v as __namedExportsOrder,m as default};
