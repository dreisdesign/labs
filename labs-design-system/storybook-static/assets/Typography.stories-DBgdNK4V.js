/* empty css              */const v={title:"Design Tokens/Typography",tags:["autodocs"],parameters:{docs:{description:{component:"Typography system extracted from the Tracker app. Includes font families, sizes, weights, and utilities used across all components."}}}};function y(){const e=document.createElement("div");return e.style.cssText=`
    font-family: var(--labs-font-family-base);
    color: var(--labs-color-on-background);
  `,[{name:"Extra Small",class:"labs-text-xs",var:"--labs-font-size-xs",usage:"Captions, metadata"},{name:"Small",class:"labs-text-sm",var:"--labs-font-size-sm",usage:"Secondary text"},{name:"Base",class:"labs-text-base",var:"--labs-font-size-base",usage:"Body text, buttons"},{name:"Large",class:"labs-text-lg",var:"--labs-font-size-lg",usage:"Large buttons"},{name:"Extra Large",class:"labs-text-xl",var:"--labs-font-size-xl",usage:"Section headings"},{name:"2X Large",class:"labs-text-2xl",var:"--labs-font-size-2xl",usage:"Page headings"},{name:"3X Large",class:"labs-text-3xl",var:"--labs-font-size-3xl",usage:"Hero text"},{name:"4X Large",class:"labs-text-4xl",var:"--labs-font-size-4xl",usage:"Display text"}].forEach(t=>{const a=document.createElement("div");a.style.cssText=`
      margin-bottom: 1.5rem;
      padding: 1rem;
      border: 1px solid var(--labs-color-primary-25);
      border-radius: var(--labs-border-radius-lg);
    `,a.innerHTML=`
      <div class="${t.class}" style="margin-bottom: 0.5rem;">
        The quick brown fox jumps over the lazy dog
      </div>
      <div style="font-size: var(--labs-font-size-sm); color: var(--labs-color-on-surface-75);">
        <strong>${t.name}</strong> • ${t.var} • ${t.usage}
      </div>
    `,e.appendChild(a)}),e}function h(){const e=document.createElement("div");return e.style.cssText=`
    font-family: var(--labs-font-family-base);
    color: var(--labs-color-on-background);
  `,[{name:"Light",class:"labs-font-light",var:"--labs-font-weight-light",value:"300"},{name:"Normal",class:"labs-font-normal",var:"--labs-font-weight-normal",value:"400"},{name:"Semibold",class:"labs-font-semibold",var:"--labs-font-weight-semibold",value:"600"},{name:"Bold",class:"labs-font-bold",var:"--labs-font-weight-bold",value:"700"},{name:"Black",class:"labs-font-black",var:"--labs-font-weight-black",value:"900"}].forEach(t=>{const a=document.createElement("div");a.style.cssText=`
      margin-bottom: 1rem;
      padding: 1rem;
      border: 1px solid var(--labs-color-primary-25);
      border-radius: var(--labs-border-radius-lg);
    `,a.innerHTML=`
      <div class="${t.class} labs-text-xl" style="margin-bottom: 0.5rem;">
        The quick brown fox
      </div>
      <div style="font-size: var(--labs-font-size-sm); color: var(--labs-color-on-surface-75);">
        <strong>${t.name}</strong> • ${t.var} • ${t.value}
      </div>
    `,e.appendChild(a)}),e}const s={name:"Font Size Scale",render:()=>y(),parameters:{docs:{description:{story:"Complete font size scale used across the Labs design system. Each size has a specific use case and responsive behavior."}}}},n={name:"Font Weights",render:()=>h(),parameters:{docs:{description:{story:"Font weight variations available in the Labs design system. Used to create hierarchy and emphasis."}}}},o={name:"Typography in Buttons",render:()=>{const e=document.createElement("div");return e.style.cssText=`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: var(--labs-font-family-base);
    `,e.innerHTML=`
      <div>
        <h3 style="margin-bottom: 0.5rem; font-weight: var(--labs-font-weight-semibold);">
          Button Typography Usage
        </h3>
        <p style="color: var(--labs-color-on-surface-75); margin-bottom: 1rem;">
          Examples of how typography tokens are applied in the Button component:
        </p>
        
        <button class="labs-button labs-button--sm labs-button--outline" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Small Button (font-size-sm)
        </button>
        
        <button class="labs-button labs-button--primary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Default Button (font-size-base)
        </button>
        
        <button class="labs-button labs-button--lg labs-button--secondary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Large Button (font-size-lg)
        </button>
      </div>
    `,e},parameters:{docs:{description:{story:"Demonstrates how typography tokens are applied in the Button component across different sizes."}}}};var r,l,i;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: 'Font Size Scale',
  render: () => createTypographyScale(),
  parameters: {
    docs: {
      description: {
        story: 'Complete font size scale used across the Labs design system. Each size has a specific use case and responsive behavior.'
      }
    }
  }
}`,...(i=(l=s.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'Font Weights',
  render: () => createFontWeights(),
  parameters: {
    docs: {
      description: {
        story: 'Font weight variations available in the Labs design system. Used to create hierarchy and emphasis.'
      }
    }
  }
}`,...(b=(c=n.parameters)==null?void 0:c.docs)==null?void 0:b.source}}};var d,g,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: 'Typography in Buttons',
  render: () => {
    const container = document.createElement('div');
    container.style.cssText = \`
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-family: var(--labs-font-family-base);
    \`;
    container.innerHTML = \`
      <div>
        <h3 style="margin-bottom: 0.5rem; font-weight: var(--labs-font-weight-semibold);">
          Button Typography Usage
        </h3>
        <p style="color: var(--labs-color-on-surface-75); margin-bottom: 1rem;">
          Examples of how typography tokens are applied in the Button component:
        </p>
        
        <button class="labs-button labs-button--sm labs-button--outline" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Small Button (font-size-sm)
        </button>
        
        <button class="labs-button labs-button--primary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Default Button (font-size-base)
        </button>
        
        <button class="labs-button labs-button--lg labs-button--secondary" 
                style="margin-right: 0.5rem; margin-bottom: 0.5rem;">
          Large Button (font-size-lg)
        </button>
      </div>
    \`;
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates how typography tokens are applied in the Button component across different sizes.'
      }
    }
  }
}`,...(p=(g=o.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};const x=["TypeScale","FontWeights","ButtonTypography"];export{o as ButtonTypography,n as FontWeights,s as TypeScale,x as __namedExportsOrder,v as default};
