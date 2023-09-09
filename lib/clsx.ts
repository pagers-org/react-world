import { isObject } from "utils/guards/object";

type ClassName = string | Record<string, boolean> | null | undefined;

export const clsx = (...args: ClassName[]): string => {
  let str = "";

  for (const arg of args) {
    if (isObject(arg)) {
      for (const key in arg) {
        if (arg[key]) {
          str += " ";
          str += key;
        }
      }
    } else if (arg) {
      str += " ";
      str += arg;
    }
  }

  return str.trim();
};
