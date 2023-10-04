import { style } from "@vanilla-extract/css";

const pageBtnStyle = style({
  border: "1px solid #ccc",
  padding: "5px 10px",
});

export const activePageBtnStyle = style([
  pageBtnStyle,
  {
    backgroundColor: "#5CB85C",
    color: "white",
  },
]);

export const inactivePageBtnStyle = style([pageBtnStyle, { color: "#5CB85C" }]);
