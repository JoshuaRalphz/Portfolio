import { useTheme } from "next-themes";

export const useThemeHelper = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const isDarkMode = theme === "dark";

  return {
    theme,
    isDarkMode,
    toggleTheme,
    setTheme,
  };
};

export const themeClasses = {
  light: {
    background: "bg-white",
    text: "text-gray-900",
    border: "border-gray-200",
    hover: "hover:bg-gray-50",
  },
  dark: {
    background: "bg-gray-900",
    text: "text-gray-100",
    border: "border-gray-700",
    hover: "hover:bg-gray-800",
  },
};

export const getThemeClasses = (theme: string) => {
  return theme === "dark" ? themeClasses.dark : themeClasses.light;
}; 