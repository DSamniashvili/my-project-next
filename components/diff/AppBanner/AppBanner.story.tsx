import {Meta, Story} from '@storybook/react';
import AppBanner from './AppBanner';
import {BannerProps} from './AppBanner.types';

export default {
   title: 'components / diff / AppBanner',
   component: AppBanner,
   args: {
      title: 'Les clicks, more logistics',
      description:
         'This is desctiption This is desctiption This is desctiption',
      buttonText: 'Get started',
      image: 'https://images.unsplash.com/photo-1573014089159-8ee711dc5a8e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
   },
} as Meta<BannerProps>;

const Template: Story<BannerProps> = (args) => <AppBanner {...args} />;

export const Default: Story<BannerProps> = Template.bind({});

Default.args = {};
