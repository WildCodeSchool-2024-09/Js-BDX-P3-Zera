import "./Footer.css";
import "../components/Variables.css";
import linkedinImage from "../assets/images/linkedin.png";
import twitterImage from "../assets/images/twitter.jpg";
import instagramImage from "../assets/images/instagram.png";

function Footer() {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a
          href="#linkedin"
          target="_blank"
          rel="noreferrer"
          className="footer-link"
          aria-label="Linkedin Profile"
        >
          <img
            src={linkedinImage}
            alt="LinkedIn"
            className="footer-icon"
          />
        </a>
        <a
          href="#X"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          aria-label="X"
        >
          <img
            src={twitterImage} 
            alt="X"
            className="footer-icon"
          />
        </a>
        <a
          href="#instagram"
          className="footer-link"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <img
            src={instagramImage} 
            alt="Instagram"
            className="footer-icon"
          />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;

