"use client";

import { createContext, useState, type PropsWithChildren, useEffect } from "react";

type Props = {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
};

type TabsContextValue = {
  currentValue: string;
  move: (value: string) => void;
};

export const TabsContext = createContext<TabsContextValue | null>(null);

export const Root = ({ children, defaultValue, value, onValueChange }: PropsWithChildren<Props>) => {
  const [currentValue, setCurrentValue] = useState<string>(defaultValue);

  const move = (value: string) => {
    onValueChange?.(value);
    setCurrentValue(value);
  };

  useEffect(() => {
    if (!value) {
      return;
    }

    move(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const context: TabsContextValue = {
    currentValue,
    move,
  };

  return <TabsContext.Provider value={context}>{children}</TabsContext.Provider>;
};
