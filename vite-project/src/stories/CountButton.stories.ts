import type { Meta, StoryObj } from '@storybook/vue3';

import Button from '../components/CountButton.vue';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'stories/Count Button',
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
    }) 
};
