import { forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"div">;

export const Root = forwardRef<HTMLDivElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
      className={clsx("flex w-full flex-col border-b-[1px] border-zinc-200 py-5 last:border-b-0", className)}
    >
      {children}
    </div>
  );
});
