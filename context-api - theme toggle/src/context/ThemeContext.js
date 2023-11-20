import { createContext, useState, useContext } from "react";

// 1 - create context
const ThemeContext = createContext();

// 2 - create context provider for theme
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. custom hook to change theme
const useTheme = () => {
    const context = useContext(ThemeContext);
    if(!context){
        throw new Error("useTheme must be used within a ThemeProvider");
    }

    console.log(context)
    return context;
};

export {ThemeProvider, useTheme};
