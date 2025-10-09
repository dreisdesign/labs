import '../styles/main.css';
import '../components/labs-card.js';
import '../components/labs-button.js';
import '../components/labs-icon.js';
import iconsList from '../components/icons-list.js';

export default {
    title: '3. Components (Wrapped)/Card/Welcome',
    parameters: {
        docs: {
            description: {
                component: 'A wrapped example of the labs-card component for welcome/intro content. Demonstrates recommended usage with header, description, and actions.'
            }
        }
    },
    component: 'labs-card',
    argTypes: {
        align: { control: { type: 'inline-radio' }, options: ['left', 'center'], description: 'Content alignment' },
        title: { control: 'text', description: 'Welcome card title' },
        description: { control: 'text', description: 'Welcome card description' },
        buttonText: { control: 'text', description: 'Button text' },
        buttonVariant: { control: { type: 'select' }, options: ['primary', 'secondary', 'destructive'], description: 'Button variant' },
        buttonSize: { control: { type: 'inline-radio' }, options: ['small', 'medium', 'large'], description: 'Button size' },
        buttonFullwidth: { control: 'boolean', description: 'Make button full width' },
        buttonPill: { control: 'boolean', description: 'Pill shape (rounded ends)' },
        iconLeft: { control: { type: 'select' }, options: ['none', ...iconsList], description: 'Icon on left side of button' },
        iconRight: { control: { type: 'select' }, options: ['none', ...iconsList], description: 'Icon on right side of button' },
    },
    args: {
        align: 'left',
        title: 'Welcome to Labs!',
        description: 'Get started by exploring our design system components.',
        buttonText: 'Get Started',
        buttonVariant: 'primary',
        buttonSize: 'medium',
        buttonFullwidth: false,
        buttonPill: false,
        iconLeft: 'none',
        iconRight: 'none',
    },
};

export const Default = ({ align, title, description, buttonText, buttonVariant, buttonSize, buttonFullwidth, buttonPill, iconLeft, iconRight }) => {
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.gap = '16px';
    wrapper.style.width = '100%';
    wrapper.style.maxWidth = '500px';
    wrapper.style.margin = '0 auto';

    const card = document.createElement('labs-card');
    card.setAttribute('variant', 'welcome');
    if (align && align === 'center') {
        card.setAttribute('align', 'center');
    }

    const header = document.createElement('h2');
    header.setAttribute('slot', 'header');
    header.textContent = title;

    const desc = document.createElement('p');
    desc.textContent = description;

    const button = document.createElement('labs-button');
    button.setAttribute('slot', 'actions');
    button.setAttribute('variant', buttonVariant);
    if (buttonSize !== 'medium') button.setAttribute('size', buttonSize);
    if (buttonFullwidth) button.setAttribute('fullwidth', '');
    if (buttonPill) button.setAttribute('pill', '');

    // Add left icon if selected
    if (iconLeft && iconLeft !== 'none') {
        const leftIcon = document.createElement('labs-icon');
        leftIcon.setAttribute('slot', 'icon-left');
        leftIcon.setAttribute('name', iconLeft);
        button.appendChild(leftIcon);
    }

    // Add button text
    const textNode = document.createTextNode(buttonText);
    button.appendChild(textNode);

    // Add right icon if selected
    if (iconRight && iconRight !== 'none') {
        const rightIcon = document.createElement('labs-icon');
        rightIcon.setAttribute('slot', 'icon-right');
        rightIcon.setAttribute('name', iconRight);
        button.appendChild(rightIcon);
    }

    card.appendChild(header);
    card.appendChild(desc);
    card.appendChild(button);

    wrapper.appendChild(card);

    return wrapper;
};
