import"./iframe-DVmFY04n.js";import"./preload-helper-PPVm8Dsz.js";const x={title:"0. Tokens/Typography",parameters:{viewMode:"docs"}},o={name:"Typography",render(){const t=getComputedStyle(document.documentElement).getPropertyValue("--font-size-metric-display"),l=getComputedStyle(document.documentElement).getPropertyValue("--font-size-metric-label"),c=getComputedStyle(document.documentElement).getPropertyValue("--font-weight-metric"),e=getComputedStyle(document.documentElement).getPropertyValue("--line-height-metric"),d=getComputedStyle(document.documentElement).getPropertyValue("--font-size-h1"),n=getComputedStyle(document.documentElement).getPropertyValue("--font-weight-heading");let r=getComputedStyle(document.documentElement).getPropertyValue("--line-height-heading").trim();r||(r="1.2");const a=getComputedStyle(document.documentElement).getPropertyValue("--font-size-h2"),i=getComputedStyle(document.documentElement).getPropertyValue("--font-size-h3");return`
      <div style="padding:20px; font-family:var(--font-family-base); color:var(--color-on-background); background:var(--color-surface);">
        <h1>Typography tokens</h1>
        <div style="margin-bottom:32px;">
          <table style="border-collapse:collapse; width:100%; font-size:0.98em; background:var(--color-surface-variant, var(--color-surface, #f8f8f8));">
            <thead>
              <tr style="background:var(--color-surface-container, var(--color-surface, #eee));">
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Token Name</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Font Size</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Weight</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Line Height</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Usage/Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-metric-display</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${t.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${c.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${e.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-metric-display); font-weight:var(--font-weight-metric); line-height:var(--line-height-metric);">Metric display</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-metric-label</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${l.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${c.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${e.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-metric-label); font-weight:var(--font-weight-metric);">Metric label</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h1</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${d.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${n.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${r}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h1); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H1 / Heading</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h2</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${a.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">700</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.25</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h2); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H2 / Subheading</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h3</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">${i.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h3); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H3 / Section heading</span></td>
              </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-display</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">4rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">800</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.1</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-display); font-weight:var(--font-weight-heading);">Display</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-large</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.25rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-large); font-weight:600;">Large text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-base</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-base); font-weight:400; line-height:1.5;">Base text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-body-xs</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">12px</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-body-xs); line-height:1.3;">Extra small body</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-entry-text</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-entry-text);">Entry text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-entry-meta</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">12px</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-entry-meta);">Entry meta</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-button</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-button); font-weight:var(--font-weight-button); line-height:var(--line-height-button);">Button text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-card-header</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.125rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-card-header); font-weight:var(--font-weight-card-header); line-height:var(--line-height-card-header);">Card header</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-card-desc</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-card-desc); line-height:var(--line-height-card-desc);">Card description</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-toast</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.95rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-toast);">Toast message</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-badge</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.75rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">500</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-badge); font-weight:500;">Badge text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-input</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-input);">Input text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-footer</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.9rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-footer);">Footer text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-overlay</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-overlay); line-height:var(--line-height-overlay);">Overlay text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-small</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.875rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-small);">Small text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-tiny</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.6rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-tiny);">Tiny text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-label</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.875rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-label); font-weight:600; line-height:1.2;">Label</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-caption</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.75rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-caption); line-height:1.2;">Caption / Tooltip</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    `}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Typography',
  render() {
    // Get computed values for key tokens
    const metricDisplaySize = getComputedStyle(document.documentElement).getPropertyValue('--font-size-metric-display');
    const metricLabelSize = getComputedStyle(document.documentElement).getPropertyValue('--font-size-metric-label');
    const metricWeight = getComputedStyle(document.documentElement).getPropertyValue('--font-weight-metric');
    const metricLineHeight = getComputedStyle(document.documentElement).getPropertyValue('--line-height-metric');
    const h1Size = getComputedStyle(document.documentElement).getPropertyValue('--font-size-h1');
    const h1Weight = getComputedStyle(document.documentElement).getPropertyValue('--font-weight-heading');
    let h1LineHeight = getComputedStyle(document.documentElement).getPropertyValue('--line-height-heading').trim();
    if (!h1LineHeight) h1LineHeight = '1.2';
    const h2Size = getComputedStyle(document.documentElement).getPropertyValue('--font-size-h2');
    const h3Size = getComputedStyle(document.documentElement).getPropertyValue('--font-size-h3');
    return \`
      <div style="padding:20px; font-family:var(--font-family-base); color:var(--color-on-background); background:var(--color-surface);">
        <h1>Typography tokens</h1>
        <div style="margin-bottom:32px;">
          <table style="border-collapse:collapse; width:100%; font-size:0.98em; background:var(--color-surface-variant, var(--color-surface, #f8f8f8));">
            <thead>
              <tr style="background:var(--color-surface-container, var(--color-surface, #eee));">
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Token Name</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Font Size</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Weight</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Line Height</th>
                <th style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; text-align:left; color:var(--color-on-surface);">Usage/Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-metric-display</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricDisplaySize.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricWeight.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricLineHeight.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-metric-display); font-weight:var(--font-weight-metric); line-height:var(--line-height-metric);">Metric display</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-metric-label</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricLabelSize.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricWeight.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${metricLineHeight.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-metric-label); font-weight:var(--font-weight-metric);">Metric label</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h1</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${h1Size.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${h1Weight.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${h1LineHeight}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h1); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H1 / Heading</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h2</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${h2Size.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">700</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.25</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h2); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H2 / Subheading</span></td>
              </tr>
              <tr>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-h3</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">\${h3Size.trim()}</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
                <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-h3); font-weight:var(--font-weight-heading); line-height:var(--line-height-heading);">H3 / Section heading</span></td>
              </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-display</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">4rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">800</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.1</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-display); font-weight:var(--font-weight-heading);">Display</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-large</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.25rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-large); font-weight:600;">Large text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-base</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-base); font-weight:400; line-height:1.5;">Base text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-body-xs</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">12px</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-body-xs); line-height:1.3;">Extra small body</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-entry-text</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-entry-text);">Entry text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-entry-meta</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">12px</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-entry-meta);">Entry meta</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-button</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-button); font-weight:var(--font-weight-button); line-height:var(--line-height-button);">Button text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-card-header</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.125rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-card-header); font-weight:var(--font-weight-card-header); line-height:var(--line-height-card-header);">Card header</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-card-desc</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-card-desc); line-height:var(--line-height-card-desc);">Card description</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-toast</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.95rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.3</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-toast);">Toast message</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-badge</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.75rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">500</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-badge); font-weight:500;">Badge text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-input</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-input);">Input text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-footer</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.9rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.4</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-footer);">Footer text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-overlay</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-overlay); line-height:var(--line-height-overlay);">Overlay text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-small</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.875rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-small);">Small text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-tiny</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.6rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.5</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-tiny);">Tiny text</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-label</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.875rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">600</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-label); font-weight:600; line-height:1.2;">Label</span></td>
            </tr>
            <tr>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">--font-size-caption</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">0.75rem</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">400</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);">1.2</td>
              <td style="border:1px solid var(--color-outline, #ccc); padding:6px 10px; color:var(--color-on-surface);"><span style="font-size:var(--font-size-caption); line-height:1.2;">Caption / Tooltip</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    \`;
  }
}`,...o.parameters?.docs?.source}}};const u=["Typography"];export{o as Typography,u as __namedExportsOrder,x as default};
