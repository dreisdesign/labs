import '../tokens/button.css';

export default {
    title: 'Tokens/Colors',
};

export const AllColorTokens = {
    name: 'All Color Tokens',
    render: () => {
        const tokens = [
            '--button-color-primary',
            '--button-color-secondary',
            '--button-color-success',
            '--button-color-error',
            '--button-color-outline',
            '--button-color-ghost-bg',
            '--button-color-disabled',
            '--button-color-on-primary',
            '--button-color-on-secondary',
            '--button-color-on-success',
            '--button-color-on-error',
            '--button-color-on-disabled',
            '--button-color-focus',
            '--button-color-loading',
        ];
        const table = document.createElement('table');
        table.style.width = '100%';
        table.style.borderCollapse = 'collapse';
        table.innerHTML = `<thead><tr><th style='text-align:left;padding:8px;border-bottom:2px solid #eee;'>Token</th><th style='text-align:left;padding:8px;border-bottom:2px solid #eee;'>Value</th><th style='text-align:left;padding:8px;border-bottom:2px solid #eee;'>Swatch</th></tr></thead><tbody></tbody>`;
        const tbody = table.querySelector('tbody');
        tokens.forEach(token => {
            const value = getComputedStyle(document.documentElement).getPropertyValue(token).trim();
            const row = document.createElement('tr');
            const swatch = `<div style='width:40px;height:24px;background:${value};border:1px solid #ccc;border-radius:4px;'></div>`;
            row.innerHTML = `<td style='padding:8px;border-bottom:1px solid #eee;'>${token}</td><td style='padding:8px;border-bottom:1px solid #eee;'>${value || '<i>Not set</i>'}</td><td style='padding:8px;border-bottom:1px solid #eee;'>${swatch}</td>`;
            tbody.appendChild(row);
        });
        return table;
    },
};
