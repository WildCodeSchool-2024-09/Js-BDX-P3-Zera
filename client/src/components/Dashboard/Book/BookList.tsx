import type { BookListProps } from "../../../types/Book";

export const BookList = (props: BookListProps) => {
  const { books, onEdit, onDelete } = props;

  return (
    <section>
      <h1>Liste des livres</h1>
      {books.map((book) => (
        <article key={book.id}>
          <section>
            <h2>{book.title}</h2>
            <section>
              <h3>Illustration</h3>
              <img src={book.illustration} alt={book.title} />
            </section>
            <section>
              <h3>Résumé</h3>
              <p>{book.summary}</p>
            </section>
          </section>

          <section>
            <button type="button" onClick={() => onEdit(book)}>
              Modifier
            </button>
            <button type="button" onClick={() => onDelete(book.id)}>
              Supprimer
            </button>
          </section>
        </article>
      ))}
    </section>
  );
};
