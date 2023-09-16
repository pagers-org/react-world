import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';

export const wrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const title = style({
  margin: `${vars.space.medium} ${vars.space.biggest}`,
  fontSize: vars.font.size.h3,
  fontWeight: vars.font.weight.bold,
  color: vars.colors.subColor,
  ':hover': {
    color: vars.colors.mainColor,
  },
});

export const nav = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginRight: vars.space.biggest,
});

export const navItem = style({
  marginRight: vars.space.medium,
  color: vars.colors.disabledColor,
  ':hover': {
    color: vars.colors.black,
    fontSize: vars.font.size.highlight,
  },
});

export const selectedNav = style({
  marginRight: vars.space.medium,
  color: vars.colors.black,
  fontSize: vars.font.size.highlight,
});
