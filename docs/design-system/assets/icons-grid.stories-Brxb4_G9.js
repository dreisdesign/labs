import"./labs-icon-Du3np7tU.js";const c=["add","add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"],o={title:"Icons/Preview",parameters:{docs:{page:null}}},n=()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(6, 1fr)",e.style.gap="24px",c.forEach(r=>{const t=document.createElement("div");t.style.textAlign="center";const a=document.createElement("labs-icon");a.setAttribute("name",r),a.setAttribute("style","width:32px; height:32px;");const l=document.createElement("div");l.textContent=r;const i=document.createElement("div");i.innerHTML=`<a href="./?path=/story/icons-default--default&args=name:${r}" target="_parent">View in story</a>`,t.appendChild(a),t.appendChild(l),t.appendChild(i),e.appendChild(t)}),e};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
}`,...n.parameters?.docs?.source}}};const s=["Grid"];export{n as Grid,s as __namedExportsOrder,o as default};
