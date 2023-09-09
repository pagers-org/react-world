"use client";

import { useContext } from "react";

import { TabsContext } from "./root";

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabsContext should be used within Root");
  }

  return context;
};
