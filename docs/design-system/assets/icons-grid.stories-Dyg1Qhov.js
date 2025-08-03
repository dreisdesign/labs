import "./labs-icon-8279HnLw.js";
const i = [
    "add_comment",
    "bedtime",
    "bedtime_off",
    "cancel",
    "change_circle",
    "check",
    "close",
    "comment",
    "delete_forever",
    "edit",
    "rate_review",
    "settings",
    "undo",
  ],
  d = { title: "Icons", parameters: { docs: { page: null } } },
  n = () => {
    const e = document.createElement("div");
    return (
      (e.style.display = "grid"),
      (e.style.gridTemplateColumns = "repeat(6, 1fr)"),
      (e.style.gap = "24px"),
      i.forEach((l) => {
        const t = document.createElement("div");
        t.style.textAlign = "center";
        const r = document.createElement("labs-icon");
        r.setAttribute("name", l),
          r.setAttribute("style", "width:32px; height:32px;");
        const a = document.createElement("div");
        a.textContent = l;
        const c = document.createElement("div");
        (c.innerHTML = `<a href="./?path=/story/icons-default--default&args=name:${l}" target="_parent">View in story</a>`),
          t.appendChild(r),
          t.appendChild(a),
          t.appendChild(c),
          e.appendChild(t);
      }),
      e
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
}`,
      ...n.parameters?.docs?.source,
    },
  },
};
const s = ["PreviewAllIcons"];
export { n as PreviewAllIcons, s as __namedExportsOrder, d as default };
