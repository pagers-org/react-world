import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';

const meta = {
  title: 'Common/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseText: Story = {
  args: {
    children: '후라이드',
  },
};
