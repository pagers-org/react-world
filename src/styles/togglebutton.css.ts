import { style } from "@vanilla-extract/css";

export const toggle_label = style({
  width: "5.5rem",
  height: "2rem",
  position: "relative",
  display: "block",
  background: "#ebebeb",
  borderRadius: "17rem",
  marginTop: "5px",
  marginRight: "5px",
  boxShadow:
    "inset 0px 5px 15px rgba(0, 0, 0, 0.4), inset 0px -5px 15px rgba(255, 255, 255, 0.4)",
  cursor: "pointer",
  transition: "all 0.3s",

  "::after": {
    content: "",
    width: "1.5rem",
    height: "1.5rem",
    position: "absolute",
    top: "4px",
    left: "3px",
    borderRadius: "17rem",
    background: "linear-gradient(180deg, #ffcc89, #d8860b)",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s",
  },
});

// input:checked + label
export const toggle_input = style({
  width: "0",
  height: "0",
  visibility: "hidden",
});

// input :checked + label :after
export const toggle_label_checked = style({
  background: "#242424",
  "::after": {
    left: "5.3rem",
    transform: "translateX(-100%)",
    background: "linear-gradient(180deg, #fff, #3a3a3a)",
  },
});

// export const icon = style({
//   position: "absolute",
//   width: "4rem",
//   top: "40px",
//   zIndex: "100",
// });

// export const sun_icon = style({
//   left: "40px",
//   fill: "#fff",
//   transition: "0.3s",
// });

// export const moon_icon = style({
//   left: "340px",
//   fill: "#7e7e7e",
//   transition: "0.3s",
// });
