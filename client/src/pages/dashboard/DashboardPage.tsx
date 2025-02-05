import { useState } from "react";
import { BookPage } from "../../components/Dashboard/Book/BookPage";
import { EpisodePage } from "../../components/Dashboard/Episode/EpisodePage";
import { GlossaryPage } from "../../components/Dashboard/Glossary/GlossaryPage";
import styles from "./dashboard.module.css";

export const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("books");

  return (
    <main className={styles.mainDashboard}>
      <nav className={styles.navDashboard}>
        <ul className={styles.ulDashboard}>
          <li className={styles.liDashboard}>
            <button
              type="button"
              className={styles.buttonDashboard}
              onClick={() => setCurrentPage("books")}
            >
              Livres
            </button>
          </li>
          <li className={styles.liDashboard}>
            <button
              type="button"
              className={styles.buttonDashboard}
              onClick={() => setCurrentPage("episodes")}
            >
              Épisodes
            </button>
          </li>
          <li className={styles.liDashboard}>
            <button
              type="button"
              className={styles.buttonDashboard}
              onClick={() => setCurrentPage("glossary")}
            >
              Glossaire
            </button>
          </li>
        </ul>
      </nav>

      <section>
        {currentPage === "books" && <BookPage />}
        {currentPage === "episodes" && <EpisodePage />}
        {currentPage === "glossary" && <GlossaryPage />}
      </section>
    </main>
  );
};

export default DashboardPage;
