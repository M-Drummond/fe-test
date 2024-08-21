import type { Meta, StoryObj } from '@storybook/vue3';

import Button from './BaseButton.vue';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Base/Button',
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: 'Button Text',
    classes: 'btn-primary',
  },
};


export const Secondary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    classes: 'btn-secondary',
    text: 'Button Text Except A Little Bigger',
  },
};

export const Accent: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    classes: 'btn-accent',
    text: 'Button Text Except A Little Bigger',
  },
};


export const Large : Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: 'Button Text Except A Little Bigger',
    classes: 'btn-lg btn-primary',
  },
};

export const Disabled : Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    text: 'Disabled',
    classes: 'btn-disabled',
  },
};
