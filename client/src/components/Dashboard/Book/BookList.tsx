import type { BookListProps } from "../../../types/Book";
import styles from "./BookList.module.css";

export const BookList = (props: BookListProps) => {
  const { books, onEdit, onDelete } = props;

  return (
    <section className={styles.bookList}>
      {books.map((book) => (
        <article key={book.id} className={styles.bookItem}>
          <section>
            <h2>{book.title}</h2>
            <section>
              <h3>Illustration</h3>
              <img
                src={book.illustration}
                alt={book.title}
                className={styles.bookImage}
              />
            </section>
            <section>
              <h3>Résumé</h3>
              <p>{book.summary}</p>
            </section>
          </section>

          <section>
            <button
              type="button"
              onClick={() => onEdit(book)}
              className={styles.button}
            >
              Modifier
            </button>
            <button
              type="button"
              onClick={() => onDelete(book.id)}
              className={styles.button}
            >
              Supprimer
            </button>
          </section>
        </article>
      ))}
    </section>
  );
};
