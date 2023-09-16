import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";

type Props = ComponentPropsWithoutRef<"textarea">;

export const Textarea = forwardRef<HTMLTextAreaElement, Props>(({ className, ...rest }, ref) => {
  return (
    <textarea
      ref={ref}
      rows={3}
      {...rest}
      className={clsx(
        "resize-none rounded-[4px] border-[1px] border-zinc-200 px-4 py-3 text-sm font-normal text-zinc-900 outline-none placeholder:text-sm placeholder:font-normal placeholder:text-zinc-400",
        className,
      )}
    />
  );
});
