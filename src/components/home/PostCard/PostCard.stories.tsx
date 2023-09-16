import { Meta, StoryObj } from '@storybook/react';
import { PostCard } from '.';
import { PostCardList } from '../PostCardList';

const sotryMeta: Meta = {
  title: 'components/home/Postcard',
  component: PostCard,
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default sotryMeta;

type Story = StoryObj<typeof PostCardList>;

export const Default: Story = {
  args: {},
};
