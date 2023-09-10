import { style } from "@vanilla-extract/css";

export const tabContainer = style({
  position: "relative",
  zIndex: 20,
  width: "100%",
  textAlign: "center",
  fontSize: "0.8rem",
  fontWeight: "400",
  overflowX: "auto",
  display: "flex",
  flexDirection: "row",
  height: "100%",
  marginBottom: "20px",
  columnGap: 4,
});

export const tabItem = style({
  display: "flex",
  alignItems: "center",
  height: "100%",
  minWidth: "100px",
  flex: "none",
  cursor: "pointer",
  borderRadius: "20px",
  padding: "10px 16px",
  backgroundColor: "#fff",
  justifyContent: "center",

  selectors: {
    "&.active": {
      backgroundColor: "black",
      color: "#fff",
    },
  },
});

export const tabItemText = style({
  fontWeight: "bold",
  selectors: {
    [`${tabItem}:hover &`]: {
      textDecoration: "underline",
    },
  },
});
