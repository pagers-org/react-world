import { style } from '@vanilla-extract/css';

import { vars } from '../../public/styles/global.css';

export const title = style({
  fontSize: vars.font.size.h2,
  marginBottom: vars.space.tinny,
});
export const subTitle = style({
  color: vars.colors.mainColor,
  marginBottom: vars.space.small,
});
