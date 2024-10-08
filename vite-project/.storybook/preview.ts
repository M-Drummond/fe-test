import type { Preview } from "@storybook/vue3";

import '../src/style.css'; 

import { withThemeByDataAttribute } from '@storybook/addon-themes';


 

const preview: Preview = {
  decorators: [
    withThemeByDataAttribute({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
      attributeName: 'data-mode',
    }),
  ],
  parameters: {
   controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
