"use client";

import { forwardRef } from "react";
import type { Ref, ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"ul">;

const List = ({ children, className, ...rest }: Props, ref: Ref<HTMLUListElement>) => {
  return (
    <ul ref={ref} {...rest} className={clsx("feed-toggle nav nav-pills outline-active", className)}>
      {children}
    </ul>
  );
};

const Default = forwardRef(List) as typeof List;

export { Default as List };
