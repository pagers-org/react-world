"use client";

import type { PropsWithChildren } from "react";

import { useTabsContext } from "./root.hooks";

type Props = {
  value: string;
};

export const Content = ({ children, value }: PropsWithChildren<Props>) => {
  const { currentValue } = useTabsContext();

  const isCurrent = value === currentValue;

  return isCurrent ? <>{children}</> : null;
};
