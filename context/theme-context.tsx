"use client";

import React, { useEffect, useState, createContext, useContext } from "react";

type Theme = "light" | "dark";

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);


//this will wrap the whole app
export default function ThemeContextProvider({
  children,
}: ThemeContextProviderProps) {
  const [theme, setTheme] = useState<Theme>("light");//as the initial state will be light

  //theme and setTheme will be used to toogle the sun and moon icon mode for dark mode
  //but the real change is dome by document.documentElement.classList.add("dark") add and remove

  //toogleTheme will be used to conditionally use setTheme
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");

      
      document.documentElement.classList.add("dark");
      //this will add the darkl class to the html root element and 
      //whichiever element has dark class in it will get activated
    } 
    else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };


  //usweEffect to find out the initial theme if the portfolio app is opened earlier
  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;//there can be no theme also


     //if the portfollio site is already opened then there can already be a theme in local storage
     //then set the theme to that previously selected  theme again
    if (localTheme) {
      setTheme(localTheme);

      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches)//window.matchMedia("preferes-color-scheme:Dark").matches 
         //will check if the user Color theme is dark or not becuase of personalisation
     {
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
  const context = useContext(ThemeContext);//using the theme context
  

  if (context === null) {
    throw new Error("useTheme must be used within a ThemeContextProvider");
  }

  return context;//context=light | dark
}