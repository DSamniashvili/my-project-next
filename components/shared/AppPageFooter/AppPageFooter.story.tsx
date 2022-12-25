import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppPageFooter from './AppPageFooter';

export default {
   title: 'components / shared / AppPageFooter',
   component: AppPageFooter,
   args: {
      navigation: [
         {
            id: 1,
            title: 'TECHNOLOGY',
            linkGroup: [
               {
                  id: 1,
                  title: 'Platform',
                  href: '/',
               },
               {
                  id: 2,
                  title: 'Visibility',
                  href: '/',
               },
            ],
         },
         {
            id: 2,
            title: 'SERVICES',
            linkGroup: [
               {
                  id: 1,
                  title: 'Customs',
                  href: '/',
               },
               {
                  id: 2,
                  title: 'Insurance',
                  href: '/',
               },
               {
                  id: 3,
                  title: 'Warehousing',
                  href: '/',
               },
               {
                  id: 4,
                  title: 'Order management',
                  href: '/',
               },
            ],
         },
         {
            id: 3,
            title: 'TRANSPORTATION',
            linkGroup: [
               {
                  id: 1,
                  title: 'Trucking',
                  href: '/',
               },
               {
                  id: 2,
                  title: 'Air-freight',
                  href: '/',
               },
               {
                  id: 3,
                  title: 'Ocean-freight',
                  href: '/',
               },
               {
                  id: 4,
                  title: 'Rail',
                  href: '/',
               },
            ],
         },
         {
            id: 4,
            title: 'COMPANY',
            linkGroup: [
               {
                  id: 1,
                  title: 'About us',
                  href: '/',
               },
               {
                  id: 2,
                  title: 'Blog',
                  href: '/',
               },
               {
                  id: 3,
                  title: 'Careers',
                  href: '/',
               },
               {
                  id: 4,
                  title: 'Events',
                  href: '/',
               },
               {
                  id: 5,
                  title: 'Press',
                  href: '/',
               },
               {
                  id: 6,
                  title: 'Contact',
                  href: '/',
               },
            ],
         },
      ],
   },
} as ComponentMeta<typeof AppPageFooter>;

const Template: ComponentStory<typeof AppPageFooter> = (args) => (
   <AppPageFooter {...args} />
);

export const Default: ComponentStory<typeof AppPageFooter> = Template.bind({});
