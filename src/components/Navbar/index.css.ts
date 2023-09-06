import { style } from '@vanilla-extract/css';

export const navbar = style({
  borderRadius: '0.25rem',
  position: 'relative',
  padding: '0.5rem 1rem',
  display: 'block',
});

export const navContainer = style({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '15px',
  paddingRight: '15px',
});

export const navBrand = style({
  fontFamily: ' Titillium Web, sans-serif',
  fontSize: ' 1.5rem !important',
  paddingTop: ' 0rem !important',
  marginRight: ' 2rem !important',
  color: ' #5CB85C !important',
  paddingBottom: '0.25rem',
  float: 'left',
  textDecoration: 'none',
  lineHeight: '1.5',
  touchAction: 'manipulation',
  cursor: 'pointer',
});

export const navUl = style({
  paddingLeft: ' 0',
  marginBottom: ' 0',
  listStyle: ' none',
  float: 'right',
  marginBlockStart: ' 1em',
  marginBlockEnd: ' 1em',
  marginInlineStart: ' 0px',
  marginInlineEnd: '0ox',
  paddingInlineStart: ' 40px',
});

export const navItem = style({
  float: 'left',
  listStyle: 'none',
});

export const navLink = style({
  color: 'rgba(0, 0, 0, 0.8)',
  display: 'block',
  paddingTop: '0.425rem',
  paddingBottom: '0.425rem',
  touchAction: 'manipulation',
  textDecoration: 'none',
});
