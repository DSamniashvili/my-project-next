import {Meta, Story} from '@storybook/react';
import AppEventBanner from './AppEventBanner';

export default {
   title: 'components / diff / AppEventBanner',
   component: AppEventBanner,
} as Meta<typeof AppEventBanner>;

const Template: Story<typeof AppEventBanner> = (args) => <AppEventBanner />;

export const Default: Story<typeof AppEventBanner> = Template.bind({});

Default.args = {};
