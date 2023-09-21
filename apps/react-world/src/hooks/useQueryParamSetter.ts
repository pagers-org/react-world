import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface DefaultParams {
  [key: string]: string;
}

export const useQueryParamSetter = (
  currentParams: URLSearchParams,
  defaultParams: DefaultParams,
) => {
  const navigate = useNavigate();
  const [finalParams, setFinalParams] =
    useState<URLSearchParams>(currentParams);

  useEffect(() => {
    let shouldRedirect = false;
    const newParams = new URLSearchParams(currentParams.toString());

    for (const [key, value] of Object.entries(defaultParams)) {
      if (!newParams.has(key)) {
        newParams.set(key, value);
        shouldRedirect = true;
      }
    }

    if (shouldRedirect) {
      navigate(`?${newParams.toString()}`, { replace: true });
      setFinalParams(newParams);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return finalParams;
};
