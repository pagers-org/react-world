import { style } from "@vanilla-extract/css";
import {
  category_selected_color_var,
  category_color_var,
} from "./container.css";

export const category_card = style({
  marginTop: "0.5rem",
  marginBottom: "4.5rem",
  display: "flex",
  justifyContent: "center",
});

export const category_container = style({
  display: "flex",
  position: "relative",
});

export const selected = style({
  color: `${category_selected_color_var} !important`,
  borderBottom: "3px solid",
});

export const categoryStyle = style({
  color: category_color_var,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.125rem",
  width: "10rem",
  height: "3rem",
  transition: "all 0.3s ease",
  fontWeight: "600",
  cursor: "pointer",
});
