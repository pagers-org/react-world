import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"label"> & {
  label: string;
};

export const Label = forwardRef<HTMLLabelElement, Props>(({ children, className, label, ...rest }, ref) => {
  return (
    <label ref={ref} {...rest} className={clsx("flex flex-col gap-3 text-sm font-medium text-zinc-950", className)}>
      {label}
      {children}
    </label>
  );
});
