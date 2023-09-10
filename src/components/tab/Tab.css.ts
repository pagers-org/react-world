import { style } from "@vanilla-extract/css";

export const tabContainer = style({
  position: "relative",
  zIndex: 20,
  width: "100%",
  textAlign: "center",
  overflowX: "auto",
  display: "flex",
  flexDirection: "row",
  height: "60px",
  columnGap: 4,
  alignItems: "center",
  marginBottom: "10px",
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
