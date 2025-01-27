import styles from "./Team.module.css";
import "../../styles/Variables.css";
import devImage from "../../../src/assets/images/dev.jpg";
import instagramImage from "../../../src/assets/images/instagram.png";
import jonathanImage from "../../../src/assets/images/jonathan.png";
import linkedinImage from "../../../src/assets/images/linkedin.png";
import pierreImage from "../../../src/assets/images/pierre.png";

function Team() {
  return (
    <>
      <section className={styles.teamSection}>
        <h1 className={styles.teamTitle}>Team</h1>
        <article className={styles.teamMember}>
          <img src={jonathanImage} alt="" className={styles.jonathanImage} />
          <h2 className={styles.teamName}>Jonathan</h2>
          <h3 className={styles.pseudoTeam}>(aka Jojo Kourtex)</h3>
          <nav className={styles.teamLogoContainer}>
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={linkedinImage}
                alt="LinkedIn de Jonathan"
                className={styles.teamLinkedinLogo}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={instagramImage}
                alt="Instagram de jonathan"
                className={styles.teamInstagramLogo}
              />
            </a>
          </nav>
          <p className={styles.textTeam}>
            Auteur de bande dessinées, peintre et également auteur. Il est
            notamment le dessinateur de la bande dessinée Histoire de la
            Martinique. Perdu dans ZERA est son premier livre interactif. Il a
            imaginé le scénario et les univers de l’aventure de A à Z tout en
            s’inspirant des livres et des jeux vidéos de son enfance. Zera est
            né de son envie de vulgariser les termes de l’informatique et de
            l’internet pour les enfants à travers une aventure loufoque et
            originale.
          </p>
        </article>

        <article className={styles.teamMember}>
          <img src={pierreImage} alt="" className={styles.pierreImage} />
          <h2 className={styles.teamName}>Le designer</h2>
          <nav className={styles.teamLogoContainer}>
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={linkedinImage}
                alt="LinkedIn du designer"
                className={styles.teamLinkedinLogo}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={instagramImage}
                alt="Instagram du designer"
                className={styles.teamInstagramLogo}
              />
            </a>
          </nav>
          <p className={styles.textTeam}>
            llustrateur et enseignant en arts graphiques. Pierre puise son
            inspiration dans la musique, ainsi que dans les illustrations et les
            bandes dessinées vintages des années 60 à 90. Toujours en quête de
            nouvelles techniques à explorer, il prend plaisir à peindre autant
            qu’à travailler sur ordinateur. Pierre collabore avec de nombreux
            artistes et réalise des commandes pour de nombreux artistes
            notamment de la scène reggae Dub européenne. L’artiste a réalisé le
            Logo de l’application !
          </p>
        </article>

        <article className={styles.teamMember}>
          <img src={devImage} alt="Les Dev" className={styles.devImage} />
          <h2 className={styles.teamName}>L'équipe de dev</h2>
          <nav className={styles.teamLogoContainer}>
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={linkedinImage}
                alt="LinkedIn de l'équipe de développement"
                className={styles.teamLinkedinLogo}
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.teamMenuLink}
            >
              <img
                src={instagramImage}
                alt="Instagram de l'équipe de développement"
                className={styles.teamInstagramLogo}
              />
            </a>
          </nav>
          <p className={styles.textTeam}>
            L’aventure prend une nouvelle dimension grâce à l'équipe de
            développeurs web, composée de Thomas, Julien, Florian et Roxanne.
            Ils ont donné vie à cet univers interactif sous la forme d’un jeu
            mobile captivant.
          </p>
        </article>
      </section>
    </>
  );
}

export default Team;
