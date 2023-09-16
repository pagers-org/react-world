import { style } from '@vanilla-extract/css';

import { vars } from '../../styles/global.css';

export const tabItem = style({
  fontSize: vars.font.size.highlight,
  fontWeight: vars.font.weight.extraThin,
  background: vars.colors.white,
  borderBottom: `2px solid ${vars.colors.mainColor}`,
  color: vars.colors.mainColor,
  paddingBottom: vars.space.smaller,
  cursor: 'pointer',
});
