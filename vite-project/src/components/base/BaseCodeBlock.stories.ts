import type { Meta, StoryObj } from '@storybook/vue3';

const mockCode = 'npm i daisyui';

import BaseCodeBlock from './BaseCodeBlock.vue';

const meta: Meta<typeof BaseCodeBlock> = {
    title: 'Base/Code Block',
    component: BaseCodeBlock,
    decorators: [() => ({ template: `<div class="sm:max-w-32" ><story/></div>` })],
};

export default meta;
type Story = StoryObj<typeof BaseCodeBlock>;

export const Primary: Story = {
    render: (args) => ({
        components: { BaseCodeBlock },
        setup() {
            return { args };
        },
        template: '<BaseCodeBlock v-bind="args" />',
    }),
    args: {
        code: mockCode as string, 
    },
}; 


export const Colour: Story = {
    render: (args) => ({
        components: { BaseCodeBlock },
        setup() {
            return { args };
        },
        template: '<BaseCodeBlock v-bind="args" />',
    }),
    args: {
        code: mockCode as string, 
        classes: 'bg-primary text-primary-content'
    },
}; 