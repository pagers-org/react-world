import { vars } from '@/src/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 1140,
  margin: '0 auto',
  padding: '8px 16px',
});

export const headerLeft = style({
  color: vars.color.primary,
  fontSize: 24,
  fontWeight: 700,
});

export const headerRight = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
});
