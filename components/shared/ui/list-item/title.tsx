import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"h1">;

export const Title = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <h1 ref={ref} {...rest} className={clsx("mb-1 text-xl font-semibold text-zinc-800", className)}>
      {children}
    </h1>
  );
});
