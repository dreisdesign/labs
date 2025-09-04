import{x as o}from"./iframe-K65wYJzS.js";import"./labs-footer-hgNsOeDx.js";import"./preload-helper-D9Z9MdNV.js";const p={title:"Components/Footer",component:"labs-footer",parameters:{docs:{description:{component:"A flexible footer component with slots for left, center, and right content. Supports various positioning modes and responsive behavior."}}},argTypes:{sticky:{control:"boolean",description:"Makes the footer stick to the bottom of the viewport when scrolling"},fixed:{control:"boolean",description:"Fixes the footer to the bottom of the viewport"},elevated:{control:"boolean",description:"Adds shadow elevation instead of border"},compact:{control:"boolean",description:"Reduces padding for a more compact appearance"},safeArea:{control:"boolean",description:"Adds safe area padding for mobile devices"}}},n=e=>{const t=[];return e.sticky&&t.push("sticky"),e.fixed&&t.push("fixed"),e.elevated&&t.push("elevated"),e.compact&&t.push("compact"),e.safeArea&&t.push("safe-area"),t.join(" ")},a={args:{sticky:!1,fixed:!1,elevated:!1,compact:!1,safeArea:!1},render:e=>o`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer ${n(e)}>
      <span slot="left">Left content</span>
      <span slot="center">Center content</span>
      <span slot="right">Right content</span>
    </labs-footer>
  `},r={args:{sticky:!1,fixed:!1,elevated:!0,compact:!1,safeArea:!1},render:e=>o`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer ${n(e)}>
      <labs-button slot="left" variant="text">
        <labs-icon slot="icon-left" name="apps"></labs-icon>
        Menu
      </labs-button>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  `},s={args:{sticky:!0,fixed:!1,elevated:!0,compact:!1,safeArea:!0},render:e=>o`
    <div style="height: 300px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Today List content would go here</p>
    </div>
    <labs-footer ${n(e)}>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  `},l={args:{sticky:!1,fixed:!1,elevated:!1,compact:!0,safeArea:!1},render:e=>o`
    <div style="height: 150px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Minimal content</p>
    </div>
    <labs-footer ${n(e)}>
      <span slot="center">© 2025 Labs</span>
    </labs-footer>
  `},i={args:{sticky:!1,fixed:!0,elevated:!0,compact:!1,safeArea:!0},render:e=>o`
    <div style="height: 400px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <div style="text-align: center; color: var(--color-on-surface, #666);">
        <p style="margin: 0 0 8px 0;">This footer is fixed to the bottom</p>
        <p style="margin: 0; font-size: 14px; opacity: 0.7;">Scroll to see the effect</p>
      </div>
    </div>
    <labs-footer ${n(e)}>
      <labs-button slot="left" variant="text">Back</labs-button>
      <labs-button slot="center" variant="primary">Action</labs-button>
      <labs-button slot="right" variant="icon" aria-label="More options">
        <labs-icon slot="icon-left" name="more_vert"></labs-icon>
      </labs-button>
    </labs-footer>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    fixed: false,
    elevated: false,
    compact: false,
    safeArea: false
  },
  render: args => html\`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer \${renderAttributes(args)}>
      <span slot="left">Left content</span>
      <span slot="center">Center content</span>
      <span slot="right">Right content</span>
    </labs-footer>
  \`
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    fixed: false,
    elevated: true,
    compact: false,
    safeArea: false
  },
  render: args => html\`
    <div style="height: 200px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Content above footer</p>
    </div>
    <labs-footer \${renderAttributes(args)}>
      <labs-button slot="left" variant="text">
        <labs-icon slot="icon-left" name="apps"></labs-icon>
        Menu
      </labs-button>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  \`
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: true,
    fixed: false,
    elevated: true,
    compact: false,
    safeArea: true
  },
  render: args => html\`
    <div style="height: 300px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Today List content would go here</p>
    </div>
    <labs-footer \${renderAttributes(args)}>
      <labs-button slot="center" variant="primary">
        <labs-icon slot="icon-left" name="add"></labs-icon>
        Add Item
      </labs-button>
      <labs-button slot="right" variant="icon" aria-label="Settings">
        <labs-icon slot="icon-left" name="settings"></labs-icon>
      </labs-button>
    </labs-footer>
  \`
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    fixed: false,
    elevated: false,
    compact: true,
    safeArea: false
  },
  render: args => html\`
    <div style="height: 150px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <p style="color: var(--color-on-surface, #666); margin: 0;">Minimal content</p>
    </div>
    <labs-footer \${renderAttributes(args)}>
      <span slot="center">© 2025 Labs</span>
    </labs-footer>
  \`
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    sticky: false,
    fixed: true,
    elevated: true,
    compact: false,
    safeArea: true
  },
  render: args => html\`
    <div style="height: 400px; border: 1px dashed var(--color-outline, #ccc); display: flex; align-items: center; justify-content: center; margin-bottom: 16px;">
      <div style="text-align: center; color: var(--color-on-surface, #666);">
        <p style="margin: 0 0 8px 0;">This footer is fixed to the bottom</p>
        <p style="margin: 0; font-size: 14px; opacity: 0.7;">Scroll to see the effect</p>
      </div>
    </div>
    <labs-footer \${renderAttributes(args)}>
      <labs-button slot="left" variant="text">Back</labs-button>
      <labs-button slot="center" variant="primary">Action</labs-button>
      <labs-button slot="right" variant="icon" aria-label="More options">
        <labs-icon slot="icon-left" name="more_vert"></labs-icon>
      </labs-button>
    </labs-footer>
  \`
}`,...i.parameters?.docs?.source}}};const b=["Default","WithButtons","TodayListFooter","MinimalFooter","FixedFooter"];export{a as Default,i as FixedFooter,l as MinimalFooter,s as TodayListFooter,r as WithButtons,b as __namedExportsOrder,p as default};
