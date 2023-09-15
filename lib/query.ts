import type { ObjectType } from "types/utilities";

export const serializeQuery = <T extends ObjectType>(obj: T): string => {
  return Object.entries(obj).reduce(
    (prev, [key, value]) => (prev += `${prev.length === 0 ? "?" : "&"}${key}=${value}`),
    "",
  );
};
