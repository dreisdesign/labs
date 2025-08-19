// Minimal placeholder story to satisfy Storybook CSF parsing.
export default {
  title: 'Tokens/Overview',
  parameters: { viewMode: 'docs' }
};

export const Overview = {
  name: 'Overview',
  render: () => `
		<div style="padding:20px; font-family:var(--font-family-base); color:var(--color-on-background); background:var(--color-surface);">
			<h1>Design Tokens — Overview</h1>
			<p style="margin-top:8px;">This page links to Colors, Typography, Spacing and Grid token stories for reference.</p>
			<ul style="margin-top:12px;">
				<li><a href="/iframe.html?id=tokens-colors--colors" target="_self">Tokens › Colors</a></li>
				<li><a href="/iframe.html?id=tokens-typography--typography" target="_self">Tokens › Typography</a></li>
				<li><a href="/iframe.html?id=tokens-spacing--spacing" target="_self">Tokens › Spacing</a></li>
				<li><a href="/iframe.html?id=tokens-grid--grid" target="_self">Tokens › Grid</a></li>
			</ul>
		</div>
	`
};
