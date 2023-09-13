import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const sotryMeta: Meta = {
  title: 'components/ui/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['default', 'outline', 'ghost'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'sm', 'lg'],
      },
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof Button>;

export const PrimaryButton: Story = {
  args: {
    variant: 'default',
    children: 'default',
  },
};

export const OutlineButton: Story = {
  args: {
    variant: 'outline',
    children: 'outline',
  },
};

export const GhostButton: Story = {
  args: {
    variant: 'ghost',
    children: 'ghost',
  },
};

export const SmallButton: Story = {
  args: {
    size: 'sm',
    children: 'small',
  },
};

export const LargeButton: Story = {
  args: {
    size: 'lg',
    children: 'large',
  },
};
