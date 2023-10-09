import { spring } from 'motion';
import { Options } from '@motionone/solid';
import type { PageTransitionKey } from './page-transition.types';

export const 페이지_애니메이션: Record<PageTransitionKey, Options> = {
  fadeIn: {
    animate: { opacity: [0, 1] },
    transition: { duration: 1, easing: 'ease-in-out' },
  },
  spring: {
    initial: { opacity: 0, y: -200 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 200 },
    transition: { delay: 0.5, easing: spring() },
  },
  book: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0, transition: { delay: 0.05 } },
    transition: { duration: 0.1 },
    exit: { opacity: 0, x: -100 },
  },
};
