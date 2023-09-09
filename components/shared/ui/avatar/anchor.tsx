import Link from "next/link";

import { forwardRef } from "react";
import type { ComponentProps, ComponentPropsWithoutRef } from "react";

import type { Override } from "types/utilities";

type Props = Override<ComponentPropsWithoutRef<"a">, ComponentProps<typeof Link>>;

export const Anchor = forwardRef<HTMLAnchorElement, Props>(({ children, ...rest }, ref) => {
  return (
    <Link ref={ref} {...rest}>
      {children}
    </Link>
  );
});
