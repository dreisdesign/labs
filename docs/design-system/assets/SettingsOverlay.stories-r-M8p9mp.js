/* empty css                         */import"./labs-button-Bn02hXED.js";import"./labs-icon-Du3np7tU.js";import{c as l}from"./button-configs-6lF73jOI.js";const h={title:"Patterns/Settings Overlay",argTypes:{isOpen:{control:{type:"boolean"},name:"Is Open",description:"Toggle the visibility of the overlay"}}},u=({isOpen:c=!0})=>{if(!c)return"";const a=document.createElement("div");a.className="settings-overlay";const n=document.createElement("div");n.className="overlay-content";const o=document.createElement("div");o.className="overlay-header";const s=document.createElement("h2");s.textContent="Settings";const r=document.createElement("button");r.className="close-button",r.innerHTML='<labs-icon name="close" class="close-icon"></labs-icon>',o.appendChild(s),o.appendChild(r);const e=document.createElement("div");e.className="button-container",e.style.display="flex",e.style.flexDirection="column",e.style.gap="0.5rem";const i=l("allAppsContainer"),d=l("turnOnDarkModeContainer"),p=l("resetAllDataContainer");return e.appendChild(i),e.appendChild(d),e.appendChild(p),n.appendChild(o),n.appendChild(e),a.appendChild(n),a},t=u.bind({});t.args={isOpen:!0};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
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
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,h as default};
