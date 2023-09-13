import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  font: {
    size: {
      h1: '3.5rem',
      h2: '2rem',
      h3: '1.5rem',
      h4: '1.2rem',
      highlight: '1.1rem',
    },
    weight: {
      bold: '700',
      semiBold: '500',
      highlight: '200',
    },
    letterSpacing: {
      narrow: '-1.5px',
      wide: '1.5px',
    },
  },
  colors: {
    mainColor: '#01D9F5',
    subColor: '#81EEF4',
    disabledColor: '#9E9E9E',
    dividerColor: '#687077',
    black: '#333',
    confirmColor: '#0D61FA',
    cancelColor: '#DC3545',
    white: 'white',
  },
  space: {
    biggest: '36px',
    largest: '24px',
    large: '18px',
    medium: '12px',
    small: '8px',
    tinny: '4px',
  },
  shadow: {
    mainShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
  },
});
