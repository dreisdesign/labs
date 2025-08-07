/* empty css                         */import"./labs-button-CNbuPE6m.js";import"./labs-icon-CzLvAZ4h.js";import{c as s,s as m}from"./button-configs-agWCFEqR.js";const h={title:"Patterns",argTypes:{isOpen:{control:{type:"boolean"},name:"Is Open",description:"Toggle the visibility of the overlay"}}},u=({isOpen:t=!0})=>{if(!t)return"";const n=document.createElement("div");n.className="settings-overlay";const e=document.createElement("div");e.className="overlay-content";const a=document.createElement("div");a.className="overlay-header";const i=document.createElement("h2");i.textContent="Settings";const l=document.createElement("button");l.className="close-button",l.innerHTML='<labs-icon name="close" class="close-icon"></labs-icon>',a.appendChild(i),a.appendChild(l);const r=document.createElement("div");r.className="button-container",r.style.display="flex",r.style.flexDirection="column",r.style.gap="0.5rem";const p=s("appsContainer"),c=s("themeToggleContainer"),d=s("resetAllDataContainer");return m(c),r.appendChild(p),r.appendChild(c),r.appendChild(d),e.appendChild(a),e.appendChild(r),n.appendChild(e),n},o=()=>{const t=document.createElement("div");t.style.minHeight="300px",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="flex-start",t.style.gap="1.5rem";const n=document.createElement("labs-button");n.setAttribute("icon","settings"),n.setAttribute("variant","primary"),n.setAttribute("label","Open Settings Overlay");let e=null;return n.addEventListener("click",()=>{e||(e=u({isOpen:!0}),e.querySelector(".close-button").addEventListener("click",()=>{e.remove(),e=null}),e.addEventListener("click",a=>{a.target===e&&(e.remove(),e=null)}),document.body.appendChild(e))}),t.appendChild(n),t};o.args={isOpen:!0};o.parameters={docs:{description:{story:"Interactive settings overlay pattern with modal behavior. Click the button to open the overlay, which can be closed by clicking the X or clicking outside the modal."}}};o.storyName="Settings Overlay";o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => {
  // Container for the demo
  const wrapper = document.createElement("div");
  wrapper.style.minHeight = "300px";
  wrapper.style.display = "flex";
  wrapper.style.flexDirection = "column";
  wrapper.style.alignItems = "flex-start";
  wrapper.style.gap = "1.5rem";

  // Settings button
  const openBtn = document.createElement("labs-button");
  openBtn.setAttribute("icon", "settings");
  openBtn.setAttribute("variant", "primary");
  openBtn.setAttribute("label", "Open Settings Overlay");

  // Overlay (initially not in DOM)
  let overlay = null;
  openBtn.addEventListener("click", () => {
    if (overlay) return;
    overlay = Template({
      isOpen: true
    });
    // Add close logic
    overlay.querySelector(".close-button").addEventListener("click", () => {
      overlay.remove();
      overlay = null;
    });
    // Optional: close on background click
    overlay.addEventListener("click", e => {
      if (e.target === overlay) {
        overlay.remove();
        overlay = null;
      }
    });
    document.body.appendChild(overlay);
  });
  wrapper.appendChild(openBtn);
  return wrapper;
}`,...o.parameters?.docs?.source}}};const C=["Settings"];export{o as Settings,C as __namedExportsOrder,h as default};
