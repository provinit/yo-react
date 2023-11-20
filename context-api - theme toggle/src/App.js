import "./App.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ThemeComponent />
    </ThemeProvider>
  );
}

const ThemeComponent = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div
      style={{
        background: theme === "light" ? "#FFF" : "#333",
        color: theme === "light" ? "#333" : "#fff",
        padding: "20px",
      }}
    >
      <h1> ThemeComponent</h1>
      <p>Current theme : {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default App;
