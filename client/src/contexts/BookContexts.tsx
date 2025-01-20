import type React from "react";
import { createContext, useContext, useState } from "react";
import type { Book } from "../types/Book";

interface BookContextType {
  books: Book[];
  createBook: (book: Omit<Book, "id">) => void;
  updateBook: (id: string, book: Omit<Book, "id">) => void;
  deleteBook: (id: string) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookProvider = ({ children }: { children: React.ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);

  const createBook = (bookData: Omit<Book, "id">) => {
    const newBook = {
      ...bookData,
      id: crypto.randomUUID(),
    };
    setBooks((prev) => [...prev, newBook]);
  };

  const updateBook = (id: string, bookData: Omit<Book, "id">) => {
    setBooks((prev) =>
      prev.map((book) => (book.id === id ? { ...bookData, id } : book)),
    );
  };

  const deleteBook = (id: string) => {
    setBooks((prev) => prev.filter((book) => book.id !== id));
  };

  const value = {
    books,
    createBook,
    updateBook,
    deleteBook,
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
