import"./labs-icon-BgHZyyah.js";class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.dismissTimeout=null,this.defaultTimeout=2e3}static get observedAttributes(){return["active","message","variant","timeout"]}attributeChangedCallback(){this.render()}connectedCallback(){this.render()}disconnectedCallback(){this.clearDismissTimeout()}show(e,o="success",r=this.defaultTimeout){this.setAttribute("message",e),this.setAttribute("variant",o),this.setAttribute("timeout",r.toString()),this.setAttribute("active",""),this.clearDismissTimeout(),this.dismissTimeout=setTimeout(()=>{this.dismiss()},r),this.dispatchEvent(new CustomEvent("labs-alert-show",{bubbles:!0,detail:{message:e,variant:o,timeout:r}}))}dismiss(){this.removeAttribute("active"),this.clearDismissTimeout(),this.dispatchEvent(new CustomEvent("labs-alert-dismiss",{bubbles:!0,detail:{message:this.getAttribute("message")}}))}clearDismissTimeout(){this.dismissTimeout&&(clearTimeout(this.dismissTimeout),this.dismissTimeout=null)}render(){const e=this.hasAttribute("active"),o=this.getAttribute("message")||"Action completed",r=this.getAttribute("variant")||"success";let n,s,t;switch(r){case"success":n="var(--color-success, #10b981)",s="var(--color-on-success, #ffffff)",t="check";break;case"error":n="var(--color-error, #ef4444)",s="var(--color-on-error, #ffffff)",t="cancel";break;case"info":n="var(--color-primary, #3b82f6)",s="var(--color-on-primary, #ffffff)",t="info";break;default:n="var(--color-success, #10b981)",s="var(--color-on-success, #ffffff)",t="check"}this.shadowRoot.innerHTML=`
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
                    background-color: ${n};
                    color: ${s};
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
                    name="${t}" 
                    color="${s}"
                ></labs-icon>
                <span class="alert-message">${o}</span>
            </div>
        `}}customElements.define("labs-alert",m);const p={title:"Components/Alert",tags:["autodocs"],parameters:{docs:{description:{component:"Comprehensive toast-style notification component. Shows success, error, or info messages with auto-dismiss functionality. Use controls to explore all variants or 'Show code' for implementation."}}},argTypes:{message:{control:"text",description:"Message shown in the alert"},variant:{control:{type:"select"},options:["success","error","info"],description:"Alert style variant"},timeout:{control:"number",description:"Auto-dismiss timeout in milliseconds"}}},d=l=>(setTimeout(()=>{const e=document.querySelector("labs-alert"),o=document.querySelector(".trigger-success"),r=document.querySelector(".trigger-error"),n=document.querySelector(".trigger-info"),s=document.querySelector(".trigger-copy");o?.addEventListener("click",()=>{e.show(l.message||"Action completed successfully","success",l.timeout||2e3)}),r?.addEventListener("click",()=>{e.show("Something went wrong","error",l.timeout||3e3)}),n?.addEventListener("click",()=>{e.show("Here's some information","info",l.timeout||2e3)}),s?.addEventListener("click",()=>{e.show("Copied to clipboard","success",1500)}),document.addEventListener("labs-alert-show",t=>{console.log("Alert shown:",t.detail)}),document.addEventListener("labs-alert-dismiss",t=>{console.log("Alert dismissed:",t.detail)})},100),`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    `),u=d.bind({});u.args={message:"Action completed successfully",variant:"success",timeout:2e3};const a=d.bind({});a.args={message:"Copied to clipboard",variant:"success",timeout:1500};a.parameters={docs:{description:{story:"Success alerts with checkmark icon, typically used for completed actions like copying to clipboard."}}};const i=d.bind({});i.args={message:"Something went wrong",variant:"error",timeout:3e3};i.parameters={docs:{description:{story:"Error alerts with cancel icon for showing failures or validation errors."}}};const c=d.bind({});c.args={message:"Here's some information",variant:"info",timeout:2e3};c.parameters={docs:{description:{story:"Info alerts for general notifications and status updates."}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    const alert = document.querySelector('labs-alert');

    // Trigger buttons to show different alerts
    const successButton = document.querySelector('.trigger-success');
    const errorButton = document.querySelector('.trigger-error');
    const infoButton = document.querySelector('.trigger-info');
    const copyButton = document.querySelector('.trigger-copy');
    successButton?.addEventListener('click', () => {
      alert.show(args.message || "Action completed successfully", "success", args.timeout || 2000);
    });
    errorButton?.addEventListener('click', () => {
      alert.show("Something went wrong", "error", args.timeout || 3000);
    });
    infoButton?.addEventListener('click', () => {
      alert.show("Here's some information", "info", args.timeout || 2000);
    });
    copyButton?.addEventListener('click', () => {
      alert.show("Copied to clipboard", "success", 1500);
    });

    // Handle alert events
    document.addEventListener('labs-alert-show', e => {
      console.log('Alert shown:', e.detail);
    });
    document.addEventListener('labs-alert-dismiss', e => {
      console.log('Alert dismissed:', e.detail);
    });
  }, 100);
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...u.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    const alert = document.querySelector('labs-alert');

    // Trigger buttons to show different alerts
    const successButton = document.querySelector('.trigger-success');
    const errorButton = document.querySelector('.trigger-error');
    const infoButton = document.querySelector('.trigger-info');
    const copyButton = document.querySelector('.trigger-copy');
    successButton?.addEventListener('click', () => {
      alert.show(args.message || "Action completed successfully", "success", args.timeout || 2000);
    });
    errorButton?.addEventListener('click', () => {
      alert.show("Something went wrong", "error", args.timeout || 3000);
    });
    infoButton?.addEventListener('click', () => {
      alert.show("Here's some information", "info", args.timeout || 2000);
    });
    copyButton?.addEventListener('click', () => {
      alert.show("Copied to clipboard", "success", 1500);
    });

    // Handle alert events
    document.addEventListener('labs-alert-show', e => {
      console.log('Alert shown:', e.detail);
    });
    document.addEventListener('labs-alert-dismiss', e => {
      console.log('Alert dismissed:', e.detail);
    });
  }, 100);
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    const alert = document.querySelector('labs-alert');

    // Trigger buttons to show different alerts
    const successButton = document.querySelector('.trigger-success');
    const errorButton = document.querySelector('.trigger-error');
    const infoButton = document.querySelector('.trigger-info');
    const copyButton = document.querySelector('.trigger-copy');
    successButton?.addEventListener('click', () => {
      alert.show(args.message || "Action completed successfully", "success", args.timeout || 2000);
    });
    errorButton?.addEventListener('click', () => {
      alert.show("Something went wrong", "error", args.timeout || 3000);
    });
    infoButton?.addEventListener('click', () => {
      alert.show("Here's some information", "info", args.timeout || 2000);
    });
    copyButton?.addEventListener('click', () => {
      alert.show("Copied to clipboard", "success", 1500);
    });

    // Handle alert events
    document.addEventListener('labs-alert-show', e => {
      console.log('Alert shown:', e.detail);
    });
    document.addEventListener('labs-alert-dismiss', e => {
      console.log('Alert dismissed:', e.detail);
    });
  }, 100);
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`args => {
  setTimeout(() => {
    const alert = document.querySelector('labs-alert');

    // Trigger buttons to show different alerts
    const successButton = document.querySelector('.trigger-success');
    const errorButton = document.querySelector('.trigger-error');
    const infoButton = document.querySelector('.trigger-info');
    const copyButton = document.querySelector('.trigger-copy');
    successButton?.addEventListener('click', () => {
      alert.show(args.message || "Action completed successfully", "success", args.timeout || 2000);
    });
    errorButton?.addEventListener('click', () => {
      alert.show("Something went wrong", "error", args.timeout || 3000);
    });
    infoButton?.addEventListener('click', () => {
      alert.show("Here's some information", "info", args.timeout || 2000);
    });
    copyButton?.addEventListener('click', () => {
      alert.show("Copied to clipboard", "success", 1500);
    });

    // Handle alert events
    document.addEventListener('labs-alert-show', e => {
      console.log('Alert shown:', e.detail);
    });
    document.addEventListener('labs-alert-dismiss', e => {
      console.log('Alert dismissed:', e.detail);
    });
  }, 100);
  return \`
        <div style="padding: 2rem; display: flex; flex-direction: column; gap: 1rem; align-items: center;">
            <h3 style="margin: 0 0 2rem 0;">Click buttons to trigger alerts</h3>
            
            <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                <labs-button class="trigger-success" variant="primary" label="Success Alert" icon="check"></labs-button>
                <labs-button class="trigger-error" variant="danger" label="Error Alert" icon="cancel"></labs-button>
                <labs-button class="trigger-info" variant="secondary" label="Info Alert" icon="info"></labs-button>
                <labs-button class="trigger-copy" variant="transparent" label="Copy Alert" icon="content_copy"></labs-button>
            </div>

            <p style="margin: 2rem 0 0 0; color: var(--color-text-secondary); font-size: var(--font-size-small); text-align: center; max-width: 400px;">
                Alerts appear at the bottom center of the screen and auto-dismiss after the specified timeout. 
                They follow the same pattern as the tracker app's success messages.
            </p>
        </div>
        
        <!-- Alert component instance -->
        <labs-alert></labs-alert>
    \`;
}`,...c.parameters?.docs?.source}}};const b=["Alert","SuccessAlert","ErrorAlert","InfoAlert"];export{u as Alert,i as ErrorAlert,c as InfoAlert,a as SuccessAlert,b as __namedExportsOrder,p as default};
