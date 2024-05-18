import '@app/styles/index.scss';
import '@app/configs/i18n/config';
import {flexDecorator} from './decorators/Flex';
import {localizationDecorator} from './decorators/Localization';
import type {Preview} from '@storybook/react';

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
  decorators: [flexDecorator, localizationDecorator],
  globalTypes: {
    locale: {
      name: 'Locale',
      description: 'Internationalization locale',
      toolbar: {
        icon: 'globe',
        items: [
          {value: 'en', title: 'English'},
          {value: 'ru', title: 'Russian'},
        ],
        showName: true,
      },
    },
  },
};

export default preview;
