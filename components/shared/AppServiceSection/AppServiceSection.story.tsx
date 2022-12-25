import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppServicesEnum} from '../AppServiceCard/AppServiceCard.types';
import AppServiceSection from './AppServiceSection';

export default {
   title: 'components / shared / AppServiceSection',
   component: AppServiceSection,
   args: {
      title: 'We operate on all of the routes worldwide',
      services: [
         {
            id: 1,
            service: AppServicesEnum.LAND,
            description: 'Upgrade efficiency with live trucking',
            linkText: 'Learn more',
            url: '#',
         },
         {
            id: 2,
            service: AppServicesEnum.AIRFREIGHT,
            description: 'Fly to an innovative world',
            linkText: 'Learn more',
            url: '#',
         },
         {
            id: 3,
            service: AppServicesEnum.OCEANFREIGHT,
            description: 'Reduce time and increase quality.',
            linkText: 'Learn more',
            url: '#',
         },
         {
            id: 4,
            service: AppServicesEnum.RAIL,
            description: 'Ride to innovative mode',
            linkText: 'Learn more',
            url: '#',
         },
      ],
   },
} as ComponentMeta<typeof AppServiceSection>;

const Template: ComponentStory<typeof AppServiceSection> = (args) => (
   <AppServiceSection {...args} />
);

export const Default: ComponentStory<typeof AppServiceSection> = Template.bind(
   {},
);
