import { style } from "@vanilla-extract/css";
import {
  container_background_var,
  container_text_color_var,
} from "./container.css";

export const footer_container = style({
  width: "95%",
  height: "4.5rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "10",
  position: "absolute",
  bottom: "0",
  color: container_text_color_var,
  background: container_background_var,
});
