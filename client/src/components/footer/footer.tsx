import instagramImage from "../../assets/images/instagram.png";
import linkedinImage from "../../assets/images/linkedin.png";
import styles from "./footer.module.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <nav className={styles.footerNav}>
        <a
          href="#linkedin"
          target="_blank"
          rel="noreferrer"
          className={styles.footerIcon}
        >
          <img src={linkedinImage} alt="redirige vers la page Linkedin" />
        </a>
        <button
          type="button"
          className={styles.scrollToTop}
          onClick={scrollToTop}
        >
          Haut de page
        </button>
        <a
          href="#instagram"
          target="_blank"
          rel="noreferrer"
          className={styles.footerIcon}
        >
          <img src={instagramImage} alt="redirige vers la page Instagram" />
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
