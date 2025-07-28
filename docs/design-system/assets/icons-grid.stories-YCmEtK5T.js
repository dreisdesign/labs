import"./labs-icon-CJPvnlt5.js";const a=["add_comment","bedtime","bedtime_off","cancel","change_circle","check","close","comment","delete_forever","edit","rate_review","settings","undo"],s={title:"Icons",parameters:{docs:{page:null}}},n=()=>{const e=document.createElement("div");return e.style.display="grid",e.style.gridTemplateColumns="repeat(6, 1fr)",e.style.gap="24px",a.forEach(l=>{const t=document.createElement("div");t.style.textAlign="center";const i=document.createElement("labs-icon");i.setAttribute("name",l),i.setAttribute("style","width:32px; height:32px;");const c=document.createElement("div");c.textContent=l;const o=document.createElement("div");o.innerHTML=`<a href="http://localhost:8080/design-system/storybook-static/?path=/story/icons-default--default&args=name:${l}">View in story</a>`,t.appendChild(i),t.appendChild(c),t.appendChild(o),e.appendChild(t)}),e};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
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
    link.innerHTML = \`<a href="http://localhost:8080/design-system/storybook-static/?path=/story/icons-default--default&args=name:\${name}">View in story</a>\`;
    cell.appendChild(icon);
    cell.appendChild(label);
    cell.appendChild(link);
    grid.appendChild(cell);
  });
  return grid;
}`,...n.parameters?.docs?.source}}};const d=["Preview"];export{n as Preview,d as __namedExportsOrder,s as default};
