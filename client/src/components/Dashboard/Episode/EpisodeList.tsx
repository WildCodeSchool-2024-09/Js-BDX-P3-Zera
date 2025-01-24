import { useBooks } from "../../../contexts/BookContexts";
import type { EpisodeListProps } from "../../../types/Episode";
import styles from "./EpisodeList.module.css";

export const EpisodeList = ({
  episodes,
  onEdit,
  onDelete,
}: EpisodeListProps) => {
  const { books } = useBooks();

  const episodesByBook = books.map((book) => ({
    book,
    episodes: episodes.filter((episode) => episode.bookId === book.id),
  }));

  return (
    <section className={styles.episodeListContainer}>
      <h2 className={styles.mainTitle}>Liste des épisodes par livre</h2>
      {episodesByBook.map(
        ({ book, episodes }) =>
          episodes.length > 0 && (
            <article key={book.id} className={styles.bookSection}>
              <h3 className={styles.bookTitle}>{book.title}</h3>
              <div className={styles.episodeList}>
                {episodes.map((episode) => (
                  <article key={episode.id} className={styles.episodeItem}>
                    <div className={styles.episodeContent}>
                      <h4 className={styles.episodeTitle}>{episode.title}</h4>

                      {episode.illustration && (
                        <div className={styles.imageContainer}>
                          <h5 className={styles.imageTitle}>Illustration</h5>
                          <img
                            src={episode.illustration}
                            alt={episode.title}
                            className={styles.episodeImage}
                          />
                        </div>
                      )}

                      <div className={styles.episodeInfo}>
                        <h5 className={styles.infoTitle}>Informations</h5>
                        <p className={styles.infoText}>
                          Nombre de paragraphes : {episode.paragraphs.length}
                        </p>
                        <p className={styles.infoText}>
                          Nombre de choix : {episode.choices.length}
                        </p>
                      </div>
                    </div>

                    <div className={styles.episodeActions}>
                      <button
                        type="button"
                        onClick={() => onEdit(episode)}
                        className={styles.editButton}
                      >
                        Modifier
                      </button>
                      <button
                        type="button"
                        onClick={() => onDelete(episode.id)}
                        className={styles.deleteButton}
                      >
                        Supprimer
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          ),
      )}
    </section>
  );
};
