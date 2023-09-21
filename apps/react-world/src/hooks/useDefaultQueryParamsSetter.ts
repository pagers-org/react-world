interface DefaultParams {
  [key: string]: string;
}

export const useDefaultQueryParamsSetter = (
  currentParams: URLSearchParams,
  defaultParams: DefaultParams,
) => {
  const newParams = new URLSearchParams(currentParams.toString());
  let hasParamsChanged = false;

  for (const [key, value] of Object.entries(defaultParams)) {
    if (!newParams.has(key)) {
      newParams.set(key, value);
      hasParamsChanged = true;
    }
  }

  return { hasParamsChanged, newParams };
};
