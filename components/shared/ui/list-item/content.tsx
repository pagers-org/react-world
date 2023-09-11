import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Content = forwardRef<HTMLDivElement, Props>(({ children, ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      {children}
    </div>
  );
});
