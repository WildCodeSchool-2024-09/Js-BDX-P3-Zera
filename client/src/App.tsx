import "./styles/Global.css";
import "./styles/Variables.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default App;
