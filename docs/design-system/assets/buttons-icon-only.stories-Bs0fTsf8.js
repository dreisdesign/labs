import{x as c}from"./iframe-DeRf9aPq.js";import{i as l}from"./icons-list-D2r6psry.js";import"./preload-helper-D9Z9MdNV.js";const t={"On Surface":"var(--color-on-surface)","On Primary":"var(--color-on-primary)",Primary:"var(--color-primary)",Error:"var(--color-error)","On Error":"var(--color-on-error)","Settings Icon":"var(--settings-icon-color)"},p={title:"Patterns/Buttons/Icon Only",argTypes:{icon:{options:l,control:{type:"select"},description:"Icon name"},colorVariant:{options:Object.keys(t),control:{type:"select"},description:"Icon color variant"},ariaLabel:{control:"text",description:"Aria label for accessibility"},animation:{control:"boolean",description:"Enable icon hover animation"}},parameters:{docs:{description:{component:"A canonical pattern for icon-only actions. Used for theme, delete, settings, close, etc. Supports animation and accessibility."}}}},o=({icon:r="settings",colorVariant:a="On Surface",ariaLabel:e="Settings",animation:i=!0})=>{const s=`
    labs-button[variant="icon"] labs-icon {
      transition: transform 0.4s cubic-bezier(.4,2,.6,1);
      transform: rotate(0deg);
    }
    labs-button[variant="icon"]:hover labs-icon {
      transform: ${i?"rotate(90deg)":"rotate(0deg)"};
    }
  `,n=t[a]||"var(--color-on-surface)";return c`
    <style>${s}</style>
    <labs-button variant="icon" aria-label="${e}">
      <labs-icon name="${r}" width="24" height="24" slot="icon-left" color="${n}" style="color: ${n};"></labs-icon>
    </labs-button>
  `};o.args={icon:"settings",colorVariant:"On Surface",ariaLabel:"Settings",animation:!0};o.storyName="Icon Only";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  icon = 'settings',
  colorVariant = 'On Surface',
  ariaLabel = 'Settings',
  animation = true
}) => {
  const style = \`
    labs-button[variant="icon"] labs-icon {
      transition: transform 0.4s cubic-bezier(.4,2,.6,1);
      transform: rotate(0deg);
    }
    labs-button[variant="icon"]:hover labs-icon {
      transform: \${animation ? 'rotate(90deg)' : 'rotate(0deg)'};
    }
  \`;
  const color = colorVariants[colorVariant] || 'var(--color-on-surface)';
  return html\`
    <style>\${style}</style>
    <labs-button variant="icon" aria-label="\${ariaLabel}">
      <labs-icon name="\${icon}" width="24" height="24" slot="icon-left" color="\${color}" style="color: \${color};"></labs-icon>
    </labs-button>
  \`;
}`,...o.parameters?.docs?.source}}};const y=["IconOnly"];export{o as IconOnly,y as __namedExportsOrder,p as default};
