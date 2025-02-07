import { useEffect, useState } from "react";
import type { Book } from "../../components/Dashboard/types";
import styles from "./lecturepage.module.css";

export default function LecturePage() {
  const [bookId] = useState(1);
  const [episodeId, setEpisodeId] = useState(1);
  const [isAnchorVisible, setIsAnchorVisible] = useState(true);
  const [book, setBook] = useState<Book | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const targetElement = document.getElementById("bottom");
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setIsAnchorVisible(rect.top > window.innerHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const controller = new AbortController();

    const fetchBook = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/books/${bookId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            signal: controller.signal,
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Book = await response.json();
        setBook(data);
        setEpisodeId(
          data.episodes.find((episode) => episode.title === "Introduction")
            ?.id ?? 6,
        );
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }
        console.error("Erreur lors de la récupération de l'épisode:", err);
        setError(
          "Impossible de charger l'épisode. Veuillez réessayer plus tard.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBook();

    return () => controller.abort();
  }, [bookId]);

  const handleChoiceClick = (nextEpisodeId: number) => {
    setEpisodeId(nextEpisodeId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (loading) {
    return (
      <main className={styles.mainLecture}>
        <p className={styles.loading}>Chargement de votre aventure...</p>
      </main>
    );
  }

  if (error) {
    return (
      <main className={styles.mainLecture}>
        <p className={styles.error}>{error}</p>
        <button
          onClick={() => window.location.reload()}
          className={styles.retryButton}
          type="button"
        >
          Réessayer
        </button>
      </main>
    );
  }
  const episode = book?.episodes.find((episode) => episode.id === episodeId);
  if (!episode) {
    return (
      <main className={styles.mainLecture}>
        <p className={styles.error}>Épisode non trouvé</p>
      </main>
    );
  }

  return (
    <main className={styles.mainLecture}>
      {episode.illustration && (
        <div className={styles.illustrationContainer}>
          <img
            className={styles.illustrationBook}
            src={episode.illustration.url}
            alt={`Illustration pour ${episode.title}`}
            loading="lazy"
          />
        </div>
      )}

      <section className={styles.lecture}>
        <a
          className={`${styles.scrollButton} ${
            !isAnchorVisible ? styles.scrollButtonHidden : ""
          }`}
          href="#bottom"
          aria-label="Défiler vers le bas"
        >
          ↓
        </a>

        <h1 id="bottom">{episode.title}</h1>
        {episode.paragraphs?.map((paragraph) => (
          <p key={paragraph.id} className={styles.content}>
            {JSON.parse(paragraph.content).content}
          </p>
        ))}
      </section>

      <section className={styles.choiceGrid} id="bottom">
        <h2>Quelle sera votre prochaine destination ?</h2>
        <div className={styles.choicesContainer}>
          {episode.choices?.map((choice) => (
            <button
              key={choice.id}
              className={styles.buttonChoice}
              onClick={() => handleChoiceClick(choice.nextEpisodeId)}
              type="button"
            >
              {choice.text}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
