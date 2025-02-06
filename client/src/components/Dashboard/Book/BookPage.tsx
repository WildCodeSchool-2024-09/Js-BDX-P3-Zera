import { useState } from "react";
import { useBooks } from "../../../contexts/BookContexts";
import type { Book } from "../../../types/Book";
import { BookForm } from "./BookForm";
import { BookList } from "./BookList";
import styles from "./BookPage.module.css";

export const BookPage = () => {
  const { books, createBook, updateBook, deleteBook } = useBooks();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleSubmit = (bookData: Omit<Book, "id">) => {
    if (selectedBook) {
      updateBook(selectedBook.id, bookData);
    } else {
      createBook(bookData);
    }
    resetForm();
  };

  const resetForm = () => {
    setIsEditing(false);
    setSelectedBook(null);
  };

  return (
    <main className={styles.bookPageMain}>
      <h1 className={styles.titleBookPage}>Gestion des livres</h1>

      {isEditing ? (
        <section>
          <h2 className={styles.titleBookPage}>
            {selectedBook ? "Édition du livre" : "Création d'un livre"}
          </h2>
          <BookForm
            book={selectedBook}
            onSubmit={handleSubmit}
            onCancel={resetForm}
          />
        </section>
      ) : (
        <button type="button" onClick={() => setIsEditing(true)}>
          Ajouter un livre
        </button>
      )}

      <section>
        <h2 className={styles.titleBookPage}>Liste des livres</h2>
        <BookList
          books={books}
          onEdit={(book) => {
            setSelectedBook(book);
            setIsEditing(true);
          }}
          onDelete={deleteBook}
        />
      </section>
    </main>
  );
};
