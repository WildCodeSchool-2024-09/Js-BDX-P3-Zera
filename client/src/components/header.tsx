import { useState } from "react";
import "./Header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button
        type="button"
        className="user-icon"
        aria-label="Toggle profile menu"
      >
        🧑
      </button>

      <nav className="nav-buttons">
        <a href="#accueil" className="nav-link">Accueil</a>
        <a href="#profil" className="nav-link">Profil</a>
        <a href="#charger" className="nav-link">Charger</a>
        <a href="#boutique" className="nav-link">Boutique</a>
      </nav>

      <button
        type="button"
        onClick={toggleMenu}
        className={`menu-button ${menuOpen ? "open" : ""}`}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="burger-menu">
          <ul className="menu-list">
            <li><a href="#accueil" className="menu-link">Accueil</a></li>
            <li><a href="#profil" className="menu-link">Profil</a></li>
            <li><a href="#charger" className="menu-link">Charger</a></li>
            <li><a href="#boutique" className="menu-link">Boutique</a></li>
          </ul>
        </nav>
      )}

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
