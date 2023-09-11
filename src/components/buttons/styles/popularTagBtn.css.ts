import { style } from "@vanilla-extract/css";

export const popularTagBtnStyles = style({
  padding: "3px 6px",
  borderRadius: 9999,
  fontSize: 12,
  color: "white",
  backgroundColor: "#818a91",
  selectors: {
    "&:hover": {
      backgroundColor: "#687077",
    },
  },
});

export const selectedPopularTagStyles = style([
  popularTagBtnStyles,
  {
    backgroundColor: "#687077",
    textDecoration: "underline",
  },
]);
