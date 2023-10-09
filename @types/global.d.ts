declare module '@global/solid-util-types' {
  import type { Accessor } from 'solid-js';
  /**
   * T or a reactive/non-reactive function returning T
   */
  type MaybeAccessor<T> = T | Accessor<T>;

  /**
   * Accessed value of a MaybeAccessor
   * @example
   * ```ts
   * MaybeAccessorValue<MaybeAccessor<string>>
   * // => string
   * MaybeAccessorValue<MaybeAccessor<() => string>>
   * // => string | (() => string)
   * MaybeAccessorValue<MaybeAccessor<string> | Function>
   * // => string | void
   * ```
   */
  type MaybeAccessorValue<T extends MaybeAccessor<any>> = T extends () => any ? ReturnType<T> : T;
}
