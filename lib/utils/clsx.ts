import { isObject } from 'lib/type-guard';

type ClassValue = string | Record<string, boolean> | null | undefined;

export const clsx = (...inputs: ClassValue[]): string => {
  const classNames: string[] = [];

  inputs.forEach((input) => {
    if (isObject(input)) {
      Object.entries(input).forEach(([key, value]) => {
        if (value) {
          classNames.push(key);
        }
      });

      return;
    }

    if (input) {
      classNames.push(input);
    }
  });

  return toString(classNames);
};

const toString = (inputs: string[]): string => inputs.join(' ').trim();
