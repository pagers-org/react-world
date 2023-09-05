import { style } from "@vanilla-extract/css";
import {
  popular_tags_background_color_var,
  tag_background_color_var,
} from "./container.css";

export const tag_container = style({
  width: "8rem",
  height: "29rem",
  border: "0.5px solid",
  position: "fixed",
  left: "2.5%",
  padding: "0.5rem",
  background: popular_tags_background_color_var,
  borderRadius: "0.5rem",
});

export const popular_tag_text = style({
  borderBottom: "0.3px solid",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "0.3rem 0",
});

export const tag = style({
  padding: "0.3rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "0.3px solid",
  borderRadius: "20rem",
  margin: "0.7rem 0",
  cursor: "pointer",
  background: tag_background_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: "0.8",
  },
});
