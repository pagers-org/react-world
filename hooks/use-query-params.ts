import type { ReadonlyURLSearchParams } from "next/navigation";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

import { serializeQuery } from "lib/query";
import { omit } from "utils/object";

type Query = Record<string, string | number>;

export const useQueryParams = <T extends Query = Query>() => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const query = useMemo(() => toQuery(searchParams), [searchParams]);

  const set = (incoming: Query) => {
    router.push(join(pathname, serializeQuery(incoming)));
  };

  const append = (incoming: Query) => {
    router.replace(join(pathname, serializeQuery({ ...query, ...incoming })), { scroll: false });
  };

  const remove = (...keys: string[]) => {
    router.replace(join(pathname, serializeQuery(omit(query, keys))), { scroll: false });
  };

  return {
    query: query as Partial<T>,
    set,
    append,
    remove,
  };
};

const join = (...args: string[]) => args.join("");

const toQuery = (params: ReadonlyURLSearchParams) => {
  const query: Query = {};

  params.forEach((value, key) => (query[key] = value));

  return query;
};
