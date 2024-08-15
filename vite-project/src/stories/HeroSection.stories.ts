import type { Meta, StoryObj } from '@storybook/vue3';

import HeroSection from '../components/HeroSection.vue';

const meta: Meta<typeof HeroSection> = {
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { HeroSection },
    setup() {
      return { args };
    },
    template: '<HeroSection v-bind="args" />',
  }),
  args: {
    msg: 'Hero Section Story',
  },
};