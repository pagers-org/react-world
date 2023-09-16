import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"form">;

export const Root = forwardRef<HTMLFormElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <form ref={ref} {...rest} className={clsx("flex flex-col gap-5", className)}>
      {children}
    </form>
  );
});
