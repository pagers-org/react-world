import type { ObjectType } from "types/utilities";

export const omit = <T extends ObjectType, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => {
  const copied = { ...obj };

  for (const key of keys) {
    delete copied[key];
  }

  return copied as Omit<T, K>;
};
