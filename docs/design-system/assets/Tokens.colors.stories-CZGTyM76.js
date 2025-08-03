const i = {
    title: "Tokens/Colors",
    parameters: {
      docs: {
        description: {
          component: "All color tokens used in the Labs Design System.",
        },
      },
    },
  },
  o = () => {
    const s = [
        "color-primary",
        "color-secondary",
        "color-background",
        "color-surface",
        "color-success",
        "color-error",
        "color-on-primary",
        "color-on-background",
        "color-on-surface",
      ],
      t = document.createElement("div");
    (t.style.display = "grid"),
      (t.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))"),
      (t.style.gap = "1rem");
    function c(n) {
      if (
        ((n = n.trim()),
        n.startsWith("#") && (n = n.slice(1)),
        n.startsWith("rgb"))
      ) {
        const r = n.match(/\d+/g).map(Number);
        return 0.299 * r[0] + 0.587 * r[1] + 0.114 * r[2] > 186
          ? "#222"
          : "#fff";
      }
      if (
        (n.length === 3 &&
          (n = n
            .split("")
            .map((r) => r + r)
            .join("")),
        n.length === 6)
      ) {
        const r = parseInt(n.substr(0, 2), 16),
          e = parseInt(n.substr(2, 2), 16),
          a = parseInt(n.substr(4, 2), 16);
        return 0.299 * r + 0.587 * e + 0.114 * a > 186 ? "#222" : "#fff";
      }
      return "#222";
    }
    return (
      s.forEach((n) => {
        const r = document.createElement("div"),
          e = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${n}`)
            .trim();
        (r.style.background = `var(--${n})`),
          (r.style.color = c(e)),
          (r.style.padding = "1.5rem"),
          (r.style.borderRadius = "1rem"),
          (r.style.textAlign = "center"),
          (r.innerHTML = `<strong>--${n}</strong><br/>${e}`),
          t.appendChild(r);
      }),
      t
    );
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource: `() => {
  const colors = ['color-primary', 'color-secondary', 'color-background', 'color-surface', 'color-success', 'color-error', 'color-on-primary', 'color-on-background', 'color-on-surface'];
  const container = document.createElement('div');
  container.style.display = 'grid';
  container.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
  container.style.gap = '1rem';
  function getContrastTextColor(bgColor) {
    bgColor = bgColor.trim();
    if (bgColor.startsWith('#')) bgColor = bgColor.slice(1);
    if (bgColor.startsWith('rgb')) {
      const rgb = bgColor.match(/\\d+/g).map(Number);
      const luminance = 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2];
      return luminance > 186 ? '#222' : '#fff';
    }
    if (bgColor.length === 3) {
      bgColor = bgColor.split('').map(x => x + x).join('');
    }
    if (bgColor.length === 6) {
      const r = parseInt(bgColor.substr(0, 2), 16);
      const g = parseInt(bgColor.substr(2, 2), 16);
      const b = parseInt(bgColor.substr(4, 2), 16);
      const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
      return luminance > 186 ? '#222' : '#fff';
    }
    return '#222';
  }
  colors.forEach(token => {
    const swatch = document.createElement('div');
    const bgValue = getComputedStyle(document.documentElement).getPropertyValue(\`--\${token}\`).trim();
    swatch.style.background = \`var(--\${token})\`;
    swatch.style.color = getContrastTextColor(bgValue);
    swatch.style.padding = '1.5rem';
    swatch.style.borderRadius = '1rem';
    swatch.style.textAlign = 'center';
    swatch.innerHTML = \`<strong>--\${token}</strong><br/>\${bgValue}\`;
    container.appendChild(swatch);
  });
  return container;
}`,
      ...o.parameters?.docs?.source,
    },
  },
};
const u = ["Colors"];
export { o as Colors, u as __namedExportsOrder, i as default };
