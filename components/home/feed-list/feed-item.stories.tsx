import { Meta, StoryObj } from '@storybook/react';
import { FeedItem } from './feed-item';

const meta: Meta<typeof FeedItem> = {
  component: FeedItem,
};

export default meta;
type Story = StoryObj<typeof FeedItem>;

export const Primary: Story = {
  args: {},
};
