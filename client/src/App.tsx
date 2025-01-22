import { Outlet } from "react-router-dom";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <h1>Perdu dans ZERA</h1>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
