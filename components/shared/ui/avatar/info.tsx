import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"div">;

export const Info = forwardRef<HTMLDivElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest} className={clsx("flex flex-col", className)}>
      {children}
    </div>
  );
});
