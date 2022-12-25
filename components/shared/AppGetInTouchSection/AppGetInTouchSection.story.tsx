import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppGetInTouchSection from './AppGetInTouchSection';

export default {
   title: 'components / shared / AppGetInTouchSection',
   component: AppGetInTouchSection,
   args: {
      title: 'Get in touch',
      subTitle: 'Look inside Omofox!',
      features: [
         {
            id: 1,
            title: 'Journey from garage',
            description: 'Follow up the latest updates with OMOFOX',
            linkText: 'Go to blogs',
            url: '#',
         },
         {
            id: 2,
            title: 'Make an impact',
            description: 'Be a part of the innovative and fast-growing team',
            linkText: 'See open roles',
            url: '#',
         },
         {
            id: 3,
            title: 'Meet the people',
            description:
               'We work together to develop not only our services, but to make a difference.',
            linkText: 'OMOFOX team',
            url: '#',
         },
         {
            id: 4,
            title: 'Values and mission',
            description:
               'See how we accelerate global trading by innovative technologies',
            linkText: 'About OMOFOX',
            url: '#',
         },
         {
            id: 5,
            title: 'Newsroom',
            description: 'We keep you updated with our latest news',
            linkText: 'Go to newsroom',
            url: '#',
         },
      ],
   },
} as ComponentMeta<typeof AppGetInTouchSection>;

const Template: ComponentStory<typeof AppGetInTouchSection> = (args) => (
   <AppGetInTouchSection {...args} />
);

export const Default: ComponentStory<typeof AppGetInTouchSection> =
   Template.bind({});
