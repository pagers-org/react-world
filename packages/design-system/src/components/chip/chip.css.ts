// Chip.css.ts
import { style } from "@vanilla-extract/css";

export const chipContainer = style({
  display: "inline-flex",
  fontWeight: "500",
});

export const base = style({
  color: "#fff",
  display: "inline-flex",
  fontWeight: "normal",
  alignItems: "center",
  justifyContent: "center",
  padding: "0.1rem 0 0.1em 0",
  whiteSpace: "nowrap",
  fontSize: "0.8rem",
  margin: "0 0.2rem 0.2rem 0",
  borderRadius: "0.25rem",
  boxSizing: "border-box",

  lineHeight: "1.25rem",
  textAlign: "center",
  verticalAlign: "middle",
  userSelect: "none",

  position: "relative",
  WebkitAppearance: "button",
  overflow: "visible",
  gap: "0.25rem",
});

export const contained = style({
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#818a91",
  color: "white",
  padding: "0 0.6em",
  borderRadius: "10rem",
  cursor: "pointer",
  transition: "ease-out 200ms",

  selectors: {
    [`&:hover`]: {
      backgroundColor: "#677076",
    },
    [`&:active`]: {
      textDecoration: "underline",
    },
  },
});

export const outlined = style({
  display: "inline-flex",
  alignItems: "center",
  border: "1px solid #ddd",
  color: "#aaa",
  background: "none",
  borderRadius: "10rem",
  padding: "0 0.6em",
  cursor: "default",
});
