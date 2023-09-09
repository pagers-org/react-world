export const array = <T>(count: number, fill: (index: number) => T): T[] => {
  return Array.from({ length: count }).map((_, index) => fill(index));
};
