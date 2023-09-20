import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#5CB85C',
    white: '#FFF',
    gray: '#DDD',
    gray400: '#687077',
    black: '#333',
    danger: 'red',
  },
});
