import {Meta, Story} from '@storybook/react';
import AppPageFooterCopyright, {
   FooterCopyrightProps,
} from './AppPageFooterCopyright';

export default {
   title: 'components / shared / FooterCopyright',
   component: AppPageFooterCopyright,
   args: {
      content: '© 2020-2022 OMOFOX Inc. Made with ❤️ from Tbilisi',
   },
} as Meta<FooterCopyrightProps>;

const Template: Story<FooterCopyrightProps> = (args) => (
   <AppPageFooterCopyright {...args} />
);

export const Default: Story<FooterCopyrightProps> = Template.bind({});

Default.args = {};
