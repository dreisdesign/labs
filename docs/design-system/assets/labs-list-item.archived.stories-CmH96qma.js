import"./labs-checkbox-Vm1IAhzc.js";import"./labs-list-item-DxbEnQDC.js";import"./iframe-DqYqYabm.js";import"./labs-toast-Dmd2L4o2.js";import"./preload-helper-D9Z9MdNV.js";const A={title:"Components/List Item/Archived",component:"labs-list-item"},s=()=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="12px",e.style.width="100%",e.style.maxWidth="400px",e.style.margin="0 auto";const d=document.createElement("labs-toast");e.appendChild(d);function c(t){t.addEventListener("remove",()=>{d.show("Item removed",{actionText:"Undo",duration:4e3}),d.addEventListener("action",()=>{e.contains(t)||e.insertBefore(t,d.nextSibling)},{once:!0})})}function a({id:t,value:n,archived:p=!1,restored:h=!1,originalId:l=null}){const i=document.createElement("labs-list-item");return t&&i.setAttribute("data-id",t),n&&i.setAttribute("value",n),p&&i.setAttribute("archived",""),h&&i.setAttribute("restored",""),l&&i.setAttribute("data-original-id",l),c(i),i}function r(t){const n=document.createElement("div");n.style.fontWeight="600",n.style.marginTop="18px",n.textContent=t,e.appendChild(n)}const m=new Date,o=new Date(Date.now()-1440*60*1e3);return m.toISOString().slice(0,10),o.toISOString().slice(0,10),r("Today — "+new Date().toLocaleDateString()),e.appendChild(a({id:"1-T",value:"Default Item",archived:!1,timestamp:new Date().toISOString()})),r("Archived items"),e.appendChild(a({id:"1-A",value:"Archived Item",archived:!0,timestamp:o.toISOString()})),r("3) Restored pair (Archived original + Restored copy)"),e.appendChild(a({id:"2-A",value:"Archived (Restored)",archived:!0,restored:!0,timestamp:o.toISOString()})),e.appendChild(a({id:"2-T",value:"Restored Item",originalId:"2-A",timestamp:new Date().toISOString()})),r("4) Restored (original deleted)"),e.appendChild(a({id:"3-T",value:"Restored Item (orig deleted)",originalId:"3-A",timestamp:new Date().toISOString()})),r("5) Archived item (restored then deleted)"),e.appendChild(a({id:"4-A",value:"Archived, No Restored Counterpart",archived:!0,timestamp:o.toISOString()})),e};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '12px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '400px';
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

  // 5) Archived item that was restored then deleted (Archived-only)
  addHeading('5) Archived item (restored then deleted)');
  // In this case the Archived item remains archived (archived=true) and shows an active history icon.
  wrapper.appendChild(makeItem({
    id: '4-A',
    value: 'Archived, No Restored Counterpart',
    archived: true,
    timestamp: yesterday.toISOString(),
    date: isoYesterday
  }));
  return wrapper;
}`,...s.parameters?.docs?.source}}};const I=["States"];export{s as States,I as __namedExportsOrder,A as default};
