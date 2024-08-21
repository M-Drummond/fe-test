import type { Preview, Setup  } from "@storybook/vue3";
import { type App } from 'vue';

import { setup } from "@storybook/vue3";

import '../src/style.css';

import { withThemeByDataAttribute } from '@storybook/addon-themes';
import { createPinia } from 'pinia';

const pinia = createPinia();

setup((app: App) => {
  app.use(pinia);
});

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
