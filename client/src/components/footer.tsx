import "./Footer.css";
import "../components/Variables.css";
import instagramImage from "../assets/images/instagram.png";
import linkedinImage from "../assets/images/linkedin.png";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a
          href="#linkedin"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <img src={linkedinImage} alt="Bouton LinkedIn" />
        </a>
        <a
          href="#instagram"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className="footer-icon"
        >
          <img src={instagramImage} alt="Bouton Instagram" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
