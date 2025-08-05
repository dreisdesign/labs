import "./styles/tokens/colors.css";

export default {
  title: "Tokens/Colors",
  parameters: {
    docs: {
      description: {
        component: "All color tokens used in the Labs Design System.",
      },
    },
  },
};

export const Colors = () => {
  const colorGroups = [
    {
      name: "Brand Colors",
      tokens: ["color-primary", "color-secondary", "color-primary-darker"],
    },
    {
      name: "Backgrounds & Surfaces",
      tokens: ["color-background", "color-surface"],
    },
    {
      name: "Semantic Colors",
      tokens: ["color-success", "color-error", "color-error-inactive"],
    },
    {
      name: "Text/Foreground",
      tokens: [
        "color-on-primary",
        "color-on-background",
        "color-on-surface",
        "color-on-error",
        "color-on-error-inactive",
      ],
    },
    {
      name: "Opacity/Variants",
      tokens: [
        "color-primary-75",
        "color-primary-25",
        "color-secondary-75",
        "color-on-surface-75",
      ],
    },
    {
      name: "UI/Other",
      tokens: ["settings-icon-color"],
    },
  ];

  // Smart contrast text color that adapts to theme changes
  function getSmartTextColor(token) {
    // For background/surface colors, use the corresponding "on-" color
    if (token.includes("background")) return "var(--color-on-background)";
    if (token.includes("surface")) return "var(--color-on-surface)";
    if (token.includes("primary") && !token.includes("on-")) return "var(--color-on-primary)";
    if (token.includes("error") && !token.includes("on-")) return "var(--color-on-error)";

    // For text colors, use a contrasting background approach
    if (token.includes("on-")) {
      return "var(--color-surface)"; // Use surface as background for text color demos
    }

    // Default fallback - use adaptive text color
    return "var(--color-on-surface)";
  }

  const container = document.createElement("div");

  colorGroups.forEach((group) => {
    const heading = document.createElement("h3");
    heading.textContent = group.name;
    heading.style.margin = "2rem 0 1rem 0";
    heading.style.fontSize = "1.1rem";
    heading.style.fontWeight = "bold";
    heading.style.color = "var(--color-on-background)";
    container.appendChild(heading);

    const grid = document.createElement("div");
    grid.style.display = "grid";
    grid.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))";
    grid.style.gap = "1rem";

    group.tokens.forEach((token) => {
      const swatch = document.createElement("div");
      const bgValue = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${token}`)
        .trim();

      swatch.style.background = `var(--${token})`;
      swatch.style.color = getSmartTextColor(token);
      swatch.style.padding = "1.5rem";
      swatch.style.borderRadius = "1rem";
      swatch.style.textAlign = "center";
      swatch.style.border = "1px solid var(--color-on-surface-25, rgba(0,0,0,0.1))";

      swatch.innerHTML = `<strong>--${token}</strong><br/><small>${bgValue}</small>`;
      grid.appendChild(swatch);
    });
    container.appendChild(grid);
  });
  return container;
};
