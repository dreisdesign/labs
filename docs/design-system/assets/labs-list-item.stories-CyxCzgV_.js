import"./labs-checkbox-Vm1IAhzc.js";import"./labs-list-item-DxbEnQDC.js";import"./labs-toast-Dmd2L4o2.js";const c={title:"Components/List Item",component:"labs-list-item",argTypes:{value:{control:"text",description:"Item text"},checked:{control:"boolean",description:"Checked state"}},args:{value:"New task",checked:!1}},o=({value:r,checked:s})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.width="100%",e.style.maxWidth="400px",e.style.margin="0 auto";const t=document.createElement("labs-list-item");t.setAttribute("value",r),s&&t.setAttribute("checked","");const n=document.createElement("labs-toast");return e.appendChild(t),e.appendChild(n),t.addEventListener("archive",a=>console.log("archive",a.detail)),t.addEventListener("remove",a=>{n.show("Item removed",{actionText:"Undo",duration:4e3}),n.addEventListener("action",()=>{e.contains(t)||e.insertBefore(t,n)},{once:!0})}),t.addEventListener("toggle",a=>console.log("toggle",a.detail)),e};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`({
  value,
  checked
}) => {
  // Create a wrapper to hold the item and the toast
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '400px';
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
}`,...o.parameters?.docs?.source}}};const p=["Default"];export{o as Default,p as __namedExportsOrder,c as default};
