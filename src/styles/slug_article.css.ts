import { style } from "@vanilla-extract/css";
import {
  slug_article_title_text_color_var,
  slug_article_hastag_background_color_var,
  slug_article_hashtag_text_color_var,
  slug_article_profile_line_background_color_var,
} from "./container.css";

export const slug_article_card = style({
  width: "100%",
  height: "100%",
  marginTop: "5.5rem",
});

export const slug_article_header_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const slug_article_title = style({
  fontSize: "3rem",
  lineHeight: "1.5",
  letterSpacing: "--0.004em",
  marginTop: "0",
  fontWeight: "800",
  marginBottom: "2rem",
  wordBreak: "keep-all",
  transition: "color 0.125s ease 0s",
  color: slug_article_title_text_color_var,
  width: "100%",
});

export const slug_article_user_date_container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "1rem",
  width: "100%",
});

export const slug_article_user_date_wrapper = style({});

export const slug_article_user_link = style({
  fontWeight: "bold",
  transition: "all 0.3s ease",
  ":hover": {
    borderBottom: "0.3px solid",
    opacity: 0.8,
  },
});

export const slug_seperator = style({
  margin: "0 0.3rem",
});

export const hastag_container = style({
  marginTop: "0.875rem",
  marginBottom: "0.875rem",
  minHeight: "0.875rem",
});

export const hastag = style({
  marginBottom: "0.875rem",
  padding: "0 1rem",
  height: "2rem",
  borderRadius: "1rem",
  display: "inline-flex",
  alignItems: "center",
  marginRight: "0.875rem",
  textDecoration: "none",
  fontWeight: "500",
  fontSize: "1rem",
  color: slug_article_hashtag_text_color_var,
  background: slug_article_hastag_background_color_var,
});

export const preview_container = style({
  height: "auto",
});

export const slug_article_user_profile_container = style({
  marginTop: "8rem",
  marginBottom: "3rem",
});

export const wrapper_container = style({
  padding: "1rem",
});

export const user_profile = style({
  display: "flex",
  alignItems: "center",
});

export const user_image = style({
  width: "5rem",
  height: "5rem",
  borderRadius: "20rem",
});

export const name_and_description = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  marginLeft: "1rem",
});

export const name = style({
  fontSize: "1.5rem",
  lineHeight: "1.5",
  fontWeight: "bold",
  transition: "all 0.3s ease",
  ":hover": {
    opacity: 0.8,
  },
});

export const description = style({
  whiteSpace: "pre-wrap",
  fontSize: "1.125rem",
  lineHeight: "1.5",
  marginTop: "0.25rem",
  letterSpacing: "-0.004em",
});

export const line = style({
  width: "100%",
  height: "1px",
  marginTop: "2rem",
  marginBottom: "1.5rem",
  background: slug_article_profile_line_background_color_var,
});

export const user_contact = style({
  display: "flex",
});
