import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppGetInTouchCard from './AppGetInTouchCard';

export default {
   title: 'components / shared / AppGetInTouchCard',
   component: AppGetInTouchCard,
   args: {
      title: 'Journey from garage',
      description: 'Follow up the latest updates with OMOFOX',
      linkText: 'Go to blogs',
      url: '#',
   },
} as ComponentMeta<typeof AppGetInTouchCard>;

const Template: ComponentStory<typeof AppGetInTouchCard> = (args) => (
   <AppGetInTouchCard {...args} />
);

export const Default: ComponentStory<typeof AppGetInTouchCard> = Template.bind(
   {},
);
