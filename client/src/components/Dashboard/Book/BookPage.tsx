import { useState } from "react";
import { useBooks } from "../../../contexts/BookContexts";
import type { Book } from "../../../types/Book";
import { BookForm } from "./BookForm";
import { BookList } from "./BookList";

export const BookPage = () => {
  const { books, createBook, updateBook, deleteBook } = useBooks();
  const [isEditing, setIsEditing] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);

  const handleSubmit = (bookData: Omit<Book, "id">) => {
    if (selectedBook) {
      updateBook(selectedBook.id, bookData);
    } else {
      createBook(bookData);
    }
    setIsEditing(false);
    setSelectedBook(undefined);
  };

  const handleEdit = (book: Book) => {
    setSelectedBook(book);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setSelectedBook(undefined);
  };

  return (
    <main>
      <h1>Gestion des livres</h1>

      {isEditing ? (
        <button type="button" onClick={() => setIsEditing(true)}>
          Ajouter un livre
        </button>
      ) : (
        <section>
          <h2>{selectedBook ? "Édition du livre" : "Création d'un livre"}</h2>
          <BookForm
            book={selectedBook}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </section>
      )}

      <section>
        <h2>Liste des livres</h2>
        <BookList books={books} onEdit={handleEdit} onDelete={deleteBook} />
      </section>
    </main>
  );
};
