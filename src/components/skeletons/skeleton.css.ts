import { keyframes, style } from '@vanilla-extract/css';
import { createGlobalTheme } from '@vanilla-extract/css';

const vars = createGlobalTheme(':root', {
  'base-color': '#ebebeb',
  'highlight-color': '#f5f5f5',
  'animation-duration': '1.5s',
  'animation-direction': 'normal',
  'pseudo-element-display': 'block',
});

const loadingSkeleton = keyframes({
  '100%': {
    transform: 'translateX(100%)',
  },
});

export const SkeletonContainer = style({
  backgroundColor: vars['base-color'],

  width: '100%',
  borderRadius: '0.25rem',
  display: 'inline-flex',
  lineHeight: 1,

  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,

  '::after': {
    content: '',
    display: vars['pseudo-element-display'],
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: vars['base-color'],
    backgroundRepeat: 'no-repeat',
    backgroundImage: `linear-gradient(
        90deg,
        ${vars['base-color']},
        ${vars['highlight-color']},
        ${vars['base-color']}
    )`,
    transform: 'translateX(-100%)',

    animationName: loadingSkeleton,
    animationDirection: vars['animation-direction'],
    animationDuration: vars['animation-duration'],
    animationTimingFunction: 'ease-in-out',
    animationIterationCount: 'infinite',
  },
});
