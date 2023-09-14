import { Meta, StoryObj } from '@storybook/react';
import { TagList } from '.';
import { TEMP_TAGS } from '@/constants';

const sotryMeta: Meta = {
  title: 'components/home/TagList',
  component: TagList,
};
export default sotryMeta;

type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: TEMP_TAGS,
  },
};
