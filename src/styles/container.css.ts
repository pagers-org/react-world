import { createVar, style } from "@vanilla-extract/css";

export const container_background_var = createVar();
export const container_text_color_var = createVar();
export const like_button_background_var = createVar();
export const like_button_text_color_var = createVar();
export const like_button_hover_text_color_var = createVar();
export const tag_list_color_var = createVar();
export const article_description_text_color_var = createVar();
export const article_createdAt_text_color_var = createVar();
export const loading_spiiner_border_var = createVar();
export const loading_spiiner_border_top_var = createVar();
export const page_button_background_color_var = createVar();
export const page_button_color_var = createVar();
export const page_button_active_background_color_var = createVar();
export const page_button_active_color_var = createVar();
export const popular_tags_background_color_var = createVar();
export const tag_background_color_var = createVar();

export const color_state = style({
  vars: {
    [container_background_var]: "white",
    [container_text_color_var]: "#000",
    [like_button_background_var]: "white",
    [like_button_text_color_var]: "#b33232",
    [like_button_hover_text_color_var]: "#5d4f4f",
    [tag_list_color_var]: "##3a3a3a",
    [article_description_text_color_var]: "#636363",
    [article_createdAt_text_color_var]: "#6b6b6b",
    [loading_spiiner_border_var]: "#db6464",
    [loading_spiiner_border_top_var]: " #f1f1f1",
    [page_button_background_color_var]: "#fff",
    [page_button_color_var]: "#404040",
    [page_button_active_background_color_var]: "#e5d1d1",
    [page_button_active_color_var]: "#9c8b8b",
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [container_background_var]: "#1f1f1f",
        [container_text_color_var]: "#fff",
        [like_button_background_var]: "#1f1f1f",
        [like_button_text_color_var]: "#e367a5",
        [like_button_hover_text_color_var]: "#d189ad",
        [tag_list_color_var]: " #e3e3e3",
        [article_description_text_color_var]: "#b9b9b9",
        [article_createdAt_text_color_var]: "#929292",
        [loading_spiiner_border_var]: "#f3f3f3",
        [loading_spiiner_border_top_var]: "#383636",
        [page_button_background_color_var]: "#1e1e1e",
        [page_button_color_var]: "#ececec",
        [page_button_active_background_color_var]: "#535353",
        [page_button_active_color_var]: "",
        [popular_tags_background_color_var]: "#1b1b1b",
        [tag_background_color_var]: "#282828",
      },
    },
  },
});
