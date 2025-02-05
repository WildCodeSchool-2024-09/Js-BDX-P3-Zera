import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { Book } from "../types/Book";

interface BookContextType {
  books: Book[];
  createBook: (book: Omit<Book, "id">) => Promise<void>;
  updateBook: (id: string, book: Omit<Book, "id">) => Promise<void>;
  deleteBook: (id: string) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/books`,
        );
        if (!response.ok)
          throw new Error("Erreur lors du chargement des livres");
        const data = await response.json();
        setBooks(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Une erreur est survenue"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const createBook = async (bookData: Omit<Book, "id">) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/books`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        },
      );

      if (!response.ok) throw new Error("Erreur lors de la création du livre");

      const data = await response.json();
      const newBook = { ...bookData, id: data.insertId };
      setBooks((prev) => [...prev, newBook]);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  // Mise à jour d'un livre
  const updateBook = async (id: string, bookData: Omit<Book, "id">) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/books/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookData),
        },
      );

      if (!response.ok)
        throw new Error("Erreur lors de la mise à jour du livre");

      setBooks((prev) =>
        prev.map((book) => (book.id === id ? { ...bookData, id } : book)),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  // Suppression d'un livre
  const deleteBook = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/books/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok)
        throw new Error("Erreur lors de la suppression du livre");

      setBooks((prev) => prev.filter((book) => book.id !== id));
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    books,
    createBook,
    updateBook,
    deleteBook,
    isLoading,
    error,
  };

  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

export const useBooks = () => {
  const context = useContext(BookContext);
  if (context === undefined) {
    throw new Error("useBooks must be used within a BookProvider");
  }
  return context;
};
