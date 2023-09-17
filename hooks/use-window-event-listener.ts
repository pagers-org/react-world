/* global WindowEventMap */

import { useEffect } from "react";

export const useWindowEventListener = <K extends keyof WindowEventMap>(
  type: K,
  listener: (ev: WindowEventMap[K]) => any,
) => {
  useEffect(() => {
    window.addEventListener(type, listener);

    return () => window.removeEventListener(type, listener);
  }, [type, listener]);
};
