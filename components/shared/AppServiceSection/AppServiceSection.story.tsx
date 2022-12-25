import {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppServicesEnum} from '../AppServiceCard/AppServiceCard.types';
import AppServiceSection from './AppServiceSection';
import {servicesMock} from './AppServiceSection.data';

export default {
   title: 'components / shared / AppServiceSection',
   component: AppServiceSection,
   args: {
      title: 'We operate on all of the routes worldwide',
      services: servicesMock,
   },
} as ComponentMeta<typeof AppServiceSection>;

const Template: ComponentStory<typeof AppServiceSection> = (args) => (
   <AppServiceSection {...args} />
);

export const Default: ComponentStory<typeof AppServiceSection> = Template.bind(
   {},
);
