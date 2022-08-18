import { Theme } from "@np-bingo/types";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import { FeaturesContext } from "./FeaturesProvider";

export interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const inititalThemeContext: ThemeContextProps = {
  theme: "dark",
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext(inititalThemeContext);

export function ThemeProvider({ children }: React.HTMLAttributes<HTMLElement>) {
  const { theme: initialTheme } = React.useContext(FeaturesContext);
  const [theme, toggleTheme] = useTheme(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
