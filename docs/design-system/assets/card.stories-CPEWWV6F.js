import{c as p}from"./button-configs-DUKrH4Iw.js";class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["title","subtitle","variant","width"]}connectedCallback(){this.render()}attributeChangedCallback(){this.render()}render(){const l=this.getAttribute("title")||"",c=this.getAttribute("subtitle")||"",u=this.getAttribute("variant")||"default",v=this.getAttribute("width")||"auto";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    width: ${v==="full"?"100%":v==="constrained"?"min(500px, 100%)":v};
                    margin: var(--card-margin, 0);
                }

                .card {
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    border-radius: var(--card-border-radius, var(--border-radius-lg, 12px));
                    border: var(--card-border, 1px solid var(--color-outline-variant, #e0e0e0));
                    padding: var(--card-padding, var(--space-lg, 24px));
                    transition: all 0.2s ease;
                    box-shadow: var(--card-shadow, none);
                }

                /* Variant styles */
                .card.default {
                    /* Uses default styles above */
                }

                .card.elevated {
                    box-shadow: var(--card-shadow, var(--shadow-md, 0 4px 6px -1px rgba(0, 0, 0, 0.1)));
                    background: var(--card-bg, var(--color-surface, white));
                }

                .card.stats {
                    text-align: center;
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    border: var(--card-border, 1px solid var(--color-outline-variant, #e0e0e0));
                }

                .card.header {
                    text-align: center;
                    background: var(--card-bg, var(--color-surface-container, #f8f9fa));
                    margin-bottom: var(--space-lg, 24px);
                }

                .card.compact {
                    padding: var(--card-padding, var(--space-md, 16px));
                }

                .card.outline {
                    background: transparent;
                    border: var(--card-border, 2px solid var(--color-outline, #d1d5db));
                }

                /* Interactive variants */
                .card.clickable {
                    cursor: pointer;
                    transition: all 0.2s ease;
                }

                .card.clickable:hover {
                    transform: translateY(-2px);
                    box-shadow: var(--card-hover-shadow, var(--shadow-lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1)));
                    background: var(--card-hover-bg, var(--color-surface-container-high, #e8eaed));
                }

                .card.clickable:active {
                    transform: translateY(0);
                }

                .card-header {
                    display: flex;
                    flex-direction: column;
                    gap: var(--space-xs, 8px);
                    margin-bottom: var(--card-content-gap, var(--space-md, 16px));
                }

                .card-title {
                    font-size: var(--card-title-size, var(--font-size-h3, 1.25rem));
                    font-weight: var(--card-title-weight, var(--font-weight-semibold, 600));
                    color: var(--card-title-color, var(--color-on-surface, #1f2937));
                    margin: 0;
                    line-height: 1.3;
                }

                .card-subtitle {
                    font-size: var(--card-subtitle-size, var(--font-size-body-sm, 0.875rem));
                    color: var(--card-subtitle-color, var(--color-on-surface-variant, #6b7280));
                    margin: 0;
                    line-height: 1.4;
                }

                .card-content {
                    color: var(--card-content-color, var(--color-on-surface, #1f2937));
                }

                /* Hide header if no title/subtitle */
                .card-header:empty {
                    display: none;
                    margin: 0;
                }

                /* Dark theme support */
                :host-context(.theme-dark) .card {
                    background: var(--card-bg, var(--color-surface-container-dark, #2a2a2a));
                    border-color: var(--color-outline-dark, #525252);
                }

                :host-context(.theme-dark) .card.elevated {
                    background: var(--card-bg, var(--color-surface-dark, #1f1f1f));
                }

                :host-context(.theme-dark) .card-title {
                    color: var(--card-title-color, var(--color-on-surface-dark, #e0e0e0));
                }

                :host-context(.theme-dark) .card-subtitle {
                    color: var(--card-subtitle-color, var(--color-on-surface-variant-dark, #a0a0a0));
                }
            </style>
            
            <div class="card ${u}">
                <div class="card-header">
                    ${l?`<h3 class="card-title">${l}</h3>`:""}
                    ${c?`<p class="card-subtitle">${c}</p>`:""}
                </div>
                <div class="card-content">
                    <slot></slot>
                </div>
            </div>
        `,u==="clickable"&&this.shadowRoot.addEventListener("click",m=>{this.dispatchEvent(new CustomEvent("card-click",{detail:{title:l,subtitle:c,target:this},bubbles:!0}))})}}customElements.define("labs-card",f);const b={title:"Components/Card",component:"labs-card",parameters:{docs:{description:{component:`
**labs-card** is a flexible container component for grouping related content. 

### Key Features:
- **Modular Design:** Self-contained with CSS custom properties
- **Multiple Variants:** Default, elevated, stats, header, compact, outline, clickable
- **Responsive Width:** Auto, full, constrained, or custom CSS values  
- **Theme Integration:** Light/dark mode support with proper contrast
- **Event Handling:** Clickable variant emits 'card-click' events
- **Accessibility:** Proper heading hierarchy and semantic structure

Perfect for dashboard widgets, content previews, settings panels, and activity timelines.
        `}}},argTypes:{title:{control:"text",description:"Card title (optional)"},subtitle:{control:"text",description:"Card subtitle (optional)"},variant:{control:"select",options:["default","elevated","stats","header","compact","outline","clickable"],description:"Visual style variant"},width:{control:"select",options:["auto","full","constrained","300px","400px","500px"],description:"Card width constraint"}}},e={args:{title:"Default Card",subtitle:"Standard card styling with subtle background",variant:"default",width:"auto"},render:t=>`
    <labs-card 
      title="${t.title}" 
      subtitle="${t.subtitle}"
      variant="${t.variant}"
      width="${t.width}">
      <p>This is the default card variant with a subtle background and border. Perfect for general content containers and information displays.</p>
    </labs-card>
  `},a={args:{title:"Elevated Card",subtitle:"Card with shadow elevation",variant:"elevated",width:"auto"},render:t=>`
    <labs-card 
      title="${t.title}" 
      subtitle="${t.subtitle}"
      variant="${t.variant}"
      width="${t.width}">
      <p>This elevated card has a shadow and clean white background, making it stand out from the page. Great for important content or primary actions.</p>
    </labs-card>
  `},r={args:{title:"Activity Stats",subtitle:"Today's Progress",variant:"stats",width:"constrained"},render:t=>`
    <labs-card 
      title="${t.title}" 
      subtitle="${t.subtitle}"
      variant="${t.variant}"
      width="${t.width}">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">12</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">3</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">In Progress</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-warning);">2</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Pending</div>
        </div>
      </div>
    </labs-card>
  `},i={args:{title:"Page Header",subtitle:"Activity Timeline Overview",variant:"header",width:"full"},render:t=>`
    <labs-card 
      title="${t.title}" 
      subtitle="${t.subtitle}"
      variant="${t.variant}"
      width="${t.width}">
      <p style="margin: 0;">This header variant centers the title and subtitle, perfect for page sections or dashboard headers. Use with full width for maximum impact.</p>
    </labs-card>
  `},n={args:{title:"Interactive Card",subtitle:"Click me for actions",variant:"clickable",width:"auto"},render:t=>`
    <labs-card 
      title="${t.title}" 
      subtitle="${t.subtitle}"
      variant="${t.variant}"
      width="${t.width}"
      onclick="alert('Card clicked! Event: card-click')">
      <p>This clickable card has hover effects and emits 'card-click' events. Perfect for navigation cards, action items, or interactive content.</p>
      <div style="margin-top: 16px; padding: 12px; background: var(--color-surface-container); border-radius: 8px; font-size: 0.875rem;">
        💡 Try clicking this card to see the event handling in action!
      </div>
    </labs-card>
  `},o={parameters:{docs:{description:{story:"Demonstrates different width constraint options for responsive layouts."}}},render:()=>`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <labs-card title="Auto Width" subtitle="Adapts to content" variant="default" width="auto">
        <p>This card uses auto width and adapts to its content.</p>
      </labs-card>
      
      <labs-card title="Full Width" subtitle="100% container width" variant="elevated" width="full">
        <p>This card takes the full width of its container.</p>
      </labs-card>
      
      <labs-card title="Constrained Width" subtitle="Max 500px responsive" variant="stats" width="constrained">
        <p>This card is constrained to max 500px but responsive on smaller screens.</p>
      </labs-card>
      
      <labs-card title="Fixed Width" subtitle="Custom 400px width" variant="outline" width="400px">
        <p>This card has a fixed 400px width.</p>
      </labs-card>
    </div>
  `},d={parameters:{docs:{description:{story:"Example dashboard layout using cards in a responsive grid."}}},render:()=>`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <labs-card title="Quick Stats" variant="stats" width="full">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 12px;">
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">24</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Today</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">156</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">This Week</div>
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Recent Activity" subtitle="Last 7 days" variant="elevated" width="full">
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ✅ Completed daily review
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            📝 Updated project notes
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ⏰ Focused work session
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Quick Actions" variant="outline" width="full">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          ${p("add",{label:"Add New Item"})}
          ${p("settings",{label:"Open Settings"})}
          ${p("allApps",{label:"View All Apps"})}
        </div>
      </labs-card>
    </div>
  `},s={parameters:{docs:{description:{story:"Activity timeline pattern using the card component - extracted from the original date lists pattern."}}},render:()=>`
    <div style="max-width: 800px;">
      <labs-card title="Activity Timeline" subtitle="Recent Activity Overview" variant="header" width="full">
        <p style="margin: 0; color: var(--color-on-surface-variant);">
          Track your daily activities and see patterns in your productivity.
        </p>
      </labs-card>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 24px;">
        <labs-card title="Today's Stats" variant="stats" width="full">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">8</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Completed</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">2</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">In Progress</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-warning);">1</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Pending</div>
            </div>
          </div>
        </labs-card>
        
        <labs-card title="This Week" variant="stats" width="full">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">42</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Completed</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">8</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">In Progress</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-warning);">3</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Pending</div>
            </div>
          </div>
        </labs-card>
      </div>
      
      <div style="margin-top: 32px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.125rem; color: var(--color-on-surface);">Recent Activity</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Morning Review Session</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed daily planning and goal review</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>8:30 AM</div>
                <div>Today</div>
              </div>
            </div>
          </labs-card>
          
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Design System Update</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Added new card component with multiple variants</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>2:15 PM</div>
                <div>Today</div>
              </div>
            </div>
          </labs-card>
          
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Focus Work Block</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Deep work session on component architecture</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>10:00 AM</div>
                <div>Yesterday</div>
              </div>
            </div>
          </labs-card>
        </div>
      </div>
    </div>
  `};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Default Card",
    subtitle: "Standard card styling with subtle background",
    variant: "default",
    width: "auto"
  },
  render: args => \`
    <labs-card 
      title="\${args.title}" 
      subtitle="\${args.subtitle}"
      variant="\${args.variant}"
      width="\${args.width}">
      <p>This is the default card variant with a subtle background and border. Perfect for general content containers and information displays.</p>
    </labs-card>
  \`
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Elevated Card",
    subtitle: "Card with shadow elevation",
    variant: "elevated",
    width: "auto"
  },
  render: args => \`
    <labs-card 
      title="\${args.title}" 
      subtitle="\${args.subtitle}"
      variant="\${args.variant}"
      width="\${args.width}">
      <p>This elevated card has a shadow and clean white background, making it stand out from the page. Great for important content or primary actions.</p>
    </labs-card>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Activity Stats",
    subtitle: "Today's Progress",
    variant: "stats",
    width: "constrained"
  },
  render: args => \`
    <labs-card 
      title="\${args.title}" 
      subtitle="\${args.subtitle}"
      variant="\${args.variant}"
      width="\${args.width}">
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px;">
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">12</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">3</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">In Progress</div>
        </div>
        <div>
          <div style="font-size: 2rem; font-weight: bold; color: var(--color-warning);">2</div>
          <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Pending</div>
        </div>
      </div>
    </labs-card>
  \`
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Page Header",
    subtitle: "Activity Timeline Overview",
    variant: "header",
    width: "full"
  },
  render: args => \`
    <labs-card 
      title="\${args.title}" 
      subtitle="\${args.subtitle}"
      variant="\${args.variant}"
      width="\${args.width}">
      <p style="margin: 0;">This header variant centers the title and subtitle, perfect for page sections or dashboard headers. Use with full width for maximum impact.</p>
    </labs-card>
  \`
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Interactive Card",
    subtitle: "Click me for actions",
    variant: "clickable",
    width: "auto"
  },
  render: args => \`
    <labs-card 
      title="\${args.title}" 
      subtitle="\${args.subtitle}"
      variant="\${args.variant}"
      width="\${args.width}"
      onclick="alert('Card clicked! Event: card-click')">
      <p>This clickable card has hover effects and emits 'card-click' events. Perfect for navigation cards, action items, or interactive content.</p>
      <div style="margin-top: 16px; padding: 12px; background: var(--color-surface-container); border-radius: 8px; font-size: 0.875rem;">
        💡 Try clicking this card to see the event handling in action!
      </div>
    </labs-card>
  \`
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates different width constraint options for responsive layouts.'
      }
    }
  },
  render: () => \`
    <div style="display: flex; flex-direction: column; gap: 24px;">
      <labs-card title="Auto Width" subtitle="Adapts to content" variant="default" width="auto">
        <p>This card uses auto width and adapts to its content.</p>
      </labs-card>
      
      <labs-card title="Full Width" subtitle="100% container width" variant="elevated" width="full">
        <p>This card takes the full width of its container.</p>
      </labs-card>
      
      <labs-card title="Constrained Width" subtitle="Max 500px responsive" variant="stats" width="constrained">
        <p>This card is constrained to max 500px but responsive on smaller screens.</p>
      </labs-card>
      
      <labs-card title="Fixed Width" subtitle="Custom 400px width" variant="outline" width="400px">
        <p>This card has a fixed 400px width.</p>
      </labs-card>
    </div>
  \`
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Example dashboard layout using cards in a responsive grid.'
      }
    }
  },
  render: () => \`
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
      <labs-card title="Quick Stats" variant="stats" width="full">
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 12px;">
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-primary);">24</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Today</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2rem; font-weight: bold; color: var(--color-secondary);">156</div>
            <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">This Week</div>
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Recent Activity" subtitle="Last 7 days" variant="elevated" width="full">
        <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 12px;">
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ✅ Completed daily review
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            📝 Updated project notes
          </div>
          <div style="padding: 8px; background: var(--color-surface-container); border-radius: 6px; font-size: 0.875rem;">
            ⏰ Focused work session
          </div>
        </div>
      </labs-card>
      
      <labs-card title="Quick Actions" variant="outline" width="full">
        <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 12px;">
          \${createButton('add', {
    label: 'Add New Item'
  })}
          \${createButton('settings', {
    label: 'Open Settings'
  })}
          \${createButton('allApps', {
    label: 'View All Apps'
  })}
        </div>
      </labs-card>
    </div>
  \`
}`,...d.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Activity timeline pattern using the card component - extracted from the original date lists pattern.'
      }
    }
  },
  render: () => \`
    <div style="max-width: 800px;">
      <labs-card title="Activity Timeline" subtitle="Recent Activity Overview" variant="header" width="full">
        <p style="margin: 0; color: var(--color-on-surface-variant);">
          Track your daily activities and see patterns in your productivity.
        </p>
      </labs-card>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 24px;">
        <labs-card title="Today's Stats" variant="stats" width="full">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">8</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Completed</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">2</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">In Progress</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-warning);">1</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Pending</div>
            </div>
          </div>
        </labs-card>
        
        <labs-card title="This Week" variant="stats" width="full">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 12px;">
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-primary);">42</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Completed</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-secondary);">8</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">In Progress</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--color-warning);">3</div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant);">Pending</div>
            </div>
          </div>
        </labs-card>
      </div>
      
      <div style="margin-top: 32px;">
        <h3 style="margin: 0 0 16px 0; font-size: 1.125rem; color: var(--color-on-surface);">Recent Activity</h3>
        <div style="display: flex; flex-direction: column; gap: 12px;">
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Morning Review Session</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Completed daily planning and goal review</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>8:30 AM</div>
                <div>Today</div>
              </div>
            </div>
          </labs-card>
          
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Design System Update</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Added new card component with multiple variants</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>2:15 PM</div>
                <div>Today</div>
              </div>
            </div>
          </labs-card>
          
          <labs-card variant="default" width="full">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <div>
                <div style="font-weight: 600; margin-bottom: 4px;">Focus Work Block</div>
                <div style="font-size: 0.875rem; color: var(--color-on-surface-variant);">Deep work session on component architecture</div>
              </div>
              <div style="font-size: 0.75rem; color: var(--color-on-surface-variant); text-align: right;">
                <div>10:00 AM</div>
                <div>Yesterday</div>
              </div>
            </div>
          </labs-card>
        </div>
      </div>
    </div>
  \`
}`,...s.parameters?.docs?.source}}};const h=["Default","Elevated","Stats","Header","Clickable","WidthExamples","DashboardGrid","ActivityTimeline"];export{s as ActivityTimeline,n as Clickable,d as DashboardGrid,e as Default,a as Elevated,i as Header,r as Stats,o as WidthExamples,h as __namedExportsOrder,b as default};
