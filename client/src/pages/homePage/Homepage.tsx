import PlayButton from "../../components/PlayButton";
import RestartButton from "../../components/RestartButton";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <img src="/src/assets/images/ZERA_image_d'acueil.svg" alt="" />
      <section className={styles.sectionHomePage}>
        <h2 className={styles.heading}>Bienvenue dans ZERA</h2>
        <p className={styles.paragraph}>
          Zera ? Un monde virtuel imaginé par l’auteur. Tu vas littéralement
          être propulsé dans cette autre réalité. Relève le défi et incarne ton
          propre personnage à l’intérieur du métavers. Tu auras la possibilité
          de vivre des aventures dans différentes maps et différentes époques.
          Que ce soit seul ou accompagné de ton petit frère, dans l’univers du
          Far West ou dans la Cybercité, ta mission sera de réussir à quitter à
          quitter le jeu sain et sauf ! Pour cela,tu vas rencontrer de nombreux
          personnages, mener des quêtes plus insolites les unes que les autres
          et tu ne pourras t’en remettre qu’à ton instinct et à un peu de hasard
          ! Perdu dans Zera est un livre intéractif dont tu es le héros, à
          chaque fin d’épisode tu pourras choisir la suite du récit. Alors
          essaye de faire le bon choix … Richement illustré par l’auteur, le
          livre est également accompagné d’un glossaire pour te familiariser
          avec le vocabulaire du Web 3 et de l’informatique.
        </p>
        <section className={styles.secondSection}>
          <h3 className={styles.titleStart}>
            Es-tu prêt pour entrer dans Zera ?
          </h3>
          <p className={styles.paragraphStart}>
            Tu es sur le point de démarrer une aventure dont tu es le héros à
            l’intérieur du métavers. Tu peux commencer ta lecture tout de suite,
            mais nous te conseillons de te créer un compte gratuit afin de
            pouvoir accéder à plusieurs fins de l'histoire ainsi qu'à des
            fonctionnalités avancées pour profiter au maximum de ta lecture !
          </p>
          <nav className={styles.buttonscontainer}>
            <PlayButton />
            <RestartButton />
          </nav>
        </section>
      </section>
    </main>
  );
}
