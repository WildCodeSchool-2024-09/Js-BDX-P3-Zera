import type { Book, BookListProps } from "../../../types/Book";
import styles from "./BookList.module.css";

const BookCard = ({
  book,
  onEdit,
  onDelete,
}: {
  book: Book;
  onEdit: (book: Book) => void;
  onDelete: (id: number) => void;
}) => (
  <article className={styles.bookItem}>
    <section className={styles.sectionBookList}>
      <h2 className={styles.titleBookList}>{book.title}</h2>
      <section>
        <h3 className={styles.titleBookList}>Illustration</h3>
        <img
          src={book.illustration}
          alt={book.title}
          className={styles.bookImage}
        />
      </section>
      <section className={styles.sectionBookList}>
        <h3 className={styles.titleBookList}>Résumé</h3>
        <p>{book.resume}</p>
      </section>
    </section>

    <section className={styles.sectionBookList}>
      <button
        type="button"
        onClick={() => onEdit(book)}
        className={styles.buttonBookList}
      >
        Modifier
      </button>
      <button
        type="button"
        onClick={() => {
          if (window.confirm("Êtes-vous sûr de vouloir supprimer ce choix ?")) {
            onDelete(book.id);
          }
        }}
        className={styles.buttonBookList}
      >
        Supprimer
      </button>
    </section>
  </article>
);

export const BookList = ({ books, onEdit, onDelete }: BookListProps) => (
  <section className={styles.bookList}>
    {books.map((book) => (
      <BookCard key={book.id} book={book} onEdit={onEdit} onDelete={onDelete} />
    ))}
  </section>
);
