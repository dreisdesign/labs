import"./labs-icon-Buz36-3-.js";import{i as s}from"./icons-list-B4ZMTb_A.js";const p={title:"Tokens/Icons",argTypes:{iconColor:{control:{type:"color"},name:"Icon Color",description:"Set the color of all icons in the grid"},iconSize:{control:{type:"range",min:16,max:64,step:8},name:"Icon Size",description:"Set the size of all icons in the grid"}}},n=({iconColor:a="#000000",iconSize:i=32})=>{const t=document.createElement("div");return t.style.display="grid",t.style.gridTemplateColumns="repeat(6, 1fr)",t.style.gap="24px",s.forEach(o=>{const e=document.createElement("div");e.style.display="flex",e.style.flexDirection="column",e.style.alignItems="center",e.style.justifyContent="center";const l=document.createElement("labs-icon");l.setAttribute("name",o),l.setAttribute("style",`width:${i}px; height:${i}px; color:${a};`);const r=document.createElement("div");r.textContent=o;const c=document.createElement("div");c.innerHTML=`<a href="./?path=/story/icons-default--default&args=name:${o}" target="_parent">View in story</a>`,e.appendChild(l),e.appendChild(r),e.appendChild(c),t.appendChild(e)}),t};n.args={iconColor:"#000000",iconSize:32};n.storyName="Preview All Icons";n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  iconColor = "#000000",
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
}`,...n.parameters?.docs?.source}}};const u=["IconGrid"];export{n as IconGrid,u as __namedExportsOrder,p as default};
