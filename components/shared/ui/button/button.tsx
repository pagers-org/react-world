import { forwardRef } from "react";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

const enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type VariantValue = "primary" | "secondary";

const enum Size {
  SMALL = "sm",
  LARGE = "lg",
}

type SizeValue = "sm" | "lg";

type BaseProps = {
  variant?: VariantValue;
  icon?: ReactNode;
  size?: SizeValue;
};

type Props = Override<ComponentPropsWithoutRef<"button">, BaseProps>;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, variant = "primary", size = "sm", icon, ...rest }, ref) => {
    return (
      <button ref={ref} {...rest} className={clsx(styles.base, styles.variant[variant], styles.size[size], className)}>
        {icon ? (
          <>
            {icon}
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

const styles = {
  base: "relative flex cursor-pointer items-center font-normal",
  variant: {
    [Variant.PRIMARY]: "bg-zinc-950 text-white",
    [Variant.SECONDARY]:
      "bg-white text-zinc-950 after:rounded-[4px] after:border-[1px] after:border-zinc-950 after:absolute after:inset-0 after:content-['']",
  },
  size: {
    [Size.SMALL]: "h-7 rounded-[4px] px-3 text-xs gap-[2px]",
    [Size.LARGE]: "text-sm h-9 rounded-[4px] px-6 gap-1",
  },
} as const;
