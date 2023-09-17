import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"div">;

export const Content = forwardRef<HTMLDivElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={clsx("w-56 rounded-md bg-zinc-100 px-3 py-2", className)}>
      {children}
    </div>
  );
});
