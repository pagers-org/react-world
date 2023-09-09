export const isObject = <T extends Record<PropertyKey, unknown>>(arg: unknown): arg is T => {
  return typeof arg === "object" && arg !== null && !Array.isArray(arg);
};
