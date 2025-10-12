import"./iframe-CiIWiEO2.js";import{i as s}from"./icons-list-Dhu2KL_d.js";import"./preload-helper-PPVm8Dsz.js";const o=document.createElement("template");o.innerHTML=`
  <style>
    :host {
      display: block;
      width: 100%;
      max-width: 400px;
      box-sizing: border-box;
      margin-left: auto;
      margin-right: auto;
      padding-left: var(--grid-container-padding-sm);
      padding-right: var(--grid-container-padding-sm);
    }
    @media (min-width: 640px) {
      :host {
        max-width: 500px;
      }
    }
    :host([padding-md]) {
      padding-left: var(--grid-container-padding-md, 20px);
      padding-right: var(--grid-container-padding-md, 20px);
    }
    :host([padding-lg]) {
      padding-left: var(--grid-container-padding-lg, 24px);
      padding-right: var(--grid-container-padding-lg, 24px);
    }
    :host([fullbleed]) {
      max-width: 100vw;
      padding-left: 0;
      padding-right: 0;
    }
    @media (max-width: var(--container-mobile-breakpoint, 640px)) {
      :host {
        max-width: 100vw;
        padding-left: var(--container-mobile-padding, 12px);
        padding-right: var(--container-mobile-padding, 12px);
      }
    }
  </style>
  <slot></slot>
`;class l extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(o.content.cloneNode(!0))}connectedCallback(){this.hasAttribute("role")||this.setAttribute("role","region")}}customElements.get("labs-container")||customElements.define("labs-container",l);const m={title:"1. Foundations/Container",parameters:{docs:{description:{component:"Demonstrates the `labs-container` element and its attributes: `padding-md`, `padding-lg`, and `fullbleed`. Use `maxWidth` arg to override token-driven max width."}}},argTypes:{layout:{control:{type:"radio"},options:["default","padding-md","padding-lg","fullbleed"],description:"Choose a container variant"},maxWidth:{control:{type:"text"},description:"Override the container max width (e.g. 960px)"},settingsIcon:{control:{type:"select"},options:Object.keys(s)}},args:{layout:"default",maxWidth:"",settingsIcon:"settings"}},n={name:"Container Variants",render:i=>{const{layout:t,maxWidth:a,settingsIcon:r}=i,e=t==="padding-md"?"padding-md":t==="padding-lg"?"padding-lg":t==="fullbleed"?"fullbleed":"",d=a?`style="--app-container-max:${a};"`:"";return`
      <style>
        html,body { height:100%; margin:0; padding:0; }
        .page { min-height:100vh; background: var(--color-background, #f6f7f9); padding: 24px 0; }
        .demo-card { background: var(--color-surface, #fff); padding: 16px; border-radius: 10px; box-shadow: var(--elevation-1, none); }
        labs-container[fullbleed] { box-sizing: border-box; }
      </style>
      <div class="page">
        <labs-container ${e} ${d}>
          <div class="demo-card">
            <h3 style="margin-top:0;">labs-container ${e?`[${e}]`:""} ${a?`(max: ${a})`:""}</h3>
            <p style="margin:0 0 12px 0; color:var(--color-on-surface-variant,#666);">This container respects the design system tokens for padding and max width. Toggle variants to preview responsive behavior.</p>
            <div style="display:flex;gap:8px;align-items:center;">
              <labs-button pill variant="primary">Primary</labs-button>
              <labs-button variant="icon" aria-label="Settings"><labs-icon name="${r}" slot="icon-left"></labs-icon></labs-button>
            </div>
          </div>
        </labs-container>
      </div>
    `}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Container Variants',
  render: args => {
    const {
      layout,
      maxWidth,
      settingsIcon
    } = args;
    const attr = layout === 'padding-md' ? 'padding-md' : layout === 'padding-lg' ? 'padding-lg' : layout === 'fullbleed' ? 'fullbleed' : '';
    const style = maxWidth ? \`style="--app-container-max:\${maxWidth};"\` : '';
    return \`
      <style>
        html,body { height:100%; margin:0; padding:0; }
        .page { min-height:100vh; background: var(--color-background, #f6f7f9); padding: 24px 0; }
        .demo-card { background: var(--color-surface, #fff); padding: 16px; border-radius: 10px; box-shadow: var(--elevation-1, none); }
        labs-container[fullbleed] { box-sizing: border-box; }
      </style>
      <div class="page">
        <labs-container \${attr} \${style}>
          <div class="demo-card">
            <h3 style="margin-top:0;">labs-container \${attr ? \`[\${attr}]\` : ''} \${maxWidth ? \`(max: \${maxWidth})\` : ''}</h3>
            <p style="margin:0 0 12px 0; color:var(--color-on-surface-variant,#666);">This container respects the design system tokens for padding and max width. Toggle variants to preview responsive behavior.</p>
            <div style="display:flex;gap:8px;align-items:center;">
              <labs-button pill variant="primary">Primary</labs-button>
              <labs-button variant="icon" aria-label="Settings"><labs-icon name="\${settingsIcon}" slot="icon-left"></labs-icon></labs-button>
            </div>
          </div>
        </labs-container>
      </div>
    \`;
  }
}`,...n.parameters?.docs?.source}}};const b=["Demo"];export{n as Demo,b as __namedExportsOrder,m as default};
