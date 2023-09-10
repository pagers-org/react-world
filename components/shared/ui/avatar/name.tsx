import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"span">;

export const Name = forwardRef<HTMLSpanElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <span ref={ref} {...rest} className={clsx("text-sm font-normal text-zinc-800", className)}>
      {children}
    </span>
  );
});
