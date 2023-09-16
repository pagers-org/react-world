import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const sotryMeta: Meta = {
  title: 'components/ui/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'secondary', 'destructive', 'outline'],
      },
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'default',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Badge',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Badge',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Badge',
    variant: 'outline',
  },
};
