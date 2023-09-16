import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';

export const wrapper = style({
  backgroundColor: vars.colors.mainColor,
  padding: vars.space.biggest,
  color: vars.colors.white,
});

export const title = style({
  textAlign: 'center',
  fontSize: vars.font.size.h1,
  fontWeight: vars.font.weight.bold,
  letterSpacing: vars.font.letterSpacing.narrow,
  textShadow: vars.shadow.mainShadow,
  marginBottom: vars.space.small,
});

export const subTitle = style({
  textAlign: 'center',
  fontSize: vars.font.size.h4,
});
