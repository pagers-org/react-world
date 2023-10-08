import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    white: '#fff',
    standardGreen: '#5CB85C',
    gray9: '#999',
    grayA: '#AAA',
    grayB: '#BBB',
    black: '#000000',
    black03: '#00000030',
    black06: '#00000060',
  },
  space: {
    small: '4px',
    medium: '8px',
  },
});
