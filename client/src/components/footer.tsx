import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <footer className="footer">
      <button
        type="button"
        onClick={toggleMenu}
        className="menu-button"
        aria-label="Toggle social menu"
      >
        ☰
      </button>

      {menuOpen && (
        <nav className="menu-nav">
          <ul className="menu-list">
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="menu-link"
              >
                📘 Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="menu-link"
              >
                🐦 Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="menu-link"
              >
                📸 Instagram
              </a>
            </li>
          </ul>
        </nav>
      )}
      <nav className="menu-inline">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noreferrer"
          className="menu-link"
        >
          📘 Facebook
        </a>
        <a 
        href="https://www.twitter.com" 
        target="_blank"
        rel="noreferrer" 
        className="menu-link"
        >
          🐦 Twitter
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noreferrer"
          className="menu-link"
        >
          📸 Instagram
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
