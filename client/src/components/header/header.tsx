import { useState } from "react";
import "./header.css";
import profileImage from "../../assets/images/imageProfil.png";
import NavigationLinks from "../navLinks";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <Link className="user-icon" to={"/inscription"}>
        <img
          src={profileImage}
          alt="Redirige vers connexion ou création de compte"
          className="profile-image"
        />
      </Link>
      <Link to={"/"}>
        <img
          className="logo"
          src="src/assets/images/Perdu dans Zera Small.png"
          alt=""
        />
      </Link>

      <nav className="nav-buttons">{<NavigationLinks />}</nav>

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
          {<NavigationLinks isMobile={true} closeMenu={toggleMenu} />}
        </nav>
      )}
    </header>
  );
}

export default Header;
