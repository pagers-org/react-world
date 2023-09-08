import { style } from '@vanilla-extract/css';

const responsiveStyle = ({ tablet, desktop }) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

export const container = style([
  { margin: '0 auto', padding: '0 15px' },
  responsiveStyle({
    tablet: { maxWidth: '768px' },
    desktop: { maxWidth: '1140px' },
  }),
]);

export const sidePadding = style({
  padding: '0 15px',
});

export const circle = style({
  borderRadius: '50%',
});

export const input = style({
  width: '100%',
  height: '50px',
  padding: '0.75rem 1.5rem',
  fontSize: '1.25rem',
  borderRadius: '0.3rem',
  border: '1px solid rgba(0, 0, 0, 0.15);',
  boxSizing: 'border-box',
});
