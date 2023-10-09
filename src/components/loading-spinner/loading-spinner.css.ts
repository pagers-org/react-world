import { keyframes, style } from '@vanilla-extract/css';

const rotate = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export const LoadingSpinnerContainer = style({
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const LoadingSpinnerSVG = style({
  selectors: {
    [`${LoadingSpinnerContainer} &`]: {
      width: '100%',
      height: '100%',
    },
  },
});

export const LoadingSpinnerFirstRect = style({
  transformOrigin: 'center',
  animation: `${rotate} 9s linear infinite`,
});

export const LoadingSpinnerSecondRect = style({
  transformOrigin: 'center',
  animation: `${rotate} 0.75s linear infinite`,
});
