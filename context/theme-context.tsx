"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";//type for theme


//type for ThemeContextProviderProps children
type ThemeContextProviderProps = {
  children: React.ReactNode;
};


type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;//this is of type function which takes no argumemnts and returns
};


//ThemeContxt ill store dark or light theme for the entire app
const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;
    //checking null as the browser can have no theme at all

    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);//using the theme context that we created

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;
}