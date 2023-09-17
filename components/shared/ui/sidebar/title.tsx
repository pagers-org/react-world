import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"h3">;

export const Title = forwardRef<HTMLHeadingElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <h3 ref={ref} {...rest} className={clsx("mb-3 text-base font-medium text-zinc-800", className)}>
      {children}
    </h3>
  );
});
