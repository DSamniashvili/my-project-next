import {Meta, Story} from '@storybook/react';
import PlatFormAndVisiblity from './PlatFormAndVisiblity';

import {PlatFormAndVisiblityProps} from './PlatFormAndVisiblity.types';

export default {
   title: 'components / diff / PlatFormAndVisiblity',
   component: PlatFormAndVisiblity,
   args: {
      translations: {
         platform: {
            title: 'PLATFORM',
            description:
               'See the limitless opportunities to organize and manage the supply chain with less clicks and more logistics.',
            button_text: 'Get your demo',
         },
         visibility: {
            title: 'VISIBLITY',
            description:
               'Sit back, relax, and enjoy the visualization of your cargo in transit through OMOFOX platform.',
            button_text: 'Join now',
         },
      },
   },
} as Meta<PlatFormAndVisiblityProps>;

const Template: Story<PlatFormAndVisiblityProps> = (args) => (
   <PlatFormAndVisiblity {...args} />
);

export const Default: Story<PlatFormAndVisiblityProps> = Template.bind({});

Default.args = {};
