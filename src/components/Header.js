import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <header className="header">
      <h1>Task Manager</h1>
      <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
