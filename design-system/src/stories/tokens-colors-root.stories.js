// tokens-colors-root.stories.js
// Storybook story for global :root color tokens (main.css)

/**
 * @type { import('@storybook/web-components').Meta }
 */
export default {
  title: "Tokens/Colors/Root Colors",
  parameters: {
    docs: {
      description: {
        component: "All global :root color tokens from main.css. These are always available, regardless of theme/flavor. For full system details, see smoothie.md.",
      },
    },
  },
};

import "../styles/storybook-tokens.css";

/**
 * Root color tokens story
 */
export const RootColors = {
  render: () => {
    const tokens = [
      "color-overlay-background",
      "shadow-overlay",
      "color-success",
      "color-warning",
      "color-error-inactive",
      "color-on-success",
      "color-on-warning",
      "color-on-error-inactive",
      "color-hover-light",
      "color-hover-medium",
      "color-surface-container",
      "color-surface-container-high",
      "color-surface-variant",
      "color-on-surface-variant",
      "color-outline",
      "color-outline-variant"
    ];
    const container = document.createElement("div");
    container.className = "tokens-container";
    container.style.background = "#fff";

    const title = document.createElement("h2");
    title.textContent = ":root Color Tokens";
    title.className = "tokens-title";

    const subtitle = document.createElement("p");
    subtitle.textContent = "Global :root color tokens from main.css. Click any color to copy the token name.";
    subtitle.className = "tokens-subtitle";

    container.appendChild(title);
    container.appendChild(subtitle);

    // Flexbox container for cards
    const flexWrap = document.createElement("div");
    flexWrap.style.display = "flex";
    flexWrap.style.flexWrap = "wrap";
    flexWrap.style.gap = "1rem";
    flexWrap.style.margin = "0 -0.5rem";

    tokens.forEach((token) => {
      const card = document.createElement("div");
      card.className = "tokens-card";
      card.style.flex = "1 1 260px";
      card.style.maxWidth = "320px";
      card.style.minWidth = "220px";
      card.style.margin = "0.5rem";

      // Color swatch
      const swatch = document.createElement("div");
      swatch.className = "tokens-swatch";
      swatch.style.background = `var(--${token})`;

      // If it's a text color, show differently
      if (token.includes("on-")) {
        swatch.style.background = "var(--color-surface, #fff)";
        swatch.style.border = `2px solid var(--${token})`;
        const textDemo = document.createElement("div");
        textDemo.textContent = "Text Color";
        textDemo.style.color = `var(--${token})`;
        textDemo.style.fontWeight = "600";
        swatch.appendChild(textDemo);
      } else {
        swatch.style.border = "none";
      }

      // Token details
      const details = document.createElement("div");
      details.className = "tokens-details";

      const tokenName = document.createElement("div");
      tokenName.textContent = `--${token}`;
      tokenName.className = "tokens-token-name";

      // Get computed value
      const computedValue = getComputedStyle(document.documentElement)
        .getPropertyValue(`--${token}`)
        .trim();

      const value = document.createElement("div");
      value.textContent = computedValue;
      value.className = "tokens-value";

      const usage = document.createElement("div");
      usage.textContent = "Click to copy";
      usage.className = "tokens-usage";

      details.appendChild(tokenName);
      details.appendChild(value);
      details.appendChild(usage);

      card.appendChild(swatch);
      card.appendChild(details);

      // Add interaction
      card.addEventListener('mouseenter', () => {
        card.classList.add('tokens-card-hover');
      });
      card.addEventListener('mouseleave', () => {
        card.classList.remove('tokens-card-hover');
      });
      card.addEventListener('click', () => {
        navigator.clipboard.writeText(`var(--${token})`);
        card.style.background = 'var(--color-primary-25, #e0e7ef)';
        setTimeout(() => {
          card.style.background = '';
        }, 200);
      });

      flexWrap.appendChild(card);
    });

    container.appendChild(flexWrap);
    return container;
  },
  parameters: {
    docs: {
      description: {
        story: "All global :root color tokens with live preview. Click any color to copy the token name."
      }
    }
  }
};
