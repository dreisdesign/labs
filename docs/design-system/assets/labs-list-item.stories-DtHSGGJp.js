import"./labs-list-item-DczhaX0n.js";import"./labs-checkbox-CW6xedIE.js";import"./iframe-Du79Jzof.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"},slotsPattern:{name:"Slots Pattern",control:{type:"select"},options:["full-slots","content-only"],description:"Choose which slots to render in the SlotDriven example"}},args:{value:"New task",checked:!1,slotsPattern:"full-slots"},parameters:{docs:{story:{TextOnly:{args:{slotsPattern:"content-only"}}}}}},p=({value:i,checked:e,slotsPattern:d="full-slots"})=>{if(!customElements.get("labs-list-item")||!customElements.get("labs-dropdown")){const r=document.createElement("div");return r.textContent="Labs List Item or Dropdown not defined yet.",r}const t=document.createElement("div");t.style.display="flex",t.style.flexDirection="column",t.style.gap="16px",t.style.width="100%",t.style.maxWidth="600px",t.style.margin="0 auto",t.innerHTML="";const o=document.createElement("labs-list-item");o.setAttribute("value",i),e&&o.setAttribute("checked","");const n=document.createElement("labs-checkbox");n.slot="control",n.setAttribute("aria-label","Mark complete");const l=document.createElement("div");l.slot="content",l.textContent=i;const a=document.createElement("labs-dropdown");a.slot="actions",d==="full-slots"?(o.appendChild(n),o.appendChild(l),o.appendChild(a)):d==="content-only"&&o.appendChild(l);const s=document.createElement("labs-toast");return t.appendChild(o),t.appendChild(s),o.addEventListener("archive",r=>console.log("archive",r.detail)),o.addEventListener("remove",r=>{s.show("Item removed",{actionText:"Undo",duration:4e3}),s.addEventListener("action",()=>{t.contains(o)||t.insertBefore(o,s)},{once:!0})}),o.addEventListener("toggle",r=>console.log("toggle",r.detail)),t},c=({slotsPattern:i}={})=>{i=i||"content-only";const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto",e.innerHTML="",[{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"}].forEach((t,o)=>{const n=document.createElement("labs-list-item");n.setAttribute("variant","timestamp"),n.setAttribute("value",t.text),n.setAttribute("timestamp",t.timestamp);const l=document.createElement("labs-checkbox");l.slot="control",l.setAttribute("aria-label",`Mark entry ${o+1} complete`),l.addEventListener("change",r=>console.log("checkbox change",r.target.checked));const a=document.createElement("div");a.slot="content",a.textContent=t.text;const s=document.createElement("labs-dropdown");s.slot="actions",i==="full-slots"?(n.appendChild(l),n.appendChild(a),n.appendChild(s)):i==="content-only"&&n.appendChild(a),e.appendChild(n)}),e};c.args={slotsPattern:"content-only"};const m=({slotsPattern:i="full-slots"}={})=>{const e=document.createElement("div");return e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto",e.innerHTML="",["12:00 PM"].forEach((t,o)=>{const n=document.createElement("labs-list-item");n.setAttribute("variant","text-only"),n.setAttribute("value",t);const l=document.createElement("labs-icon");l.slot="control",l.setAttribute("name","check"),l.setAttribute("aria-hidden","false"),l.setAttribute("title","Completed");const a=document.createElement("div");a.slot="content",a.textContent=t;const s=document.createElement("labs-dropdown");s.slot="actions",s.style.marginRight="0",s.style.paddingRight="0",s.style.minWidth="40px",s.style.display="inline-flex",s.style.alignItems="center",n.appendChild(l),n.appendChild(a),n.appendChild(s),e.appendChild(n)}),e};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
  value,
  checked,
  slotsPattern = 'full-slots'
}) => {
  if (!customElements.get('labs-list-item') || !customElements.get('labs-dropdown')) {
    const placeholder = document.createElement('div');
    placeholder.textContent = 'Labs List Item or Dropdown not defined yet.';
    return placeholder;
  }
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';
  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

  // Optional slots according to slotsPattern
  const customChk = document.createElement('labs-checkbox');
  customChk.slot = 'control';
  customChk.setAttribute('aria-label', 'Mark complete');
  const content = document.createElement('div');
  content.slot = 'content';
  content.textContent = value;
  const dd = document.createElement('labs-dropdown');
  dd.slot = 'actions';

  // Always provide all slots for robust demo
  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(dd);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  }

  // Add a toast element
  const toast = document.createElement('labs-toast');
  wrapper.appendChild(el);
  wrapper.appendChild(toast);

  // wire events for demo output and undo toast
  el.addEventListener('archive', e => console.log('archive', e.detail));
  el.addEventListener('remove', e => {
    toast.show('Item removed', {
      actionText: 'Undo',
      duration: 4000
    });
    toast.addEventListener('action', () => {
      if (!wrapper.contains(el)) wrapper.insertBefore(el, toast);
    }, {
      once: true
    });
  });
  el.addEventListener('toggle', e => console.log('toggle', e.detail));
  return wrapper;
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`({
  slotsPattern
} = {}) => {
  slotsPattern = slotsPattern || 'content-only';
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';

  // Create multiple text-only items that may include the left checkbox depending on pattern
  const items = [{
    text: 'Entry logged',
    timestamp: '12:00 PM'
  }, {
    text: 'Entry logged',
    timestamp: '12:00 PM'
  }, {
    text: 'Entry logged',
    timestamp: '12:00 PM'
  }];
  items.forEach((item, index) => {
    const el = document.createElement('labs-list-item');
    // Use a dedicated 'timestamp' variant so it doesn't pick up text-only styles
    el.setAttribute('variant', 'timestamp');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);
    const chk = document.createElement('labs-checkbox');
    chk.slot = 'control';
    chk.setAttribute('aria-label', \`Mark entry \${index + 1} complete\`);
    chk.addEventListener('change', e => console.log('checkbox change', e.target.checked));
    const content = document.createElement('div');
    content.slot = 'content';
    content.textContent = item.text;
    const dd = document.createElement('labs-dropdown');
    dd.slot = 'actions';
    if (slotsPattern === 'full-slots') {
      el.appendChild(chk);
      el.appendChild(content);
      el.appendChild(dd);
    } else if (slotsPattern === 'content-only') {
      el.appendChild(content);
    }
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
  slotsPattern = 'full-slots'
} = {}) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  wrapper.innerHTML = '';

  // Items where the primary label is the timestamp string and the small timestamp
  // meta is removed (so we don't set the \`timestamp\` attribute on the component).
  // Showing a single example here avoids confusion with the separate
  // \`variant="timestamp"\` usage which renders the component's internal
  // timestamp attribute into the left-side label area.
  const items = ['12:00 PM'];
  items.forEach((ts, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    // Use the timestamp as the main label
    el.setAttribute('value', ts);
    const icon = document.createElement('labs-icon');
    icon.slot = 'control';
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'false');
    icon.setAttribute('title', 'Completed');
    const content = document.createElement('div');
    content.slot = 'content';
    content.textContent = ts;
    const dd = document.createElement('labs-dropdown');
    dd.slot = 'actions';

    // Ensure the actions dropdown doesn't add extra right-side spacing
    dd.style.marginRight = '0';
    dd.style.paddingRight = '0';
    dd.style.minWidth = '40px';
    dd.style.display = 'inline-flex';
    dd.style.alignItems = 'center';
    el.appendChild(icon);
    el.appendChild(content);
    el.appendChild(dd);
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...m.parameters?.docs?.source}}};const w=["Checkbox","TextOnly","Timestamp"];export{p as Checkbox,c as TextOnly,m as Timestamp,w as __namedExportsOrder,b as default};
