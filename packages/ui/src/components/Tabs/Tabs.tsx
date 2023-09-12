"use client";

import { ReactNode, createContext, forwardRef, useContext } from "react";
import { match } from "ts-pattern";
import InlineTab from "./Tab/InlineTab";

interface TabsProps {
  selectedValue: string;
  onChange: (value: string) => void;
  children: ReactNode;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ selectedValue, onChange, children }, ref) => {
    return (
      <TabsContext.Provider value={{ selectedValue, onChange }}>
        <div ref={ref} className="flex gap-4">
          {children}
        </div>
      </TabsContext.Provider>
    );
  }
);

export default Object.assign(Tabs, {
  InlineTab: InlineTab,
});

type TabsContext = Omit<TabsProps, "children">;
const TabsContext = createContext<Partial<TabsContext>>({});

export const useTabs = () => {
  const value = useContext(TabsContext);
  const isExisitAllValue = match(value)
    .with({ onChange: undefined, selectedValue: undefined }, () => false)
    .otherwise(() => true);

  if (!isExisitAllValue) {
    throw "something wrong";
  }
  return value as Omit<TabsProps, "children">;
};
