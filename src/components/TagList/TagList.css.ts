import { style } from '@vanilla-extract/css';

import { vars } from '../../../styles/global.css';

export const tagList = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  float: 'right',
});

export const tag = style({
  fontWeight: vars.font.weight.semiThin,
  fontSize: vars.font.size.little,
  padding: `${vars.space.tinny} ${vars.space.small}`,
  border: `1px solid ${vars.colors.lightGrey}`,
  borderRadius: '10rem',
  color: vars.colors.disabledColor,
  marginRight: vars.space.tinny,
});
