import { style } from '@vanilla-extract/css';

export const FooterNavbar = style([
  {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '60px',
    backgroundColor: '#ffffff',
    boxShadow: '0 -1px 2px -2px gray',
  },
  'navbar',
]);

export const FooterContainer = style([{}, 'container', 'd-flex align-items-center']);
