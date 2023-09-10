import { style } from "@vanilla-extract/css";

export const paginationContainer = style({
  display: "flex",
  justifyContent: "center",
  columnGap: 6,
});

export const pageButton = style({
  display: "flex",
  width: "32px",
  height: "32px",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid #919191",
  backgroundColor: "#fff",
  borderRadius: "99%",
  selectors: {
    "&:hover:not(:disabled)": {
      backgroundColor: "#ddd",
    },
    "&:disabled": {
      cursor: "not-allowed",
    },
  },
});

export const pageButtonText = style({
  lineHeight: 1,

  selectors: {
    [`${pageButton}.active > &`]: {
      fontWeight: "bold",
    },
  },
});

export const icon = style({
  width: "20px",
  height: "20px",

  selectors: {
    [`${pageButton}:disabled > &`]: {
      color: "#b2b2b2",
    },
  },
});
