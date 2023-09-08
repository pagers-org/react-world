export function generateThemeScript(currentTheme: string): string {
  return `
      (function() {
          console.log('Script is executing...');
          function setInitialColorMode() {
              const currentTheme = "${currentTheme}";
              function getInitialColorMode(currentTheme) {
                  const persistedPreferenceMode = currentTheme;
                  const hasPersistedPreference = typeof persistedPreferenceMode === "string";

                  if (hasPersistedPreference) {
                      return persistedPreferenceMode;
                  }

                  const preference = window.matchMedia("(prefers-color-scheme: dark)");
                  const hasMediaQueryPreference = typeof preference.matches === "boolean";

                  if (hasMediaQueryPreference) {
                      return preference.matches ? "dark" : "light";
                  }

                  return "light";
              }

              const currentColorMode = getInitialColorMode(currentTheme);
              const element = document.body;
              element.style.setProperty("--initial-color-mode", currentColorMode);

              if (currentColorMode === "dark")
                  document.body.setAttribute("data-theme", "dark");
          }
          setInitialColorMode();
      })()
  `;
}
