import { useState } from "react";
import type { BookFormProps } from "../../../types/Book";

export const BookForm = ({ book, onSubmit, onCancel }: BookFormProps) => {
  const [title, setTitle] = useState(book?.title || "");
  const [summary, setSummary] = useState(book?.summary || "");
  const [previewUrl, setPreviewUrl] = useState(book?.illustration || "");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title,
      summary,
      illustration: previewUrl,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <section>
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </section>

      <section>
        <label htmlFor="illustration">Illustration</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {previewUrl && (
          <img
            src={previewUrl}
            alt="Illustration"
            style={{ width: 100, height: 100 }}
          />
        )}
      </section>

      <section>
        <label htmlFor="summary">Résumé</label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </section>

      <button type="submit">{book ? "Modifier" : "Créer"}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          Annuler
        </button>
      )}
    </form>
  );
};
