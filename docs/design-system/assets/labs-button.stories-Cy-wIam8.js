import"./iframe-Cd5IRrjw.js";import"./preload-helper-D9Z9MdNV.js";const o={title:"Components/Button",component:"labs-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","destructive"]},"aria-label":{control:"text",name:"aria-label"}},parameters:{docs:{description:{component:`Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling.

**Note:** Icon Only is a usage pattern, not a variant. To create an icon-only button, use a regular variant (e.g. primary) and provide only a slotted icon with an aria-label.`}}}},r=t=>`
    <labs-button
      variant="${t.variant}"
      ${t["aria-label"]?`aria-label="${t["aria-label"]}"`:""}
    >
      Button
    </labs-button>
  `,a=r.bind({});a.args={variant:"primary","aria-label":""};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return \`
    <labs-button
      variant="\${args.variant}"
      \${args['aria-label'] ? \`aria-label="\${args['aria-label']}"\` : ''}
    >
      Button
    </labs-button>
  \`;
}`,...a.parameters?.docs?.source}}};const s=["Default"];export{a as Default,s as __namedExportsOrder,o as default};
