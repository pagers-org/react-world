'use client';

import { createContext, useState, PropsWithChildren } from 'react';

type Props = {
  defaultValue: string;
};

type TabsContextType = {
  currentValue: string;
  onValueChange: (value: string) => void;
};

export const TabsRootContext = createContext<TabsContextType | null>(null);

export const Root = ({ children, defaultValue }: PropsWithChildren<Props>) => {
  const [currentValue, setCurrentValue] = useState(defaultValue);

  const value: TabsContextType = {
    currentValue,
    onValueChange: setCurrentValue,
  };

  return <TabsRootContext.Provider value={value}>{children}</TabsRootContext.Provider>;
};
