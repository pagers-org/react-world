import { style } from "@vanilla-extract/css";
import { softAppear } from "./header.css";
import {
  container_background_var,
  like_button_hover_text_color_var,
  like_button_text_color_var,
  tag_list_color_var,
  article_description_text_color_var,
  article_createdAt_text_color_var,
} from "./container.css";

export const home_articles_container = style({
  padding: "5rem 0",
  animation: `${softAppear} 0.3s ease`,
});

export const home_ariticles_section = style({
  display: "flex",
});

export const section = style({
  margin: "0 1rem",
  padding: "0.5rem",
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    opacity: "0.7",
    transition: "all 0.3s ease",
  },
});

export const selected = style({
  borderBottom: "0.5px solid",
});

export const home_articles_ul = style({
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  placeItems: "center",
  padding: "0",
  "@media": {
    "(max-width : 1300px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "(max-width : 1180px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
    },
  },
});

export const article_container = style({
  display: "flex",
  flexDirection: "column",
  background: container_background_var,
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  margin: "1rem",
  width: "26rem",
  height: "20rem",
  position: "relative",
  transition: "box-shadow 0.2s ease-in 0s, transform 0.2s ease-in 0s",
  ":hover": {
    transform: "translateY(-5px)",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 5px 15px",
  },
  "@media": {
    "(max-width : 1550px)": {
      width: "20rem",
      height: "22rem",
    },
    "(max-width : 1450px)": {
      width: "20rem",
    },
    "(max-width : 1300px)": {
      width: "25rem",
    },
    "(max-width : 1180px)": {
      width: "45rem",
    },
    "(max-width : 800px)": {
      width: "34rem",
    },
    "(max-width : 700px)": {
      width: "30rem",
    },
    "(max-width : 600px)": {
      width: "25rem",
    },
  },
});

export const article_title = style({
  borderBottom: "0.5px solid",
  padding: "1rem",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
});

export const article_description = style({
  margin: "0.5rem 0",
  fontSize: "1rem",
  padding: "1rem",
  WebkitLineClamp: "2",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  color: article_description_text_color_var,
});

export const article_createdAt = style({
  fontSize: "0.8rem",
  marginTop: "3rem",
  marginLeft: "1rem",
  color: article_createdAt_text_color_var,
});

export const user_info_container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "absolute",
  bottom: "0",
  margin: "1rem 0",
  width: "100%",
});

export const user_image_name = style({
  display: "flex",
  // flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "(max-width : 1550px)": {
      display: "flex",
    },
  },
});

export const user_image = style({
  borderRadius: "100%",
  marginLeft: "0.5rem",
});

export const user_name = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s ease",
  margin: "0.5rem",
  ":hover": {
    transition: "all 0.3s ease",
    opacity: "0.7",
  },
});

export const tag_list_container = style({
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  marginRight: "5px",
  color: tag_list_color_var,
});

export const list_tag = style({
  margin: "0.3rem",
  padding: "5px",
  fontSize: "0.8rem",
  border: "0.3px solid",
  borderRadius: "10rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media": {
    "(max-width : 1550px)": {
      margin: "0.5rem",
    },
  },
});

export const like_button = style({
  border: "0.3px solid",
  borderRadius: "5px",
  padding: "0.3rem",
  background: " none",
  color: like_button_text_color_var,
  cursor: "pointer",
  transition: "all 0.3s ease",
  ":hover": {
    color: like_button_hover_text_color_var,
    transition: "all 0.3s ease",
  },
  "@media": {
    "(max-width : 1550px)": {
      margin: "0.5rem 0",
    },
  },
});
