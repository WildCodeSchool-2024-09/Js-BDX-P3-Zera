import "./Team.css";
import devImage from "../../../src/assets/images/dev.jpg";
import instagramImage from "../../../src/assets/images/instagram.png";
import jonathanImage from "../../../src/assets/images/jonathan.png";
import linkedinImage from "../../../src/assets/images/linkedin.png";
import pierreImage from "../../../src/assets/images/pierre.png";

function Team() {
  return (
    <>
      <section>
        <h1 className="team-title">Team</h1>
        <article className="team-member">
          <img src={jonathanImage} alt="Jonathan" className="jonathan-image" />
          <h2>Jonathan</h2>
          <h3>(aka Jojo Kourtex)</h3>
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

        <article className="team-member">
          <img src={devImage} alt="Les Dev" className="dev-image" />
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
