import { style } from "@vanilla-extract/css";
import {
  write_form_input_border_bottom_color_var,
  hash_tag_background_color_var,
  user_article_sub_info_text_color_var
} from "./container.css";
import { hashtag_appear } from "./animation.css";

export const user_article_card = style({
  padding: "1rem",
});

export const user_article_container = style({
  paddingBottom: "3rem",
  lineHeight: "1.5",
});

export const notFirst = style({
  borderTop: `0.3px solid ${write_form_input_border_bottom_color_var}`,
});

export const article_title = style({
  marginTop: "2rem",
});

export const tag_container = style({
  marginBottom: "-0.875rem",
  display: "flex",
  flexWrap: "wrap",
  margin: "0.5rem 0",
  padding: "0.5rem",
});

export const hashtag = style({
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

export const sub_info_container = style({
  display: "flex",
  alignItems: "center",
  marginTop: "1rem",
  fontSize: "0.875rem",
  color : user_article_sub_info_text_color_var
});

export const article_likes = style({
  display: "flex",
  alignItems: "center",
});


export const heart_icon = style({

})