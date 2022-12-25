import {Meta, Story} from '@storybook/react';
import {AppButtonProps, ButtonTypeEnum} from './AppButton.types';
import {Calendar} from '@assets/icons/Calendar';
import AppButton from './AppButton';

export default {
   title: 'components / shared / Button',
   component: AppButton,
   args: {
      buttonType: ButtonTypeEnum.PRIMARY,
   },
} as Meta<AppButtonProps>;

const Template: Story<AppButtonProps> = (args) => (
   <AppButton {...args}>Click</AppButton>
);

export const WithoutIcon: Story<AppButtonProps> = Template.bind({});

WithoutIcon.args = {};

export const WithIcon: Story<AppButtonProps> = Template.bind({});

WithIcon.args = {
   icon: <Calendar />,
};
