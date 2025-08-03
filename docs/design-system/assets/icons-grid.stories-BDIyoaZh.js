import "./labs-icon-Du3np7tU.js";
import { i as c } from "./icons-list-B4ZMTb_A.js";
const d = { title: "Icons/Preview" },
  n = () => {
    const t = document.createElement("div");
    return (
      (t.style.display = "grid"),
      (t.style.gridTemplateColumns = "repeat(6, 1fr)"),
      (t.style.gap = "24px"),
      c.forEach((l) => {
        const e = document.createElement("div");
        (e.style.display = "flex"),
          (e.style.flexDirection = "column"),
          (e.style.alignItems = "center"),
          (e.style.justifyContent = "center");
        const i = document.createElement("labs-icon");
        i.setAttribute("name", l),
          i.setAttribute("style", "width:32px; height:32px;");
        const r = document.createElement("div");
        r.textContent = l;
        const a = document.createElement("div");
        (a.innerHTML = `<a href="./?path=/story/icons-default--default&args=name:${l}" target="_parent">View in story</a>`),
          e.appendChild(i),
          e.appendChild(r),
          e.appendChild(a),
          t.appendChild(e);
      }),
      t
    );
  };
n.parameters = {
  ...n.parameters,
  docs: {
    ...n.parameters?.docs,
    source: {
      originalSource: `() => {
  const grid = document.createElement('div');
  // 📝 Edit grid layout below
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = 'repeat(6, 1fr)'; // Number of columns
  grid.style.gap = '24px'; // Gap between icons

  iconNames.forEach(name => {
    const cell = document.createElement('div');
    cell.style.display = 'flex';
    cell.style.flexDirection = 'column';
    cell.style.alignItems = 'center';
    cell.style.justifyContent = 'center';
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
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
const m = ["Grid"];
export { n as Grid, m as __namedExportsOrder, d as default };
