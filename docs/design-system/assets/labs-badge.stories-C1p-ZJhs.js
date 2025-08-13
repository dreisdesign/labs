class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["label","variant","color"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}render(){const a=this.getAttribute("label")||this.textContent||"Badge",n=this.getAttribute("variant")||"default",r=this.getAttribute("color");this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                }

                .badge {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: var(--badge-padding, 0.25rem 0.5rem);
                    font-size: var(--badge-font-size, var(--font-size-body-xs, 12px));
                    font-weight: var(--badge-font-weight, 600);
                    line-height: 1.2;
                    border-radius: var(--badge-border-radius, var(--border-radius-full, 9999px));
                    text-transform: var(--badge-text-transform, uppercase);
                    letter-spacing: var(--badge-letter-spacing, 0.025em);
                    white-space: nowrap;
                    border: 1px solid transparent;
                    transition: all 0.2s ease;
                    min-height: 20px;
                }

                /* Default variant */
                .badge.default {
                    background: var(--badge-bg, var(--color-surface-container-high));
                    color: var(--badge-color, var(--color-on-surface));
                }

                /* Primary variant */
                .badge.primary {
                    background: var(--badge-bg, var(--color-primary));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Secondary variant */
                .badge.secondary {
                    background: var(--badge-bg, var(--color-secondary));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Success variant */
                .badge.success {
                    background: var(--badge-bg, var(--color-success));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Warning variant - using primary color as there's no warning in design system */
                .badge.warning {
                    background: var(--badge-bg, var(--color-primary-75));
                    color: var(--badge-color, var(--color-on-primary));
                }

                /* Danger variant */
                .badge.danger {
                    background: var(--badge-bg, var(--color-error));
                    color: var(--badge-color, var(--color-on-error));
                }

                /* Active variant for highlighting current state */
                .badge.active {
                    background: var(--badge-bg, var(--color-primary-25));
                    color: var(--badge-color, var(--color-primary));
                    border-color: var(--color-primary);
                }

                /* Outline variant */
                .badge.outline {
                    background: transparent;
                    color: var(--badge-color, var(--color-on-surface));
                    border-color: var(--color-outline);
                }

                /* Custom color override */
                .badge[data-custom-color] {
                    background: var(--badge-custom-bg) !important;
                    color: var(--badge-custom-color) !important;
                }
            </style>
            
            <span class="badge ${n}" ${r?"data-custom-color":""} style="${r?`--badge-custom-bg: ${r}; --badge-custom-color: ${this.getContrastColor(r)};`:""}">
                ${a}
            </span>
        `}getContrastColor(a){if(!a)return"inherit";const n=a.replace("#",""),r=parseInt(n.substr(0,2),16),d=parseInt(n.substr(2,2),16),b=parseInt(n.substr(4,2),16);return(.299*r+.587*d+.114*b)/255>.5?"var(--color-on-surface, #000000)":"var(--color-on-primary, #ffffff)"}}customElements.define("labs-badge",g);const u={title:"Components/Badge",component:"labs-badge",tags:["autodocs"],parameters:{docs:{description:{component:"Comprehensive badge component for status indicators and labels. Supports multiple variants, custom colors, and automatic contrast calculation. Use controls to explore all variants or 'Show code' for implementation."}}},argTypes:{label:{control:"text",description:"Badge text content"},variant:{control:{type:"select"},description:"Badge appearance variant",options:["primary","secondary","danger","success","warning"]}}},l=({label:i,variant:a})=>`
        <labs-badge 
            label="${i||"Badge"}"
            variant="${a||"primary"}"
        ></labs-badge>
    `,e=l.bind({});e.args={label:"New",variant:"primary"};e.parameters={docs:{description:{story:"Default badge with comprehensive controls. Explore all variants, sizes, and configurations using the controls panel."}}};const o=l.bind({});o.args={label:"Draft",variant:"secondary"};const t=l.bind({});t.args={label:"Failed",variant:"danger"};const s=l.bind({});s.args={label:"Complete",variant:"success"};const c=l.bind({});c.args={label:"Pending",variant:"warning"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'primary'}"
        ></labs-badge>
    \`;
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'primary'}"
        ></labs-badge>
    \`;
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'primary'}"
        ></labs-badge>
    \`;
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'primary'}"
        ></labs-badge>
    \`;
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  label,
  variant
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'primary'}"
        ></labs-badge>
    \`;
}`,...c.parameters?.docs?.source}}};const v=["Default","Secondary","Danger","Success","Warning"];export{t as Danger,e as Default,o as Secondary,s as Success,c as Warning,v as __namedExportsOrder,u as default};
