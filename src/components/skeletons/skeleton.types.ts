import type { JSX, JSXElement } from 'solid-js';

export type SkeletonStyleProps = {
  baseColor?: string;
  highlightColor?: string;

  width?: string | number;
  height?: string | number;
  borderRadius?: string | number;
  inline?: boolean;

  duration?: number;
  direction?: 'base' | 'alternate' | 'reverse' | 'alternate-reverse';
  enableAnimation?: boolean;
};

export type SkeletonThemeProps = {
  children: JSXElement;
} & SkeletonStyleProps;

export type SkeletonProps = {
  count?: number;
  wrapper?: (props: any) => JSXElement;

  class?: string;
  containerClassName?: string;

  circle?: boolean;
  style?: JSX.CSSProperties;
} & SkeletonStyleProps;
