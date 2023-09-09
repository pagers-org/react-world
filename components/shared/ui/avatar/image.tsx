import NextImage from "next/image";

import type { ComponentProps, ComponentPropsWithoutRef } from "react";
import { forwardRef } from "react";

import type { Override } from "types/utilities";

type Props = Override<ComponentPropsWithoutRef<"img">, ComponentProps<typeof NextImage>>;

export const Image = forwardRef<HTMLImageElement, Props>(({ ...rest }, ref) => {
  return <NextImage ref={ref} {...rest} width={32} height={32} />;
});
