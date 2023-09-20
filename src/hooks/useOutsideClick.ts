import { BaseSyntheticEvent, useEffect, useRef } from 'react';

export default function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: BaseSyntheticEvent | MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [callback, ref]);

  return ref;
}
