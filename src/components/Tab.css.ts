import { style } from '@vanilla-extract/css';

import { vars } from '../../public/styles/global.css';

export const selectedTabItem = style({
  fontSize: vars.font.size.highlight,
  fontWeight: vars.font.weight.extraThin,
  background: vars.colors.white,
  borderBottom: `2px solid ${vars.colors.mainColor}`,
  color: vars.colors.mainColor,
  paddingBottom: vars.space.smaller,
  cursor: 'pointer',
});

export const notSelectedTabItem = style({
  fontSize: vars.font.size.highlight,
  fontWeight: vars.font.weight.extraThin,
  background: vars.colors.white,
  color: vars.colors.mainColor,
  paddingBottom: vars.space.smaller,
  cursor: 'pointer',
});
