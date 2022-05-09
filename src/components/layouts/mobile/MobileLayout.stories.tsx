import { ComponentMeta, ComponentStory } from '@storybook/react';
import MobileLayout from './MobileLayout';
import { mockMobileLayoutProps } from './MobileLayout.mocks';
import { IMobileLayout } from './MobileLayout.types';

export default {
    title: 'templates/BaseTemplate',
    component: MobileLayout,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof MobileLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MobileLayout> = (args) => (
    <MobileLayout {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Base.args = {
    ...mockMobileLayoutProps.base,
} as IMobileLayout;
