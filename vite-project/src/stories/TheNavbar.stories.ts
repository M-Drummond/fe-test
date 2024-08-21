import type { Meta, StoryObj } from '@storybook/vue3';

import TheNavbar from '../components/TheNavbar.vue';

const meta: Meta<typeof TheNavbar> = {
    component: TheNavbar,
    title: 'stories/Layout/The Navbar',
};

export default meta;
type Story = StoryObj<typeof TheNavbar>;

export const Primary: Story = {
    args: {
        dropdownOpen: false,
    },
    render: (args) => ({
        components: { TheNavbar },
        setup() {
            return { args };
        },
        template: '<TheNavbar v-bind="args" />',
    })
};
 