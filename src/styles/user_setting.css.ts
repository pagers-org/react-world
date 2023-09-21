import { style } from "@vanilla-extract/css";
import {
  user_setting_delete_image_button_background_color_var,
  user_setting_delete_image_button_text_color_var,
  user_setting_upload_image_button_background_color_var,
  user_setting_upload_image_button_text_color_var,
} from "./container.css";

export const image_info_section = style({
  display: "flex",
  margin: "2rem 0",
  padding: "1rem",
});

export const avatar_image_container = style({
  paddingRight: "1.5rem",
  display: "flex",
  flexDirection: "column",
});

export const user_info_container = style({
  flex: "1 1 0%",
  paddingLeft: "1.5rem",
  borderLeft: `0.3px solid`,
});

export const avatar_image = style({
  borderRadius: "20rem",
  objectFit: "cover",
  width: "8rem",
  height: "8rem",
  display: "block",
  marginBottom: "1.25rem",
});

export const upload_button = style({
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
  background: user_setting_upload_image_button_background_color_var,
  color: user_setting_upload_image_button_text_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});

export const image_delete_button = style({
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
  borderTop: "0.5rem",
  background: user_setting_delete_image_button_background_color_var,
  color: user_setting_delete_image_button_text_color_var,
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});

export const social_email_section = style({
  marginTop: "4rem",
});

export const email_container = style({});

export const user_withdraw_container = style({});

export const wrapper = style({
  display: "flex",
});

export const title_wrapper = style({});

export const content_container = style({});

export const content = style({});

export const button_container = style({});

export const button = style({});

export const withdraw_button_container = style({});

export const withdraw_button = style({});
