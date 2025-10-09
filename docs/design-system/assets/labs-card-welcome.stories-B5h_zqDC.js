import"./iframe-DVmFY04n.js";import"./labs-card-D2Mfv5yJ.js";import{i as p}from"./icons-list-BKmguoAm.js";import"./preload-helper-PPVm8Dsz.js";const E={title:"3. Components (Wrapped)/Card/Welcome",parameters:{docs:{description:{component:"A wrapped example of the labs-card component for welcome/intro content. Demonstrates recommended usage with header, description, and actions."}}},component:"labs-card",argTypes:{align:{control:{type:"inline-radio"},options:["left","center"],description:"Content alignment"},title:{control:"text",description:"Welcome card title"},description:{control:"text",description:"Welcome card description"},buttonText:{control:"text",description:"Button text"},buttonVariant:{control:{type:"select"},options:["primary","secondary","destructive"],description:"Button variant"},buttonSize:{control:{type:"inline-radio"},options:["small","medium","large"],description:"Button size"},buttonFullwidth:{control:"boolean",description:"Make button full width"},buttonPill:{control:"boolean",description:"Pill shape (rounded ends)"},iconLeft:{control:{type:"select"},options:["none",...p],description:"Icon on left side of button"},iconRight:{control:{type:"select"},options:["none",...p],description:"Icon on right side of button"}},args:{align:"left",title:"Welcome to Labs!",description:"Get started by exploring our design system components.",buttonText:"Get Started",buttonVariant:"primary",buttonSize:"medium",buttonFullwidth:!1,buttonPill:!1,iconLeft:"none",iconRight:"none"}},i=({align:l,title:u,description:m,buttonText:b,buttonVariant:h,buttonSize:s,buttonFullwidth:f,buttonPill:x,iconLeft:r,iconRight:c})=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.gap="16px",e.style.width="100%",e.style.maxWidth="500px",e.style.margin="0 auto";const o=document.createElement("labs-card");o.setAttribute("variant","welcome"),l&&l==="center"&&o.setAttribute("align","center");const a=document.createElement("h2");a.setAttribute("slot","header"),a.textContent=u;const d=document.createElement("p");d.textContent=m;const t=document.createElement("labs-button");if(t.setAttribute("slot","actions"),t.setAttribute("variant",h),s!=="medium"&&t.setAttribute("size",s),f&&t.setAttribute("fullwidth",""),x&&t.setAttribute("pill",""),r&&r!=="none"){const n=document.createElement("labs-icon");n.setAttribute("slot","icon-left"),n.setAttribute("name",r),t.appendChild(n)}const g=document.createTextNode(b);if(t.appendChild(g),c&&c!=="none"){const n=document.createElement("labs-icon");n.setAttribute("slot","icon-right"),n.setAttribute("name",c),t.appendChild(n)}return o.appendChild(a),o.appendChild(d),o.appendChild(t),e.appendChild(o),e};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`({
  align,
  title,
  description,
  buttonText,
  buttonVariant,
  buttonSize,
  buttonFullwidth,
  buttonPill,
  iconLeft,
  iconRight
}) => {
  const wrapper = document.createElement('div');
  wrapper.style.display = 'flex';
  wrapper.style.flexDirection = 'column';
  wrapper.style.gap = '16px';
  wrapper.style.width = '100%';
  wrapper.style.maxWidth = '500px';
  wrapper.style.margin = '0 auto';
  const card = document.createElement('labs-card');
  card.setAttribute('variant', 'welcome');
  if (align && align === 'center') {
    card.setAttribute('align', 'center');
  }
  const header = document.createElement('h2');
  header.setAttribute('slot', 'header');
  header.textContent = title;
  const desc = document.createElement('p');
  desc.textContent = description;
  const button = document.createElement('labs-button');
  button.setAttribute('slot', 'actions');
  button.setAttribute('variant', buttonVariant);
  if (buttonSize !== 'medium') button.setAttribute('size', buttonSize);
  if (buttonFullwidth) button.setAttribute('fullwidth', '');
  if (buttonPill) button.setAttribute('pill', '');

  // Add left icon if selected
  if (iconLeft && iconLeft !== 'none') {
    const leftIcon = document.createElement('labs-icon');
    leftIcon.setAttribute('slot', 'icon-left');
    leftIcon.setAttribute('name', iconLeft);
    button.appendChild(leftIcon);
  }

  // Add button text
  const textNode = document.createTextNode(buttonText);
  button.appendChild(textNode);

  // Add right icon if selected
  if (iconRight && iconRight !== 'none') {
    const rightIcon = document.createElement('labs-icon');
    rightIcon.setAttribute('slot', 'icon-right');
    rightIcon.setAttribute('name', iconRight);
    button.appendChild(rightIcon);
  }
  card.appendChild(header);
  card.appendChild(desc);
  card.appendChild(button);
  wrapper.appendChild(card);
  return wrapper;
}`,...i.parameters?.docs?.source}}};const I=["Default"];export{i as Default,I as __namedExportsOrder,E as default};
