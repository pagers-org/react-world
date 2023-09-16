import type { Preview } from '@storybook/react';

import 'styles/normalize.css';
import 'styles/tailwind.css';

/** @todo tailwind css migration */
import 'styles/main.css';


const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
