import { style } from '@vanilla-extract/css';

export const HeaderNavbar = style([
  {
    height: '80px',
    backgroundColor: '#ffffff',
    boxShadow: '0 1px 2px -2px gray',
  },
  'navbar',
  'fixed-top',
]);

export const HeaderContainer = style([{}, 'container']);

export const HeaderMenuList = style([{}, 'nav navbar-nav', 'flex-row gap-3']);

export const HeaderMenu = style([{}, 'border rounded p-2']);

export const HeaderMenuLink = style([{ padding: 'unset' }, 'nav-link']);
