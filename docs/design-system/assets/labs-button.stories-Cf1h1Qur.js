import"./labs-button-BCzBXzvm.js";import"./labs-icon-BWc3JKvc.js";import"./labs-checkbox-2dh_py-G.js";import{b as m}from"./button-configs-BVqnbxg1.js";import{i as d}from"./icons-list-C5cNKhua.js";const T={title:"Components/Button",tags:["autodocs"],parameters:{docs:{description:{component:"The comprehensive button component of the Labs Design System. Supports all variants, icons, theme toggles, and interactive states. Only the top button is interactive—use the controls panel to explore all options and copy the generated code."}}},argTypes:{preset:{control:{type:"select"},options:["","add","save","edit","undo","delete","resetAllData","themeToggle","close","settings","allApps","refresh","iconOnly"],description:"Load a pre-configured button setup",table:{category:"Presets"},order:1},label:{control:"text",description:"Button text content",table:{category:"Content"},if:{arg:"iconPlacement",neq:"Icon Center (no label)"},order:2},variant:{control:{type:"select"},options:["primary","secondary","danger","transparent"],description:"Button color/style variant",table:{category:"Appearance"},order:3},container:{control:"boolean",description:"Use container style (full-width, overlay/panel)",table:{category:"Appearance"},order:4},iconOnly:{control:"boolean",description:"Show only a single icon (icon-only button)",table:{category:"Icons"},order:5,defaultValue:!1},iconLeft:{control:{type:"select"},options:["",...d],description:"Icon name (left side)",table:{category:"Icons"},order:6},iconRight:{control:{type:"select"},options:["",...d],description:"Icon name (right side)",table:{category:"Icons"},order:7},checkmark:{control:"boolean",description:"Enable checkmark animation on click",table:{category:"Interaction"},order:8}}},k=e=>{if(!e)return{};const t=m[e];if(!t)return{};let r="None";(t.iconLeft||t.icon)&&t.iconRight?r="Icon Left & Icon Right":(t.iconLeft||t.icon)&&!t.label?r="Icon Center (no label)":t.iconLeft||t.icon?r="Icon Left":t.iconRight&&(r="Icon Right");let n="",a="";return r==="Icon Left & Icon Right"?(n=t.iconLeft||t.icon||"",a=t.iconRight||""):r==="Icon Left"?(n=t.iconLeft||t.icon||"",a=""):r==="Icon Right"?(n="",a=t.iconRight||""):r==="Icon Center (no label)"&&(n=t.iconLeft||t.icon||"",a=""),{label:t.label||"",iconLeft:n,iconRight:a,variant:t.variant||"primary",container:t.variant==="container"||t.variant==="container-danger",checkmark:!!t.checkmark,iconcolor:t.iconcolor||"",iconPlacement:r}},f=(e,{updateArgs:t})=>{if(e.preset&&e._lastPreset!==e.preset){const b=k(e.preset);return t&&t({...e,...b,_lastPreset:e.preset}),"<div>Loading preset...</div>"}let r=e.label,n=e.iconLeft||"",a=e.iconRight||"";e.iconOnly&&(r="",n=e.iconLeft||"add",a="");const s=[];return r&&s.push(`label="${r}"`),e.container?s.push('variant="container"'):e.variant&&e.variant!=="primary"&&s.push(`variant="${e.variant}"`),n&&s.push(`icon-left="${n}"`),a&&s.push(`icon-right="${a}"`),e.checkmark&&s.push(`checkmark="${e.checkmark}"`),e.iconcolor&&s.push(`iconcolor="${e.iconcolor}"`),`<labs-button ${s.join(" ")}></labs-button>`},c=f.bind({});c.args={label:"Button",variant:"primary",iconLeft:"",iconRight:"",iconOnly:!1,container:!1,checkmark:!1,preset:""};c.parameters={docs:{description:{story:"Primary button with comprehensive controls. Only the top button is interactive—use the controls panel to see real-time changes and copy the generated code."}}};const l=f.bind({});l.args={label:"Secondary Button",variant:"secondary",iconLeft:"",iconRight:"",container:!1,checkmark:!1,preset:""};const g=f.bind({});g.args={label:"Delete",variant:"danger",iconLeft:"delete_forever",iconRight:"",container:!1,checkmark:!1,preset:""};const p=f.bind({});p.args={label:"Cancel",variant:"transparent",iconLeft:"",iconRight:"",container:!1,checkmark:!1,preset:""};const h=f.bind({});h.args={label:"Save Changes",variant:"primary",iconLeft:"check",iconRight:"",container:!1,checkmark:!1,preset:""};const u=(e,{globals:t})=>{const n=e.toggled?e.state2:e.state1,a=[];return n.label&&a.push(`label="${n.label}"`),e.container?a.push('variant="container"'):n.variant&&n.variant!=="primary"&&a.push(`variant="${n.variant}"`),n.iconLeft&&a.push(`icon-left="${n.iconLeft}"`),n.iconRight&&a.push(`icon-right="${n.iconRight}"`),n.checkmark&&a.push(`checkmark="${n.checkmark}"`),`<labs-button ${a.join(" ")}></labs-button>`},o=u.bind({});o.args={toggled:!1,container:!1,state1:{label:"Turn on Dark Mode",iconLeft:"bedtime",iconRight:"",variant:"transparent",checkmark:!1},state2:{label:"Turn off Dark Mode",iconLeft:"bedtime_off",iconRight:"",variant:"transparent",checkmark:!1}};o.argTypes={toggled:{control:"boolean",description:"Toggle state (for demo)"},container:{control:"boolean"},state1:{table:{disable:!0}},state2:{table:{disable:!0}}};o.parameters={docs:{description:{story:"Generic Toggle Button pattern. Use the boolean control to switch between two states. Theme Toggle is a preset of this pattern. Actual theme logic is handled by a separate component (labs-theme-toggle-button)."}}};const i=u.bind({});i.args={toggled:!1,container:!1,state1:{label:"Turn on Dark Mode",iconLeft:"bedtime",iconRight:"",variant:"transparent",checkmark:!1},state2:{label:"Turn off Dark Mode",iconLeft:"bedtime_off",iconRight:"",variant:"transparent",checkmark:!1}};i.argTypes=o.argTypes;i.parameters={docs:{description:{story:"Theme Toggle preset using the generic Toggle Button. This is a visual toggle only; actual theme switching is handled by labs-theme-toggle-button."}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return \`<div>Loading preset...</div>\`;
  }
  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }
  const attrs = [];
  if (label) attrs.push(\`label="\${label}"\`);
  if (args.container) {
    attrs.push(\`variant="container"\`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(\`variant="\${args.variant}"\`);
  }
  if (iconLeft) attrs.push(\`icon-left="\${iconLeft}"\`);
  if (iconRight) attrs.push(\`icon-right="\${iconRight}"\`);
  if (args.checkmark) attrs.push(\`checkmark="\${args.checkmark}"\`);
  if (args.iconcolor) attrs.push(\`iconcolor=\\"\${args.iconcolor}\\"\`);
  return \`<labs-button \${attrs.join(' ')}></labs-button>\`;
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return \`<div>Loading preset...</div>\`;
  }
  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }
  const attrs = [];
  if (label) attrs.push(\`label="\${label}"\`);
  if (args.container) {
    attrs.push(\`variant="container"\`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(\`variant="\${args.variant}"\`);
  }
  if (iconLeft) attrs.push(\`icon-left="\${iconLeft}"\`);
  if (iconRight) attrs.push(\`icon-right="\${iconRight}"\`);
  if (args.checkmark) attrs.push(\`checkmark="\${args.checkmark}"\`);
  if (args.iconcolor) attrs.push(\`iconcolor=\\"\${args.iconcolor}\\"\`);
  return \`<labs-button \${attrs.join(' ')}></labs-button>\`;
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return \`<div>Loading preset...</div>\`;
  }
  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }
  const attrs = [];
  if (label) attrs.push(\`label="\${label}"\`);
  if (args.container) {
    attrs.push(\`variant="container"\`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(\`variant="\${args.variant}"\`);
  }
  if (iconLeft) attrs.push(\`icon-left="\${iconLeft}"\`);
  if (iconRight) attrs.push(\`icon-right="\${iconRight}"\`);
  if (args.checkmark) attrs.push(\`checkmark="\${args.checkmark}"\`);
  if (args.iconcolor) attrs.push(\`iconcolor=\\"\${args.iconcolor}\\"\`);
  return \`<labs-button \${attrs.join(' ')}></labs-button>\`;
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return \`<div>Loading preset...</div>\`;
  }
  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }
  const attrs = [];
  if (label) attrs.push(\`label="\${label}"\`);
  if (args.container) {
    attrs.push(\`variant="container"\`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(\`variant="\${args.variant}"\`);
  }
  if (iconLeft) attrs.push(\`icon-left="\${iconLeft}"\`);
  if (iconRight) attrs.push(\`icon-right="\${iconRight}"\`);
  if (args.checkmark) attrs.push(\`checkmark="\${args.checkmark}"\`);
  if (args.iconcolor) attrs.push(\`iconcolor=\\"\${args.iconcolor}\\"\`);
  return \`<labs-button \${attrs.join(' ')}></labs-button>\`;
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`(args, {
  updateArgs
}) => {
  // If a preset is selected, update all controls to match the preset (one-time per change)
  if (args.preset && args._lastPreset !== args.preset) {
    const presetArgs = presetToArgs(args.preset);
    updateArgs && updateArgs({
      ...args,
      ...presetArgs,
      _lastPreset: args.preset
    });
    return \`<div>Loading preset...</div>\`;
  }
  let label = args.label;
  let iconLeft = args.iconLeft || "";
  let iconRight = args.iconRight || "";

  // Icon Only logic: if iconOnly is true, show only iconLeft (or fallback to 'add'), hide label and iconRight
  if (args.iconOnly) {
    label = "";
    iconLeft = args.iconLeft || "add";
    iconRight = "";
  }
  const attrs = [];
  if (label) attrs.push(\`label="\${label}"\`);
  if (args.container) {
    attrs.push(\`variant="container"\`);
  } else if (args.variant && args.variant !== 'primary') {
    attrs.push(\`variant="\${args.variant}"\`);
  }
  if (iconLeft) attrs.push(\`icon-left="\${iconLeft}"\`);
  if (iconRight) attrs.push(\`icon-right="\${iconRight}"\`);
  if (args.checkmark) attrs.push(\`checkmark="\${args.checkmark}"\`);
  if (args.iconcolor) attrs.push(\`iconcolor=\\"\${args.iconcolor}\\"\`);
  return \`<labs-button \${attrs.join(' ')}></labs-button>\`;
}`,...h.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:'(args, {\n  globals\n}) => {\n  // Use a boolean control to switch state\n  const isToggled = args.toggled;\n  const state = isToggled ? args.state2 : args.state1;\n  const attrs = [];\n  if (state.label) attrs.push(`label=\\"${state.label}\\"`);\n  if (args.container) attrs.push(`variant=\\"container\\"`);else if (state.variant && state.variant !== \'primary\') attrs.push(`variant=\\"${state.variant}\\"`);\n  if (state.iconLeft) attrs.push(`icon-left=\\"${state.iconLeft}\\"`);\n  if (state.iconRight) attrs.push(`icon-right=\\"${state.iconRight}\\"`);\n  if (state.checkmark) attrs.push(`checkmark=\\"${state.checkmark}\\"`);\n  return `<labs-button ${attrs.join(\' \')}></labs-button>`;\n}',...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'(args, {\n  globals\n}) => {\n  // Use a boolean control to switch state\n  const isToggled = args.toggled;\n  const state = isToggled ? args.state2 : args.state1;\n  const attrs = [];\n  if (state.label) attrs.push(`label=\\"${state.label}\\"`);\n  if (args.container) attrs.push(`variant=\\"container\\"`);else if (state.variant && state.variant !== \'primary\') attrs.push(`variant=\\"${state.variant}\\"`);\n  if (state.iconLeft) attrs.push(`icon-left=\\"${state.iconLeft}\\"`);\n  if (state.iconRight) attrs.push(`icon-right=\\"${state.iconRight}\\"`);\n  if (state.checkmark) attrs.push(`checkmark=\\"${state.checkmark}\\"`);\n  return `<labs-button ${attrs.join(\' \')}></labs-button>`;\n}',...i.parameters?.docs?.source}}};const A=["Primary","Secondary","Danger","Transparent","WithIcons","ToggleButton","ThemeToggle"];export{g as Danger,c as Primary,l as Secondary,i as ThemeToggle,o as ToggleButton,p as Transparent,h as WithIcons,A as __namedExportsOrder,T as default};
