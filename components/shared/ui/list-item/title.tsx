import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"h1">;

export const Title = forwardRef<HTMLHeadingElement, Props>(({ children, ...rest }, ref) => {
  return (
    <h1 ref={ref} {...rest}>
      {children}
    </h1>
  );
});
