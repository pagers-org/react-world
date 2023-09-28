import { cva } from 'class-variance-authority';

const CurrentTabStyle = cva(['nav-link', 'cursor-pointer', '!mb-0'], {
  variants: {
    isCurrentTab: {
      true: ['active'],
    },
  },
});

export { CurrentTabStyle };
