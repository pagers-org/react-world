import { RefObject, useEffect } from 'react';

const useIntersectionObserver = (cb: () => void, ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          cb();
        });
      },
      { threshold: 0.4 } //40%가 보일때를 기본 값으로 설정 했습니다.
    );

    const currentRef = ref?.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [cb, ref]);
};

export default useIntersectionObserver;
