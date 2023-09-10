import type { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

const enum Variant {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}
type VariantValue = "primary" | "secondary";

type BaseProps<T extends ElementType> = {
  as?: T;
  variant?: VariantValue;
};

type Props<T extends ElementType> = Override<ComponentPropsWithoutRef<T>, BaseProps<T>>;

const Item = <T extends ElementType = "li">(
  { children, as, className, variant = "primary", ...rest }: Props<T>,
  ref: Ref<any>,
) => {
  const Component = as ?? "li";

  return (
    <Component ref={ref} {...rest} className={clsx(styles.base, styles.variant[variant], className)}>
      {children}
    </Component>
  );
};

const styles = {
  base: "relative mb-[6px] mr-[6px] cursor-pointer rounded-3xl px-3 py-[3px] text-[10px] font-normal tracking-wider last:mr-0",
  variant: {
    [Variant.PRIMARY]: "bg-zinc-950 text-white",
    [Variant.SECONDARY]:
      "bg-white text-zinc-950 after:absolute after:inset-0 after:rounded-3xl after:border-[1px] after:border-zinc-950 after:content-['']",
  },
} as const;

const Default = forwardRef(Item) as typeof Item;

export { Default as Item };
