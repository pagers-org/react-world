import type { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

type Variant = "default" | "primary" | "success" | "info" | "warning" | "danger";

type BaseProps<T extends ElementType> = {
  as?: T;
  variant?: Variant;
  outline?: boolean;
};

type Props<T extends ElementType> = Override<ComponentPropsWithoutRef<T>, BaseProps<T>>;

const Item = <T extends ElementType = "li">(
  { children, as, className, variant = "default", outline = false, ...rest }: Props<T>,
  ref: Ref<any>,
) => {
  const Component = as ?? "li";

  return (
    <Component ref={ref} {...rest} className={clsx(className, `tag-pill tag-${variant}`, { "tag-outline": outline })}>
      {children}
    </Component>
  );
};

const Default = forwardRef(Item) as typeof Item;

export { Default as Item };
