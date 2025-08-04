import"./labs-icon-DLo6WOme.js";import{i as s}from"./icons-list-B4ZMTb_A.js";const m={title:"Icons/Preview",argTypes:{iconColor:{control:{type:"color"},name:"Icon Color",description:"Set the color of all icons in the grid"},iconSize:{control:{type:"range",min:16,max:64,step:8},name:"Icon Size",description:"Set the size of all icons in the grid"}}},t=({iconColor:a="var(--color-on-surface)",iconSize:i=32})=>{const n=document.createElement("div");return n.style.display="grid",n.style.gridTemplateColumns="repeat(6, 1fr)",n.style.gap="24px",s.forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.justifyContent="center";const l=document.createElement("labs-icon");l.setAttribute("name",o),l.setAttribute("style",`width:${i}px; height:${i}px; color:${a};`);const r=document.createElement("div");r.textContent=o;const c=document.createElement("div");c.innerHTML=`<a href="./?path=/story/icons-default--default&args=name:${o}" target="_parent">View in story</a>`,e.appendChild(l),e.appendChild(r),e.appendChild(c),n.appendChild(e)}),n};t.args={iconColor:"var(--color-on-surface)",iconSize:32};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`({
  iconColor = "var(--color-on-surface)",
  iconSize = 32
}) => {
  const grid = document.createElement("div");
  // 📝 Edit grid layout below
  grid.style.display = "grid";
  grid.style.gridTemplateColumns = "repeat(6, 1fr)"; // Number of columns
  grid.style.gap = "24px"; // Gap between icons

  iconNames.forEach(name => {
    const cell = document.createElement("div");
    cell.style.display = "flex";
    cell.style.flexDirection = "column";
    cell.style.alignItems = "center";
    cell.style.justifyContent = "center";
    const icon = document.createElement("labs-icon");
    icon.setAttribute("name", name);
    icon.setAttribute("style", \`width:\${iconSize}px; height:\${iconSize}px; color:\${iconColor};\`);
    const label = document.createElement("div");
    label.textContent = name;
    const link = document.createElement("div");
    link.innerHTML = \`<a href="./?path=/story/icons-default--default&args=name:\${name}" target="_parent">View in story</a>\`;
    cell.appendChild(icon);
    cell.appendChild(label);
    cell.appendChild(link);
    grid.appendChild(cell);
  });
  return grid;
}`,...t.parameters?.docs?.source}}};const u=["Grid"];export{t as Grid,u as __namedExportsOrder,m as default};
