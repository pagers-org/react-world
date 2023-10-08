import { style } from '@vanilla-extract/css';

import { vars } from './style.css';

export const mainBanner = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '15px',
  backgroundColor: vars.color.standardGreen,
  padding: '40px 32px',
  marginBottom: '32px',
  boxShadow:
    'inset 0 8px 8px -8px rgba(0, 0, 0, 0.3), inset 0 -8px 8px -8px rgba(0, 0, 0, 0.3)',

  color: vars.color.white,
  textAlign: 'center',
});

export const bannerTitle = style({
  fontSize: '56px',
  margin: 0,
  textShadow: '0px 2px 3px rgba(0, 0, 0, 0.5)',
});

export const bannerSubTitle = style({
  fontSize: '24px',
  margin: 0,
  fontWeight: '200',
});
