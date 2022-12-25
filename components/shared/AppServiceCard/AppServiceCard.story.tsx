import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppServiceCard from './AppServiceCard';
import {AppServicesEnum} from './AppServiceCard.types';

export default {
   title: 'components / shared / AppServiceCard',
   component: AppServiceCard,
   args: {
      service: AppServicesEnum.LAND,
      description: 'Upgrade efficiency with live trucking',
      linkText: 'Learn more',
      url: '#',
   },
} as ComponentMeta<typeof AppServiceCard>;

const Template: ComponentStory<typeof AppServiceCard> = (args) => (
   <AppServiceCard {...args} />
);

export const Default: ComponentStory<typeof AppServiceCard> = Template.bind({});
