import"./labs-button-0XNiK1kJ.js";import"./labs-icon-Dst3ctAl.js";import"./labs-alert-CAmVPyqV.js";import{b as s}from"./button-configs-CUB_r__D.js";const v={title:"Patterns/Buttons",parameters:{docs:{description:{component:'Common button patterns organized by use case. Click "Open in New" to see full component controls and documentation.'}},layout:"padded"}};function l(o){const t=new URL(window.location.href);t.searchParams.set("path","/story/components-button--default");const n=[];return o.label&&n.push(`label:${encodeURIComponent(o.label)}`),o.variant&&o.variant!=="primary"&&n.push(`variant:${o.variant}`),o.iconLeft&&n.push(`iconLeft:${o.iconLeft}`),o.iconRight&&n.push(`iconRight:${o.iconRight}`),o.iconOnly&&n.push("iconOnly:true"),n.length>0&&t.searchParams.set("args",n.join(";")),t.toString()}function d(o,t,n=!0){const r=l(t);return`
    <div class="button-card">
      <div class="button-preview">
        <labs-button 
          ${t.label?`label="${t.label}"`:""}
          ${t.variant?`variant="${t.variant}"`:""}
          ${t.iconLeft?`icon-left="${t.iconLeft}"`:""}
          ${t.iconRight?`icon-right="${t.iconRight}"`:""}
          ${t.iconOnly?"icon-only":""}
        ></labs-button>
      </div>
      <div class="button-info">
        <div class="button-name">${n?o:t.label||"Button"}</div>
        <div class="button-code">&lt;labs-button ${[t.label&&`label="${t.label}"`,t.variant&&t.variant!=="primary"&&`variant="${t.variant}"`,t.iconLeft&&`icon-left="${t.iconLeft}"`,t.iconRight&&`icon-right="${t.iconRight}"`,t.iconOnly&&"icon-only"].filter(Boolean).join(" ")}&gt;</div>
      </div>
      <div class="button-actions">
        <labs-button 
          variant="transparent" 
          icon-only 
          icon-left="content_copy" 
          aria-label="Copy code"
          class="copy-button"
          data-copy-text="&lt;labs-button ${[t.label&&`label=&quot;${t.label}&quot;`,t.variant&&t.variant!=="primary"&&`variant=&quot;${t.variant}&quot;`,t.iconLeft&&`icon-left=&quot;${t.iconLeft}&quot;`,t.iconRight&&`icon-right=&quot;${t.iconRight}&quot;`,t.iconOnly&&"icon-only"].filter(Boolean).join(" ")}&gt;"
        ></labs-button>
        <labs-button 
          variant="transparent" 
          icon-only 
          icon-left="open_in_new" 
          aria-label="Open in component docs"
          class="open-button"
          data-component-url="${r}"
        ></labs-button>
      </div>
    </div>
  `}const i=()=>{setTimeout(()=>{if(customElements.get("labs-alert")&&!document.querySelector("labs-alert")){const n=document.createElement("labs-alert");document.body.appendChild(n)}},100);const t=`
    <style>
      .patterns-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .section {
        margin-bottom: 3rem;
      }
      
      .section-header {
        margin-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border, #e5e7eb);
        padding-bottom: 0.5rem;
      }
      
      .section-title {
        font-size: var(--font-size-large, 1.25rem);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-text-primary, #111827);
        margin: 0 0 0.25rem 0;
      }
      
      .section-description {
        font-size: var(--font-size-small, 0.875rem);
        color: var(--color-text-secondary, #6b7280);
        margin: 0;
      }
      
      .buttons-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      
      .button-card {
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: var(--border-radius-large, 12px);
        padding: 1.5rem;
        background: var(--color-surface, #ffffff);
        position: relative;
        transition: all 0.2s ease;
      }
      
      .button-card:hover {
        border-color: var(--color-border-hover, #d1d5db);
        box-shadow: var(--shadow-small, 0 1px 3px rgba(0, 0, 0, 0.1));
      }
      
      .button-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60px;
        margin-bottom: 1rem;
      }
      
      .button-info {
        text-align: center;
        margin-bottom: 1rem;
      }
      
      .button-name {
        font-weight: var(--font-weight-medium, 500);
        color: var(--color-text-primary, #111827);
        margin-bottom: 0.5rem;
        font-size: var(--font-size-base, 1rem);
      }
      
      .button-code {
        font-family: var(--font-family-mono, 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace);
        font-size: var(--font-size-small, 0.875rem);
        color: var(--color-text-secondary, #6b7280);
        background: var(--color-surface-secondary, #f9fafb);
        padding: 0.5rem;
        border-radius: var(--border-radius-small, 6px);
        word-break: break-all;
        line-height: 1.4;
      }
      
      .button-actions {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
      }
      
      .copy-button, .open-button {
        opacity: 0.7;
        transition: opacity 0.2s ease;
      }
      
      .copy-button:hover, .open-button:hover {
        opacity: 1;
      }
      
      /* Dark theme support */
      .theme-dark .section-title {
        color: var(--color-text-primary-dark, #f9fafb);
      }
      
      .theme-dark .section-description {
        color: var(--color-text-secondary-dark, #d1d5db);
      }
      
      .theme-dark .button-card {
        background: var(--color-surface-dark, #1f2937);
        border-color: var(--color-border-dark, #374151);
      }
      
      .theme-dark .button-card:hover {
        border-color: var(--color-border-hover-dark, #4b5563);
        box-shadow: var(--shadow-small-dark, 0 1px 3px rgba(0, 0, 0, 0.3));
      }
      
      .theme-dark .button-name {
        color: var(--color-text-primary-dark, #f9fafb);
      }
      
      .theme-dark .button-code {
        color: var(--color-text-secondary-dark, #d1d5db);
        background: var(--color-surface-secondary-dark, #111827);
      }
      
      @media (max-width: 768px) {
        .buttons-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .button-card {
          padding: 1rem;
        }
        
        .button-actions {
          top: 0.5rem;
          right: 0.5rem;
        }
      }
    </style>
    
    <div class="patterns-container">
      ${[{title:"Primary Actions",description:"Main user actions and calls-to-action",configs:["add","save","submit","continue"]},{title:"Secondary Actions",description:"Supporting actions and alternatives",configs:["edit","view","cancel","back"]},{title:"Minimal Actions",description:"Subtle actions that don't compete for attention",configs:["close","undo","skip"]},{title:"Destructive Actions",description:"Actions that delete or remove data",configs:["delete","resetAllData","remove"]},{title:"Icon-Only Buttons",description:"Compact buttons for toolbars and repeated actions",configs:["settingsIcon","closeIcon","editIcon","deleteIcon","addIcon"]}].map(n=>`
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">${n.title}</h2>
            <p class="section-description">${n.description}</p>
          </div>
          <div class="buttons-grid">
            ${n.configs.map(r=>{const a=s[r];return a?d(r,a):""}).filter(Boolean).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;return setTimeout(()=>{document.querySelectorAll(".copy-button").forEach(n=>{n.addEventListener("click",async r=>{r.stopPropagation();const a=n.getAttribute("data-copy-text");try{if(navigator.clipboard&&window.isSecureContext)await navigator.clipboard.writeText(a);else{const e=document.createElement("textarea");e.value=a,e.style.position="fixed",e.style.opacity="0",document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e)}const c=document.querySelector("labs-alert");c&&c.show("Copied to clipboard","success")}catch(c){console.error("Failed to copy:",c);const e=document.querySelector("labs-alert");e&&e.show("Copy failed","error")}})}),document.querySelectorAll(".open-button").forEach(n=>{n.addEventListener("click",r=>{r.stopPropagation();const a=n.getAttribute("data-component-url");a&&window.open(a,"_blank")})})},200),t};i.parameters={docs:{description:{story:"Complete overview of button patterns organized by use case. Each button includes copy functionality and links to the full component documentation."}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`() => {
  // Wait for alert component to be defined
  setTimeout(() => {
    if (!customElements.get('labs-alert')) return;

    // Initialize alert system
    if (!document.querySelector('labs-alert')) {
      const alert = document.createElement('labs-alert');
      document.body.appendChild(alert);
    }
  }, 100);
  const sections = [{
    title: "Primary Actions",
    description: "Main user actions and calls-to-action",
    configs: ['add', 'save', 'submit', 'continue']
  }, {
    title: "Secondary Actions",
    description: "Supporting actions and alternatives",
    configs: ['edit', 'view', 'cancel', 'back']
  }, {
    title: "Minimal Actions",
    description: "Subtle actions that don't compete for attention",
    configs: ['close', 'undo', 'skip']
  }, {
    title: "Destructive Actions",
    description: "Actions that delete or remove data",
    configs: ['delete', 'resetAllData', 'remove']
  }, {
    title: "Icon-Only Buttons",
    description: "Compact buttons for toolbars and repeated actions",
    configs: ['settingsIcon', 'closeIcon', 'editIcon', 'deleteIcon', 'addIcon']
  }];
  const html = \`
    <style>
      .patterns-container {
        max-width: 1200px;
        margin: 0 auto;
      }
      
      .section {
        margin-bottom: 3rem;
      }
      
      .section-header {
        margin-bottom: 1.5rem;
        border-bottom: 1px solid var(--color-border, #e5e7eb);
        padding-bottom: 0.5rem;
      }
      
      .section-title {
        font-size: var(--font-size-large, 1.25rem);
        font-weight: var(--font-weight-semibold, 600);
        color: var(--color-text-primary, #111827);
        margin: 0 0 0.25rem 0;
      }
      
      .section-description {
        font-size: var(--font-size-small, 0.875rem);
        color: var(--color-text-secondary, #6b7280);
        margin: 0;
      }
      
      .buttons-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
      }
      
      .button-card {
        border: 1px solid var(--color-border, #e5e7eb);
        border-radius: var(--border-radius-large, 12px);
        padding: 1.5rem;
        background: var(--color-surface, #ffffff);
        position: relative;
        transition: all 0.2s ease;
      }
      
      .button-card:hover {
        border-color: var(--color-border-hover, #d1d5db);
        box-shadow: var(--shadow-small, 0 1px 3px rgba(0, 0, 0, 0.1));
      }
      
      .button-preview {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 60px;
        margin-bottom: 1rem;
      }
      
      .button-info {
        text-align: center;
        margin-bottom: 1rem;
      }
      
      .button-name {
        font-weight: var(--font-weight-medium, 500);
        color: var(--color-text-primary, #111827);
        margin-bottom: 0.5rem;
        font-size: var(--font-size-base, 1rem);
      }
      
      .button-code {
        font-family: var(--font-family-mono, 'SF Mono', Monaco, 'Cascadia Code', 'Roboto Mono', Consolas, 'Courier New', monospace);
        font-size: var(--font-size-small, 0.875rem);
        color: var(--color-text-secondary, #6b7280);
        background: var(--color-surface-secondary, #f9fafb);
        padding: 0.5rem;
        border-radius: var(--border-radius-small, 6px);
        word-break: break-all;
        line-height: 1.4;
      }
      
      .button-actions {
        display: flex;
        justify-content: center;
        gap: 0.5rem;
        position: absolute;
        top: 0.75rem;
        right: 0.75rem;
      }
      
      .copy-button, .open-button {
        opacity: 0.7;
        transition: opacity 0.2s ease;
      }
      
      .copy-button:hover, .open-button:hover {
        opacity: 1;
      }
      
      /* Dark theme support */
      .theme-dark .section-title {
        color: var(--color-text-primary-dark, #f9fafb);
      }
      
      .theme-dark .section-description {
        color: var(--color-text-secondary-dark, #d1d5db);
      }
      
      .theme-dark .button-card {
        background: var(--color-surface-dark, #1f2937);
        border-color: var(--color-border-dark, #374151);
      }
      
      .theme-dark .button-card:hover {
        border-color: var(--color-border-hover-dark, #4b5563);
        box-shadow: var(--shadow-small-dark, 0 1px 3px rgba(0, 0, 0, 0.3));
      }
      
      .theme-dark .button-name {
        color: var(--color-text-primary-dark, #f9fafb);
      }
      
      .theme-dark .button-code {
        color: var(--color-text-secondary-dark, #d1d5db);
        background: var(--color-surface-secondary-dark, #111827);
      }
      
      @media (max-width: 768px) {
        .buttons-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }
        
        .button-card {
          padding: 1rem;
        }
        
        .button-actions {
          top: 0.5rem;
          right: 0.5rem;
        }
      }
    </style>
    
    <div class="patterns-container">
      \${sections.map(section => \`
        <div class="section">
          <div class="section-header">
            <h2 class="section-title">\${section.title}</h2>
            <p class="section-description">\${section.description}</p>
          </div>
          <div class="buttons-grid">
            \${section.configs.map(configKey => {
    const config = buttonConfigs[configKey];
    return config ? createButtonCard(configKey, config) : '';
  }).filter(Boolean).join('')}
          </div>
        </div>
      \`).join('')}
    </div>
  \`;

  // Setup event handlers after DOM is ready
  setTimeout(() => {
    // Copy functionality
    document.querySelectorAll('.copy-button').forEach(button => {
      button.addEventListener('click', async e => {
        e.stopPropagation();
        const copyText = button.getAttribute('data-copy-text');
        try {
          if (navigator.clipboard && window.isSecureContext) {
            await navigator.clipboard.writeText(copyText);
          } else {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = copyText;
            textArea.style.position = 'fixed';
            textArea.style.opacity = '0';
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
          }

          // Show success alert
          const alert = document.querySelector('labs-alert');
          if (alert) {
            alert.show('Copied to clipboard', 'success');
          }
        } catch (err) {
          console.error('Failed to copy:', err);
          const alert = document.querySelector('labs-alert');
          if (alert) {
            alert.show('Copy failed', 'error');
          }
        }
      });
    });

    // Open in new tab functionality
    document.querySelectorAll('.open-button').forEach(button => {
      button.addEventListener('click', e => {
        e.stopPropagation();
        const url = button.getAttribute('data-component-url');
        if (url) {
          window.open(url, '_blank');
        }
      });
    });
  }, 200);
  return html;
}`,...i.parameters?.docs?.source}}};const f=["AllButtons"];export{i as AllButtons,f as __namedExportsOrder,v as default};
