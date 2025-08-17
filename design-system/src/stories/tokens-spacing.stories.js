// tokens-spacing.stories.js
// Storybook story for spacing tokens

export default {
  title: "Tokens/Spacing/Spacing",
  parameters: {
    docs: {
      description: {
        component: "All spacing tokens (margin, padding, gap) used in the Labs Design System. See Docs for usage and best practices.",
      },
    },
  },
};

export const Spacing = () => `
  <div style="margin-bottom: var(--space-xs); background: #eee;">XS spacing (var(--space-xs))</div>
  <div style="margin-bottom: var(--space-sm); background: #eee;">SM spacing (var(--space-sm))</div>
  <div style="margin-bottom: var(--space-md); background: #eee;">MD spacing (var(--space-md))</div>
  <div style="margin-bottom: var(--space-lg); background: #eee;">LG spacing (var(--space-lg))</div>
`;
