import { useState } from "react";
import { Link } from "react-router-dom";
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
        <ul className="nav-list">
          <li>
            <Link to="/accueil" className="nav-link">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/profil" className="nav-link">
              Profil
            </Link>
          </li>
          <li>
            <Link to="/charger" className="nav-link">
              Charger
            </Link>
          </li>
          <li>
            <Link to="/boutique" className="nav-link">
              Boutique
            </Link>
          </li>
        </ul>
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
            <li>
              <Link to="/accueil" className="menu-link">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/profil" className="menu-link">
                Profil
              </Link>
            </li>
            <li>
              <Link to="/charger" className="menu-link">
                Charger
              </Link>
            </li>
            <li>
              <Link to="/boutique" className="menu-link">
                Boutique
              </Link>
            </li>
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

