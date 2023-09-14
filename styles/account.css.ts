import { style } from '@vanilla-extract/css';
import { alignCenter, flexCenter, flexRow } from './common.css';

const responsiveStyle = ({ tablet, desktop }) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

export const title = style({
  fontSize: '2.5rem',
  marginBottom: '0.5rem',
});

export const question = style({
  color: '#5CB85C',
  marginBottom: '1rem',
});

export const form = style([
  flexCenter,
  flexRow,
  {
    gap: 15,
  },
  responsiveStyle({
    tablet: { width: '340px' },
    desktop: { width: '540px' },
  }),
]);

export const userBoxBlock = style([alignCenter]);

export const info = style({
  margin: ' 0 1.5rem 0 0.3rem',
});

export const author = style({
  color: '#5CB85C',
  fontWeight: '500',
});

export const date = style({
  color: '#bbb',
  fontSize: '0.8rem',
});
