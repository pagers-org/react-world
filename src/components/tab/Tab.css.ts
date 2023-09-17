import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const container = style({
  position: "relative",
});

export const tabContainer = style({
  position: "relative",
  zIndex: 20,
  width: calc.subtract("100%", "40px"),
  textAlign: "center",
  overflowX: "auto",
  display: "flex",
  flexDirection: "row",
  height: "60px",
  columnGap: 4,
  alignItems: "center",
  marginBottom: "10px",
  rowGap: "10px",

  selectors: {
    "&.expanded": {
      height: "auto",
      overflowX: "hidden",
      flexWrap: "wrap",
    },
  },
});

export const tabItem = style({
  display: "flex",
  alignItems: "center",
  minWidth: "100px",
  cursor: "pointer",
  borderRadius: "20px",
  backgroundColor: "#fff",
  justifyContent: "center",
  height: "40px",
  flex: "none",

  selectors: {
    "&.active": {
      backgroundColor: "black",
      color: "#fff",
    },
  },
});

export const tabItemText = style({
  fontWeight: "bold",
  fontSize: "0.8rem",
  margin: "0 16px",
  lineHeight: 1,
  selectors: {
    [`${tabItem}:hover &`]: {
      textDecoration: "underline",
    },
  },
});

export const expandedIconContainer = style({
  position: "absolute",
  backgroundColor: "#fff",
  borderRadius: "99%",
  right: 0,
  top: 14,
  zIndex: 20,

  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 32,
  height: 32,
});

export const expandedIconButton = style({
  transition: "transform 0.25s ease-in-out",
  selectors: {
    "&.active": {
      transform: "rotate(180deg)",
    },
  },
});

export const expandedIcon = style({
  width: 20,
  height: 20,
});
