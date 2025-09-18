import"./labs-checkbox-CW6xedIE.js";import"./labs-list-item-DRXnSJON.js";import"./iframe-BQgxUWC4.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-D9Z9MdNV.js";const u={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"}},args:{value:"New task",checked:!1}},l=({value:n,checked:s})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto";const a=document.createElement("labs-list-item");a.setAttribute("value",n),s&&a.setAttribute("checked","");const t=document.createElement("labs-toast");return e.appendChild(a),e.appendChild(t),a.addEventListener("archive",r=>console.log("archive",r.detail)),a.addEventListener("remove",r=>{t.show("Item removed",{actionText:"Undo",duration:4e3}),t.addEventListener("action",()=>{e.contains(a)||e.insertBefore(a,t)},{once:!0})}),a.addEventListener("toggle",r=>console.log("toggle",r.detail)),e},o=()=>{const n=document.createElement("div");return n.style.display="flex",n.style.flexDirection="column",n.style.gap="12px",n.style.width="100%",n.style.maxWidth="600px",n.style.margin="0 auto",[{text:"Entry logged at 9:15 AM",timestamp:"Sep 17, 2025, 9:15:23 AM"},{text:"Entry logged at 2:30 PM",timestamp:"Sep 17, 2025, 2:30:45 PM"},{text:"Entry logged at 5:45 PM",timestamp:"Sep 17, 2025, 5:45:12 PM"}].forEach((e,a)=>{const t=document.createElement("labs-list-item");t.setAttribute("variant","text-only"),t.setAttribute("value",e.text),t.setAttribute("timestamp",e.timestamp);const r=document.createElement("labs-button");r.textContent="Delete",r.setAttribute("aria-label",`Delete entry ${a+1}`),r.slot="actions",r.addEventListener("click",()=>{console.log(`Delete clicked for: ${e.text}`),t.remove()}),t.appendChild(r),n.appendChild(t)}),n};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  value,
  checked
}) => {
  // Create a wrapper to hold the item and the toast
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';
  const el = document.createElement('labs-list-item');
  el.setAttribute('value', value);
  if (checked) el.setAttribute('checked', '');

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
      // Re-insert the item for demo purposes
      if (!wrapper.contains(el)) wrapper.insertBefore(el, toast);
    }, {
      once: true
    });
  });
  el.addEventListener('toggle', e => console.log('toggle', e.detail));
  return wrapper;
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';

  // Create multiple text-only items to show typical usage
  const items = [{
    text: 'Entry logged at 9:15 AM',
    timestamp: 'Sep 17, 2025, 9:15:23 AM'
  }, {
    text: 'Entry logged at 2:30 PM',
    timestamp: 'Sep 17, 2025, 2:30:45 PM'
  }, {
    text: 'Entry logged at 5:45 PM',
    timestamp: 'Sep 17, 2025, 5:45:12 PM'
  }];
  items.forEach((item, index) => {
    const el = document.createElement('labs-list-item');
    el.setAttribute('variant', 'text-only');
    el.setAttribute('value', item.text);
    el.setAttribute('timestamp', item.timestamp);

    // Add a delete button in the actions slot
    const deleteBtn = document.createElement('labs-button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.setAttribute('aria-label', \`Delete entry \${index + 1}\`);
    deleteBtn.slot = 'actions';
    deleteBtn.addEventListener('click', () => {
      console.log(\`Delete clicked for: \${item.text}\`);
      el.remove();
    });
    el.appendChild(deleteBtn);
    wrapper.appendChild(el);
  });
  return wrapper;
}`,...o.parameters?.docs?.source}}};const x=["Default","TextOnly"];export{l as Default,o as TextOnly,x as __namedExportsOrder,u as default};
