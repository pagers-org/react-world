import { type ParentComponent } from 'solid-js';
import { Motion } from '@motionone/solid';
import { 페이지_애니메이션 } from './page-transition.const';
import type { PageTransitionProps } from './page-transition.types';

export const PageTransition: ParentComponent<PageTransitionProps> = (props) => (
  <Motion.div {...페이지_애니메이션[props.type || 'fadeIn']}>{props.children}</Motion.div>
);
