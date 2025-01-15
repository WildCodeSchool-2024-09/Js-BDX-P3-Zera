import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./App.css";

function App() {
  return (
    <section className="App">
      <Header />
      <main>
        <h1>Bienvenue !</h1>
        <p>Affichage test.</p>
      </main>
      <Footer />
    </section>
  );
}

export default App;
