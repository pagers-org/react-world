import { createTheme, style } from '@vanilla-extract/css';

export const [themeClass, vars] = createTheme({
  color: {
    black: '#000',
    white: '#fff',
    brightGreen: '#5cb85c',
    deepGreen: '#3d8b3d',
    gray: '#818a91',
    borderWhite: '#eceeef',
    red: '#bd4147',
    deepSkyBlue: '#66afe9',
    brightSkyBlue: '#5bc0de',
    yellow: 'f0ad4e',
    deepRed: '#b85c5c',
  },
});

export const navbar = style({
  display: 'none',
  color: 'rgba(0, 0, 0, 0.8)',
  backgroundColor: vars.color.yellow,
});
