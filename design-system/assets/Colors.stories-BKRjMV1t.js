/* empty css              */const m={title:"Design Tokens/Colors",tags:["autodocs"],parameters:{docs:{description:{component:"Color system extracted from the Tracker app. These colors are used across all components and support both light and dark themes."}}}};function l(){const r=document.createElement("div");return r.style.cssText=`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    font-family: var(--labs-font-family-base);
  `,[{name:"Primary",var:"--labs-color-primary",onVar:"--labs-color-on-primary"},{name:"Secondary",var:"--labs-color-secondary",onVar:"--labs-color-on-primary"},{name:"Primary Darker",var:"--labs-color-primary-darker",onVar:"--labs-color-on-primary"},{name:"Background",var:"--labs-color-background",onVar:"--labs-color-on-background"},{name:"Surface",var:"--labs-color-surface",onVar:"--labs-color-on-surface"},{name:"Success",var:"--labs-color-success",onVar:"--labs-color-on-success"},{name:"Error",var:"--labs-color-error",onVar:"--labs-color-on-error"}].forEach(e=>{const c=document.createElement("div");c.style.cssText=`
      background: var(${e.var});
      color: var(${e.onVar});
      padding: 1.5rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      border: 1px solid var(--labs-color-primary-25);
    `,c.innerHTML=`
      <div style="font-weight: var(--labs-font-weight-semibold); margin-bottom: 0.5rem;">
        ${e.name}
      </div>
      <div style="font-size: var(--labs-font-size-sm); opacity: 0.8;">
        ${e.var}
      </div>
      <div style="font-size: var(--labs-font-size-sm); opacity: 0.8;">
        Text: ${e.onVar}
      </div>
    `,r.appendChild(c)}),r}const o={render:()=>l(),parameters:{docs:{description:{story:"Complete color palette used across the Labs design system. Colors automatically adapt to light/dark themes."}}}},a={render:()=>{const r=document.createElement("div");return r.style.cssText=`
      background: var(--labs-color-primary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `,r.textContent="Primary Color",r}},t={render:()=>{const r=document.createElement("div");return r.style.cssText=`
      background: var(--labs-color-secondary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `,r.textContent="Secondary Color",r}},n={render:()=>{const r=document.createElement("div");return r.style.cssText=`
      background: var(--labs-color-success);
      color: var(--labs-color-on-success);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `,r.textContent="Success Color",r}},s={render:()=>{const r=document.createElement("div");return r.style.cssText=`
      background: var(--labs-color-error);
      color: var(--labs-color-on-error);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    `,r.textContent="Error Color",r}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => createColorPalette(),
  parameters: {
    docs: {
      description: {
        story: 'Complete color palette used across the Labs design system. Colors automatically adapt to light/dark themes.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const div = document.createElement('div');
    div.style.cssText = \`
      background: var(--labs-color-primary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    \`;
    div.textContent = 'Primary Color';
    return div;
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const div = document.createElement('div');
    div.style.cssText = \`
      background: var(--labs-color-secondary);
      color: var(--labs-color-on-primary);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    \`;
    div.textContent = 'Secondary Color';
    return div;
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const div = document.createElement('div');
    div.style.cssText = \`
      background: var(--labs-color-success);
      color: var(--labs-color-on-success);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    \`;
    div.textContent = 'Success Color';
    return div;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => {
    const div = document.createElement('div');
    div.style.cssText = \`
      background: var(--labs-color-error);
      color: var(--labs-color-on-error);
      padding: 2rem;
      border-radius: var(--labs-border-radius-lg);
      text-align: center;
      font-weight: var(--labs-font-weight-semibold);
    \`;
    div.textContent = 'Error Color';
    return div;
  }
}`,...s.parameters?.docs?.source}}};const b=["ColorPalette","Primary","Secondary","Success","Error"];export{o as ColorPalette,s as Error,a as Primary,t as Secondary,n as Success,b as __namedExportsOrder,m as default};
