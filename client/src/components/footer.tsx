import "./footer.css";
import instagramImage from "../assets/images/instagram.png";
import linkedinImage from "../assets/images/linkedin.png";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <nav className="footer-nav">
        <a
          href="#linkedin"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          {<img src={linkedinImage} alt="redirige vers la page Linkedin " />}
        </a>
        <a
          href="#instagram"
          target="_blank"
          rel="noreferrer"
          className="footer-icon"
        >
          {<img src={instagramImage} alt="redirige vers la page Instagram" />}
        </a>
      </nav>
      <button type="button" className="scroll-to-top" onClick={scrollToTop}>
        Haut de page
      </button>
    </footer>
  );
}

export default Footer;
