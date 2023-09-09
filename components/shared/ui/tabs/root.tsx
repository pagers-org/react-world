"use client";

import { createContext, useState, type PropsWithChildren } from "react";

type Props = {
  defaultValue: string;
};

type TabsContextValue = {
  currentValue: string;
  move: (value: string) => void;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export const Root = ({ children, defaultValue }: PropsWithChildren<Props>) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);

  const move = (value: string) => setCurrentValue(value);

  const value: TabsContextValue = {
    currentValue,
    move,
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
};
