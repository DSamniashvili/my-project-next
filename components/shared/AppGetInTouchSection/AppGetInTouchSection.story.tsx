import {ComponentMeta, ComponentStory} from '@storybook/react';
import AppGetInTouchSection from './AppGetInTouchSection';
import {GetInTouchSectionData} from './AppGetInTouchSection.data';

export default {
   title: 'components / shared / AppGetInTouchSection',
   component: AppGetInTouchSection,
   args: {
      title: 'Get in touch',
      subTitle: 'Look inside Omofox!',
      features: GetInTouchSectionData,
   },
} as ComponentMeta<typeof AppGetInTouchSection>;

const Template: ComponentStory<typeof AppGetInTouchSection> = (args) => (
   <AppGetInTouchSection {...args} />
);

export const Default: ComponentStory<typeof AppGetInTouchSection> =
   Template.bind({});
