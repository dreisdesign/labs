import"./labs-alert-CAmVPyqV.js";import"./labs-icon-Dst3ctAl.js";const p={title:"Components/Alert",parameters:{docs:{description:{component:"Toast-style notification component based on the tracker app pattern. Shows brief success, error, or info messages with auto-dismiss functionality."}}},argTypes:{message:{control:"text",description:"Message shown in the alert"},variant:{control:{type:"select"},options:["success","error","info"],description:"Alert style variant"},timeout:{control:"number",description:"Auto-dismiss timeout in milliseconds"}}},a=s=>(setTimeout(()=>{const o=document.querySelector("labs-alert"),l=document.querySelector(".trigger-success"),i=document.querySelector(".trigger-error"),u=document.querySelector(".trigger-info"),d=document.querySelector(".trigger-copy");l?.addEventListener("click",()=>{o.show(s.message||"Action completed successfully","success",s.timeout||2e3)}),i?.addEventListener("click",()=>{o.show("Something went wrong","error",s.timeout||3e3)}),u?.addEventListener("click",()=>{o.show("Here's some information","info",s.timeout||2e3)}),d?.addEventListener("click",()=>{o.show("Copied to clipboard","success",1500)}),document.addEventListener("labs-alert-show",c=>{console.log("Alert shown:",c.detail)}),document.addEventListener("labs-alert-dismiss",c=>{console.log("Alert dismissed:",c.detail)})},100),`
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
    `),r=a.bind({});r.args={message:"Action completed successfully",variant:"success",timeout:2e3};const e=a.bind({});e.args={message:"Copied to clipboard",variant:"success",timeout:1500};e.parameters={docs:{description:{story:"Success alerts with checkmark icon, typically used for completed actions like copying to clipboard."}}};const t=a.bind({});t.args={message:"Something went wrong",variant:"error",timeout:3e3};t.parameters={docs:{description:{story:"Error alerts with cancel icon for showing failures or validation errors."}}};const n=a.bind({});n.args={message:"Here's some information",variant:"info",timeout:2e3};n.parameters={docs:{description:{story:"Info alerts for general notifications and status updates."}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`args => {
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
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`args => {
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
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`args => {
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`args => {
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
}`,...n.parameters?.docs?.source}}};const b=["Alert","SuccessAlert","ErrorAlert","InfoAlert"];export{r as Alert,t as ErrorAlert,n as InfoAlert,e as SuccessAlert,b as __namedExportsOrder,p as default};
