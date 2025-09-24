import"./labs-checkbox-CW6xedIE.js";import"./labs-list-item-BRVgMUuN.js";import"./iframe-hVkHo5I_.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-PPVm8Dsz.js";const w={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"},slotsPattern:{name:"Slots Pattern",control:{type:"select"},options:["fallback","full-slots","control-only","content-only","actions-only"],description:"Choose which slots to render in the SlotDriven example"}},args:{value:"New task",checked:!1,slotsPattern:"full-slots"}},d=({value:a,checked:t,slotsPattern:s="full-slots"})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto",e.innerHTML="";const n=document.createElement("labs-list-item");n.setAttribute("value",a),t&&n.setAttribute("checked","");const l=document.createElement("labs-checkbox");l.slot="control",l.setAttribute("aria-label","Mark complete");const o=document.createElement("div");o.slot="content",o.textContent=a;const r=document.createElement("div");r.slot="actions";const h=document.createElement("labs-dropdown");r.appendChild(h),s==="full-slots"?(n.appendChild(l),n.appendChild(o),n.appendChild(r)):s==="control-only"?n.appendChild(l):s==="content-only"?n.appendChild(o):s==="actions-only"&&n.appendChild(r);const i=document.createElement("labs-toast");return e.appendChild(n),e.appendChild(i),n.addEventListener("archive",c=>console.log("archive",c.detail)),n.addEventListener("remove",c=>{i.show("Item removed",{actionText:"Undo",duration:4e3}),i.addEventListener("action",()=>{e.contains(n)||e.insertBefore(n,i)},{once:!0})}),n.addEventListener("toggle",c=>console.log("toggle",c.detail)),e},p=({slotsPattern:a="full-slots"}={})=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="12px",t.style.width="100%",t.style.maxWidth="600px",t.style.margin="0 auto",t.innerHTML="",[{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"}].forEach((e,n)=>{const l=document.createElement("labs-list-item");l.setAttribute("variant","text-only"),l.setAttribute("value",e.text),l.setAttribute("timestamp",e.timestamp);const o=document.createElement("labs-checkbox");o.slot="control",o.setAttribute("aria-label",`Mark entry ${n+1} complete`),o.addEventListener("change",r=>console.log("checkbox change",r.target.checked)),(a==="full-slots"||a==="control-only")&&l.appendChild(o),t.appendChild(l)}),t},m=({slotsPattern:a="full-slots"}={})=>{const t=document.createElement("div");return t.style.display="flex",t.style.flexDirection="column",t.style.gap="12px",t.style.width="100%",t.style.maxWidth="600px",t.style.margin="0 auto",t.innerHTML="",["12:00 PM","08:30 AM","Yesterday"].forEach((e,n)=>{const l=document.createElement("labs-list-item");l.setAttribute("variant","text-only"),l.setAttribute("value",e);const o=document.createElement("labs-icon");o.slot="control",o.setAttribute("name","check"),o.setAttribute("aria-hidden","false"),o.setAttribute("title","Completed"),(a==="full-slots"||a==="control-only")&&l.appendChild(o),t.appendChild(l)}),t},u=({slotsPattern:a="full-slots",value:t})=>{const s=document.createElement("div");s.style.display="flex",s.style.flexDirection="column",s.style.gap="12px",s.style.width="100%",s.style.maxWidth="600px",s.style.margin="0 auto",s.innerHTML="";const e=document.createElement("labs-list-item");e.setAttribute("value",t||"Slot-driven task with custom controls");const n=document.createElement("labs-checkbox");n.slot="control",n.setAttribute("aria-label","Mark complete");const l=document.createElement("div");l.slot="content",l.innerHTML='<div style="display:flex;align-items:center;gap:8px;min-width:0;"><div style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Custom slot content that truncates when long</div><div style="font-size:0.75rem;color:var(--color-on-surface-variant)">12:00 PM</div></div>';const o=document.createElement("div");o.slot="actions";const r=document.createElement("labs-button");return r.id="restoreBtn",r.textContent="Restore",r.addEventListener("click",()=>console.log("Restore clicked")),o.appendChild(r),a==="full-slots"?(e.appendChild(n),e.appendChild(l),e.appendChild(o)):a==="control-only"?e.appendChild(n):a==="content-only"?e.appendChild(l):a==="actions-only"&&e.appendChild(o),s.appendChild(e),s};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
  value,
  checked,
  slotsPattern = 'full-slots'
}) => {
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
  const actions = document.createElement('div');
  actions.slot = 'actions';
  const dd = document.createElement('labs-dropdown');
  actions.appendChild(dd);
  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(actions);
  } else if (slotsPattern === 'control-only') {
    el.appendChild(customChk);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  } else if (slotsPattern === 'actions-only') {
    el.appendChild(actions);
  } // 'fallback' -> don't append anything

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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`({
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
    el.setAttribute('variant', 'text-only');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);
    const chk = document.createElement('labs-checkbox');
    chk.slot = 'control';
    chk.setAttribute('aria-label', \`Mark entry \${index + 1} complete\`);
    chk.addEventListener('change', e => console.log('checkbox change', e.target.checked));
    if (slotsPattern === 'full-slots' || slotsPattern === 'control-only') {
      el.appendChild(chk);
    }
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`({
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
  const items = ['12:00 PM', '08:30 AM', 'Yesterday'];
  items.forEach((ts, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    // Use the timestamp as the main label
    el.setAttribute('value', ts);
    // Intentionally do NOT set \`timestamp\` attribute so the small meta is not shown

    // Replace the checkbox control with a simple check icon
    const icon = document.createElement('labs-icon');
    icon.slot = 'control';
    icon.setAttribute('name', 'check');
    icon.setAttribute('aria-hidden', 'false');
    icon.setAttribute('title', 'Completed');
    if (slotsPattern === 'full-slots' || slotsPattern === 'control-only') {
      el.appendChild(icon);
    }
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`({
  slotsPattern = 'full-slots',
  value
}) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  // ensure we start with a clean container on every render
  wrapper.innerHTML = '';
  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value || 'Slot-driven task with custom controls');

  // Prepare optional slotted nodes
  const customChk = document.createElement('labs-checkbox');
  customChk.slot = 'control';
  customChk.setAttribute('aria-label', 'Mark complete');
  const content = document.createElement('div');
  content.slot = 'content';
  content.innerHTML = \`<div style="display:flex;align-items:center;gap:8px;min-width:0;"><div style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Custom slot content that truncates when long</div><div style="font-size:0.75rem;color:var(--color-on-surface-variant)">12:00 PM</div></div>\`;
  const actions = document.createElement('div');
  actions.slot = 'actions';
  const btn = document.createElement('labs-button');
  btn.id = 'restoreBtn';
  btn.textContent = 'Restore';
  btn.addEventListener('click', () => console.log('Restore clicked'));
  actions.appendChild(btn);

  // Attach slots according to the chosen pattern
  if (slotsPattern === 'full-slots') {
    el.appendChild(customChk);
    el.appendChild(content);
    el.appendChild(actions);
  } else if (slotsPattern === 'control-only') {
    el.appendChild(customChk);
  } else if (slotsPattern === 'content-only') {
    el.appendChild(content);
  } else if (slotsPattern === 'actions-only') {
    el.appendChild(actions);
  } else {// 'fallback'
    // don't append any slotted content so the component uses its internal fallbacks
  }
  wrapper.appendChild(el);
  return wrapper;
}`,...u.parameters?.docs?.source}}};const g=["Default","TextOnly","Timestamp","SlotDriven"];export{d as Default,u as SlotDriven,p as TextOnly,m as Timestamp,g as __namedExportsOrder,w as default};
