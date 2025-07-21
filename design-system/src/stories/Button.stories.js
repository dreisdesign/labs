import { Button } from '../components/Button/Button.jsx';
import '../tokens/button.css';

export default {
  title: 'Components/Button',
  render: (args) => Button(args),
  argTypes: {
    label: { control: 'text', description: 'Button text content' },
    variant: {
      control: { type: 'select' },
      options: ['primary'],
      description: 'Button variant/style',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'full'],
      description: 'Button size',
    },
    onClick: { action: 'clicked' },
    style: { control: 'object' },
  },
};

export const Small = {
  args: {
    label: 'Small Button',
    variant: 'primary',
    size: 'sm',
  },
};

export const Medium = {
  args: {
    label: 'Medium Button',
    variant: 'primary',
    size: 'md',
  },
};

export const Large = {
  args: {
    label: 'Large Button',
    variant: 'primary',
    size: 'lg',
  },
};

export const FullWidth = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    size: 'full',
    style: { width: '100%' },
  },
};
