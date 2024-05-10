import type {Preview} from '@storybook/react';
import '@app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: {argTypesRegex: '^on[A-Z].*'},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        {name: 'white', value: '#fff'},
        {name: 'black', value: '#000'},
      ],
    },
  },
};

export default preview;
