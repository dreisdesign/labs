import"./iframe-DyDK8tqg.js";import"./labs-icon-D1sweX60.js";import"./preload-helper-D9Z9MdNV.js";const i={title:"Patterns/Buttons",component:"labs-button"},n={render:()=>`
        <labs-button variant="primary">
            <span>Primary</span>
        </labs-button>
    `,name:"Primary"},a={render:()=>`
        <labs-button variant="secondary">
            <span>Secondary</span>
        </labs-button>
    `,name:"Secondary"},r={render:()=>`
        <labs-button variant="primary">
            <span slot="icon-left"><labs-icon name="add"></labs-icon></span>
            <span>Add Item</span>
        </labs-button>
    `,name:"With Left Icon"},t={render:()=>`
        <labs-button variant="primary">
            <span>Next</span>
            <span slot="icon-right"><labs-icon name="edit"></labs-icon></span>
        </labs-button>
    `,name:"With Right Icon"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <labs-button variant="primary">
            <span>Primary</span>
        </labs-button>
    \`,
  name: 'Primary'
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <labs-button variant="secondary">
            <span>Secondary</span>
        </labs-button>
    \`,
  name: 'Secondary'
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <labs-button variant="primary">
            <span slot="icon-left"><labs-icon name="add"></labs-icon></span>
            <span>Add Item</span>
        </labs-button>
    \`,
  name: 'With Left Icon'
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => \`
        <labs-button variant="primary">
            <span>Next</span>
            <span slot="icon-right"><labs-icon name="edit"></labs-icon></span>
        </labs-button>
    \`,
  name: 'With Right Icon'
}`,...t.parameters?.docs?.source}}};const c=["Primary","Secondary","WithLeftIcon","WithRightIcon"];export{n as Primary,a as Secondary,r as WithLeftIcon,t as WithRightIcon,c as __namedExportsOrder,i as default};
