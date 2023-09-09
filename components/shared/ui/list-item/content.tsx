import Link from "next/link";

import { forwardRef } from "react";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

type Props = Override<ComponentPropsWithoutRef<"a">, ComponentProps<typeof Link>>;

export const Content = forwardRef<HTMLAnchorElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <Link ref={ref} {...rest} className={clsx("preview-link", className)}>
      {children}
    </Link>
  );
});
