import"./labs-button-DHQuKs1y.js";import"./labs-icon-CZw9JeVg.js";/* empty css                         *//* empty css                *//* empty css                   */import{b as $,c as S,i as w,d as k}from"./button-configs-DUKrH4Iw.js";const E={title:"Patterns",parameters:{docs:{description:{component:"Interactive component catalog pattern for browsing and implementing design system components. This pattern includes instant copy functionality, live configuration controls, and categorized component showcases. Can be adapted for any component type."}}},argTypes:{label:{control:"text",description:"Button text content"},iconLeft:{control:"boolean",name:"Left Icon",description:"Show icon on the left side"},icon:{control:{type:"select"},name:"Left Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},iconRight:{control:"boolean",name:"Right Icon",description:"Show icon on the right side"},iconRightName:{control:{type:"select"},name:"Right Icon Name",description:"Icon name from Labs icon system",options:["","add","add_comment","apps","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},checkmark:{control:"boolean",name:"Success Animation",description:"Show checkmark animation on click"},variant:{control:{type:"select"},description:"Button variant/style",options:["primary","secondary","danger","success","transparent","icon","container","container-danger"]}}},T=({label:u,iconLeft:h,icon:c,iconRight:f,iconRightName:y,checkmark:x,variant:t})=>{let d=h?c||"undo":"",r=f?y||"settings":"";return`
    <labs-button
      label="${u||""}"
      ${d?`icon="${d}"`:""}
      ${r?`icon-right="${r}"`:""}
      ${x?"checkmark":""}
      variant="${t||"primary"}"
    ></labs-button>
  `},p=T.bind({});p.args={label:"Add",iconLeft:!0,icon:"add",iconRight:!1,iconRightName:"",checkmark:!0,variant:"primary"};p.decorators=[(u,h)=>{const c=h.args,f=(r,n=!1)=>{const o=n?w[r]:k[r];if(!o)return!1;const e=o.label===c.label||!o.label&&!c.label,s=o.icon===c.icon||!o.icon&&!c.icon,a=(o.variant||"primary")===c.variant,l=!!o.checkmark==!!c.checkmark,i=!!c.iconLeft==!!o.icon;return e&&s&&a&&l&&i},y=(r,n=!1)=>{const o=n?w[r]:k[r];if(!o)return[];const e=[];return o.label&&!n&&e.push(`label: "${o.label}"`),o.icon&&e.push(`icon: "${o.icon}"`),o.variant&&o.variant!=="primary"&&e.push(`variant: "${o.variant}"`),o.checkmark&&e.push("checkmark: true"),o.iconRight&&e.push(`iconRight: "${o.iconRight}"`),o.iconLeft&&e.push("iconLeft: true"),o.iconcolor&&e.push("custom icon color"),o["aria-label"]&&e.push(`aria-label: "${o["aria-label"]}"`),e},x=(r,n=!1)=>{const o=n?w[r]:k[r];if(!o)return[];const e=[];return o.label&&!n&&e.push(`label:${o.label}`),o.icon&&(e.push(`icon:${o.icon}`),e.push("iconLeft:true")),o.variant&&o.variant!=="primary"&&e.push(`variant:${o.variant}`),o.checkmark&&e.push("checkmark:true"),o.iconRight&&e.push(`iconRight:${o.iconRight}`),o.iconcolor&&e.push("iconcolor:custom"),o["aria-label"]&&e.push(`aria-label:${o["aria-label"]}`),e},t=(r,n,o="primary",e=!1)=>{const s=e?$(r):S(r),a=y(r,e),l=x(r,e),i=f(r,e),m=a.length>0?a.join(", "):"Icon-only button";return`
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 1.5rem); border-radius: 8px; border: ${i?"2px solid var(--color-primary, #3b82f6)":"1px solid var(--color-border, #e5e7eb)"}; box-shadow: ${i?"0 4px 12px var(--shadow-primary, rgba(59, 130, 246, 0.15))":"var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1))"}; position: relative;"
             onmouseenter="this.querySelector('.hover-actions').style.opacity = '1'"
             onmouseleave="this.querySelector('.hover-actions').style.opacity = '0'">
          
          <!-- Active Badge -->
          ${i?'<div style="position: absolute; top: -1px; right: -1px; background: var(--color-primary, #3b82f6); color: var(--color-on-primary, white); font-size: var(--font-size-tiny, 0.625rem); padding: var(--space-xs, 0.25rem) var(--space-sm, 0.5rem); border-radius: 0 6px 0 6px; font-weight: var(--font-weight-semibold, 600); z-index: 3;">ACTIVE</div>':""}
          
          <!-- Hover Actions -->
          <div class="hover-actions" style="position: absolute; top: var(--space-sm, 0.5rem); right: var(--space-sm, 0.5rem); display: flex; gap: var(--space-xs, 0.25rem); opacity: 0; transition: opacity 0.2s ease; z-index: 4;">
            <div 
              data-action="copy"
              data-copy-text="${m.replace(/"/g,"&quot;")}"
              style="width: 20px; height: 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-action, 0 2px 4px rgba(0,0,0,0.1)); overflow: hidden;"
            >
              <!-- Icon will be inserted here -->
            </div>
            <div 
              data-action="edit"
              data-edit-params="${l.join(";")}"
              style="width: 20px; height: 20px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: var(--shadow-action, 0 2px 4px rgba(0,0,0,0.1)); overflow: hidden;"
            >
              <!-- Icon will be inserted here -->
            </div>
          </div>
          
          <div style="margin-bottom: var(--space-md, 1rem); text-align: center;">${s}</div>
          <div style="margin-bottom: var(--space-md, 1rem); font-size: var(--font-size-small, 0.875rem); color: var(--color-text-secondary, #6b7280); line-height: 1.4;">${n}</div>
          
          <!-- Config Details -->
          <div style="padding: var(--space-sm, 0.75rem); background: ${i?"var(--color-primary-5, #eff6ff)":"var(--color-surface-secondary, #f8fafc)"}; border-radius: 6px; border: 1px solid ${i?"var(--color-primary-25, #bfdbfe)":"var(--color-border-light, #e2e8f0)"};">
            <div style="font-size: var(--font-size-tiny, 0.75rem); color: ${i?"var(--color-primary-dark, #1e40af)":"var(--color-text-tertiary, #64748b)"}; font-weight: var(--font-weight-normal, 500); margin-bottom: var(--space-sm, 0.5rem);">Configuration:</div>
            <code style="font-size: var(--font-size-tiny, 0.6875rem); color: ${i?"var(--color-primary-darker, #1d4ed8)":"var(--color-text-code, #475569)"}; background: ${i?"var(--color-primary-10, #dbeafe)":"var(--color-code-bg, #f1f5f9)"}; padding: var(--space-xs, 0.25rem) var(--space-sm, 0.375rem); border-radius: 3px; display: block;">
              ${a.length>0?a.join(", "):"Icon-only button"}
            </code>
          </div>
        </div>
      `},d=document.createElement("div");return d.style.cssText=`
      padding: var(--space-md, 1rem); 
      background: var(--color-background, #f9fafb); 
      max-width: 1400px; 
      font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
      color: var(--color-on-background, #111827);
      
      @media (min-width: 768px) {
        padding: var(--space-lg, 2rem);
      }
    `,d.innerHTML=`

      <div style="margin-bottom: var(--space-xl, 3rem); text-align: center;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-background, #111827); font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700);">Buttons</h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-large, 1.125rem); line-height: 1.6; max-width: 600px; margin-left: auto; margin-right: auto;">
          Common button configurations ready to copy and use. Active configuration highlighted in blue.
        </p>
      </div>

      <!-- Button Categories -->
      <div style="display: flex; flex-direction: column; gap: var(--space-xl, 3rem);">
        
        <!-- Primary Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Primary Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Main actions with icon left and checkmark animation on click.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${t("add","Universal add button with plus icon and checkmark animation.")}
            ${t("save","Form submission button with check icon and success feedback.")}
            ${t("addNote","Specialized add button for note-taking interfaces.")}
          </div>
        </div>

        <!-- Secondary Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Secondary Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Supporting actions with secondary styling and border outlines.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${t("edit","Modification action with pencil icon for content editing workflows.","secondary")}
            ${t("undo","Reverse action button with undo icon for workflow correction.","secondary")}
            ${t("addComment","Comment creation button with comment bubble icon.","secondary")}
          </div>
        </div>

        <!-- Minimal Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Minimal Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Subtle transparent buttons for navigation and system controls.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${t("close","UI control for closing dialogs, modals, and expandable sections.","transparent")}
            ${t("settings","System configuration access with gear icon.","transparent")}
            ${t("themeToggle","Dynamic theme switcher with adaptive icon and label.","transparent")}
          </div>
        </div>

        <!-- Destructive Actions -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Destructive Actions</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Warning-styled buttons for delete operations and data clearing actions.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${t("delete","Standard deletion action with trash icon and danger styling.","danger")}
            ${t("resetAllData","Complete data reset with warning styling for clearing user data.","danger")}
          </div>
        </div>

        <!-- Icon-Only Buttons -->
        <div style="background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
          <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">Icon-Only Buttons</h3>
          <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
            Compact icon buttons for toolbars, navigation, and space-constrained interfaces.
          </p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr)); gap: var(--space-lg, 1.5rem);">
            ${t("settingsIcon","Compact settings button with just the gear icon.","icon",!0)}
            ${t("appsIcon","Compact apps launcher with just the grid icon.","icon",!0)}
            ${t("deleteIcon","Compact delete action with just the trash icon.","icon",!0)}
            ${t("editIcon","Compact edit button with just the pencil icon.","icon",!0)}
            ${t("closeIcon","Compact close button with just the X icon.","icon",!0)}
          </div>
        </div>

      </div>

      <!-- Developer Documentation -->
      <div style="margin-top: var(--space-xl, 3rem); background: var(--color-surface, white); padding: var(--space-lg, 2rem); border-radius: 12px; border: 1px solid var(--color-border, #e5e7eb); box-shadow: var(--shadow-card, 0 1px 3px rgba(0,0,0,0.1));">
        <h3 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-on-surface, #111827); font-size: var(--font-size-h2, 1.5rem); font-weight: var(--font-weight-semibold, 600);">🛠️ Developer Guide</h3>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.5;">
          Technical implementation details and configuration reference for developers.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: var(--space-lg, 2rem);">
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">📋 Quick Copy</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              Hover over any button card and click the copy icon to instantly copy the configuration to your clipboard.
            </p>
          </div>
          
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">⚙️ Live Edit</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              Click the edit icon to load that configuration into the controls below and experiment with modifications.
            </p>
          </div>
          
          <div>
            <h4 style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-primary, #374151); font-size: var(--font-size-base, 1rem); font-weight: var(--font-weight-semibold, 600);">🎯 Active State</h4>
            <p style="margin: 0 0 var(--space-md, 1rem) 0; color: var(--color-text-secondary, #6b7280); font-size: var(--font-size-small, 0.875rem); line-height: 1.4;">
              The currently selected configuration is highlighted with a blue border and "ACTIVE" badge.
            </p>
          </div>
        </div>
      </div>
    `,d.addEventListener("click",r=>{const n=r.target.closest("[data-action]");if(!n)return;const o=n.dataset.action;if(o==="copy"){const e=n.dataset.copyText;navigator.clipboard.writeText(e).then(()=>{n.style.background="var(--color-success, #10b981)",setTimeout(()=>{n.style.background="var(--color-surface-elevated, rgba(255,255,255,0.95))"},800)})}else if(o==="edit"){const e=n.dataset.editParams,s=window.pageYOffset||document.documentElement.scrollTop,a=window.location.href,l=new window.URL(a);l.searchParams.set("args",e),window.history.pushState({scrollTop:s},"",l.toString()),setTimeout(()=>{const i=l.searchParams.get("args");if(i)try{const m={};i.split(";").forEach(z=>{const[b,g]=z.split("=");b&&g!==void 0&&(g==="true"?m[b]=!0:g==="false"?m[b]=!1:m[b]=decodeURIComponent(g))}),window.__STORYBOOK_ADDONS_CHANNEL__&&window.__STORYBOOK_STORY_ID__?(window.__STORYBOOK_ADDONS_CHANNEL__.emit("updateStoryArgs",{storyId:window.__STORYBOOK_STORY_ID__,updatedArgs:m}),setTimeout(()=>{window.scrollTo(0,s)},100)):(sessionStorage.setItem("button-shop-scroll",s.toString()),window.location.search=l.search)}catch(m){console.warn("Could not update Storybook args:",m),sessionStorage.setItem("button-shop-scroll",s.toString()),window.location.search=l.search}},50)}}),setTimeout(()=>{const r=sessionStorage.getItem("button-shop-scroll");r&&(window.scrollTo(0,parseInt(r)),sessionStorage.removeItem("button-shop-scroll")),d.querySelectorAll(".hover-actions").forEach(o=>{const e=o.querySelector('[data-action="copy"]'),s=o.querySelector('[data-action="edit"]');if(e){e.innerHTML="";const a=document.createElement("labs-button");a.setAttribute("icon","content_copy"),a.setAttribute("variant","icon"),a.style.cssText=`
            --labs-button-icon-color: var(--color-text-secondary, #6b7280);
            transform: scale(0.45);
            transform-origin: center;
          `,e.appendChild(a)}if(s){s.innerHTML="";const a=document.createElement("labs-button");a.setAttribute("icon","edit"),a.setAttribute("variant","icon"),a.style.cssText=`
            --labs-button-icon-color: var(--color-on-surface, white);
            transform: scale(0.45);
            transform-origin: center;
            background: var(--color-action-bg, #6b7280) !important;
          `,s.appendChild(a)}})},100),d}];p.parameters={controls:{expanded:!0},docs:{description:{story:"Interactive button catalog for browsing and implementing button components. Each button includes instant copy functionality and live configuration controls. The currently active configuration is highlighted with a blue border."}}};p.storyName="Buttons";const _=()=>(setTimeout(()=>{document.addEventListener("labs-click",u=>{console.log("Button clicked:",u.detail)})},100),`
    <style>
      .form-variants-demo {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .variant-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-lg);
        background: var(--color-surface-container);
      }
      
      .variant-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        font-size: var(--font-size-h4);
      }
      
      .button-group {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        align-items: center;
      }
      
      .description {
        color: var(--color-on-surface-variant);
        font-size: var(--font-size-body-sm);
        margin-bottom: 1rem;
      }
    </style>
    
    <div class="form-variants-demo">
      <div class="variant-section">
        <h3>Pill Buttons</h3>
        <p class="description">Fully rounded buttons ideal for forms and compact interfaces</p>
        <div class="button-group">
          <labs-button label="Save" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Add Task" icon="add" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Edit" icon="edit" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Rounded Rectangle Buttons</h3>
        <p class="description">Softly rounded buttons perfect for overlays and modal interfaces</p>
        <div class="button-group">
          <labs-button label="Save Changes" icon="check" variant="rounded" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Delete Item" icon="delete_forever" variant="rounded" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Undo" icon="undo" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Form Integration Example</h3>
        <p class="description">How these variants work together in typical form scenarios</p>
        <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--color-on-surface);">Task Description</label>
            <input type="text" placeholder="Enter task details..." style="width: 100%; padding: 0.75rem; border: 2px solid var(--color-outline-variant); border-radius: var(--border-radius-md); font-size: var(--font-size-body);" />
          </div>
          <div class="button-group" style="justify-content: flex-end;">
            <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
            <labs-button label="Save Task" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          </div>
        </div>
      </div>
    </div>
  `),v=_.bind({});v.parameters={docs:{description:{story:"Form-specific button variants including pill buttons (fully rounded) and rounded rectangle buttons (softly rounded). These variants provide better visual hierarchy and modern styling for overlay forms, input dialogs, and compact interfaces."}}};v.storyName="Form Variants";p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  label,
  iconLeft,
  icon,
  iconRight,
  iconRightName,
  checkmark,
  variant
}) => {
  let leftIcon = iconLeft ? icon || "undo" : "";
  let rightIcon = iconRight ? iconRightName || "settings" : "";
  return \`
    <labs-button
      label="\${label || ""}"
      \${leftIcon ? \`icon="\${leftIcon}"\` : ""}
      \${rightIcon ? \`icon-right="\${rightIcon}"\` : ""}
      \${checkmark ? "checkmark" : ""}
      variant="\${variant || "primary"}"
    ></labs-button>
  \`;
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  setTimeout(() => {
    document.addEventListener('labs-click', e => {
      console.log('Button clicked:', e.detail);
    });
  }, 100);
  return \`
    <style>
      .form-variants-demo {
        max-width: 600px;
        margin: 0 auto;
        font-family: var(--font-family-primary);
      }
      
      .variant-section {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--color-outline-variant);
        border-radius: var(--border-radius-lg);
        background: var(--color-surface-container);
      }
      
      .variant-section h3 {
        margin-bottom: 1rem;
        color: var(--color-on-surface);
        font-size: var(--font-size-h4);
      }
      
      .button-group {
        display: flex;
        gap: var(--space-md);
        flex-wrap: wrap;
        align-items: center;
      }
      
      .description {
        color: var(--color-on-surface-variant);
        font-size: var(--font-size-body-sm);
        margin-bottom: 1rem;
      }
    </style>
    
    <div class="form-variants-demo">
      <div class="variant-section">
        <h3>Pill Buttons</h3>
        <p class="description">Fully rounded buttons ideal for forms and compact interfaces</p>
        <div class="button-group">
          <labs-button label="Save" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Add Task" icon="add" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Edit" icon="edit" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Rounded Rectangle Buttons</h3>
        <p class="description">Softly rounded buttons perfect for overlays and modal interfaces</p>
        <div class="button-group">
          <labs-button label="Save Changes" icon="check" variant="rounded" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Cancel" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
          <labs-button label="Delete Item" icon="delete_forever" variant="rounded" iconcolor="var(--color-on-primary)"></labs-button>
          <labs-button label="Undo" icon="undo" variant="rounded-secondary" iconcolor="var(--color-primary)"></labs-button>
        </div>
      </div>
      
      <div class="variant-section">
        <h3>Form Integration Example</h3>
        <p class="description">How these variants work together in typical form scenarios</p>
        <div style="background: var(--color-surface); padding: 1.5rem; border-radius: var(--border-radius-md); border: 1px solid var(--color-outline-variant);">
          <div style="margin-bottom: 1rem;">
            <label style="display: block; margin-bottom: 0.5rem; color: var(--color-on-surface);">Task Description</label>
            <input type="text" placeholder="Enter task details..." style="width: 100%; padding: 0.75rem; border: 2px solid var(--color-outline-variant); border-radius: var(--border-radius-md); font-size: var(--font-size-body);" />
          </div>
          <div class="button-group" style="justify-content: flex-end;">
            <labs-button label="Cancel" variant="pill-secondary" iconcolor="var(--color-primary)"></labs-button>
            <labs-button label="Save Task" icon="check" variant="pill" checkmark="true" iconcolor="var(--color-on-primary)"></labs-button>
          </div>
        </div>
      </div>
    </div>
  \`;
}`,...v.parameters?.docs?.source}}};const O=["Buttons","FormVariants"];export{p as Buttons,v as FormVariants,O as __namedExportsOrder,E as default};
