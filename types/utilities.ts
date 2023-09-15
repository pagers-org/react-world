export type Override<T, U> = Omit<T, keyof U> & U;

export type ObjectType = Record<PropertyKey, unknown>;

export type Maybe<T> = T | undefined;
