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
          <img src={linkedinImage} alt="redirige vers la page Linkedin " />
        </a>
        <a
          href="#instagram"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          <img src={instagramImage} alt="redirige vers la page Instagram" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
