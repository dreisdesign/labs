import '../styles/main.css';

export default {
  title: 'Tokens/Typography',
  parameters: { viewMode: 'docs' }
};

export const Typography = {
  name: 'Typography',
  render: () => `
    <div style="padding:20px; font-family:var(--font-family-base); color:var(--color-on-background); background:var(--color-surface);">
      <h1>Typography tokens</h1>
      <div style="margin-top:12px;">
        <div style="font-weight:700;">Base — var(--font-family-base)</div>
        <div style="margin-top:8px;">Example text — The quick brown fox jumps over the lazy dog</div>
        <div style="margin-top:12px;">--font-size-base: <code>var(--font-size-base)</code></div>
      </div>
    </div>
  `
};
