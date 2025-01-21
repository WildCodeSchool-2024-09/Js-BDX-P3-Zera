import Footer from "../src/components/footer";
import Header from "../src/components/header";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <h1>Perdu dans ZERA</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
