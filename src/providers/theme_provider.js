import { createContext, useContext, useState } from "react";
import { myTheme, themeColors } from "../themes/myTheme";

const themes = ["light", "dark"];
const ThemeContext = createContext(themes[0]);

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(themes[0]);

  const [primaryColor, setPrimaryColor] = useState(
    themeColors.primary.colorOption1
  );
  const toggleTheme = () => {
    setTheme(theme == themes[0] ? themes[1] : themes[0]);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, setTheme, primaryColor, setPrimaryColor }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
