import { keyframes, style } from '@vanilla-extract/css';

const opacity = keyframes({
  '0%': {
    opacity: 1,
  },

  '50%': {
    opacity: 0.4,
  },

  '100%': {
    opacity: 1,
  },
});

export const container = style({
  width: '100%',
  height: 180,
  marginTop: 16,
  backgroundColor: 'rgba(0, 0, 0, 0.11)',
  animation: `${opacity} 1.5s ease-in-out 0.5s infinite`,
});
