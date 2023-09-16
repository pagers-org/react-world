import { Meta, StoryObj } from '@storybook/react';
import { Navbar } from '.';

const sotryMeta: Meta = {
  title: 'components/layout/Navbar',
  component: Navbar,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};
