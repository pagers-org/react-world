import { useState } from "react";

// 테스트용 코드입니다.

export const useAnimation = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  const startAnimation = () => {
    setIsAnimationActive(true);
  };

  const stopAnimation = () => {
    setIsAnimationActive(false);
  };

  return { isAnimationActive, startAnimation, stopAnimation };
};
