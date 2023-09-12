import { cva } from 'class-variance-authority';

const NavbarStyle = cva(['inline-block', '!no-underline'], {
  variants: {
    isCurrentPath: {
      true: ['!text-gray-900', 'hover:text-gray-900'],
      false: ['!text-gray-300', 'hover:text-gray-500'],
    },
  },
});

export { NavbarStyle };
