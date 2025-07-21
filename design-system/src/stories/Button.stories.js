
import { Button } from '../components/Button/Button.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
export default {
  title: 'Example/Button',
  tags: ['autodocs'],
  render: (args) => Button(args),
  argTypes: {
    label: { control: 'text' },
    variant: { control: 'select', options: ['primary', 'danger'] },
    onClick: { action: 'onClick' },
    style: { control: 'object' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    label: 'Primary',
    variant: 'primary',
  },
};

export const Danger = {
  args: {
    label: 'Danger',
    variant: 'danger',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
};
