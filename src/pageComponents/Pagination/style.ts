import { cva } from 'class-variance-authority';

const PaginationStyle = cva(['page-item', 'cursor-pointer'], {
  variants: {
    isActive: {
      true: ['active'],
    },
  },
});

export { PaginationStyle };
