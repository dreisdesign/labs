import '../styles/main.css';
import { renderColors } from './colors-template';

export default {
  title: 'Tokens/Colors',
  parameters: { viewMode: 'docs', layout: 'fullscreen' }
};

export const Colors = {
  name: 'Global',
  render: () => renderColors()
};

export const Blueberry = {
  name: 'Theme: Blueberry',
  render: () => renderColors({ onlyFlavor: 'blueberry' })
};

export const Strawberry = {
  name: 'Theme: Strawberry',
  render: () => renderColors({ onlyFlavor: 'strawberry' })
};

export const Vanilla = {
  name: 'Theme: Vanilla',
  render: () => renderColors({ onlyFlavor: 'vanilla' })
};
