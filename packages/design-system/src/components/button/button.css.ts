import { createThemeContract, globalStyle, style } from "@vanilla-extract/css";

export const themeVars = createThemeContract({
  colors: {
    color: "",
    backgroundColor: "",
    hoverColor: "",
  },
});

export const buttonContainer = style({
  display: "inline-flex",
  fontWeight: "500",
});

export const button = style({
  display: "inline-flex",
  fontWeight: "normal",
  alignItems: "center",

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
  gap: "0.25rem",
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
  color: themeVars.colors.color,
  backgroundColor: themeVars.colors.backgroundColor,
  borderColor: themeVars.colors.backgroundColor,

  selectors: {
    [`&:hover`]: {
      color: themeVars.colors.color,
      backgroundColor: themeVars.colors.hoverColor,
      borderColor: themeVars.colors.hoverColor,
    },
  },
});

export const buttonOutlined = style({
  color: themeVars.colors.color,
  backgroundColor: "transparent",
  backgroundImage: "none",
  borderColor: themeVars.colors.color,
  selectors: {
    [`&:hover`]: {
      color: "#fff",
      backgroundColor: themeVars.colors.color,
      borderColor: themeVars.colors.color,
    },
  },
});

export const buttonLink = style({
  color: themeVars.colors.color,
  backgroundColor: "transparent",
  border: "none",
  selectors: {
    [`&:hover`]: {
      textDecoration: "underline",
    },
  },
});
