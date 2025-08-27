import"./iframe-CjIV58sS.js";import{i as t}from"./icons-list-C5cNKhua.js";import"./preload-helper-D9Z9MdNV.js";const r={title:"Patterns/Buttons/Icon Only",component:"labs-button",tags:["autodocs"],parameters:{docs:{autodocs:!0,description:{component:"Icon Only is a usage pattern, not a variant. Use a regular button variant (e.g. primary) and provide only a slotted icon with an aria-label for accessibility."}},controls:{hideNoControlsWarning:!0}}},n={name:"Icon Only",args:{icon:"settings"},argTypes:{icon:{control:{type:"select"},options:t,description:"Icon to display"}},render:({icon:o})=>`
    <labs-button variant="icon" aria-label="${o}">
      <span slot="icon-left"><labs-icon name="${o}"></labs-icon></span>
    </labs-button>
  `,parameters:{controls:{include:["icon"],hideNoControlsWarning:!0}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Icon Only',
  args: {
    icon: 'settings'
  },
  argTypes: {
    icon: {
      control: {
        type: 'select'
      },
      options: icons,
      description: 'Icon to display'
    }
  },
  render: ({
    icon
  }) => \`
    <labs-button variant="icon" aria-label="\${icon}">
      <span slot="icon-left"><labs-icon name="\${icon}"></labs-icon></span>
    </labs-button>
  \`,
  parameters: {
    controls: {
      include: ['icon'],
      hideNoControlsWarning: true
    }
  }
}`,...n.parameters?.docs?.source}}};const i=["IconOnly"];export{n as IconOnly,i as __namedExportsOrder,r as default};
