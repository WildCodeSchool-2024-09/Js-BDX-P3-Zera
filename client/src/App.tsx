import "./App.css";
import { Outlet } from "react-router-dom";
import { DashboardTabs } from "./layout/DashboardTabs";
import { AppProvider } from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <header>
        <h1>Perdu dans ZERA</h1>
      </header>
      <main>
        <DashboardTabs />
        <Outlet />
      </main>
    </AppProvider>
  );
}

export default App;
