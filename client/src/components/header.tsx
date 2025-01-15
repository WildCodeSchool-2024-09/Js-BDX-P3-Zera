import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Variables.css";
import "../assets/images/imageProfil.png";
import dayMode from "../assets/images/mode-jour.png";
import nightMode from "../assets/images/mode-sombre.png";
import "./header.css";

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
      <button type="button" className="user-icon" aria-label="bouton du profil">
        <img
          src="../assets/images/imageProfil.png"
          alt="avatar de profil"
          className="profile-image"
        />
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
        aria-label="Déroulement menu burger"
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
        aria-label="Ce bouton permet de passer sur le mode sombre/mode clair au clic. Par défaut sur le mode clair"
      >
        {darkMode ? (
          <img src={dayMode} alt="bouton mode clair" className="header-icon" />
        ) : (
          <img
            src={nightMode}
            alt="bouton mode sombre"
            className="header-icon"
          />
        )}
      </button>
    </header>
  );
}

export default Header;
