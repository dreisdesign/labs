import"./iframe-DzJGxyCr.js";import"./preload-helper-D9Z9MdNV.js";const i={title:"Components/Button",component:"labs-button",tags:["autodocs"],parameters:{docs:{description:{component:"Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling."}}}},t={name:"Default",render:()=>`
    <labs-button variant="primary">Default</labs-button>
  `},a={name:"Primary",render:()=>`
    <labs-button variant="primary">Primary</labs-button>
  `},r={name:"Secondary",render:()=>`
    <labs-button variant="secondary">Secondary</labs-button>
  `},e={name:"With Left Icon",render:()=>`
    <labs-button variant="primary">
      <labs-icon slot="icon-left" name="add"></labs-icon>
      With Left Icon
    </labs-button>
  `},n={name:"With Right Icon",render:()=>`
    <labs-button variant="primary">
      With Right Icon
      <labs-icon slot="icon-right" name="edit"></labs-icon>
    </labs-button>
  `},o={name:"Destructive",render:()=>`
    <labs-button variant="destructive">Destructive</labs-button>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => \`
    <labs-button variant="primary">Default</labs-button>
  \`
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Primary',
  render: () => \`
    <labs-button variant="primary">Primary</labs-button>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Secondary',
  render: () => \`
    <labs-button variant="secondary">Secondary</labs-button>
  \`
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'With Left Icon',
  render: () => \`
    <labs-button variant="primary">
      <labs-icon slot="icon-left" name="add"></labs-icon>
      With Left Icon
    </labs-button>
  \`
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'With Right Icon',
  render: () => \`
    <labs-button variant="primary">
      With Right Icon
      <labs-icon slot="icon-right" name="edit"></labs-icon>
    </labs-button>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Destructive',
  render: () => \`
    <labs-button variant="destructive">Destructive</labs-button>
  \`
}`,...o.parameters?.docs?.source}}};const m=["Default","Primary","Secondary","WithLeftIcon","WithRightIcon","Destructive"];export{t as Default,o as Destructive,a as Primary,r as Secondary,e as WithLeftIcon,n as WithRightIcon,m as __namedExportsOrder,i as default};
