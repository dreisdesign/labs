import"./iframe-lHF5oEDo.js";import"./preload-helper-D9Z9MdNV.js";const s={title:"Components/Button",component:"labs-button",tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","destructive"]},"aria-label":{control:"text",name:"aria-label"}},parameters:{docs:{description:{component:`Modular, theme-agnostic Labs Button web component. Uses CSS custom properties for all styling.

**Note:** Icon Only is a usage pattern, not a variant. To create an icon-only button, use a regular variant (e.g. primary) and provide only a slotted icon with an aria-label.`}}}},e=n=>`
    <labs-button
      variant="${n.variant}"
      ${n["aria-label"]?`aria-label="${n["aria-label"]}"`:""}
    >
      Button
    </labs-button>
  `,a=e.bind({});a.args={variant:"primary","aria-label":""};const t=()=>`
  <labs-button variant="secondary">
    <labs-icon slot="icon-left" name="bedtime"></labs-icon>
    Theme Test Button
  </labs-button>
`;a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  return \`
    <labs-button
      variant="\${args.variant}"
      \${args['aria-label'] ? \`aria-label="\${args['aria-label']}"\` : ''}
    >
      Button
    </labs-button>
  \`;
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => \`
  <labs-button variant="secondary">
    <labs-icon slot="icon-left" name="bedtime"></labs-icon>
    Theme Test Button
  </labs-button>
\``,...t.parameters?.docs?.source}}};const l=["Default","WithIcon"];export{a as Default,t as WithIcon,l as __namedExportsOrder,s as default};
