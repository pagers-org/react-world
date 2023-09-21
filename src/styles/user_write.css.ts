import { style } from "@vanilla-extract/css";
import {
  write_form_input_border_bottom_color_var,
  write_form_input_text_color_var,
  tag_text_color_var,
  hash_tag_background_color_var,
  write_exit_button_background_color_var,
  write_exit_button_text_color_var,
  write_submit_button_background_color_var,
  write_submit_button_text_color_var,
} from "./container.css";
import { hashtag_appear } from "./animation.css";

export const user_write_card = style({
  fontSize: "1.125rem",
});

export const user_write_container = style({
  display: "flex",
  flexDirection: "column",
});

export const title_container = style({});

export const title_input = style({
  width: "100%",
  border: "none",
  borderBottom: `0.3px solid ${write_form_input_border_bottom_color_var}`,
  color: write_form_input_text_color_var,
  background: "none",
  margin: "1rem 0",
  padding: "1rem",
  height: "5rem",
  fontSize: "2rem",
});

export const description_container = style({});

export const description_input = style({
  width: "100%",
  border: "none",
  borderBottom: `0.3px solid ${write_form_input_border_bottom_color_var}`,
  color: write_form_input_text_color_var,
  background: "none",
  margin: "1rem 0",
  padding: "1rem",
  height: "4rem",
  fontSize: "2rem",
});

export const body_container = style({});

export const body_input = style({
  width: "100%",
  height: "auto",
});

export const tag_and_input_container = style({
  display: "flex",
  flexWrap: "wrap",
  margin: "0.5rem 0",
  padding: "0.5rem",
  borderBottom: `0.3px solid ${write_form_input_border_bottom_color_var}`,
});

export const tagList_container = style({
  background: "transparent",
  display: "inline-flex",
  outline: "none",
  cursor: "text",
  fontSize: "1.125rem",
  lineHeight: "2rem",
  marginBottom: "0.75rem",
  minWidth: "28rem",
  border: "none",
});

export const tag = style({
  color: tag_text_color_var,
});

export const preview_container = style({
  background: "#1E1E1E !important",
});

export const write_and_preview_container = style({
  display: "flex",
});

export const hash_tag = style({
  fontSize: "1rem",
  display: "inline-flex",
  alignItems: "center",
  height: "2rem",
  marginRight: "0.75rem",
  borderRadius: "1rem",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  background: hash_tag_background_color_var,
  transition: "all 0.125s ease-in 0s",
  cursor: "pointer",
  marginBottom: "0.75rem",
  animation: `0.125s ease-in-out 0s 1 normal forwards running ${hashtag_appear}`,
});

export const button_container = style({
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  margin: "2rem 0",
});

export const button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
  border: "none",
  borderRadius: "0.5rem",
  padding: "0 1.25rem",
  height: "3rem",
  width: "10rem",
  fontSize: "1rem",
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});

export const exit = style({
  background: write_exit_button_background_color_var,
  color: write_exit_button_text_color_var,
});

export const submit = style({
  background: write_submit_button_background_color_var,
  color: write_submit_button_text_color_var,
});
