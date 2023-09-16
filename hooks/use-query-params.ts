import type { ReadonlyURLSearchParams } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

import { serializeQuery } from "lib/query";

type Query = Record<string, string | number>;

export const useQueryParams = <T extends Query = Query>() => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = useMemo(() => toQuery(searchParams), [searchParams]);

  const set = (incoming: Query) => {
    router.push(serializeQuery(incoming));
  };

  const append = (incoming: Query) => {
    router.replace(serializeQuery({ ...query, ...incoming }), { scroll: false });
  };

  return {
    query: query as Partial<T>,
    set,
    append,
  };
};

const toQuery = (params: ReadonlyURLSearchParams) => {
  const query: Query = {};

  params.forEach((value, key) => (query[key] = value));

  return query;
};
