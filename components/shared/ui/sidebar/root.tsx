import type { ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

const enum Align {
  LEFT = "left",
  RIGHT = "right",
}

type AlignValue = "left" | "right";

type BaseProps = {
  align: AlignValue;
  top?: number;
};

type Props = Override<ComponentPropsWithoutRef<"div">, BaseProps>;

export const Root = forwardRef<HTMLDivElement, Props>(({ children, className, align, top = 0, ...rest }, ref) => {
  return (
    <div ref={ref} style={{ top }} {...rest} className={clsx(styles.base, styles.align[align], className)}>
      <div className="relative">{children}</div>
    </div>
  );
});

const styles = {
  base: "absolute px-10",
  align: {
    [Align.LEFT]: "right-[100%]",
    [Align.RIGHT]: "left-[100%]",
  },
} as const;
