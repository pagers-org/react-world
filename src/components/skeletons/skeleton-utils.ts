import type { JSX } from 'solid-js';
import type { SkeletonStyleProps } from './skeleton.types';

export const styleOptionsToCSS = (
  styleOptions: SkeletonStyleProps & { circle?: boolean },
): JSX.CSSProperties => {
  const {
    direction = 'base',
    duration,
    enableAnimation = true,
    width,
    height,
    borderRadius,
    circle,
    baseColor,
    highlightColor,
  } = styleOptions;
  const style: JSX.CSSProperties = {};

  style['--animation-direction'] = direction;
  if (duration) style['--animation-duration'] = `${duration}s`;
  if (!enableAnimation) style['--pseudo-element-display'] = 'none';

  // @ts-ignore
  if (width) style['width'] = width;
  // @ts-ignore
  if (height) style['height'] = height;
  // @ts-ignore
  if (borderRadius) style['border-radius'] = borderRadius;

  if (circle) style['border-radius'] = '50%';

  if (baseColor) style['--base-color'] = baseColor;
  if (highlightColor) style['--highlight-color'] = highlightColor;

  return style;
};
