import { cookies } from "next/headers";

type Theme = "light" | "dark" | "colored";

export const getThemeCookieValue = () => {
  const cookieStore = cookies();
  const currentThemeObj = cookieStore.get("theme");
  let currentTheme: Theme = (currentThemeObj?.value as Theme) || "light";
  if (!currentTheme) {
    currentTheme = "light";
  }

  return currentTheme;
};
