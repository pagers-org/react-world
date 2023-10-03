import { style } from '@vanilla-extract/css';

import { vars } from './style.css';

// 600px에 햄버거
// 12000px에 태그 리스트 띄우기
export const mainFrame = style({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const navBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '50px',
  padding: '5px 20px',
});

export const headControllers = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '350px',
  maxWidth: '350px',
  minWidth: '300px',
  margin: 0,
  padding: 0,
  listStyleType: 'none',
  cursor: 'pointer',
});

export const controlButton = style({
  color: vars.color.black03,
  ':hover': {
    color: vars.color.black06,
  },
});

export const titleBanner = style({
  height: 'fit-content',
  margin: 0,
  color: vars.color.standardGreen,
});
