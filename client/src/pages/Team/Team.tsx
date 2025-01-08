import "./Team.css";
import "../../../src/components/Variables.css";
import instagramImage from "../../../src/assets/images/instagram.png";
import jonathanImage from "../../../src/assets/images/jonathan.png";
import linkedinImage from "../../../src/assets/images/linkedin.png";
import pierreImage from "../../../src/assets/images/pierre.jpeg";

function Team() {
  return (
    <>
      <h1 className="team-title">Team</h1>
      <section>
        <article className="team-member">
          <img src={jonathanImage} alt="Jonathan" className="jonathan-image" />
          <h2>Jonathan</h2>
          <section className="logo-container">
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil LinkedIn de Jonathan"
            >
              <img
                src={linkedinImage}
                alt="LinkedIn"
                className="linkedin-logo"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil Instagram de Jonathan"
            >
              <img
                src={instagramImage}
                alt="Instagram"
                className="instagram-logo"
              />
            </a>
          </section>
          <p>
            Passionné d’univers multiples et de récits immersifs, Jonathan vous
            invite à plonger dans un monde où l’imaginaire s’épanouit à la
            croisée des chemins entre science-fiction futuriste et Far West
            sauvage. Quand il n’est pas perdu dans ses mondes imaginaires,
            Jonathan aime partager sa passion pour les récits interactifs, où le
            lecteur est toujours le véritable héros.
          </p>
        </article>

        <article className="team-member">
          <img src={pierreImage} alt="Le Designer" className="pierre-image" />
          <h2>Le designer</h2>
          <section className="logo-container">
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil LinkedIn du designer"
            >
              <img
                src={linkedinImage}
                alt="LinkedIn"
                className="linkedin-logo"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil Instagram du designer"
            >
              <img
                src={instagramImage}
                alt="Instagram"
                className="instagram-logo"
              />
            </a>
          </section>
          <p>
            Passionné par l’esthétique rétrofuturiste et les atmosphères
            cinématographiques, [Nom du Designer] a mis son talent au service de
            ce livre interactif, où chaque illustration et chaque élément
            graphique transportent le lecteur dans une fusion unique entre
            science-fiction futuriste et Far West.
          </p>
        </article>

        <article className="team-member">
          <img
            src={jonathanImage}
            alt="L'équipe de développement"
            className="dev-image"
          />
          <header>
            <h2>L'équipe de dev</h2>
          </header>
          <section className="logo-container">
            <a
              href="https://www.linkedin.com/in/jonathan-courteix/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil LinkedIn de l'équipe de développement"
            >
              <img
                src={linkedinImage}
                alt="LinkedIn"
                className="linkedin-logo"
              />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="menu-link"
              aria-label="Profil Instagram de l'équipe de développement"
            >
              <img
                src={instagramImage}
                alt="Instagram"
                className="instagram-logo"
              />
            </a>
          </section>
          <p>
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
