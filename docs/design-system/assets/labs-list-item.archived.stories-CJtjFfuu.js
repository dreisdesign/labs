import"./labs-checkbox-CW6xedIE.js";import"./labs-list-item-BXZF3wXr.js";import"./iframe-WSMhZOc4.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-PPVm8Dsz.js";const b={title:"Components/List Item/Archived",component:"labs-list-item"},s=()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.width="100%",e.style.maxWidth="600px",e.style.margin="0 auto";const d=document.createElement("labs-toast");e.appendChild(d);function v(n){n.addEventListener("remove",()=>{d.show("Item removed",{actionText:"Undo",duration:4e3}),d.addEventListener("action",()=>{e.contains(n)||e.insertBefore(n,d.nextSibling)},{once:!0})})}function r({id:n,value:i,archived:m=!1,restored:p=!1,originalId:h=null}){const t=document.createElement("labs-list-item");n&&t.setAttribute("data-id",n),i&&t.setAttribute("value",i),m&&t.setAttribute("archived",""),p&&t.setAttribute("restored",""),h&&t.setAttribute("data-original-id",h);const l=document.createElement("div");l.slot="actions";const a=document.createElement("labs-dropdown");return m&&a.setAttribute("archived",""),p&&a.setAttribute("restored",""),a.addEventListener("archive",()=>{t.hasAttribute("archived")||t.setAttribute("archived","")}),a.addEventListener("restore",()=>{t.removeAttribute("archived"),t.setAttribute("restored","")}),a.addEventListener("remove",()=>{t.dispatchEvent(new CustomEvent("remove",{bubbles:!0,composed:!0})),t.remove()}),l.appendChild(a),t.appendChild(l),v(t),t}function o(n){const i=document.createElement("div");i.style.fontWeight="600",i.style.marginTop="18px",i.textContent=n,e.appendChild(i)}const u=new Date,c=new Date(Date.now()-1440*60*1e3);return u.toISOString().slice(0,10),c.toISOString().slice(0,10),o("Today — "+new Date().toLocaleDateString()),e.appendChild(r({id:"1-T",value:"Default Item",archived:!1,timestamp:new Date().toISOString()})),o("Archived items"),e.appendChild(r({id:"1-A",value:"Archived Item",archived:!0,timestamp:c.toISOString()})),o("3) Restored pair (Archived original + Restored copy)"),e.appendChild(r({id:"2-A",value:"Archived (Restored)",archived:!0,restored:!0,timestamp:c.toISOString()})),e.appendChild(r({id:"2-T",value:"Restored Item",originalId:"2-A",timestamp:new Date().toISOString()})),o("4) Restored (original deleted)"),e.appendChild(r({id:"3-T",value:"Restored Item (orig deleted)",originalId:"3-A",timestamp:new Date().toISOString()})),e};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '600px';
  wrapper.style.margin = '0 auto';

  // Add a toast element
  const toast = document.createElement('labs-toast');
  wrapper.appendChild(toast);

  // Helper to wire undo toast for each item
  function wireUndoToast(item) {
    item.addEventListener('remove', () => {
      toast.show('Item removed', {
        actionText: 'Undo',
        duration: 4000
      });
      toast.addEventListener('action', () => {
        if (!wrapper.contains(item)) wrapper.insertBefore(item, toast.nextSibling);
      }, {
        once: true
      });
    });
  }

  // Scenario helper: create a labs-list-item with specified state
  function makeItem({
    id,
    value,
    archived = false,
    restored = false,
    originalId = null
  }) {
    const item = document.createElement('labs-list-item');
    if (id) item.setAttribute('data-id', id);
    if (value) item.setAttribute('value', value);
    if (archived) item.setAttribute('archived', '');
    if (restored) item.setAttribute('restored', '');
    if (originalId) item.setAttribute('data-original-id', originalId);
    // Use the standalone labs-dropdown inside the actions slot to match expected pattern
    const actions = document.createElement('div');
    actions.slot = 'actions';
    const dd = document.createElement('labs-dropdown');
    // Mirror archived/restored state into the dropdown so its menu reflects correct actions
    if (archived) dd.setAttribute('archived', '');
    if (restored) dd.setAttribute('restored', '');

    // Wire dropdown events to modify the item and show undo toast when needed
    dd.addEventListener('archive', () => {
      if (!item.hasAttribute('archived')) item.setAttribute('archived', '');
    });
    dd.addEventListener('restore', () => {
      item.removeAttribute('archived');
      item.setAttribute('restored', '');
    });
    dd.addEventListener('remove', () => {
      item.dispatchEvent(new CustomEvent('remove', {
        bubbles: true,
        composed: true
      }));
      item.remove();
    });
    actions.appendChild(dd);
    item.appendChild(actions);
    wireUndoToast(item);
    return item;
  }

  // Add labeled section heading
  function addHeading(text) {
    const h = document.createElement('div');
    h.style.fontWeight = '600';
    h.style.marginTop = '18px';
    h.textContent = text;
    wrapper.appendChild(h);
  }

  // Prepare dates for Today and Yesterday
  const today = new Date();
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const isoToday = today.toISOString().slice(0, 10);
  const isoYesterday = yesterday.toISOString().slice(0, 10);

  // 1) New item (Today)
  addHeading('Today — ' + new Date().toLocaleDateString());
  // This is a normal, not-archived item: shows the archive icon and can be archived.
  wrapper.appendChild(makeItem({
    id: '1-T',
    value: 'Default Item',
    archived: false,
    timestamp: new Date().toISOString(),
    date: isoToday
  }));

  // 2) Archived item (Archived list)
  addHeading('Archived items');
  // This item lives in the Archived location and has the archived attribute set.
  wrapper.appendChild(makeItem({
    id: '1-A',
    value: 'Archived Item',
    archived: true,
    timestamp: yesterday.toISOString(),
    date: isoYesterday
  }));

  // 3) Restored pair (Archived original + Restored copy in Today)
  addHeading('3) Restored pair (Archived original + Restored copy)');
  // Archived ORIGINAL: still in Archived list but marked as restored so it shows the inactive/history icon
  wrapper.appendChild(makeItem({
    id: '2-A',
    value: 'Archived (Restored)',
    archived: true,
    restored: true,
    timestamp: yesterday.toISOString(),
    date: isoYesterday
  }));
  // Restored COPY: lives in Today (not archived), references original via data-original-id
  // Note: by component logic, the restored copy is a normal (not-archived) item and will show an archive icon.
  wrapper.appendChild(makeItem({
    id: '2-T',
    value: 'Restored Item',
    originalId: '2-A',
    timestamp: new Date().toISOString(),
    date: isoToday
  }));

  // 4) Restored item, archived original was deleted -> only Today item present
  addHeading('4) Restored (original deleted)');
  // Simulate the case where the archived original was removed; only the restored item remains in Today.
  wrapper.appendChild(makeItem({
    id: '3-T',
    value: 'Restored Item (orig deleted)',
    originalId: '3-A',
    timestamp: new Date().toISOString(),
    date: isoToday
  }));
  return wrapper;
}`,...s.parameters?.docs?.source}}};const I=["States"];export{s as States,I as __namedExportsOrder,b as default};
