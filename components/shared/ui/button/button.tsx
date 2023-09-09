import { forwardRef, type ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

type Variant = "primary" | "secondary" | "info" | "success" | "warning" | "danger";

type Size = "sm" | "lg";

type BaseProps = {
  variant?: Variant;
  size?: Size;
  outline?: boolean;
};

type Props = Override<ComponentPropsWithoutRef<"button">, BaseProps>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "primary", size = "sm", outline = false, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        {...rest}
        className={clsx("btn", outline ? `btn-outline-${variant}` : `btn-${variant}`, `btn-${size}`, className)}
      >
        {children}
      </button>
    );
  },
);
