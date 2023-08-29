import { createGlobalTheme } from "@vanilla-extract/css";
import { colors } from "../tokens";

export const vars = createGlobalTheme(":root", {
  colors,
});
