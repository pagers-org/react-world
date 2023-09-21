import { style } from "@vanilla-extract/css";
import { user_menu_down_icon_color_var } from "./container.css";

export const user_menu_contaienr = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "0.3rem",
});

export const user_menu_profile_image = style({
  borderRadius: "10rem",
  margin: "0 0.5rem",
});

export const down_icon = style({
  color: user_menu_down_icon_color_var,
  cursor: "pointer",
});
