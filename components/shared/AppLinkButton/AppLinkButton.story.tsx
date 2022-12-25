import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppLinkButton from './AppLinkButton';

export default {
   title: 'components / shared / AppLinkButton',
   component: AppLinkButton,
} as ComponentMeta<typeof AppLinkButton>;

const Template: ComponentStory<typeof AppLinkButton> = (args) => (
   <AppLinkButton {...args} />
);

export const WithArrow: ComponentStory<typeof AppLinkButton> = Template.bind(
   {},
);

WithArrow.args = {
   href: '/',
   text: 'Learn more',
   hasArrow: true,
   underline: false,
};

export const WithoutArrow: ComponentStory<typeof AppLinkButton> = Template.bind(
   {},
);

WithoutArrow.args = {
   href: '/',
   text: 'Find out',
   hasArrow: false,
   underline: false,
   bold: true,
};

export const WithUnderline: ComponentStory<typeof AppLinkButton> =
   Template.bind({});

WithUnderline.args = {
   href: '/',
   text: 'Learn more',
   hasArrow: false,
   underline: true,
};
