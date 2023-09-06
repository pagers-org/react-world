import { vars } from '@/src/styles/theme.css';
import { style } from '@vanilla-extract/css';

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
