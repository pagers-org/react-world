"use client";

import type { ComponentPropsWithoutRef } from "react";
import { forwardRef, useMemo } from "react";

import { clsx } from "lib/clsx";
import type { Override } from "types/utilities";
import { array } from "utils/array";

type BaseProps = {
  total: number;
  currentPage: number;
  onPageChange?: (page: number) => void;
};

type Props = Override<ComponentPropsWithoutRef<"ul">, BaseProps>;

export const Pagination = forwardRef<HTMLUListElement, Props>(
  ({ total, className, currentPage, onPageChange, ...rest }, ref) => {
    const pages = useMemo(() => array(total, (index) => index + 1), [total]);

    const handlePageClick = (page: number) => () => {
      onPageChange?.(page);
    };

    const isCurrent = (page: number) => page === currentPage;

    return (
      <ul ref={ref} {...rest} className={clsx("flex", className)}>
        {pages.map((page) => (
          <li
            key={page}
            className={clsx(styles.base, { [styles.active]: isCurrent(page) })}
            onClick={handlePageClick(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    );
  },
);

const styles = {
  base: "text-md min-w-8 flex h-8 cursor-pointer items-center justify-center rounded-md px-3 font-normal text-zinc-500",
  active: "bg-zinc-950 !text-white",
} as const;
