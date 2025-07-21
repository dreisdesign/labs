import{B as t}from"./Button-2v2Tocxn.js";const l={title:"Example/Button",tags:["autodocs"],render:o=>t(o),argTypes:{label:{control:"text"},variant:{control:"select",options:["primary","danger"]},onClick:{action:"onClick"},style:{control:"object"}}},r={args:{label:"Primary",variant:"primary"}},a={args:{label:"Danger",variant:"danger"}},e={args:{size:"large",label:"Button"}},s={args:{size:"small",label:"Button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Primary',
    variant: 'primary'
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Danger',
    variant: 'danger'
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...s.parameters?.docs?.source}}};const c=["Primary","Danger","Large","Small"];export{a as Danger,e as Large,r as Primary,s as Small,c as __namedExportsOrder,l as default};
