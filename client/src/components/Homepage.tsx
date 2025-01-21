import PlayButton from "../components/PlayButton";
import RestartButton from "../components/RestartButton";
import "../assets/styles/homePage.css";

export default function HomePage() {
  return (
    <main>
      <div className="image">
        <img src="/src/assets/images/herobook.png" alt="" />
      </div>
      <section>
        <h2>Résumé</h2>
        <p>
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
      <div className="button">
        <PlayButton />
        <RestartButton />
      </div>
    </main>
  );
}
