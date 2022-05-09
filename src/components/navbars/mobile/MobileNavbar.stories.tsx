import { ComponentMeta, ComponentStory } from '@storybook/react';
import MobileNavbar from './MobileNavbar';
import { mockMobileNavbarProps } from './MobileNavbar.mocks';
import { IMobileNavbar } from './MobileNavbar.types';

export default {
    title: 'templates/BaseTemplate',
    component: MobileNavbar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MobileNavbar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MobileNavbar> = (args) => (
    <MobileNavbar {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMobileNavbarProps.base,
} as IMobileNavbar;
