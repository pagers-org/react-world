import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"p">;

export const Description = forwardRef<HTMLParagraphElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <p ref={ref} {...rest} className={clsx("mb-1 text-sm font-light text-zinc-600", className)}>
      {children}
    </p>
  );
});
