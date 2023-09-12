import { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<typeof Pagination>;

const PaginationWithHooks = () => {
  const [page, setPage] = useState(1);

  const handleChange = (page: number) => {
    setPage(page);
  };

  return <Pagination total={20} current={page} onChange={handleChange} />;
};

export const Primary: Story = {
  render: () => <PaginationWithHooks />,
};
