import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"p">;

export const Description = forwardRef<HTMLParagraphElement, Props>(({ children, ...rest }, ref) => {
  return (
    <p ref={ref} {...rest}>
      {children}
    </p>
  );
});
