// tokens-colors.stories.js
// Storybook story for semantic/theme color tokens

export default {
  title: "Tokens/Colors/Colors",
  parameters: {
    docs: {
      description: {
        component: "All semantic and theme-aware color tokens (e.g., --color-primary, --color-accent) used in the Labs Design System. See Docs for usage and best practices.",
      },
    },
  },
};

export const Colors = () => `
  <div style="background: var(--color-primary); color: #fff; padding: 1rem;">Primary (var(--color-primary))</div>
  <div style="background: var(--color-accent); color: #fff; padding: 1rem;">Accent (var(--color-accent))</div>
  <div style="background: var(--color-bg); color: #333; padding: 1rem;">Background (var(--color-bg))</div>
  <div style="background: var(--color-surface-container); color: #333; padding: 1rem;">Surface Container (var(--color-surface-container))</div>
`;
