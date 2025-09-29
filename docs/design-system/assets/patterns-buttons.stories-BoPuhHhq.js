import"./iframe-BT55jLmf.js";import"./preload-helper-PPVm8Dsz.js";const s={title:"Patterns/Buttons",component:"labs-button"},e={name:"Add",render:()=>`
        <labs-button pill variant="primary">
            <labs-icon slot="icon-left" name="add"></labs-icon>
            Add
        </labs-button>
    `},t={name:"Reset all data",render:()=>`
        <labs-button pill variant="destructive">
            <labs-icon slot="icon-left" name="delete_forever"></labs-icon>
            Reset All Data
        </labs-button>
    `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Add',
  render: () => \`
        <labs-button pill variant="primary">
            <labs-icon slot="icon-left" name="add"></labs-icon>
            Add
        </labs-button>
    \`
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Reset all data',
  render: () => \`
        <labs-button pill variant="destructive">
            <labs-icon slot="icon-left" name="delete_forever"></labs-icon>
            Reset All Data
        </labs-button>
    \`
}`,...t.parameters?.docs?.source}}};const r=["Add","ResetAllData"];export{e as Add,t as ResetAllData,r as __namedExportsOrder,s as default};
