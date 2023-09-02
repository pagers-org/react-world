import { type Accessor, createMemo, createSignal, type Setter } from 'solid-js';
import { noop } from '@/utils';
import { 페이지네이션_기본_옵션 } from './Pagination.const';
import type { PaginationOptions, PaginationProps } from './Pagination.types';
import { access, normalizeOption } from './Pagination.utils';
import type { MaybeAccessor } from '@global/solid-util-types';

export const createPagination = (
  options?: MaybeAccessor<PaginationOptions>,
): [props: Accessor<PaginationProps>, page: Accessor<number>, setPage: Setter<number>] => {
  const opts = createMemo(() => Object.assign({}, 페이지네이션_기본_옵션, access(options)));
  const [page, _setPage] = createSignal(opts().initialPage || 1);
  const setPage = (p: number | ((_p: number) => number)) => {
    if (typeof p === 'function') {
      p = p(page());
    }
    return p >= 1 && p <= opts().pages ? _setPage(p) : page();
  };

  const maxPages = createMemo(() => Math.min(opts().maxPages, opts().pages));

  const pages = createMemo<PaginationProps>(
    (previous) =>
      [...Array(opts().pages)].map(
        (_, i) =>
          previous[i] ||
          ((pageNo: number) =>
            Object.defineProperties(
              {
                children: pageNo.toString(),
                onClick: [setPage, pageNo] as const,
              },
              {
                'aria-current': {
                  get: () => (page() === pageNo ? 'true' : undefined),
                  set: noop,
                  enumerable: true,
                },
                page: { value: pageNo, enumerable: false },
              },
            ))(i + 1),
      ),
    [],
  );

  const first = Object.defineProperties(
    {
      onClick: () => setPage(1),
    } as unknown as PaginationProps[number],
    {
      disabled: { get: () => page() <= 1, set: noop, enumerable: true },
      children: { get: () => opts().firstContent, set: noop, enumerable: true },
      page: { get: () => undefined, enumerable: false },
    },
  );
  const back = Object.defineProperties(
    {
      onClick: () => setPage((p) => (p > 1 ? p - 1 : p)),
    } as unknown as PaginationProps[number],
    {
      disabled: { get: () => page() <= 1, set: noop, enumerable: true },
      children: { get: () => opts().prevContent, set: noop, enumerable: true },
      page: { get: () => Math.min(1, page() - 1), enumerable: false },
    },
  );
  const next = Object.defineProperties(
    {
      // eslint-disable-next-line solid/reactivity
      onClick: () => setPage((p) => (p < opts().pages ? p + 1 : p)),
    } as unknown as PaginationProps[number],
    {
      disabled: { get: () => page() >= opts().pages, set: noop, enumerable: true },
      children: { get: () => opts().nextContent, set: noop, enumerable: true },
      page: { get: () => Math.max(opts().pages, page() + 1), enumerable: false },
    },
  );
  const last = Object.defineProperties(
    {
      onClick: () => setPage(opts().pages),
    } as unknown as PaginationProps[number],
    {
      disabled: { get: () => page() >= opts().pages, set: noop, enumerable: true },
      children: { get: () => opts().lastContent, set: noop, enumerable: true },
      page: { get: () => opts().pages, enumerable: false },
    },
  );
  const start = createMemo(() =>
    Math.min(opts().pages - maxPages(), Math.max(1, page() - (maxPages() >> 1)) - 1),
  );
  const showFirst = createMemo(() =>
    normalizeOption({
      key: 'showFirst',
      value: opts().showFirst,
      page: 1,
      pages: opts().pages,
    }),
  );
  const showPrev = createMemo(() =>
    normalizeOption({
      key: 'showPrev',
      value: opts().showPrev,
      page: page(),
      pages: opts().pages,
    }),
  );
  const showNext = createMemo(() =>
    normalizeOption({
      key: 'showNext',
      value: opts().showNext,
      page: page(),
      pages: opts().pages,
    }),
  );
  const showLast = createMemo(() =>
    normalizeOption({
      key: 'showLast',
      value: opts().showLast,
      page: page(),
      pages: opts().pages,
    }),
  );

  const paginationProps = createMemo<PaginationProps>(() => {
    const props = [];
    if (showFirst()) {
      props.push(first);
    }

    if (showPrev()) {
      props.push(back);
    }

    props.push(...pages().slice(start(), start() + maxPages()));

    if (showNext()) {
      props.push(next);
    }

    if (showLast()) {
      props.push(last);
    }

    return props;
  });

  return [paginationProps, page, setPage as Setter<number>];
};
