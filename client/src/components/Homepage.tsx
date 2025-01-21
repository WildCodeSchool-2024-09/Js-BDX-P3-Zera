import PlayButton from "../components/PlayButton";
import RestartButton from "../components/RestartButton";
import styles from "../styles/Homepage.module.css";

export default function HomePage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <img
          src="/src/assets/images/herobook.png"
          alt=""
          className={styles.heroImage}
        />
      </div>
      <section className={styles.contentSection}>
        <h2 className={styles.title}>Résumé</h2>
        <p className={styles.description}>
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
          laudantium in ipsa omnis quae, qui rem?
        </p>
      </section>
      <div className={styles.buttonContainer}>
        <PlayButton />
        <RestartButton />
      </div>
    </main>
  );
}
