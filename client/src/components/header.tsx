import { useState } from "react";
import "../components/Variables.css";
import profileImage from "../assets/images/imageProfil.png";
import NavigationLinks from "./navigationLink";
import "./header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <button type="button" className="user-icon">
        <img
          src={profileImage}
          alt="Accéder au profil utilisateur"
          className="profile-image"
        />
      </button>

      <nav className="nav-buttons">{ <NavigationLinks/>}</nav>

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
          <NavigationLinks isMobile={true} closeMenu={toggleMenu} />
        </nav>
      )}
    </header>
  );
}
export default Header;
