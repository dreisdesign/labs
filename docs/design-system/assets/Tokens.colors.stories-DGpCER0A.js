const m={title:"Tokens/Colors",parameters:{docs:{description:{component:"All color tokens used in the Labs Design System."}}}},s=()=>{const l=[{name:"Brand Colors",tokens:["color-primary","color-secondary","color-primary-darker"]},{name:"Backgrounds & Surfaces",tokens:["color-background","color-surface"]},{name:"Semantic Colors",tokens:["color-success","color-error","color-error-inactive"]},{name:"Text/Foreground",tokens:["color-on-primary","color-on-background","color-on-surface","color-on-error","color-on-error-inactive"]},{name:"Opacity/Variants",tokens:["color-primary-75","color-primary-25","color-secondary-75","color-on-surface-75"]},{name:"UI/Other",tokens:["settings-icon-color"]}];function i(n){if(n=n.trim(),n.startsWith("#")&&(n=n.slice(1)),n.startsWith("rgb")){const r=n.match(/\d+/g).map(Number);return .299*r[0]+.587*r[1]+.114*r[2]>186?"#222":"#fff"}if(n.length===3&&(n=n.split("").map(r=>r+r).join("")),n.length===6){const r=parseInt(n.substr(0,2),16),e=parseInt(n.substr(2,2),16),t=parseInt(n.substr(4,2),16);return .299*r+.587*e+.114*t>186?"#222":"#fff"}return"#222"}const a=document.createElement("div");return l.forEach(n=>{const r=document.createElement("h3");r.textContent=n.name,r.style.margin="2rem 0 1rem 0",r.style.fontSize="1.1rem",r.style.fontWeight="bold",a.appendChild(r);const e=document.createElement("div");e.style.display="grid",e.style.gridTemplateColumns="repeat(auto-fit, minmax(180px, 1fr))",e.style.gap="1rem",n.tokens.forEach(t=>{const o=document.createElement("div"),c=getComputedStyle(document.documentElement).getPropertyValue(`--${t}`).trim();o.style.background=`var(--${t})`,o.style.color=i(c),o.style.padding="1.5rem",o.style.borderRadius="1rem",o.style.textAlign="center",o.innerHTML=`<strong>--${t}</strong><br/>${c}`,e.appendChild(o)}),a.appendChild(e)}),a};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const colorGroups = [{
    name: "Brand Colors",
    tokens: ["color-primary", "color-secondary", "color-primary-darker"]
  }, {
    name: "Backgrounds & Surfaces",
    tokens: ["color-background", "color-surface"]
  }, {
    name: "Semantic Colors",
    tokens: ["color-success", "color-error", "color-error-inactive"]
  }, {
    name: "Text/Foreground",
    tokens: ["color-on-primary", "color-on-background", "color-on-surface", "color-on-error", "color-on-error-inactive"]
  }, {
    name: "Opacity/Variants",
    tokens: ["color-primary-75", "color-primary-25", "color-secondary-75", "color-on-surface-75"]
  }, {
    name: "UI/Other",
    tokens: ["settings-icon-color"]
  }];
  function getContrastTextColor(bgColor) {
    bgColor = bgColor.trim();
    if (bgColor.startsWith("#")) bgColor = bgColor.slice(1);
    if (bgColor.startsWith("rgb")) {
      const rgb = bgColor.match(/\\d+/g).map(Number);
      const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luminance > 186 ? "#222" : "#fff";
    }
    if (bgColor.length === 3) {
      bgColor = bgColor.split("").map(x => x + x).join("");
    }
    if (bgColor.length === 6) {
      const r = parseInt(bgColor.substr(0, 2), 16);
      const g = parseInt(bgColor.substr(2, 2), 16);
      const b = parseInt(bgColor.substr(4, 2), 16);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 186 ? "#222" : "#fff";
    }
    return "#222";
  }
  const container = document.createElement("div");
  colorGroups.forEach(group => {
    const heading = document.createElement("h3");
    heading.textContent = group.name;
    heading.style.margin = "2rem 0 1rem 0";
    heading.style.fontSize = "1.1rem";
    heading.style.fontWeight = "bold";
    container.appendChild(heading);
    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))";
    grid.style.gap = "1rem";
    group.tokens.forEach(token => {
      const swatch = document.createElement("div");
      const bgValue = getComputedStyle(document.documentElement).getPropertyValue(\`--\${token}\`).trim();
      swatch.style.background = \`var(--\${token})\`;
      swatch.style.color = getContrastTextColor(bgValue);
      swatch.style.padding = "1.5rem";
      swatch.style.borderRadius = "1rem";
      swatch.style.textAlign = "center";
      swatch.innerHTML = \`<strong>--\${token}</strong><br/>\${bgValue}\`;
      grid.appendChild(swatch);
    });
    container.appendChild(grid);
  });
  return container;
}`,...s.parameters?.docs?.source}}};const d=["Colors"];export{s as Colors,d as __namedExportsOrder,m as default};
