import { createTheme } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    primary: '#5CB85C',
    white: '#FFF',
    gray: '#DDD',
  },
});
