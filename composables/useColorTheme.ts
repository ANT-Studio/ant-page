import { ColorMode, ColorModeTheme } from "~/lib/interfaces";

export const useColorTheme: ColorModeTheme = () => {
  const getTheme: () => Promise<ColorMode> = async () => {
    await new Promise((r) => setInterval(r, 1));

    return document.body.classList.item(1)?.replace("theme--", "") as ColorMode;
  };

  const setTheme = async (theme: ColorMode) => {
    const theme_ = await getTheme();

    document.body.classList.replace(`theme--${theme_}`, `theme--${theme}`);
  };

  const toggleTheme = async () => {
    const theme = await getTheme();

    const themeString = `theme--${theme == "dark" ? "light" : "dark"}`;

    document.body.classList.replace(`theme--${theme}`, themeString);
    localStorage.setItem("last-theme", themeString);
  };

  return {
    getTheme,
    setTheme,
    toggleTheme,
  };
};
