import { useEffect, useState } from "react";
import styles from "./lecturepage.module.css";

export default function LecturePage() {
  const [isAnchorVisible, setIsAnchorVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("bottom");
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        if (rect.top > window.innerHeight) {
          setIsAnchorVisible(true);
        } else {
          setIsAnchorVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main className={styles.mainLecture}>
      <img
        className={styles.illustrationBook}
        src="/src/assets/Zera_image_accueil.png"
        alt=""
      />
      <section className={styles.lecture}>
        <a
          className={`${styles.scrollButton} ${
            !isAnchorVisible ? styles.scrollButtonHidden : ""
          }`}
          href="#bottom"
        >
          ↓
        </a>
        <h1 id="bottom">Episode 0</h1>
        <p>
          Tu arrives dans une salle composée d’un sol aux reflets verts et
          bleus. Tu n’arrives pas très bien à comprendre de quoi il est fait, tu
          peux te déplacer à l’intérieur de la salle. Tu remarques dans la
          foulée que tu n’as pas encore de corps, tu as conscience de ton corps
          même si tu te sens très léger, mais tu es totalement transparent! un
          énorme écran qui flotte devant toi attire ton attention. Différentes
          images défilent en diaporama devant toi. La première image est animée,
          des oiseaux volent dans le ciel, on dirait des vautours. Quelques
          nuages se baladent ici et là. On entend le bruissement du vent qui
          s’engouffre dans la ville, ainsi que quelques hennissements de
          chevaux. Chose incroyable, tu peux sentir les odeurs. ce monde sent la
          poussière et la terre brûlée par le soleil. Il s'agit bien évidement
          du monde western, illustré avec des ranchs qui composent une petite
          ville très calme. Dérière les constructions de bois on peut apercevoir
          les sommets de montagnes rocheuses oranges et jaunes. La seconde map
          présentée est la jungle tropicale.
        </p>
        <p>
          L’image animée est d’un réalisme à couper le souffle. Tu peux entendre
          distinctement des dizaines de chants d’oiseaux différents ainsi que
          les sifflements d’insectes insolites. La végétation y est très dense
          aux pieds d’arbres gigantesques tous drapés de lianes épaisses et
          filandreuses qui semblent tomber du ciel. Alors que ton regard est
          attiré dans les méandres de la luxuriance végétale, tu te fais
          surprendre par le cris d’un jaguar qui semble tout proche. Tu peux
          même apercevoir la queue de l’animal qui se glisse derrière une plante
          aux larges feuilles. Une troisième image dynamique vient se substituer
          à la précédente. On y découvre une ville futuriste nommée Cybercité.
        </p>
        <p>
          Des lumières par milliers surplombent les avenues de la ville. Des
          engins de toutes sortes défilent à toute vitesse sur les routes. Des
          routes magnétiques verticales conduisent des véhicules en forme de
          capsules plates vers des édifices qui semblent s’étendre jusqu’au
          ciel. En levant la tête, tu découvres que la ville se poursuit à une
          hauteur vertigineuse et les engins qui se dirigent vers les hauteurs
          disparaissent peu à peu dans l’obscurité. Les bruits sont très
          différents de ceux de la jungle. Dans cette map, tout va très vite,
          les bruits arrivent et s’en vont. Tu réalises que les engins volants
          et les “voitures” qui circulent ne font pas le même bruit que ce que
          tu connais. Elles sont pratiquement silencieuses, néanmoins elles
          produisent une sorte de sifflement grave lorsqu' elles avancent et
          l’activité de la cité ressemble à celle d’une ruche d’abeilles. Tu
          remarques que d’autres mondes vont apparaître. Mais tu as déjà choisi
          ta destination dans Zera, ou du moins tu hésites entre deux. Tu penses
          que l’un de ces deux mondes a à coup sûr tapé dans l'œil de Mike
          tellement ils sont impressionnants et donnent envie d’être visités.
        </p>
      </section>
      <section className={styles.choiceGrid} id="bottom">
        <h2>
          Tu remarques que d’autres mondes vont apparaître. Mais tu as déjà
          choisi ta destination dans Zera, ou du moins tu hésites entre deux. Tu
          penses que l’un de ces deux mondes a à coup sûr tapé dans l'œil de
          Mike tellement ils sont impressionnants et donnent envie d’être
          visités.
        </h2>
        <a className={styles.buttonChoice} href="/">
          Episode 24 : Tu choisis de rechercher Mike dans le monde de la
          cybercité
        </a>
        <a className={styles.buttonChoice} href="/">
          Episode 13 : Sinon tu peux rechercher Mike dans l’immensité de la
          jungle tropicale.
        </a>
      </section>
    </main>
  );
}