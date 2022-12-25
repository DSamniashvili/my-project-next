import {Meta, Story} from '@storybook/react';
import AppEventBanner from './AppEventBanner';
import {EventBannerProps} from './AppEventBanner.types';

export default {
   title: 'components / diff / AppEventBanner',
   component: AppEventBanner,
   args: {
      title: 'this is title:',
      description:
         'This is desctiption This is desctiption This is desctiption',
      linkText: 'Learn more',
      url: '#',
   },
} as Meta<EventBannerProps>;

const Template: Story<EventBannerProps> = (args) => (
   <AppEventBanner {...args} />
);

export const Default: Story<EventBannerProps> = Template.bind({});

Default.args = {};
