'use client';

import { ReadonlyURLSearchParams } from 'next/navigation';

export const getSearchParams = (searchParams: ReadonlyURLSearchParams) => {
  return [...searchParams.entries()].reduce((acc, cur) => {
    const [key, value] = cur;
    return { ...acc, [key]: value };
  }, {});
};
