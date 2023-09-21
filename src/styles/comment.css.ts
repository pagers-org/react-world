import { style } from "@vanilla-extract/css";
import {
  write_comment_text_area_background_color_var,
  write_comment_text_area_text_color_var,
  write_comment_border_color_var,
  write_comment_button_background_color_var,
  write_comment_button_text_color_var,
  update_comment_span_text_color_var,
  comment_body_text_color_var,
} from "./container.css";

export const comment_card = style({
  marginTop: "3rem",
  padding: "1rem",
});

export const comment_count = style({
  fontSize: "1.125rem",
  lineHeight: "1.5",
  fontWeight: "600",
  marginBottom: "1rem",
});

export const write_comment_container = style({});

export const write_comment_text_area = style({
  resize: "none",
  padding: "1rem 1rem 1.5rem",
  outline: "none",
  border: `1px solid ${write_comment_border_color_var}`,
  marginBottom: "1.5rem",
  width: "100%",
  borderRadius: "4px",
  minHeight: "6.125rem",
  fontSize: "1rem",
  lineHeight: "1.75",
  color: write_comment_text_area_text_color_var,
  background: write_comment_text_area_background_color_var,
});

export const write_comment_button_container = style({
  display: "flex",
  justifyContent: "flex-end",
});

export const write_comment_button = style({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  cursor: "pointer",
  outline: "none",
  border: "none",
  borderRadius: "4px",
  padding: "0 1.25rem",
  height: "2rem",
  fontSize: "1rem",
  background: write_comment_button_background_color_var,
  color: write_comment_button_text_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: "0.8",
  },
});

export const existing_comment_container = style({
  marginTop: "2.5rem",
});

export const existing_comment_wrapper = style({
  paddingTop: "1.5rem",
  paddingBottom: "1.5rem",
});

export const existing_user_info_container = style({
  marginBottom: "1.5rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const user_profile = style({
  display: "flex",
  alignItems: "center",
});

export const comment_info = style({
  marginLeft: "1rem",
  lineHeight: "1",
});

export const user_name = style({
  fontSize: "1rem",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  ":hover": {
    opacity: "0.8",
  },
});

export const date = style({
  marginTop: "0.5rem",
  fontSize: "0.875rem",
});

export const actions = style({
  fontSize: "0.875rem",
});

export const comment_body_container = style({
  margin: "1rem 0 ",
  fontSize: "1.125rem",
  transition: "all 0.3s ease",
  lineHeight: "1.7",
  letterSpacing: "-0.004em",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  color: comment_body_text_color_var,
});

export const user_profile_image = style({
  width: "3.375rem",
  height: "3.375rem",
  display: "block",
  borderRadius: "50%",
  objectFit: "cover",
});

export const comment_update_button = style({
  margin: "0 0.5rem",
  fontSize: "0.875rem",
  cursor: "pointer",
  color: update_comment_span_text_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});

export const comment_delete_button = style({
  fontSize: "0.875rem",
  cursor: "pointer",
  color: update_comment_span_text_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});
