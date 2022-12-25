import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppPageFooter from './AppPageFooter';

export default {
   title: 'components / shared / AppPageFooter',
   component: AppPageFooter,
} as ComponentMeta<typeof AppPageFooter>;

const Template: ComponentStory<typeof AppPageFooter> = (args) => (
   <AppPageFooter />
);

export const Default: ComponentStory<typeof AppPageFooter> = Template.bind({});
