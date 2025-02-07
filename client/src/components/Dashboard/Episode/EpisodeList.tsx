import { useState } from "react";
import { useBooks } from "../../../contexts/BookContexts";
import type { EpisodeListProps } from "../../../types/Episode";
import styles from "./EpisodeList.module.css";

export const EpisodeList = ({
  episodes,
  onEdit,
  onDelete,
}: EpisodeListProps) => {
  const { books } = useBooks();
  const [activeBookId, setActiveBookId] = useState<number | null>(null);

  const episodesByBook = books.map((book) => ({
    book,
    episodes: episodes.filter((episode) => episode.books_id === book.id),
  }));

  return (
    <section className={styles.episodeListSection}>
      <h2 className={styles.episodeListTitle}>Liste des épisodes par livre</h2>
      {episodesByBook.map(
        ({ book, episodes }) =>
          episodes.length > 0 && (
            <article key={book.id} className={styles.bookSection}>
              <header
                className={`${styles.bookHeader} ${activeBookId === book.id ? styles.active : ""}`}
                onClick={() =>
                  setActiveBookId(activeBookId === book.id ? null : book.id)
                }
                onKeyUp={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveBookId(activeBookId === book.id ? null : book.id);
                  }
                }}
                tabIndex={0}
              >
                <h3 className={styles.episodeListBookTitle}>
                  {book.title} ({episodes.length} épisodes)
                </h3>
              </header>
              {activeBookId === book.id && (
                <section className={styles.episodeGrid}>
                  {episodes.map((episode) => (
                    <article key={episode.id} className={styles.episodeItem}>
                      <h4 className={styles.episodeListTitle}>
                        {episode.title}
                      </h4>
                      {episode.illustration && (
                        <section className={styles.episodeListImageContainer}>
                          <h5 className={styles.episodeListImageTitle}>
                            Illustration
                          </h5>
                          <img
                            src={episode.illustration}
                            alt={episode.title}
                            className={styles.episodeListImage}
                          />
                        </section>
                      )}

                      <section className={styles.episodeListInfo}>
                        <h5 className={styles.episodeListInfoTitle}>
                          Contenue :
                        </h5>
                        <p className={styles.episodeListInfoText}>
                          Nombre de paragraphes : {episode.paragraphs.length}
                        </p>
                        <p className={styles.episodeListInfoText}>
                          Nombre de choix : {episode.choices?.length}
                        </p>
                      </section>

                      <section className={styles.episodeListActions}>
                        <button
                          type="button"
                          onClick={() => onEdit(episode)}
                          className={styles.episodeListEditButton}
                        >
                          Modifier
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            if (
                              window.confirm(
                                "Êtes-vous sûr de vouloir supprimer cet épisode ?",
                              )
                            ) {
                              onDelete(episode.id);
                            }
                          }}
                          className={styles.episodeListDeleteButton}
                        >
                          Supprimer
                        </button>
                      </section>
                    </article>
                  ))}
                </section>
              )}
            </article>
          ),
      )}
    </section>
  );
};
