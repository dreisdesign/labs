const a = {
    title: "Tokens/Typography",
    parameters: {
      docs: {
        description: {
          component: "All typography tokens used in the Labs Design System.",
        },
      },
    },
  },
  o = () => {
    const s = [
        "font-family-base",
        "font-size-base",
        "font-size-lg",
        "font-size-sm",
        "font-weight-regular",
        "font-weight-bold",
      ],
      t = document.createElement("div");
    return (
      (t.style.display = "flex"),
      (t.style.flexDirection = "column"),
      (t.style.gap = "1rem"),
      s.forEach((e) => {
        const n = document.createElement("div");
        (n.style.fontFamily =
          e === "font-family-base" ? `var(--${e})` : "inherit"),
          (n.style.fontSize = e.startsWith("font-size")
            ? `var(--${e})`
            : "1rem"),
          (n.style.fontWeight = e.startsWith("font-weight")
            ? `var(--${e})`
            : "400"),
          (n.innerHTML = `<strong>--${e}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${e}`)}</span>`),
          t.appendChild(n);
      }),
      t
    );
  };
o.parameters = {
  ...o.parameters,
  docs: {
    ...o.parameters?.docs,
    source: {
      originalSource:
        "() => {\n  const tokens = ['font-family-base', 'font-size-base', 'font-size-lg', 'font-size-sm', 'font-weight-regular', 'font-weight-bold'];\n  const container = document.createElement('div');\n  container.style.display = 'flex';\n  container.style.flexDirection = 'column';\n  container.style.gap = '1rem';\n  tokens.forEach(token => {\n    const item = document.createElement('div');\n    item.style.fontFamily = token === 'font-family-base' ? `var(--${token})` : 'inherit';\n    item.style.fontSize = token.startsWith('font-size') ? `var(--${token})` : '1rem';\n    item.style.fontWeight = token.startsWith('font-weight') ? `var(--${token})` : '400';\n    item.innerHTML = `<strong>--${token}</strong>: <span style='font-family:var(--font-family-base);'>${getComputedStyle(document.documentElement).getPropertyValue(`--${token}`)}</span>`;\n    container.appendChild(item);\n  });\n  return container;\n}",
      ...o.parameters?.docs?.source,
    },
  },
};
const r = ["Typography"];
export { o as Typography, r as __namedExportsOrder, a as default };
