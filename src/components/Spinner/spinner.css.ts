import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const container = style({});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  width: 24,
  height: 24,
  border: '3px solid #fff',
  borderTop: `3px solid ${vars.colors.black}`,
  borderRadius: '50%',
  animation: `${rotate} 1.2s linear infinite`,
});
