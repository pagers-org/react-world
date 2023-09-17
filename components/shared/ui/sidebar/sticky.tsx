"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { useIsOverlap } from "hooks/use-is-overlap";
import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"div"> & {
  offset: number;
};

export const Sticky = forwardRef<HTMLDivElement, Props>(({ children, className, offset, ...rest }, ref) => {
  const [targetRef, isOverlap] = useIsOverlap<HTMLDivElement>(offset);

  return (
    <div ref={targetRef} className="absolute inset-0">
      <div
        ref={ref}
        style={{ top: isOverlap ? offset : "auto" }}
        {...rest}
        className={clsx({ fixed: isOverlap }, className)}
      >
        {children}
      </div>
    </div>
  );
});
