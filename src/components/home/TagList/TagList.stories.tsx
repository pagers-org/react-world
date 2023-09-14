import { Meta, StoryObj } from '@storybook/react';
import { TagList } from '.';

const sotryMeta: Meta = {
  title: 'components/home/TagList',
  component: TagList,
};
export default sotryMeta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: ['tag1', 'tag2', 'tag3', 'tag4'],
  },
};
