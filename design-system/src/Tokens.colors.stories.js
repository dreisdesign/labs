import "./styles/tokens/colors.css";

/**
 * @type { import('@storybook/web-components').Meta }
 */
export default {
  title: "Tokens/Colors",
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "All color tokens used in the Labs Design System.",
      },
    },
  },
};


/**
 * Color tokens story
 */
export const Colors = {
  render: () => {
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
      {
        name: "Hover States",
        tokens: ["color-hover-light", "color-hover-medium"],
      },
    ];

    const container = document.createElement("div");
    container.style.cssText = `
      padding: 2rem;
      background: var(--color-background);
    `;

    const title = document.createElement("h2");
    title.textContent = "Color Tokens";
    title.style.cssText = `
      margin: 0 0 0.5rem 0;
      color: var(--color-on-background);
      font-size: 1.5rem;
    `;

    const subtitle = document.createElement("p");
    subtitle.textContent = "Design system color tokens with CSS custom properties. Click any color to copy the token name.";
    subtitle.style.cssText = `
      margin: 0 0 2rem 0;
      color: var(--color-on-background);
      opacity: 0.7;
    `;

    container.appendChild(title);
    container.appendChild(subtitle);

    colorGroups.forEach((group) => {
      const section = document.createElement("div");
      section.style.cssText = `
        margin-bottom: 3rem;
      `;

      const heading = document.createElement("h3");
      heading.textContent = group.name;
      heading.style.cssText = `
        margin: 0 0 1rem 0;
        font-size: 1.1rem;
        font-weight: 600;
        color: var(--color-on-background);
      `;

      const grid = document.createElement("div");
      grid.style.cssText = `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1rem;
      `;

      if (group && Array.isArray(group.tokens)) {
        group.tokens.forEach((token) => {
          const card = document.createElement("div");
          card.style.cssText = `
          background: var(--color-surface);
          border: 1px solid var(--color-primary-25);
          border-radius: 8px;
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        `;

          // Color swatch
          const swatch = document.createElement("div");
          swatch.style.cssText = `
          height: 80px;
          background: var(--${token});
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        `;

          // Check if it's a text color - show it differently
          if (token.includes("on-")) {
            swatch.style.cssText += `
            background: var(--color-surface);
            border: 2px solid var(--${token});
          `;

            const textDemo = document.createElement("div");
            textDemo.textContent = "Text Color";
            textDemo.style.cssText = `
            color: var(--${token});
            font-weight: 600;
          `;
            swatch.appendChild(textDemo);
          }

          // Token details
          const details = document.createElement("div");
          details.style.cssText = `
          padding: 1rem;
        `;

          const tokenName = document.createElement("div");
          tokenName.textContent = `--${token}`;
          tokenName.style.cssText = `
          font-family: monospace;
          font-weight: 600;
          color: var(--color-on-surface);
          margin-bottom: 0.5rem;
        `;

          // Get computed value
          const computedValue = getComputedStyle(document.documentElement)
            .getPropertyValue(`--${token}`)
            .trim();

          const value = document.createElement("div");
          value.textContent = computedValue;
          value.style.cssText = `
          font-family: monospace;
          font-size: 0.875rem;
          color: var(--color-on-surface);
          opacity: 0.7;
        `;

          const usage = document.createElement("div");
          usage.textContent = "Click to copy";
          usage.style.cssText = `
          font-size: 0.75rem;
          color: var(--color-on-surface);
          opacity: 0.5;
          margin-top: 0.5rem;
        `;

          details.appendChild(tokenName);
          details.appendChild(value);
          details.appendChild(usage);

          card.appendChild(swatch);
          card.appendChild(details);

          // Add interaction
          card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-2px)';
            card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          });

          card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
          });

          card.addEventListener('click', () => {
            navigator.clipboard.writeText(`var(--${token})`);
            card.style.background = 'var(--color-primary-25)';
            setTimeout(() => {
              card.style.background = 'var(--color-surface)';
            }, 200);
          });

          grid.appendChild(card);
        });
      }

      section.appendChild(heading);
      section.appendChild(grid);
      container.appendChild(section);
    });

    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "All color tokens with live preview. Click any color to copy the token name."
      }
    }
  }
};
