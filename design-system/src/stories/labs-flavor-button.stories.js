import '../components/labs-flavor-button.js';
import '../components/labs-icon.js';

export default {
    title: 'Patterns/Buttons/Flavor Button',
    argTypes: { variant: { control: { type: 'select', options: ['primary', 'secondary', 'destructive', 'icon'] } }, flavor: { control: 'text' } }
};

export const FlavorButton = ({ flavor = 'blueberry', variant = 'secondary' }) => {
    const wrap = document.createElement('div');
    wrap.style.maxWidth = '360px';
    wrap.innerHTML = `<labs-flavor-button variant="${variant}"></labs-flavor-button>`;
    // Set initial flavor based on the story arg. The component will handle subsequent cycles.
    const root = document.documentElement;
    root.classList.remove('flavor-vanilla', 'flavor-blueberry', 'flavor-strawberry');
    root.classList.add(`flavor-${flavor.toLowerCase()}`);
    return wrap;
};

FlavorButton.args = { flavor: 'blueberry', variant: 'secondary' };
