import type { ComponentPropsWithoutRef, ElementType, Ref } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type BaseProps<T extends ElementType> = {
  as?: T;
};

type Props<T extends ElementType> = ComponentPropsWithoutRef<"ul"> & BaseProps<T>;

const Root = <T extends ElementType = "ul">({ children, className, as, ...rest }: Props<T>, ref: Ref<any>) => {
  const Component = as ?? "ul";

  return (
    <Component ref={ref} {...rest} className={clsx("flex list-none flex-wrap", className)}>
      {children}
    </Component>
  );
};

const Default = forwardRef(Root) as typeof Root;

export { Default as Root };
