import"./labs-button-JZi7o1_n.js";import"./labs-icon-mNfcruWU.js";/* empty css                         */import"./button-configs-agWCFEqR.js";const I={title:"Components/Button",parameters:{docs:{description:{component:"The primary button component of the Labs Design System. Supports multiple variants, icons, and interactive states."}}},argTypes:{label:{control:"text",description:"Button text content"},iconLeft:{control:"boolean",name:"Left Icon",description:"Show icon on the left side"},icon:{control:{type:"select"},name:"Left Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},iconRight:{control:"boolean",name:"Right Icon",description:"Show icon on the right side"},iconRightName:{control:{type:"select"},name:"Right Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},checkmark:{control:"boolean",name:"Success Animation",description:"Show checkmark animation on click"},variant:{control:{type:"select"},description:"Button variant/style",options:["primary","secondary","danger","success","transparent","icon"]}}},e=({label:l,iconLeft:m,icon:h,iconRight:g,iconRightName:b,checkmark:d,variant:p})=>{let r=m?h||"undo":"",s=g?b||"settings":"";return`
    <labs-button
      label="${l||""}"
      ${r?`icon="${r}"`:""}
      ${s?`icon-right="${s}"`:""}
      ${d?"checkmark":""}
      variant="${p||"primary"}"
    ></labs-button>
  `},n=e.bind({});n.args={label:"Primary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"primary"};n.storyName="Primary";const t=e.bind({});t.args={label:"Secondary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"secondary"};const c=e.bind({});c.args={label:"Delete",iconLeft:!0,icon:"delete_forever",iconRight:!1,iconRightName:"",checkmark:!1,variant:"danger"};const o=e.bind({});o.args={label:"Save",iconLeft:!0,icon:"check",iconRight:!1,iconRightName:"",checkmark:!0,variant:"success"};const a=e.bind({});a.args={label:"Settings",iconLeft:!0,icon:"settings",iconRight:!1,iconRightName:"",checkmark:!1,variant:"transparent"};const i=e.bind({});i.args={label:"",iconLeft:!0,icon:"settings",iconRight:!1,iconRightName:"",checkmark:!1,variant:"icon"};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
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
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`({
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
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
}`,...i.parameters?.docs?.source}}};const R=["Default","Secondary","Danger","Success","Transparent","IconOnly"];export{c as Danger,n as Default,i as IconOnly,t as Secondary,o as Success,a as Transparent,R as __namedExportsOrder,I as default};
