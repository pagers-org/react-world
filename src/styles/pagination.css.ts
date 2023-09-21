import { style } from "@vanilla-extract/css";
import {
  page_button_background_color_var,
  page_button_color_var,
  page_button_active_background_color_var,
  page_button_active_color_var,
} from "./container.css";

export const page_container = style({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const page_button = style({
  padding: "0.7rem",
  border: "0.3px solid",
  fontSize: "1rem",
  cursor: "pointer",
  background: page_button_background_color_var,
  color: page_button_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: "0.8",
    transition: "all 0.3s ease",
  },
});

export const active = style({
  background: page_button_active_background_color_var,
  color: page_button_active_color_var,
});
