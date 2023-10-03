import { style } from '@vanilla-extract/css';

import { vars } from './style.css';

export const hero = style({
  backgroundColor: vars.color.brand,
  color: vars.color.white,
  padding: vars.space.medium,
});
