import { style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const content = style({
  display: 'flex',
  maxWidth: 1140,
  margin: '32px auto 0',
  gap: 16,
});

export const tab = style({
  display: 'flex',
  borderBottom: `1px solid ${vars.colors.gray}`,
  gap: 6,
});

export const article = style({
  flex: 3,
});

export const tag = style({
  flex: 1,
});
