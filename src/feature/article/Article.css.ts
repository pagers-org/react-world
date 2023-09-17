import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

export const container = style({
  display: "flex",
  backgroundColor: "#fff",
  borderRadius: "20px",
  boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  flexDirection: "column",
  padding: "20px",
});

export const headerContainer = style({
  display: "flex",
  justifyContent: "space-between",
  marginBottom: "20px",
  alignItems: "center",
});

export const titleContainer = style({
  display: "flex",
  columnGap: "20px",
  alignItems: "center",
});

export const likeButton = style({
  display: "flex",
  columnGap: "8px",
  alignItems: "center",
  backgroundColor: "#eee",
  border: "none",
  borderRadius: "16px",
  padding: "8px 12px",
  selectors: {
    "&.active": {
      backgroundColor: "red",
    },
    "&:hover": {
      border: "1px solid #919191",
      backgroundColor: "#fff",
    },
  },
});

export const likeCount = style({
  fontSize: "0.8rem",
});

export const authorImg = style({
  borderRadius: "99999%",
});

export const author = style({
  fontSize: "1rem",
  cursor: "pointer",
  ":hover": {
    textDecoration: "underline",
    color: vars.color.hover,
  },
});

export const authorDescription = style({
  display: "flex",
  flexDirection: "column",
});

export const likeIcon = style({
  color: vars.color.red,
  width: 16,
  height: 16,
});

export const contentContainer = style({
  display: "flex",
  rowGap: "8px",
  flexDirection: "column",
  cursor: "pointer",
  marginBottom: "20px",
});

export const articleTitle = style({
  fontWeight: "bold",
  fontSize: "1.2rem",
});

export const articleContent = style({
  color: "#ccc",
  fontSize: "0.9rem",
});

export const articleDate = style({
  color: "#bbb",
  fontSize: "0.8rem",
});

export const articleTagContainer = style({
  display: "flex",
  columnGap: "4px",
});
