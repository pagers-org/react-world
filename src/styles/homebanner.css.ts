import { style, createVar } from "@vanilla-extract/css";
import { softAppear } from "./header.css";

const banner_background_var = createVar();
const banner_background_text = createVar();

export const banner_container_state = style({
  vars: {
    [banner_background_var]: "#fdfdfd",
    [banner_background_text]: "#000",
  },
  selectors: {
    '[data-theme="dark"] &': {
      vars: {
        [banner_background_var]: "#242424;",
        [banner_background_text]: "#fff",
      },
    },
  },
});

export const home_banner_container = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "11rem",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px",
  background: banner_background_var,
  animation: `${softAppear} 0.3s ease`,
});
