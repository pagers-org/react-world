// createGlobalTheme는 웹사이트 전체에 적용될 수 있는 전역 CSS 변수를 생성하는 데 사용됩니다.
// createTheme은 지역적인 범위를 가진 CSS 변수를 생성하는 데 사용됩니다.

// theme.css.ts
import {
  createGlobalTheme,
  createThemeContract,
  createGlobalThemeContract,
} from "@vanilla-extract/css";

// export const colors = createGlobalThemeContract({
//   color: {
//     brand: "color-brand",
//   },
//   font: {
//     body: "font-body",
//   },
// });

export const lightVars = createGlobalTheme(":root", {
  colorBackground: "#fff",
  text_color: "#000",
});

export const darkVars = createGlobalTheme('[data-theme="dark"]', {
  colorBackground: "#121212",
  text_color: "#fff",
});
