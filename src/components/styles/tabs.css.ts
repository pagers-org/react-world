import { style } from "@vanilla-extract/css";

const basicTabStyles = style({
  padding: "10px 20px",
  textAlign: "center",
  fontSize: 15,
});

export const activeTabStyle = style([
  basicTabStyles,
  {
    borderBottom: "4px solid #5CB85C",
    color: "#5CB85C",
  },
]);

export const inactiveTabStyle = style([
  activeTabStyle,
  {
    color: "#AAAAAA",
    border: "none",
    selectors: {
      "&:hover": {
        color: "#687077",
      },
    },
  },
]);
