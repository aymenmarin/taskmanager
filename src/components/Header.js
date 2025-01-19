import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header({ title }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <header className={`header ${darkMode ? "dark" : "light"}`}>
      <h1>{title}</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;
