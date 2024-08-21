import type { Meta, StoryObj } from '@storybook/vue3';

const mockImage = 'https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA';

import BaseImage from './BaseImage.vue';

const meta: Meta<typeof BaseImage> = {
    title: 'Base/Image',
    component: BaseImage,
    
};

export default meta;
type Story = StoryObj<typeof BaseImage>;
 
export const Primary: Story = {
    decorators: [() => ({ template: `<div class="sm:max-w-64" ><story/></div>` })],
    render: (args) => ({
        components: { BaseImage },
        setup() {
            return { args };
        },
        template: '<BaseImage v-bind="args" />',
    }),
    args: {
        imgSrc: mockImage as string, 
    },
};

export const Large: Story = {
    decorators: [() => ({ template: `<div class="md:max-w-screen-md" ><story/></div>` })],
    render: (args) => ({
        components: { BaseImage },
        setup() {
            return { args };
        },
        template: '<BaseImage v-bind="args" />',
    }),
    args: {
        imgSrc: mockImage as string, 
    },
};
