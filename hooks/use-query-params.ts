import type { ReadonlyURLSearchParams } from "next/navigation";
import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

import { serializeQuery } from "lib/query";

type Params = Record<string, string | number>;

export const useQueryParams = <T extends Params = Params>() => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = useMemo(() => toQuery(searchParams), [searchParams]);

  const set = (incoming: Params) => {
    router.push(serializeQuery(incoming));
  };

  const append = (incoming: Params) => {
    router.replace(serializeQuery({ ...query, ...incoming }), { scroll: false });
  };

  return {
    query: query as Partial<T>,
    set,
    append,
  };
};

const toQuery = (params: ReadonlyURLSearchParams) => {
  const query: Params = {};

  params.forEach((value, key) => (query[key] = value));

  return query;
};
