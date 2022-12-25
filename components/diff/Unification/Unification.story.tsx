import {ComponentMeta, ComponentStory} from '@storybook/react';
import Unification from './Unification';

export default {
   title: 'components / diff / Unification',
   component: Unification,
} as ComponentMeta<typeof Unification>;

const Template: ComponentStory<typeof Unification> = () => <Unification />;

export const Default: ComponentStory<typeof Unification> = Template.bind({});
