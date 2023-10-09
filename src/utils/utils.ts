import type { Noop } from './utils.types';
import type { MaybeAccessor, MaybeAccessorValue } from '@global/solid-util-types';

/** no operation */
export const noop = (() => void 0) as Noop;

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
