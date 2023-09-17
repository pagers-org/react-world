import { style } from "@vanilla-extract/css";

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

export const authorImg = style({
  borderRadius: "99999%",
  width: 32,
  height: 32,
});

export const author = style({
  height: 24,
});

export const authorDescription = style({
  display: "flex",
  flexDirection: "column",
});

export const contentContainer = style({
  display: "flex",
  rowGap: "8px",
  flexDirection: "column",
  cursor: "pointer",
  marginBottom: "20px",
});

export const articleTitle = style({
  height: 29,
});

export const articleContent = style({
  height: 22,
});

export const articleDate = style({
  height: 20,
});

export const articleTagContainer = style({
  height: 24,
  width: 96,
});
