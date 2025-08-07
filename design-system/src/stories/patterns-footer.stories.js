import "../components/labs-button.js";
import "../components/labs-footer.js";
import "../styles/tokens/spacing.css";
import "../styles/tokens/typography.css";

export default {
  title: "Patterns",
  parameters: {
    docs: {
      description: {
        component: "Common UI patterns and page layouts using the Labs Design System components.",
      },
    },
  },
};

export const Footer = () => {
  const container = document.createElement("div");
  container.style.cssText = `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: var(--font-family-base, system-ui, -apple-system, sans-serif);
    background: var(--color-background, #f9fafb);
    color: var(--color-on-background);
  `;

  container.innerHTML = `
    <!-- Main content area -->
    <div style="flex: 1; padding: var(--space-lg, 2rem); display: flex; align-items: center; justify-content: center;">
      <div style="text-align: center; max-width: 600px;">
        <h1 style="margin: 0 0 var(--space-md, 1rem) 0; font-size: var(--font-size-h1, 1.75rem); font-weight: var(--font-weight-bold, 700); color: var(--color-on-background);">
          Basic Footer Pattern
        </h1>
        <p style="margin: 0 0 var(--space-lg, 2rem) 0; font-size: var(--font-size-large, 1.125rem); color: var(--color-on-background); opacity: 0.8;">
          This shows the basic labs-footer component without settings overlay. For a complete footer with settings, see "Footer with Settings" pattern.
        </p>
      </div>
    </div>

    <!-- Basic Footer Component (no settings overlay) -->
    <labs-footer add-label="+ Add" settings-hidden></labs-footer>
  `;

  // Add event listeners to demonstrate functionality
  const footer = container.querySelector('labs-footer');
  if (footer) {
    footer.addEventListener('add-click', () => {
      alert('Add button clicked from basic footer!');
    });

    // Note: No settings-click handler since settings button is hidden
  }

  return container;
};
