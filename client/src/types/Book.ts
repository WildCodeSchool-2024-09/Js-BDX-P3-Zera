export interface Book {
  id: string;
  title: string;
  illustration: string;
  resume: string;
}

export interface BookFormProps {
  book: Book | null;
  onSubmit: (bookData: Omit<Book, "id">) => void;
  onCancel?: () => void;
}

export interface BookListProps {
  books: Book[];
  onEdit: (book: Book) => void;
  onDelete: (id: string) => void;
}

export interface BookPageProps {
  isEditing: boolean;
  selectedBook: Book | null;
}
