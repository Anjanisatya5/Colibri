import type { Preview } from '@storybook/react';

// Load Compass shared visual language — same file the HTML prototype uses.
import '../../styles/compass.css';
// Storybook-only helpers (fonts + a light container reset).
import './preview.css';

const preview: Preview = {
  parameters: {
    layout: 'padded',
    backgrounds: {
      default: 'paper',
      values: [
        { name: 'paper', value: '#FAF9F5' },
        { name: 'canvas', value: '#ECEAE1' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Radii', 'Shadows'],
          'Atoms',
          'Molecules',
          'Screens',
        ],
      },
    },
  },
};

export default preview;
