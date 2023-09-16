import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const chipWrapper = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 4,
});

export const chip = style({
  padding: 4,
  fontSize: 12,
  background: vars.colors.gray400,
  color: vars.colors.white,
  borderRadius: 24,
});
