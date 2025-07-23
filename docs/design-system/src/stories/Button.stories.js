import '../components/Button.js';
import { fn } from 'storybook/test';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Components/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
  args: { onClick: fn() },
  parameters: {
    docs: {
      description: {
        component: 'Labs Design System Button Web Component.',
      },
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = () => {
  const el = document.createElement('labs-button');
  el.textContent = 'Primary Button';
  return el;
};

export const Disabled = () => {
  const el = document.createElement('labs-button');
  el.textContent = 'Disabled Button';
  el.setAttribute('disabled', '');
  return el;
};
