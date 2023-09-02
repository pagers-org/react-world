import { 페이지네이션_기본_옵션 } from './Pagination.const';
import type { NormalizeOptionTypes } from './Pagination.types';
import type { MaybeAccessor, MaybeAccessorValue } from '@global/solid-util-types';

/**
 * Accesses the value of a MaybeAccessor
 * @example
 * ```ts
 * access("foo") // => "foo"
 * access(() => "foo") // => "foo"
 * ```
 */
export const access = <T extends MaybeAccessor<any>>(v: T): MaybeAccessorValue<T> =>
  typeof v === 'function' && !v.length ? v() : v;

export const normalizeOption = ({ key, value, page, pages }: NormalizeOptionTypes) =>
  typeof value === 'boolean'
    ? value
    : typeof value === 'function'
    ? value(page, pages)
    : 페이지네이션_기본_옵션[key];
