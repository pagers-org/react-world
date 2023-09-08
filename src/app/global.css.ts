import { globalStyle } from "@vanilla-extract/css";
import { lightVars, darkVars } from "@/styles/theme.css";
import { container_text_color_var } from "@/styles/container.css";

globalStyle("*", {
  boxSizing: "border-box",
});

globalStyle("body", {
  margin: "0",
  width: "100vw",
  minHeight: "100vh",
  height: "auto",
  overflow: "scroll",
  transition: "all 0.3s ease",
  position: "relative",
});

globalStyle("h1, h2, h3, p", {
  margin: "0",
  padding: "0",
});

globalStyle("a, a:link, a:visited, a:hover", {
  color: container_text_color_var,
  textDecoration: "none",
});

// 라이트 모드
globalStyle(`:root`, {
  background: lightVars.colorBackground,
  color: lightVars.text_color,
  // ... 기타 스타일
});

globalStyle("li", {
  listStyle: "none",
});

// 다크 모드
globalStyle(`[data-theme='dark']`, {
  background: darkVars.colorBackground,
  color: darkVars.text_color,
  // ... 기타 스타일
});
