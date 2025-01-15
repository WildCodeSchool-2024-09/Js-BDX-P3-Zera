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
          className="footer-link"
        >
          <img src={linkedinImage} alt="LinkedIn" className="footer-icon" />
        </a>
        <a
          href="#instagram"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img src={instagramImage} alt="Instagram" className="footer-icon" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
