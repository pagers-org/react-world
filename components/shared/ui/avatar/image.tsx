import NextImage from "next/image";

import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

type Props = Override<ComponentPropsWithoutRef<"img">, ComponentProps<typeof NextImage>>;

export const Image = forwardRef<HTMLImageElement, Props>(({ className, ...rest }, ref) => {
  return <NextImage ref={ref} {...rest} className={clsx("rounded-full", className)} width={36} height={36} />;
});
