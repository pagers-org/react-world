import { style } from '@vanilla-extract/css';

export const banner = style({
  background: '#5CB85C',
  boxShadow: 'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',
});

export const mainContainer = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
});

export const mainH1 = style({
  textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
  fontWeight: '700 !important',
  textAlign: 'center',
  fontSize: '3.5rem',
  paddingBottom: '0.5rem',
  marginBottom: '0px',
  lineHeight: '1.1',
  fontFamily: ['Titillium Web', 'sans-serif'],
  color: 'inherit',
});

export const mainText = style({
  color: '#fff',
  textAlign: 'center',
  fontSize: '1.5rem',
  fontWeight: '300 !important',
  marginBottom: '0px',
});
