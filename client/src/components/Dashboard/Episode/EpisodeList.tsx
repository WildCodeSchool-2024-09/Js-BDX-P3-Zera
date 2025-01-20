import { useBooks } from "../../../contexts/BookContexts";
import type { EpisodeListProps } from "../../../types/Episode";

export const EpisodeList = (props: EpisodeListProps) => {
  const { episodes, onEdit, onDelete } = props;
  const { books } = useBooks();

  const episodesByBook = books.map((book) => ({
    book,
    episodes: episodes.filter((episode) => episode.bookId === book.id),
  }));

  return (
    <section>
      <h2>Liste des épisodes par livre</h2>
      {episodesByBook.map(
        ({ book, episodes }) =>
          episodes.length > 0 && (
            <article key={book.id}>
              <h3>{book.title}</h3>
              {episodes.map((episode) => (
                <article key={episode.id}>
                  <section>
                    <h4>{episode.title}</h4>

                    {episode.illustration && (
                      <section>
                        <h5>Illustration</h5>
                        <img src={episode.illustration} alt={episode.title} />
                      </section>
                    )}

                    <section>
                      <h5>Informations</h5>
                      <p>Nombre de paragraphes : {episode.paragraphs.length}</p>
                      <p>Nombre de choix : {episode.choices.length}</p>
                    </section>
                  </section>

                  <section>
                    <button type="button" onClick={() => onEdit(episode)}>
                      Modifier
                    </button>
                    <button type="button" onClick={() => onDelete(episode.id)}>
                      Supprimer
                    </button>
                  </section>
                </article>
              ))}
            </article>
          ),
      )}
    </section>
  );
};
