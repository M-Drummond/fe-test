import type { Meta, StoryObj } from '@storybook/vue3';

import mockData  from '../../data/kitchen-sink.ts'

import BaseRichText from './BaseRichText.vue';

const meta: Meta<typeof BaseRichText> = {
    title: 'Base/Rich Text',
    component: BaseRichText,
};

export default meta;
type Story = StoryObj<typeof BaseRichText>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    render: (args) => ({
        components: { BaseRichText },
        setup() {
            return { args };
        },
        template: '<BaseRichText v-bind="args" />',
    }),
    args: {
        content: mockData as string,
    },
};
