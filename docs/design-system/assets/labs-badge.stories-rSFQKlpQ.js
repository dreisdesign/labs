class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["label","variant","color"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}render(){const e=this.getAttribute("label")||this.textContent||"Badge",a=this.getAttribute("variant")||"default",n=this.getAttribute("color");this.shadowRoot.innerHTML=`
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
            
            <span class="badge ${a}" ${n?"data-custom-color":""} style="${n?`--badge-custom-bg: ${n}; --badge-custom-color: ${this.getContrastColor(n)};`:""}">
                ${e}
            </span>
        `}getContrastColor(e){if(!e)return"inherit";const a=e.replace("#",""),n=parseInt(a.substr(0,2),16),u=parseInt(a.substr(2,2),16),p=parseInt(a.substr(4,2),16);return(.299*n+.587*u+.114*p)/255>.5?"var(--color-on-surface, #000000)":"var(--color-on-primary, #ffffff)"}}customElements.define("labs-badge",m);const h={title:"Components/Badge",component:"labs-badge",parameters:{docs:{description:{component:"Small status and label badges for indicating states, categories, and highlighting information. Supports multiple variants, custom colors, and automatic contrast calculation."}}},argTypes:{label:{control:"text",description:"Badge text content"},variant:{control:{type:"select"},description:"Badge appearance variant",options:["default","primary","secondary","success","warning","danger","active","outline"]},color:{control:"color",description:"Custom background color (overrides variant)"}}},r=({label:v,variant:e,color:a})=>`
        <labs-badge 
            label="${v||"Badge"}"
            variant="${e||"default"}"
            ${a?`color="${a}"`:""}
        ></labs-badge>
    `,s=r.bind({});s.args={label:"Default",variant:"default"};const l=r.bind({});l.args={label:"Primary",variant:"primary"};const i=r.bind({});i.args={label:"Secondary",variant:"secondary"};const d=r.bind({});d.args={label:"Success",variant:"success"};const c=r.bind({});c.args={label:"Warning",variant:"warning"};const b=r.bind({});b.args={label:"Danger",variant:"danger"};const o=r.bind({});o.args={label:"Active",variant:"active"};o.parameters={docs:{description:{story:"Active badge variant for highlighting the current or selected state. Features border styling and container colors."}}};const g=r.bind({});g.args={label:"Outline",variant:"outline"};const f=()=>`
        <style>
            .badge-demo {
                max-width: 600px;
                margin: 0 auto;
                font-family: var(--font-family-primary);
            }
            
            .badge-section {
                margin-bottom: 2rem;
                padding: 1.5rem;
                border: 1px solid var(--color-outline-variant);
                border-radius: var(--border-radius-lg);
                background: var(--color-surface-container);
            }
            
            .badge-section h3 {
                margin-bottom: 1rem;
                color: var(--color-on-surface);
                font-size: var(--font-size-h4);
            }
            
            .badge-group {
                display: flex;
                gap: var(--space-sm);
                flex-wrap: wrap;
                align-items: center;
            }
            
            .description {
                color: var(--color-on-surface-variant);
                font-size: var(--font-size-body-sm);
                margin-bottom: 1rem;
            }
        </style>
        
        <div class="badge-demo">
            <div class="badge-section">
                <h3>Status Badges</h3>
                <p class="description">Common status indicators for system states and user feedback</p>
                <div class="badge-group">
                    <labs-badge label="New" variant="primary"></labs-badge>
                    <labs-badge label="Active" variant="success"></labs-badge>
                    <labs-badge label="Pending" variant="warning"></labs-badge>
                    <labs-badge label="Error" variant="danger"></labs-badge>
                    <labs-badge label="Draft" variant="secondary"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Category Labels</h3>
                <p class="description">Content categorization and organizational badges</p>
                <div class="badge-group">
                    <labs-badge label="Design" variant="primary"></labs-badge>
                    <labs-badge label="Development" variant="secondary"></labs-badge>
                    <labs-badge label="Testing" variant="outline"></labs-badge>
                    <labs-badge label="Documentation" variant="default"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Custom Colors</h3>
                <p class="description">Badge with custom background colors and automatic contrast</p>
                <div class="badge-group">
                    <labs-badge label="Purple" color="#8b5cf6"></labs-badge>
                    <labs-badge label="Orange" color="#f97316"></labs-badge>
                    <labs-badge label="Teal" color="#0d9488"></labs-badge>
                    <labs-badge label="Pink" color="#ec4899"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Usage in Card Headers</h3>
                <p class="description">How badges integrate with other components for status indication</p>
                <div style="background: var(--color-surface); padding: 1rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <h4 style="margin: 0; color: var(--color-on-surface);">Button Component</h4>
                        <labs-badge label="Active" variant="active"></labs-badge>
                    </div>
                    <p style="margin: 0; color: var(--color-on-surface-variant); font-size: var(--font-size-body-sm);">Primary button component with full interaction support</p>
                </div>
            </div>
        </div>
    `,t=f.bind({});t.parameters={docs:{description:{story:"Comprehensive badge examples showing different variants, use cases, and integration patterns. Includes status badges, category labels, custom colors, and real-world usage scenarios."}}};t.storyName="All Variants";s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...b.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`({
  label,
  variant,
  color
}) => {
  return \`
        <labs-badge 
            label="\${label || 'Badge'}"
            variant="\${variant || 'default'}"
            \${color ? \`color="\${color}"\` : ''}
        ></labs-badge>
    \`;
}`,...g.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  return \`
        <style>
            .badge-demo {
                max-width: 600px;
                margin: 0 auto;
                font-family: var(--font-family-primary);
            }
            
            .badge-section {
                margin-bottom: 2rem;
                padding: 1.5rem;
                border: 1px solid var(--color-outline-variant);
                border-radius: var(--border-radius-lg);
                background: var(--color-surface-container);
            }
            
            .badge-section h3 {
                margin-bottom: 1rem;
                color: var(--color-on-surface);
                font-size: var(--font-size-h4);
            }
            
            .badge-group {
                display: flex;
                gap: var(--space-sm);
                flex-wrap: wrap;
                align-items: center;
            }
            
            .description {
                color: var(--color-on-surface-variant);
                font-size: var(--font-size-body-sm);
                margin-bottom: 1rem;
            }
        </style>
        
        <div class="badge-demo">
            <div class="badge-section">
                <h3>Status Badges</h3>
                <p class="description">Common status indicators for system states and user feedback</p>
                <div class="badge-group">
                    <labs-badge label="New" variant="primary"></labs-badge>
                    <labs-badge label="Active" variant="success"></labs-badge>
                    <labs-badge label="Pending" variant="warning"></labs-badge>
                    <labs-badge label="Error" variant="danger"></labs-badge>
                    <labs-badge label="Draft" variant="secondary"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Category Labels</h3>
                <p class="description">Content categorization and organizational badges</p>
                <div class="badge-group">
                    <labs-badge label="Design" variant="primary"></labs-badge>
                    <labs-badge label="Development" variant="secondary"></labs-badge>
                    <labs-badge label="Testing" variant="outline"></labs-badge>
                    <labs-badge label="Documentation" variant="default"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Custom Colors</h3>
                <p class="description">Badge with custom background colors and automatic contrast</p>
                <div class="badge-group">
                    <labs-badge label="Purple" color="#8b5cf6"></labs-badge>
                    <labs-badge label="Orange" color="#f97316"></labs-badge>
                    <labs-badge label="Teal" color="#0d9488"></labs-badge>
                    <labs-badge label="Pink" color="#ec4899"></labs-badge>
                </div>
            </div>
            
            <div class="badge-section">
                <h3>Usage in Card Headers</h3>
                <p class="description">How badges integrate with other components for status indication</p>
                <div style="background: var(--color-surface); padding: 1rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                        <h4 style="margin: 0; color: var(--color-on-surface);">Button Component</h4>
                        <labs-badge label="Active" variant="active"></labs-badge>
                    </div>
                    <p style="margin: 0; color: var(--color-on-surface-variant); font-size: var(--font-size-body-sm);">Primary button component with full interaction support</p>
                </div>
            </div>
        </div>
    \`;
}`,...t.parameters?.docs?.source}}};const $=["Default","Primary","Secondary","Success","Warning","Danger","Active","Outline","BadgeVariants"];export{o as Active,t as BadgeVariants,b as Danger,s as Default,g as Outline,l as Primary,i as Secondary,d as Success,c as Warning,$ as __namedExportsOrder,h as default};
