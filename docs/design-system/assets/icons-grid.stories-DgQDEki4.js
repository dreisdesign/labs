import"./labs-icon-D-jGsLwe.js";import{i as d}from"./icons-list-v0UG69qs.js";const x={title:"Icons/Preview",argTypes:{iconColor:{control:{type:"color"},name:"Icon Color",description:"Set the color of all icons in the grid"},iconSize:{control:{type:"range",min:16,max:64,step:8},name:"Icon Size",description:"Set the size of all icons in the grid"}}},n=({iconColor:m="var(--color-on-surface)",iconSize:i=40})=>{const t=document.createElement("div");t.style.cssText=`
    padding: 2rem;
    background: var(--color-background);
  `;const r=document.createElement("h3");r.textContent=`All Icons (${d.length} total)`,r.style.cssText=`
    margin: 0 0 2rem 0;
    color: var(--color-on-background);
    font-size: 1.25rem;
  `;const c=document.createElement("div");return c.style.cssText=`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
  `,d.forEach(o=>{const e=document.createElement("div");e.style.cssText=`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 1rem;
      background: var(--color-surface);
      border-radius: 8px;
      border: 1px solid var(--color-primary-25);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
    `;const a=document.createElement("labs-icon");a.setAttribute("name",o),a.style.cssText=`
      width: ${i}px;
      height: ${i}px;
      color: ${m};
    `;const l=document.createElement("div");l.textContent=o,l.style.cssText=`
      color: var(--color-on-surface);
      font-size: 0.75rem;
      text-align: center;
      font-weight: 500;
    `;const s=document.createElement("div");s.textContent=`<labs-icon name="${o}">`,s.style.cssText=`
      color: var(--color-on-surface-75);
      font-size: 0.625rem;
      font-family: monospace;
      text-align: center;
      opacity: 0.7;
    `,e.addEventListener("mouseenter",()=>{e.style.transform="translateY(-2px)",e.style.boxShadow="0 4px 12px rgba(0,0,0,0.1)"}),e.addEventListener("mouseleave",()=>{e.style.transform="translateY(0)",e.style.boxShadow="none"}),e.addEventListener("click",()=>{navigator.clipboard.writeText(`<labs-icon name="${o}"></labs-icon>`),e.style.background="var(--color-primary-25)",setTimeout(()=>{e.style.background="var(--color-surface)"},200)}),e.appendChild(a),e.appendChild(l),e.appendChild(s),c.appendChild(e)}),t.appendChild(r),t.appendChild(c),t};n.args={iconColor:"var(--color-on-surface)",iconSize:40};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`({
  iconColor = "var(--color-on-surface)",
  iconSize = 40 // Increased default size
}) => {
  const container = document.createElement("div");
  container.style.cssText = \`
    padding: 2rem;
    background: var(--color-background);
  \`;
  const title = document.createElement("h3");
  title.textContent = \`All Icons (\${iconNames.length} total)\`;
  title.style.cssText = \`
    margin: 0 0 2rem 0;
    color: var(--color-on-background);
    font-size: 1.25rem;
  \`;
  const grid = document.createElement("div");
  grid.style.cssText = \`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
  \`;
  iconNames.forEach(name => {
    const cell = document.createElement("div");
    cell.style.cssText = \`
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
      padding: 1.5rem 1rem;
      background: var(--color-surface);
      border-radius: 8px;
      border: 1px solid var(--color-primary-25);
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
    \`;
    const icon = document.createElement("labs-icon");
    icon.setAttribute("name", name);
    icon.style.cssText = \`
      width: \${iconSize}px;
      height: \${iconSize}px;
      color: \${iconColor};
    \`;
    const label = document.createElement("div");
    label.textContent = name;
    label.style.cssText = \`
      color: var(--color-on-surface);
      font-size: 0.75rem;
      text-align: center;
      font-weight: 500;
    \`;
    const code = document.createElement("div");
    code.textContent = \`<labs-icon name="\${name}">\`;
    code.style.cssText = \`
      color: var(--color-on-surface-75);
      font-size: 0.625rem;
      font-family: monospace;
      text-align: center;
      opacity: 0.7;
    \`;

    // Add hover effect
    cell.addEventListener('mouseenter', () => {
      cell.style.transform = 'translateY(-2px)';
      cell.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
    });
    cell.addEventListener('mouseleave', () => {
      cell.style.transform = 'translateY(0)';
      cell.style.boxShadow = 'none';
    });

    // Add click to copy
    cell.addEventListener('click', () => {
      navigator.clipboard.writeText(\`<labs-icon name="\${name}"></labs-icon>\`);
      cell.style.background = 'var(--color-primary-25)';
      setTimeout(() => {
        cell.style.background = 'var(--color-surface)';
      }, 200);
    });
    cell.appendChild(icon);
    cell.appendChild(label);
    cell.appendChild(code);
    grid.appendChild(cell);
  });
  container.appendChild(title);
  container.appendChild(grid);
  return container;
}`,...n.parameters?.docs?.source}}};const g=["Grid"];export{n as Grid,g as __namedExportsOrder,x as default};
