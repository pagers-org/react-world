import { style, keyframes, createVar } from "@vanilla-extract/css";
import {
  container_background_var,
  container_text_color_var,
} from "./container.css";

export const softAppear = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const header_container = style({
  top: "0",
  left: "0",
  right: "0",
  position: "fixed",
  margin: "auto",
  zIndex: "700",
  width: "95%",
  height: "4.5rem",
  boxShadow: "rgba(0, 0, 0, 0.08) 0px 0px 8px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  animation: `${softAppear} 0.3s ease-in forwards`,
  transition: "all 0.3s ease",
  color: container_text_color_var,
  background: container_background_var,
});

export const header_category_container = style({
  display: "flex",
  alignItems: "center",
  position: "relative",
});

export const header_link = style({
  position: "relative",
  marginTop: "7px",
  marginLeft: "7px",
  marginRight: "7px",
  fontSize: "1.25rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  transition: "all 0.3s",
  "::before": {
    content: "",
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "85%",
    border: "0.5px solid",
    background: container_background_var,
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.1s ease",
  },
  selectors: {
    "&:hover::before": {
      transform: "scaleX(1)",
    },
  },
});

export const link = style({
  marginRight: "10px",
  marginTop: "5px",
  marginBottom: "5px",
});
