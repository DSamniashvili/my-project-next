import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppPageHeader from './AppPageHeader';

export default {
   title: 'components / shared / PageHeader',
   component: AppPageHeader,
   args: {
      title: 'test-title',
   },
} as ComponentMeta<typeof AppPageHeader>;

const Template: ComponentStory<typeof AppPageHeader> = (args) => (
   <AppPageHeader {...args} />
);

export const Default: ComponentStory<typeof AppPageHeader> = Template.bind({});

Default.args = {};
