import PlayButton from "../../components/PlayButton";
import RestartButton from "../../components/RestartButton";
import styles from "./homePage.module.css";

export default function HomePage() {
  return (
    <main className={styles.main}>
      <img src="src/assets/images/herobook.png" alt="" />
      <section className={styles.sectionHomePage}>
        <h2 className={styles.heading}>Résumé</h2>
        <p className={styles.paragraph}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
          velit dignissimos modi, ullam maiores neque eum, molestias incidunt
          voluptates cum tenetur quisquam quos deserunt, omnis eligendi autem.
          Quasi amet rerum ut totam architecto, beatae laborum, saepe fugit
          maxime odio quod libero. Dignissimos asperiores voluptatum dolorum
          unde est! Nam ipsa, delectus amet dignissimos quam culpa nostrum a
          aperiam dolorum. A, minima aut voluptatum aliquid suscipit illo cum
          sit? Consequatur minima nostrum aliquam aut saepe! Facere ut deleniti
          dolore repellendus, repellat recusandae, quis fuga unde ducimus
          quaerat eius doloribus aspernatur. Dolorem hic ex molestias deleniti
          laudantium in ipsa omnis quae, qui rem? Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Labore autem vel, cum asperiores nobis
          laudantium ex, ea hic aut iusto necessitatibus repellendus recusandae
          doloribus excepturi. Eaque quidem qui repellat explicabo consequatur
          illum, incidunt totam autem atque assumenda voluptas. Voluptas
          quibusdam quasi vel fugit voluptatibus? Dignissimos, quasi illum. Hic
          velit, reiciendis cumque doloribus veritatis ea odio perspiciatis
          tempora amet quia similique corrupti quod fuga recusandae. Iure
          repellat consequuntur eaque ab saepe tempora repudiandae voluptate
          inventore necessitatibus a, deleniti, culpa ipsum dolores ex facere
          error modi doloribus rem libero magni id! Libero tempore animi ex
          natus porro! Dolores id praesentium natus laboriosam. Quisquam quas
        </p>
        <nav className={styles.buttonscontainer}>
          <PlayButton />
          <RestartButton />
        </nav>
      </section>
    </main>
  );
}
