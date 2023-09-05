import type { FC, PropsWithChildren, ReactNode } from "react";

export type ComponentWithChildren = FC<PropsWithChildren>;

export const withCombine = ([Component, ...rest]: ComponentWithChildren[], children: ReactNode): ReactNode => {
  return Component ? <Component>{withCombine(rest, children)}</Component> : children;
};
