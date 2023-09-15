import { isObject } from "utils/guards/object";

type ClassName = string | Record<string, boolean> | null | undefined;

export const clsx = (...classNames: ClassName[]): string => {
  let appended = "";

  for (const className of classNames) {
    if (isObject(className)) {
      for (const key in className) {
        if (className[key]) {
          appended += `${" "}${key}`;
        }
      }
    } else if (className) {
      appended += `${" "}${className}`;
    }
  }

  return appended.trim();
};
