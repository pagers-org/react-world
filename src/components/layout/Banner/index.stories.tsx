import type { Meta, StoryObj } from '@storybook/react';

import { themeClass } from '@/src/styles/theme.css';

import Banner from '.';

const meta = {
  title: 'Layout/Banner',
  component: Banner,
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = (args: any) => (
  <div className={themeClass}>
    <Banner {...args} />
  </div>
);

Basic.args = {
  title: 'React-World',
  description: '다양한 기술적 시도를 합니다.',
};
