import { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './navbar';

const meta: Meta<typeof NavBar> = {
  component: NavBar,
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  render: () => <NavBar />,
};
