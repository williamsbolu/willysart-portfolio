"use client";

import { createContext, useContext, useEffect, useState } from "react";

const DisplayContext = createContext();

function DisplayProvider({ children }) {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    // Ensure this runs only on the client side
    if (typeof window !== "undefined") {
      const themeIsSet = localStorage.getItem("theme");

      // if no theme is set
      if (!themeIsSet) {
        localStorage.setItem("theme", "dark");
      }

      // runs a check and add's the selected theme to the html classList
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDisplay("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setDisplay("light");
      }
    }
  }, []);

  const changeDisplayHandler = () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDisplay("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDisplay("dark");
    }
  };

  const contextValue = {
    currentDisplay: display,
    changeDisplay: changeDisplayHandler,
  };

  return (
    <DisplayContext.Provider value={contextValue}>
      {children}
    </DisplayContext.Provider>
  );
}

// Custom hook to consume this context
function useDisplay() {
  const context = useContext(DisplayContext);
  if (context === undefined) {
    throw new Error("useDisplayContext must be used within a DisplayProvider");
  }
  return context;
}

export { DisplayProvider, useDisplay };
