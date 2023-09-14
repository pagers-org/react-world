import { createTheme, style } from "@vanilla-extract/css";

export const [themeClass, vars] = createTheme({
  color: {
    brand: 'blue',
    white: '#fff'
  },
  space: {
    small: '4px',
    medium: '8px',
  }
});

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  padding: vars.space.medium,
});
