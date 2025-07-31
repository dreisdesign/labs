import{ThemeToggleButton as p}from"./theme-toggle.stories-cHDnxjv9.js";import"./labs-icon-8279HnLw.js";const f={title:"Components/Button",argTypes:{label:{control:"text"},iconLeft:{control:"boolean",name:"Icon Left"},icon:{control:{type:"select"},name:"Left Icon Name",description:"Set left icon name (if iconLeft is true)",options:["","add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},iconRight:{control:"boolean",name:"Icon Right"},iconRightName:{control:{type:"select"},name:"Right Icon Name",description:"Set right icon name (if iconRight is true)",options:["","add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},checkmark:{control:"boolean",name:"Check Animation"},variant:{control:{type:"select"},options:["primary","secondary","danger","success"]}}},d=({label:o,iconLeft:i,icon:l,iconRight:s,iconRightName:b,checkmark:m,variant:a})=>{let r=i?l||"undo":"",t=s?b||"settings--labs-icons":"",c="#fff";return a==="danger"&&(r="delete_forever",t="",c="#b5005a"),`
    <labs-button
      label="${o||""}"
      ${r?`icon="${r}"`:""}
      ${t?`icon-right="${t}"`:""}
      ${m?"checkmark":""}
      variant="${a||"primary"}"
      iconcolor="${c}"
    ></labs-button>
  `},n=d.bind({});n.args={label:"Primary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"primary"};n.storyName="Primary";const e=()=>{const o=document.createElement("div");return o.style.display="flex",o.style.gap="1rem",o.style.flexWrap="wrap",o.style.alignItems="flex-end",o.innerHTML=`
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Settings" icon-right="settings" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Click for Success Animation" checkmark variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="var(--color-error)"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
  `,o.appendChild(p()),o};e.storyName="Preview All Buttons";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || 'undo' : '';
  let rightIcon = iconRight ? iconRightName || 'settings--labs-icons' : '';
  let iconColor = '#fff';
  if (variant === 'danger') {
    leftIcon = 'delete_forever';
    rightIcon = '';
    iconColor = '#b5005a';
  }
  return \`
    <labs-button
      label="\${label || ''}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ''}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ''}
      \${checkmark ? 'checkmark' : ''}
      variant="\${variant || 'primary'}"
      iconcolor="\${iconColor}"
    ></labs-button>
  \`;
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.gap = '1rem';
  wrapper.style.flexWrap = 'wrap';
  wrapper.style.alignItems = 'flex-end';
  wrapper.innerHTML = \`
    <labs-button label="Undo" icon="undo" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Settings" icon-right="settings" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Click for Success Animation" checkmark variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Secondary" icon="undo" variant="secondary" iconcolor="var(--color-on-primary)"></labs-button>
    <labs-button label="Danger" icon="delete_forever" variant="danger" iconcolor="var(--color-error)"></labs-button>
    <labs-button label="Edit" icon="edit" variant="primary" iconcolor="var(--color-on-primary)"></labs-button>
  \`;
  // Add the actual theme toggle button component
  wrapper.appendChild(ThemeToggleButton());
  return wrapper;
}`,...e.parameters?.docs?.source}}};const y=["Default","IconGrid"];export{n as Default,e as IconGrid,y as __namedExportsOrder,f as default};
