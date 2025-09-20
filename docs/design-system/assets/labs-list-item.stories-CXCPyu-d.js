import"./labs-checkbox-CW6xedIE.js";import"./labs-list-item-BXZF3wXr.js";import"./iframe-Cv1Tuenz.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"},slotsPattern:{name:"Slots Pattern",control:{type:"select"},options:["fallback","full-slots","control-only","content-only","actions-only"],description:"Choose which slots to render in the SlotDriven example"}},args:{value:"New task",checked:!1,slotsPattern:"full-slots"}},d=({value:r,checked:s,slotsPattern:n="full-slots"})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto",e.innerHTML="";const t=document.createElement("labs-list-item");t.setAttribute("value",r),s&&t.setAttribute("checked","");const l=document.createElement("labs-checkbox");l.slot="control",l.setAttribute("aria-label","Mark complete");const o=document.createElement("div");o.slot="content",o.textContent=r;const a=document.createElement("div");a.slot="actions";const u=document.createElement("labs-dropdown");a.appendChild(u),n==="full-slots"?(t.appendChild(l),t.appendChild(o),t.appendChild(a)):n==="control-only"?t.appendChild(l):n==="content-only"?t.appendChild(o):n==="actions-only"&&t.appendChild(a);const c=document.createElement("labs-toast");return e.appendChild(t),e.appendChild(c),t.addEventListener("archive",i=>console.log("archive",i.detail)),t.addEventListener("remove",i=>{c.show("Item removed",{actionText:"Undo",duration:4e3}),c.addEventListener("action",()=>{e.contains(t)||e.insertBefore(t,c)},{once:!0})}),t.addEventListener("toggle",i=>console.log("toggle",i.detail)),e},p=({slotsPattern:r="full-slots"}={})=>{const s=document.createElement("div");return s.style.display="flex",s.style.flexDirection="column",s.style.gap="12px",s.style.width="100%",s.style.maxWidth="600px",s.style.margin="0 auto",s.innerHTML="",[{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"},{text:"Entry logged",timestamp:"12:00 PM"}].forEach((e,t)=>{const l=document.createElement("labs-list-item");l.setAttribute("variant","text-only"),l.setAttribute("value",e.text),l.setAttribute("timestamp",e.timestamp);const o=document.createElement("labs-checkbox");o.slot="control",o.setAttribute("aria-label",`Mark entry ${t+1} complete`),o.addEventListener("change",a=>console.log("checkbox change",a.target.checked)),(r==="full-slots"||r==="control-only")&&l.appendChild(o),s.appendChild(l)}),s},m=({slotsPattern:r="full-slots",value:s})=>{const n=document.createElement("div");n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.width="100%",n.style.maxWidth="600px",n.style.margin="0 auto",n.innerHTML="";const e=document.createElement("labs-list-item");e.setAttribute("value",s||"Slot-driven task with custom controls");const t=document.createElement("labs-checkbox");t.slot="control",t.setAttribute("aria-label","Mark complete");const l=document.createElement("div");l.slot="content",l.innerHTML='<div style="display:flex;align-items:center;gap:8px;min-width:0;"><div style="flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">Custom slot content that truncates when long</div><div style="font-size:0.75rem;color:var(--color-on-surface-variant)">12:00 PM</div></div>';const o=document.createElement("div");o.slot="actions";const a=document.createElement("labs-button");return a.id="restoreBtn",a.textContent="Restore",a.addEventListener("click",()=>console.log("Restore clicked")),o.appendChild(a),r==="full-slots"?(e.appendChild(t),e.appendChild(l),e.appendChild(o)):r==="control-only"?e.appendChild(t):r==="content-only"?e.appendChild(l):r==="actions-only"&&e.appendChild(o),n.appendChild(e),n};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`({
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
}`,...m.parameters?.docs?.source}}};const w=["Default","TextOnly","SlotDriven"];export{d as Default,m as SlotDriven,p as TextOnly,w as __namedExportsOrder,b as default};
