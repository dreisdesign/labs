import"./labs-theme-toggle-button-BPOyvW0S.js";import"./labs-button-0XNiK1kJ.js";import"./labs-icon-Dst3ctAl.js";import"./button-configs-CUB_r__D.js";const c={title:"Components/Theme Toggle Button",parameters:{docs:{description:{component:"Reusable theme toggle button wrapping shared setupThemeToggle logic. Supports transparent, container, and icon variants."}}},argTypes:{variant:{control:{type:"select"},options:["transparent","container","icon"],description:"Visual style of the toggle button"}}},r=({variant:n})=>`<labs-theme-toggle-button variant="${n||"transparent"}"></labs-theme-toggle-button>`,t=r.bind({});t.args={variant:"transparent"};const e=r.bind({});e.args={variant:"container"};const a=r.bind({});a.args={variant:"icon"};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  variant
}) => {
  return \`<labs-theme-toggle-button variant="\${variant || 'transparent'}"></labs-theme-toggle-button>\`;
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  variant
}) => {
  return \`<labs-theme-toggle-button variant="\${variant || 'transparent'}"></labs-theme-toggle-button>\`;
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  variant
}) => {
  return \`<labs-theme-toggle-button variant="\${variant || 'transparent'}"></labs-theme-toggle-button>\`;
}`,...a.parameters?.docs?.source}}};const g=["Transparent","Container","Icon"];export{e as Container,a as Icon,t as Transparent,g as __namedExportsOrder,c as default};
