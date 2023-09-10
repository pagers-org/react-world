import { globalStyle, style } from "@vanilla-extract/css";

export const buttonContainer = style({
  display: "inline-flex",
  fontWeight: "500",
});

export const button = style({
  display: "inline-flex",
  fontWeight: "normal",

  lineHeight: "1.25rem",
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  userSelect: "none",
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  borderRadius: "0.25rem",
  cursor: "pointer",
  border: "1px solid transparent",
  transition: "ease-out 200ms",
  position: "relative",
  WebkitAppearance: "button",
  overflow: "visible",
});

globalStyle(`${button}.disabled, ${button}:disabled`, {
  cursor: "not-allowed",
  opacity: 0.65,
  pointerEvents: "none",
});

export const buttonContainerShadow = style({
  boxShadow: "0 1px 0 rgba(0, 0, 0, 0.045)",
});

// todo : 수정예정
export const buttonWFull = style({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

// Button sizes
// 실제 필요한 사이즈 buttonSm, buttonLg
// optional로 xs, md 사이즈 추가

export const buttonXs = style({
  padding: "0.125rem 0.25rem",
  fontSize: "0.75rem",
  lineHeight: "1rem",
  borderRadius: "0.15rem",
});

export const buttonSm = style({
  padding: "0.25rem 0.5rem",
  fontSize: "0.875rem",
  lineHeight: "1.25rem",
  borderRadius: "0.2rem",
});

export const buttonMd = style({
  padding: "0.5rem 1rem",
  fontSize: "1rem",
  lineHeight: "1.5rem",
  borderRadius: "0.25rem",
});

export const buttonLg = style({
  padding: "0.75rem 1.5rem",
  fontSize: "1.25em",
  borderRadius: "0.3rem",
});

// Button variants
export const buttonContained = style({
  color: "#fff",
  backgroundColor: "#5CB85C",
  borderColor: "#5CB85C",
  selectors: {
    [`&:focus`]: {
      color: "#fff",
      backgroundColor: "#449d44",
      borderColor: "#449d44",
    },
    [`&:active`]: {
      color: "#fff",
      backgroundColor: "#449d44",
      borderColor: "#449d44",
    },
  },
});

export const buttonOutlined = style({
  color: "#5CB85C",
  backgroundColor: "transparent",
  backgroundImage: "none",
  borderColor: "#5CB85C",
  selectors: {
    [`&:focus`]: {
      color: "#fff",
      backgroundColor: "#5CB85C",
      borderColor: "#4195CB85C641",
    },
    [`&:active`]: {
      color: "#fff",
      backgroundColor: "#5CB85C",
      borderColor: "#5CB85C",
    },
  },
});

export const buttonLink = style({
  color: "#B8B8B8",
  backgroundColor: "white",
  border: "none",
  selectors: {
    [`&:focus`]: {
      textDecoration: "underline",
    },
  },
});
