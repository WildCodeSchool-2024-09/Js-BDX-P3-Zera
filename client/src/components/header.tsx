import { useState } from "react";
import { Link } from "react-router-dom";
import "../components/Variables.css";
import profileImage from "../assets/images/imageProfil.png";
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

  const NavigationLinks = ({ isMobile = false }) => (
    <ul className={isMobile ? "menu-list" : "nav-list"}>
      <li>
        <Link 
          to="/accueil" 
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          Accueil
        </Link>
      </li>
      <li>
        <Link 
          to="/profil" 
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          Profil
        </Link>
      </li>
      <li>
        <Link 
          to="/charger" 
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          Charger
        </Link>
      </li>
      <li>
        <Link 
          to="/boutique" 
          className={isMobile ? "menu-link" : "nav-link"}
          onClick={() => isMobile && setMenuOpen(false)}
        >
          Boutique
        </Link>
      </li>
    </ul>
  );

  return (
    <header className="header">
      <button type="button" className="user-icon">
        <figure 
          className="profile-image" 
          role="img" 
          aria-label="Photo de profil"
          style={{ backgroundImage: `url(${profileImage})` }}
        />
      </button>

      <nav className="nav-buttons">
        <NavigationLinks />
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
          <NavigationLinks isMobile={true} />
        </nav>
      )}

      <button
        type="button"
        onClick={toggleDarkMode}
        className="dark-mode-button"
        aria-label="Ce bouton permet de passer sur le mode sombre."
      >
        {darkMode ? (
          <img src={dayMode} alt="bouton mode clair" className="header-icon" />
        ) : (
          <img src={nightMode} alt="bouton mode sombre" className="header-icon" />
        )}
      </button>
    </header>
  );
}

export default Header;