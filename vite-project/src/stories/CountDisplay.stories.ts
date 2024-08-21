import type { Meta, StoryObj } from '@storybook/vue3';

import CountDisplay from '../components/CountDisplay.vue';

const meta: Meta<typeof CountDisplay> = {
    component: CountDisplay,
    title: 'stories/Count Display',
};

export default meta;
type Story = StoryObj<typeof CountDisplay>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (args) => ({
        components: { CountDisplay },
        setup() {
            return { args };
        },
        template: '<CountDisplay v-bind="args" />',
    }) 
};
