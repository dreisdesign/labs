import"./labs-icon-BWc3JKvc.js";import"./labs-button-BCzBXzvm.js";class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.dismissTimeout=null,this.defaultTimeout=2e3}static get observedAttributes(){return["active","message","variant","timeout"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}disconnectedCallback(){this.clearDismissTimeout()}show(e,t="success",o=this.defaultTimeout){this.setAttribute("message",e),this.setAttribute("variant",t),this.setAttribute("timeout",o.toString()),this.setAttribute("active",""),this.clearDismissTimeout(),this.dismissTimeout=setTimeout(()=>{this.dismiss()},o),this.dispatchEvent(new CustomEvent("labs-alert-show",{bubbles:!0,detail:{message:e,variant:t,timeout:o}}))}dismiss(){this.removeAttribute("active"),this.clearDismissTimeout(),this.dispatchEvent(new CustomEvent("labs-alert-dismiss",{bubbles:!0,detail:{message:this.getAttribute("message")}}))}clearDismissTimeout(){this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null)}render(){const e=this.hasAttribute("active");if(!e){this.shadowRoot.innerHTML=`
                <style>
                    :host {
                        display: none;
                    }
                </style>
            `;return}const t=this.getAttribute("message")||"Action completed",o=this.getAttribute("variant")||"success";let s,n,a;switch(o){case"success":s="var(--color-success, #00B56A)",n="var(--color-on-success, #ffffff)",a="check";break;case"error":s="var(--color-error, #B5005A)",n="var(--color-on-error, #ffffff)",a="cancel";break;case"warning":s="var(--color-warning, #FFC634)",n="var(--color-on-warning, #000000)",a="change_circle";break;case"info":s="var(--color-primary, #3b82f6)",n="var(--color-on-primary, #ffffff)",a="change_circle";break;default:s="var(--color-success, #00B56A)",n="var(--color-on-success, #ffffff)",a="check"}this.shadowRoot.innerHTML=`
            <style>
                :host {
                    position: fixed;
                    bottom: 120px;
                    left: 50%;
                    transform: translateX(-50%);
                    z-index: 1000;
                    transition: all 0.3s ease;
                    opacity: ${e?"1":"0"};
                    pointer-events: ${e?"auto":"none"};
                    visibility: ${e?"visible":"hidden"};
                }

                .alert {
                    background-color: ${s};
                    color: ${n};
                    border: none;
                    border-radius: 8px;
                    padding: var(--space-md, 1rem) var(--space-lg, 1.5rem);
                    font-weight: var(--font-weight-semibold, 600);
                    font-size: var(--font-size-base, 1rem);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    display: flex;
                    align-items: center;
                    gap: var(--space-sm, 0.5rem);
                    min-width: 200px;
                    max-width: 400px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .alert-icon {
                    flex-shrink: 0;
                }

                .alert-message {
                    flex: 1;
                    min-width: 0;
                }

                /* Animation states */
                :host(:not([active])) {
                    transform: translateX(-50%) translateY(20px);
                }
            </style>
            
            <div class="alert">
                <labs-icon 
                    class="alert-icon"
                    name="${a}" 
                    color="${n}"
                ></labs-icon>
                <span class="alert-message">${t}</span>
            </div>
        `}}customElements.define("labs-alert",u);const p={title:"Components/Alert",tags:["autodocs"],parameters:{docs:{description:{component:"Comprehensive toast-style notification component. Shows success, error, or info messages with auto-dismiss functionality. Use controls to explore all variants or 'Show code' for implementation."}}},argTypes:{message:{control:"text",description:"Message shown in the alert"},variant:{control:{type:"select"},options:["success","error","warning","info"],description:"Alert style variant"},timeout:{control:"number",description:"Auto-dismiss timeout in milliseconds"}}},d=r=>(customElements.whenDefined("labs-alert").then(()=>{customElements.whenDefined("labs-button").then(()=>{setTimeout(()=>{const e=document.querySelector("labs-alert"),t=document.querySelector(".trigger-alert");!t||t._listenerAdded||(t._listenerAdded=!0,t.addEventListener("click",()=>{e&&e.show&&e.show(r.message,r.variant,r.timeout)}))},100)})}),`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show ${r.variant||"success"} Alert" icon="${r.variant==="error"?"cancel":r.variant==="warning"?"warning":r.variant==="info"?"change_circle":"check"}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    `),i=d.bind({});i.args={message:"Task completed successfully!",variant:"success",timeout:3e3};i.parameters={docs:{description:{story:"Success alert with interactive controls. Use controls to explore different messages and timeout durations."}}};const l=d.bind({});l.args={message:"Something went wrong. Please try again.",variant:"error",timeout:4e3};const c=d.bind({});c.args={message:"Warning: Please check your input.",variant:"warning",timeout:3e3};const m=d.bind({});m.args={message:"Here's some helpful information for you.",variant:"info",timeout:3e3};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  // Use customElements.whenDefined to ensure proper component loading
  customElements.whenDefined('labs-alert').then(() => {
    customElements.whenDefined('labs-button').then(() => {
      setTimeout(() => {
        const alert = document.querySelector('labs-alert');
        const triggerButton = document.querySelector('.trigger-alert');
        if (!triggerButton || triggerButton._listenerAdded) return;
        triggerButton._listenerAdded = true;
        triggerButton.addEventListener('click', () => {
          if (alert && alert.show) {
            alert.show(args.message, args.variant, args.timeout);
          }
        });
      }, 100);
    });
  });
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show \${args.variant || 'success'} Alert" icon="\${args.variant === 'error' ? 'cancel' : args.variant === 'warning' ? 'warning' : args.variant === 'info' ? 'change_circle' : 'check'}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`args => {
  // Use customElements.whenDefined to ensure proper component loading
  customElements.whenDefined('labs-alert').then(() => {
    customElements.whenDefined('labs-button').then(() => {
      setTimeout(() => {
        const alert = document.querySelector('labs-alert');
        const triggerButton = document.querySelector('.trigger-alert');
        if (!triggerButton || triggerButton._listenerAdded) return;
        triggerButton._listenerAdded = true;
        triggerButton.addEventListener('click', () => {
          if (alert && alert.show) {
            alert.show(args.message, args.variant, args.timeout);
          }
        });
      }, 100);
    });
  });
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show \${args.variant || 'success'} Alert" icon="\${args.variant === 'error' ? 'cancel' : args.variant === 'warning' ? 'warning' : args.variant === 'info' ? 'change_circle' : 'check'}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  // Use customElements.whenDefined to ensure proper component loading
  customElements.whenDefined('labs-alert').then(() => {
    customElements.whenDefined('labs-button').then(() => {
      setTimeout(() => {
        const alert = document.querySelector('labs-alert');
        const triggerButton = document.querySelector('.trigger-alert');
        if (!triggerButton || triggerButton._listenerAdded) return;
        triggerButton._listenerAdded = true;
        triggerButton.addEventListener('click', () => {
          if (alert && alert.show) {
            alert.show(args.message, args.variant, args.timeout);
          }
        });
      }, 100);
    });
  });
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show \${args.variant || 'success'} Alert" icon="\${args.variant === 'error' ? 'cancel' : args.variant === 'warning' ? 'warning' : args.variant === 'info' ? 'change_circle' : 'check'}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`args => {
  // Use customElements.whenDefined to ensure proper component loading
  customElements.whenDefined('labs-alert').then(() => {
    customElements.whenDefined('labs-button').then(() => {
      setTimeout(() => {
        const alert = document.querySelector('labs-alert');
        const triggerButton = document.querySelector('.trigger-alert');
        if (!triggerButton || triggerButton._listenerAdded) return;
        triggerButton._listenerAdded = true;
        triggerButton.addEventListener('click', () => {
          if (alert && alert.show) {
            alert.show(args.message, args.variant, args.timeout);
          }
        });
      }, 100);
    });
  });
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click button to trigger alert</h3>
            
            <labs-button class="trigger-alert" variant="primary" label="Show \${args.variant || 'success'} Alert" icon="\${args.variant === 'error' ? 'cancel' : args.variant === 'warning' ? 'warning' : args.variant === 'info' ? 'change_circle' : 'check'}"></labs-button>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                Use controls to test different variants, messages, and timeouts.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...m.parameters?.docs?.source}}};const f=["Success","Error","Warning","Info"];export{l as Error,m as Info,i as Success,c as Warning,f as __namedExportsOrder,p as default};
