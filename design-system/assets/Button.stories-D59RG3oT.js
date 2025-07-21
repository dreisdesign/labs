/* empty css              */function h({variant:t="primary",size:a="md",disabled:v=!1,loading:f=!1,fullWidth:L=!1,icon:z=!1,text:E="Button",onClick:S=()=>console.log("Button clicked"),...I}){const r=document.createElement("button"),e=["labs-button"];return e.push(`labs-button--${t}`),a!=="md"&&e.push(`labs-button--${a}`),L&&e.push("labs-button--full"),z&&e.push("labs-button--icon"),f&&e.push("labs-button--loading"),r.className=e.join(" "),r.textContent=E,r.disabled=v||f,S&&r.addEventListener("click",S),r}const W={title:"Components/Button",tags:["autodocs"],render:({...t})=>h(t),argTypes:{variant:{control:{type:"select"},options:["primary","secondary","success","error","outline","ghost"],description:"Button variant/style"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Button size"},text:{control:{type:"text"},description:"Button text content"},disabled:{control:{type:"boolean"},name:"Inactive",description:"Inactive state"},loading:{control:{type:"boolean"},description:"Loading state with spinner"},fullWidth:{control:{type:"boolean"},description:"Full width button"},icon:{control:{type:"boolean"},description:"Icon-only button (circular)"},onClick:{action:"clicked"}},parameters:{docs:{description:{component:"Primary interactive element based on Labs design system. Supports multiple variants, sizes, and states extracted from the Tracker app patterns."}}}},n={args:{text:"Default Button",variant:"primary",size:"md"}},s={args:{text:"Primary Button",variant:"primary"}},o={args:{text:"Secondary Button",variant:"secondary"}},c={args:{text:"Success Button",variant:"success"}},i={args:{text:"Error Button",variant:"error"}},u={args:{text:"Outline Button",variant:"outline"}},l={args:{text:"Ghost Button",variant:"ghost"}},d={args:{text:"Small Button",size:"sm"}},p={args:{text:"Large Button",size:"lg"}},m={args:{text:"Inactive Button",disabled:!0}},g={args:{text:"Loading Button",loading:!0}},b={args:{text:"Full Width Button",fullWidth:!0}},B={args:{text:"×",icon:!0,variant:"ghost"}},x={args:{text:"Playground Button",variant:"primary",size:"md",disabled:!1,loading:!1,fullWidth:!1,icon:!1}},y={render:()=>{const t=document.createElement("div");t.className="labs-button-group";const a=h({text:"Save",variant:"primary"}),v=h({text:"Cancel",variant:"outline"});return t.appendChild(a),t.appendChild(v),t},parameters:{docs:{description:{story:"Buttons can be grouped together using the `labs-button-group` class."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Default Button',
    variant: 'primary',
    size: 'md'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Primary Button',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Secondary Button',
    variant: 'secondary'
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Success Button',
    variant: 'success'
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Error Button',
    variant: 'error'
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Outline Button',
    variant: 'outline'
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Ghost Button',
    variant: 'ghost'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Small Button',
    size: 'sm'
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Large Button',
    size: 'lg'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Inactive Button',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Loading Button',
    loading: true
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Full Width Button',
    fullWidth: true
  }
}`,...b.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    text: '×',
    icon: true,
    variant: 'ghost'
  }
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Playground Button',
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    icon: false
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const container = document.createElement('div');
    container.className = 'labs-button-group';
    const button1 = createButton({
      text: 'Save',
      variant: 'primary'
    });
    const button2 = createButton({
      text: 'Cancel',
      variant: 'outline'
    });
    container.appendChild(button1);
    container.appendChild(button2);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Buttons can be grouped together using the \`labs-button-group\` class.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};const C=["Default","Primary","Secondary","Success","Error","Outline","Ghost","Small","Large","Inactive","Loading","FullWidth","IconButton","Playground","ButtonGroup"];export{y as ButtonGroup,n as Default,i as Error,b as FullWidth,l as Ghost,B as IconButton,m as Inactive,p as Large,g as Loading,u as Outline,x as Playground,s as Primary,o as Secondary,d as Small,c as Success,C as __namedExportsOrder,W as default};
