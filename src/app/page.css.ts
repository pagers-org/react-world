import { style } from "@vanilla-extract/css";

export const contentContainer = style({
  padding: 40,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "1rem",
  "@media": {
    "screen and (max-width: 976px)": {
      flexDirection: "column",
    },
  },
});
