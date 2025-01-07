import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Bienvenue sur mon site !</h1>
        <p>Ceci est le contenu principal de la page.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
