import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const paginationButton = style({
  padding: 12,
  border: `1px solid ${vars.colors.gray}`,
  color: vars.colors.primary,
});

export const activePaginationButton = style({
  color: vars.colors.white,
  background: vars.colors.primary,
});
