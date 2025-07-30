import"./labs-icon-8279HnLw.js";const c=["add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"],o={title:"Icons",parameters:{docs:{page:null}}},n=()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(6, 1fr)",e.style.gap="24px",c.forEach(r=>{const t=document.createElement("div");t.style.textAlign="center";const i=document.createElement("labs-icon");i.setAttribute("name",r),i.setAttribute("style","width:32px; height:32px;");const l=document.createElement("div");l.textContent=r;const a=document.createElement("div");a.innerHTML=`<a href="./?path=/story/icons-default--default&args=name:${r}" target="_parent">View in story</a>`,t.appendChild(i),t.appendChild(l),t.appendChild(a),e.appendChild(t)}),e};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const grid = document.createElement('div');
  // 📝 Edit grid layout below
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(6, 1fr)'; // Number of columns
  grid.style.gap = '24px'; // Gap between icons

  iconNames.forEach(name => {
    const cell = document.createElement('div');
    cell.style.textAlign = 'center';
    const icon = document.createElement('labs-icon');
    icon.setAttribute('name', name);
    icon.setAttribute('style', 'width:32px; height:32px;');
    const label = document.createElement('div');
    label.textContent = name;
    const link = document.createElement('div');
    link.innerHTML = \`<a href="./?path=/story/icons-default--default&args=name:\${name}" target="_parent">View in story</a>\`;
    cell.appendChild(icon);
    cell.appendChild(label);
    cell.appendChild(link);
    grid.appendChild(cell);
  });
  return grid;
}`,...n.parameters?.docs?.source}}};const s=["GridPreview"];export{n as GridPreview,s as __namedExportsOrder,o as default};
