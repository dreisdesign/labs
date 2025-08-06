import"./labs-button-DCfWJOEd.js";/* empty css                         */import"./labs-icon-D-jGsLwe.js";const g={title:"Components/Button",parameters:{docs:{description:{component:"The primary button component of the Labs Design System. Supports multiple variants, icons, and interactive states."}}},argTypes:{label:{control:"text",description:"Button text content"},iconLeft:{control:"boolean",name:"Left Icon",description:"Show icon on the left side"},icon:{control:{type:"select"},name:"Left Icon Name",description:"Icon name for left side (Material Icons)",options:["","add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},iconRight:{control:"boolean",name:"Right Icon",description:"Show icon on the right side"},iconRightName:{control:{type:"select"},name:"Right Icon Name",description:"Icon name for right side (Material Icons)",options:["","add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"]},checkmark:{control:"boolean",name:"Success Animation",description:"Show checkmark animation on click"},variant:{control:{type:"select"},description:"Button variant/style",options:["primary","secondary","danger","success","transparent","container","container-danger"]}}},b=({label:o,iconLeft:e,icon:i,iconRight:s,iconRightName:l,checkmark:c,variant:d})=>{let t=e?i||"undo":"",n=s?l||"settings":"";return`
    <labs-button
      label="${o||""}"
      ${t?`icon="${t}"`:""}
      ${n?`icon-right="${n}"`:""}
      ${c?"checkmark":""}
      variant="${d||"primary"}"
    ></labs-button>
  `},r=b.bind({});r.args={label:"Primary Button",iconLeft:!1,icon:"",iconRight:!1,iconRightName:"",checkmark:!1,variant:"primary"};r.storyName="Primary";const a=()=>`
    <div style="padding: 2rem; background: var(--color-background); max-width: 1200px;">
      <h3 style="margin: 0 0 2rem 0; color: var(--color-on-background); font-size: 1.5rem;">Button Variants Overview</h3>
      
      <!-- Standard Variants -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Standard Variants</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Primary" variant="primary"></labs-button>
          <labs-button label="Secondary" variant="secondary"></labs-button>
          <labs-button label="Success" variant="success"></labs-button>
          <labs-button label="Danger" variant="danger"></labs-button>
          <labs-button label="Transparent" variant="transparent"></labs-button>
        </div>
      </div>

      <!-- Icon Variations -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Icon Combinations</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Add Comment" icon="add_comment" variant="primary"></labs-button>
          <labs-button label="Settings" icon-right="settings" variant="secondary"></labs-button>
          <labs-button label="Edit Note" icon="edit" icon-right="rate_review" variant="transparent"></labs-button>
          <labs-button label="Delete" icon="delete_forever" variant="danger"></labs-button>
          <labs-button label="Check Task" icon="check" variant="success" checkmark></labs-button>
        </div>
      </div>

      <!-- Container Variants -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Container Variants (for overlays/panels)</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
            <div style="font-weight: 600; margin-bottom: 1rem; color: var(--color-on-surface);">Regular Container</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <labs-button label="All Apps" icon="settings" variant="container"></labs-button>
              <labs-button label="Dark Mode" icon="bedtime" variant="container"></labs-button>
              <labs-button label="Settings" icon-right="settings" variant="container"></labs-button>
            </div>
          </div>
          <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
            <div style="font-weight: 600; margin-bottom: 1rem; color: var(--color-on-surface);">Danger Container</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <labs-button label="Reset All Data" icon="delete_forever" variant="container-danger"></labs-button>
              <labs-button label="Clear History" icon="cancel" variant="container-danger"></labs-button>
              <labs-button label="Remove Account" icon="close" variant="container-danger"></labs-button>
            </div>
          </div>
        </div>
      </div>

      <!-- State Demonstrations -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Interactive States</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Click for Success" icon="check" variant="primary" checkmark></labs-button>
          <labs-button label="Hover Effect" icon="change_circle" variant="secondary"></labs-button>
          <labs-button label="Icon Animation" icon="rate_review" variant="transparent"></labs-button>
          <labs-button label="Success State" icon="check" variant="success" checkmark></labs-button>
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--color-on-background); opacity: 0.7;">
          Buttons with checkmark attribute will show a success animation when clicked.
        </p>
      </div>

      <!-- Usage Guidelines -->
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.1rem;">Usage Guidelines</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; font-size: 0.875rem; color: var(--color-on-surface);">
          <div>
            <strong style="color: var(--color-primary);">Primary:</strong> Main actions, form submissions
            <br><strong style="color: var(--color-secondary);">Secondary:</strong> Secondary actions, cancel buttons
            <br><strong style="color: var(--color-success);">Success:</strong> Confirmation actions, positive states
          </div>
          <div>
            <strong style="color: var(--color-error);">Danger:</strong> Destructive actions, delete operations
            <br><strong>Transparent:</strong> Subtle actions, menu items
            <br><strong>Container:</strong> Panel/overlay buttons with full-width hover
          </div>
        </div>
      </div>
    </div>
  `;a.parameters={docs:{description:{story:"Complete overview of all button variants, icon combinations, and usage guidelines. This showcase demonstrates the full capabilities of the Labs button component."}}};a.storyName="All Variants Showcase";r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`({
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  return \`
    <div style="padding: 2rem; background: var(--color-background); max-width: 1200px;">
      <h3 style="margin: 0 0 2rem 0; color: var(--color-on-background); font-size: 1.5rem;">Button Variants Overview</h3>
      
      <!-- Standard Variants -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Standard Variants</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Primary" variant="primary"></labs-button>
          <labs-button label="Secondary" variant="secondary"></labs-button>
          <labs-button label="Success" variant="success"></labs-button>
          <labs-button label="Danger" variant="danger"></labs-button>
          <labs-button label="Transparent" variant="transparent"></labs-button>
        </div>
      </div>

      <!-- Icon Variations -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Icon Combinations</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Add Comment" icon="add_comment" variant="primary"></labs-button>
          <labs-button label="Settings" icon-right="settings" variant="secondary"></labs-button>
          <labs-button label="Edit Note" icon="edit" icon-right="rate_review" variant="transparent"></labs-button>
          <labs-button label="Delete" icon="delete_forever" variant="danger"></labs-button>
          <labs-button label="Check Task" icon="check" variant="success" checkmark></labs-button>
        </div>
      </div>

      <!-- Container Variants -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Container Variants (for overlays/panels)</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
          <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
            <div style="font-weight: 600; margin-bottom: 1rem; color: var(--color-on-surface);">Regular Container</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <labs-button label="All Apps" icon="settings" variant="container"></labs-button>
              <labs-button label="Dark Mode" icon="bedtime" variant="container"></labs-button>
              <labs-button label="Settings" icon-right="settings" variant="container"></labs-button>
            </div>
          </div>
          <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
            <div style="font-weight: 600; margin-bottom: 1rem; color: var(--color-on-surface);">Danger Container</div>
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <labs-button label="Reset All Data" icon="delete_forever" variant="container-danger"></labs-button>
              <labs-button label="Clear History" icon="cancel" variant="container-danger"></labs-button>
              <labs-button label="Remove Account" icon="close" variant="container-danger"></labs-button>
            </div>
          </div>
        </div>
      </div>

      <!-- State Demonstrations -->
      <div style="margin-bottom: 3rem;">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-background); font-size: 1.2rem;">Interactive States</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
          <labs-button label="Click for Success" icon="check" variant="primary" checkmark></labs-button>
          <labs-button label="Hover Effect" icon="change_circle" variant="secondary"></labs-button>
          <labs-button label="Icon Animation" icon="rate_review" variant="transparent"></labs-button>
          <labs-button label="Success State" icon="check" variant="success" checkmark></labs-button>
        </div>
        <p style="margin-top: 1rem; font-size: 0.875rem; color: var(--color-on-background); opacity: 0.7;">
          Buttons with checkmark attribute will show a success animation when clicked.
        </p>
      </div>

      <!-- Usage Guidelines -->
      <div style="padding: 1.5rem; background: var(--color-surface); border-radius: 8px; border: 1px solid var(--color-primary-25);">
        <h4 style="margin: 0 0 1rem 0; color: var(--color-on-surface); font-size: 1.1rem;">Usage Guidelines</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; font-size: 0.875rem; color: var(--color-on-surface);">
          <div>
            <strong style="color: var(--color-primary);">Primary:</strong> Main actions, form submissions
            <br><strong style="color: var(--color-secondary);">Secondary:</strong> Secondary actions, cancel buttons
            <br><strong style="color: var(--color-success);">Success:</strong> Confirmation actions, positive states
          </div>
          <div>
            <strong style="color: var(--color-error);">Danger:</strong> Destructive actions, delete operations
            <br><strong>Transparent:</strong> Subtle actions, menu items
            <br><strong>Container:</strong> Panel/overlay buttons with full-width hover
          </div>
        </div>
      </div>
    </div>
  \`;
}`,...a.parameters?.docs?.source}}};const p=["Default","AllVariants"];export{a as AllVariants,r as Default,p as __namedExportsOrder,g as default};
