import { useState, useEffect } from "react";

export const useInput = <T extends Record<string, { value: string }>>(
  initialInputState: T
) => {
  const [inputState, setInputState] = useState<T>(initialInputState);

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;

    setInputState((prevState) => ({
      ...prevState,
      [id]: { value: value },
    }));
  };

  useEffect(() => {
    console.log(inputState);
  }, [inputState]);

  return { inputState, inputHandler };
};
