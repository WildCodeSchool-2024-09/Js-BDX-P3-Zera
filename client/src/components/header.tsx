import { useState } from "react";
import "./Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <header className="header">
      <button
        type="button"
        className="user-icon"
        aria-label="Toggle profile menu">
        🧑
      </button>

      <button
        type="button"
        onClick={toggleDarkMode}
        className="dark-mode-button"
        aria-label="Toggle dark mode"
      >
        {darkMode ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
