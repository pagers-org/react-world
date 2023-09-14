import { keyframes, style } from '@vanilla-extract/css';

import { vars } from '@/src/styles/theme.css';

export const container = style({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

const rotate = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

export const spinner = style({
  width: 64,
  height: 64,
  border: '6px solid #fff',
  borderTop: `6px solid ${vars.colors.primary}`,
  borderRadius: '50%',
  animation: `${rotate} 1.5s linear infinite`,
});
