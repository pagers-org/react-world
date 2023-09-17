import { useRef, useEffect, useState } from "react";

const useHasScroll = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [hasScroll, setHasScroll] = useState(false);

  useEffect(() => {
    const checkHasScroll = () => {
      const element = elementRef.current;
      if (element) {
        const hasVerticalScroll = element.scrollHeight > element.clientHeight;
        const hasHorizontalScroll = element.scrollWidth > element.clientWidth;
        setHasScroll(hasVerticalScroll || hasHorizontalScroll);
      }
    };

    checkHasScroll();

    // window.addEventListener("resize", checkHasScroll);

    // return () => {
    //   window.removeEventListener("resize", checkHasScroll);
    // };
  }, []);

  return {
    elementRef,
    hasScroll,
  };
};

export default useHasScroll;
