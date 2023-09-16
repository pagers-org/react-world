"use client";

import type { ComponentPropsWithoutRef, MouseEventHandler } from "react";
import { forwardRef } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";

import { useTabsContext } from "./root.hooks";

type BaseProps = {
  value: string;
};

type Props = Override<ComponentPropsWithoutRef<"li">, BaseProps>;

export const Trigger = forwardRef<HTMLLIElement, Props>(({ children, className, value, onClick, ...rest }, ref) => {
  const { currentValue, move } = useTabsContext();

  const isCurrent = value === currentValue;

  const handleClick: MouseEventHandler<HTMLLIElement> = (e) => {
    move(value);
    onClick?.(e);
  };

  return (
    <li
      ref={ref}
      {...rest}
      className={clsx(styles.base, { [styles.active]: isCurrent }, className)}
      onClick={handleClick}
    >
      {children}
    </li>
  );
});

const styles = {
  base: "flex h-9 cursor-pointer items-center justify-center px-8 text-base font-medium text-zinc-400",
  active:
    "relative !text-zinc-800 after:absolute after:inset-0 after:border-b-2 after:border-zinc-800 after:content-['']",
} as const;
