// tokens-typography.stories.js
// Storybook story for typography tokens

export default {
  title: "Tokens/Typography/Typography",
  parameters: {
    docs: {
      description: {
        component: "All typography tokens (font sizes, weights, line heights) used in the Labs Design System. See Docs for usage and best practices.",
      },
    },
  },
};

export const Typography = () => `
  <div style="font-size: var(--font-size-base); font-weight: var(--font-weight-bold);">
    Base font size (var(--font-size-base)), Bold (var(--font-weight-bold))
  </div>
  <div style="font-size: var(--font-size-lg);">Large font size (var(--font-size-lg))</div>
  <div style="font-size: var(--font-size-sm);">Small font size (var(--font-size-sm))</div>
  <div style="font-weight: var(--font-weight-regular);">Regular weight (var(--font-weight-regular))</div>
  <div style="line-height: var(--line-height-base);">Base line height (var(--line-height-base))</div>
`;
