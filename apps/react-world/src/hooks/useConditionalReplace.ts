import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useConditionalReplace = (
  shouldReplace: boolean,
  newParams: string,
) => {
  const navigate = useNavigate();

  useEffect(
    () => {
      if (shouldReplace) {
        navigate(newParams, { replace: true });
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [], // 첫 마운트 시 한 번만 실행되도록 빈 배열 주입
  );
};
