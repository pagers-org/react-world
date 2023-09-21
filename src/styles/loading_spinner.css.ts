import { style, keyframes } from "@vanilla-extract/css";
import {
  loading_spiiner_border_var,
  loading_spiiner_border_top_var,
} from "./container.css";

export const spinner = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});

export const spinner_container = style({
  display: "grid",
  justifyContent: "center",
  alignItems: "center",
  height: "350px",
});

export const loading_spinner = style({
  width: "50px",
  height: "50px",
  border: `10px solid ${loading_spiiner_border_var}`,
  borderTop: `10px solid ${loading_spiiner_border_top_var}`,
  borderRadius: "50%",
  animation: `${spinner} 1.5s linear infinite`,
});
