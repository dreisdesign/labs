import"./labs-button-DHQuKs1y.js";import"./labs-icon-CZw9JeVg.js";import"./labs-checkbox-4QdUhj6-.js";/* empty css                         */import"./button-configs-DUKrH4Iw.js";const N={title:"Components/Button",parameters:{docs:{description:{component:"The primary button component of the Labs Design System. Supports multiple variants, icons, and interactive states."}}},argTypes:{label:{control:"text",description:"Button text content"},iconLeft:{control:"boolean",name:"Left Icon",description:"Show icon on the left side"},icon:{control:{type:"select"},name:"Left Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},iconRight:{control:"boolean",name:"Right Icon",description:"Show icon on the right side"},iconRightName:{control:{type:"select"},name:"Right Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},checkmark:{control:"boolean",name:"Success Animation",description:"Show checkmark animation on click"},variant:{control:{type:"select"},description:"Button variant/style",options:["primary","secondary","danger","success","transparent","icon","container","container-danger","pill","pill-secondary","rounded","rounded-secondary"]}}},n=({label:m,iconLeft:h,icon:u,iconRight:b,iconRightName:p,checkmark:k,variant:f})=>{let d=h?u||"undo":"",g=b?p||"settings":"";return`
    <labs-button
      label="${m||""}"
      ${d?`icon="${d}"`:""}
      ${g?`icon-right="${g}"`:""}
      ${k?"checkmark":""}
      variant="${f||"primary"}"
    ></labs-button>
  `},t=n.bind({});t.args={label:"Primary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"primary"};t.storyName="Primary";const a=n.bind({});a.args={label:"Secondary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"secondary"};const r=n.bind({});r.args={label:"Delete",iconLeft:!0,icon:"delete_forever",iconRight:!1,iconRightName:"",checkmark:!1,variant:"danger"};const i=n.bind({});i.args={label:"Save",iconLeft:!0,icon:"check",iconRight:!1,iconRightName:"",checkmark:!0,variant:"success"};const s=n.bind({});s.args={label:"Settings",iconLeft:!0,icon:"settings",iconRight:!1,iconRightName:"",checkmark:!1,variant:"transparent"};const l=n.bind({});l.args={label:"",iconLeft:!0,icon:"settings",iconRight:!1,iconRightName:"",checkmark:!1,variant:"icon"};const o=n.bind({});o.args={label:"Save Changes",iconLeft:!0,icon:"check",iconRight:!1,iconRightName:"",checkmark:!0,variant:"rounded"};o.parameters={docs:{description:{story:"Rounded rectangle buttons with soft corners (border-radius: 12px). Perfect for modal overlays, form actions, and modern interfaces. Available in both primary (`rounded`) and secondary (`rounded-secondary`) variants."}}};const c=n.bind({});c.args={label:"Cancel",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"rounded-secondary"};c.parameters={docs:{description:{story:"Secondary variant of rounded rectangle buttons. Provides visual hierarchy when paired with primary rounded buttons in dialogs and forms."}}};const $=({checked:m,iconcolor:h})=>`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <labs-checkbox 
        ${m?"checked":""}
        ${h?`iconcolor="${h}"`:""}
      ></labs-checkbox>
    </div>
  `,e=$.bind({});e.args={checked:!1,iconcolor:"var(--color-on-surface)"};e.parameters={docs:{description:{story:"Checkbox functionality using icon-only button with state management. Shows checkmark animation on state change and proper icon switching between checked/unchecked states."}}};e.argTypes={checked:{control:"boolean",description:"Whether the checkbox is checked"},iconcolor:{control:"color",description:"Color for unchecked state (checked state uses primary color)"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...c.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  checked,
  iconcolor
}) => {
  return \`
    <div style="display: flex; align-items: center; gap: 1rem;">
      <labs-checkbox 
        \${checked ? 'checked' : ''}
        \${iconcolor ? \`iconcolor="\${iconcolor}"\` : ''}
      ></labs-checkbox>
    </div>
  \`;
}`,...e.parameters?.docs?.source}}};const S=["Default","Secondary","Danger","Success","Transparent","IconOnly","RoundedRectangle","RoundedSecondary","Checkbox"];export{e as Checkbox,r as Danger,t as Default,l as IconOnly,o as RoundedRectangle,c as RoundedSecondary,a as Secondary,i as Success,s as Transparent,S as __namedExportsOrder,N as default};
