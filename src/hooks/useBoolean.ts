import { useCallback, useState } from 'react';

export default function useBoolean(initialBool = false) {
  const [bool, setBool] = useState(initialBool);

  const setTrue = useCallback(() => {
    setBool(true);
  }, []);

  const setFalse = useCallback(() => {
    setBool(true);
  }, []);

  const toggle = useCallback(() => {
    setBool((prev) => !prev);
  }, []);

  return {
    bool,
    setTrue,
    setFalse,
    toggle,
  };
}
