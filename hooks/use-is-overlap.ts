import type { MutableRefObject } from "react";
import { useCallback, useRef, useState } from "react";

import { useWindowEventListener } from "hooks/use-window-event-listener";

export const useIsOverlap = <T extends HTMLElement>(offset: number): [ref: MutableRefObject<T | null>, boolean] => {
  const [isOverlap, setIsOverlap] = useState<boolean>(false);
  const ref = useRef<T | null>(null);

  const handleScroll = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    const rect = ref.current.getBoundingClientRect();

    setIsOverlap(rect.top <= offset);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useWindowEventListener("scroll", handleScroll);

  return [ref, isOverlap];
};
