/* empty css                         */import"./labs-button-Bn02hXED.js";import"./labs-icon-Du3np7tU.js";import{c as i}from"./button-configs-6lF73jOI.js";const r=()=>{const t=document.createElement("div");t.style.minHeight="300px",t.style.display="flex",t.style.flexDirection="column",t.style.alignItems="flex-start",t.style.gap="1.5rem";const n=document.createElement("labs-button");n.setAttribute("icon","settings"),n.setAttribute("variant","primary"),n.setAttribute("label","Open Settings Overlay");let e=null;return n.addEventListener("click",()=>{e||(e=p({isOpen:!0}),e.querySelector(".close-button").addEventListener("click",()=>{e.remove(),e=null}),e.addEventListener("click",a=>{a.target===e&&(e.remove(),e=null)}),document.body.appendChild(e))}),t.appendChild(n),t};r.storyName="Demo (Interactive Overlay)";const h={title:"Patterns/Settings Overlay",argTypes:{isOpen:{control:{type:"boolean"},name:"Is Open",description:"Toggle the visibility of the overlay"}}},p=({isOpen:t=!0})=>{if(!t)return"";const n=document.createElement("div");n.className="settings-overlay";const e=document.createElement("div");e.className="overlay-content";const a=document.createElement("div");a.className="overlay-header";const c=document.createElement("h2");c.textContent="Settings";const s=document.createElement("button");s.className="close-button",s.innerHTML='<labs-icon name="close" class="close-icon"></labs-icon>',a.appendChild(c),a.appendChild(s);const o=document.createElement("div");o.className="button-container",o.style.display="flex",o.style.flexDirection="column",o.style.gap="0.5rem";const d=i("allAppsContainer"),u=i("turnOnDarkModeContainer"),m=i("resetAllDataContainer");return o.appendChild(d),o.appendChild(u),o.appendChild(m),e.appendChild(a),e.appendChild(o),n.appendChild(e),n},l=p.bind({});l.args={isOpen:!0};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`({
  isOpen = true
}) => {
  if (!isOpen) {
    return "";
  }
  const overlay = document.createElement("div");
  overlay.className = "settings-overlay";
  const overlayContent = document.createElement("div");
  overlayContent.className = "overlay-content";
  const overlayHeader = document.createElement("div");
  overlayHeader.className = "overlay-header";
  const title = document.createElement("h2");
  title.textContent = "Settings";
  const closeButtonHeader = document.createElement("button");
  closeButtonHeader.className = "close-button";
  closeButtonHeader.innerHTML = '<labs-icon name="close" class="close-icon"></labs-icon>';
  overlayHeader.appendChild(title);
  overlayHeader.appendChild(closeButtonHeader);
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";
  buttonContainer.style.display = "flex";
  buttonContainer.style.flexDirection = "column";
  buttonContainer.style.gap = "0.5rem";

  // Use container button variants for proper overlay styling
  const allAppsButton = createButtonElement("allAppsContainer");
  const themeButton = createButtonElement("turnOnDarkModeContainer");
  const resetButton = createButtonElement("resetAllDataContainer"); // Uses container-danger variant

  buttonContainer.appendChild(allAppsButton);
  buttonContainer.appendChild(themeButton);
  buttonContainer.appendChild(resetButton);
  overlayContent.appendChild(overlayHeader);
  overlayContent.appendChild(buttonContainer);
  overlay.appendChild(overlayContent);
  return overlay;
}`,...l.parameters?.docs?.source}}};const g=["Demo","Default"];export{l as Default,r as Demo,g as __namedExportsOrder,h as default};
