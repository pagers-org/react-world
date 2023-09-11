import { style } from '@vanilla-extract/css';
import { textCenter } from './common.css';

export const banner = style([
  textCenter,
  {
    padding: '2rem',
    color: '#fff',
    marginBottom: '2rem',
    boxShadow: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
  },
]);

export const bannerTitle = style({
  fontSize: '3.5rem',
  paddingBottom: '0.5rem',
  textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
});

export const bannerDescription = style({
  fontSize: '1.5rem',
  margin: 0,
  fontWeight: 300,
});
