export type Color = keyof typeof colors;

export const colors = {
  primary1: "#5CB85C",
  primary2: "#449d44",
  primary3: "#398439",
  secondary1: "#fff",
  secondary2: "#e6e6e6",
  secondary3: "#d4d4d4",
  info1: "#5bc0de",
  info2: "#31b0d5",
  info3: "#269abc",
  warning1: "#f0ad4e",
  warning2: "#ec971f",
  warning3: "#d58512",
  danger1: "#B85C5C",
  danger2: "#9d4444",
  danger3: "#843939",
} as const;
