import { useState } from "react";
import type { BookFormProps } from "../../../types/Book";
import styles from "./BookForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <section>
        <label htmlFor="title" className={styles.label}>
          Titre
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className={styles.input}
        />
      </section>

      <section>
        <label htmlFor="illustration" className={styles.label}>
          Illustration
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.input}
        />
        {previewUrl && (
          <img src={previewUrl} alt="Illustration" className={styles.preview} />
        )}
      </section>

      <section>
        <label htmlFor="summary" className={styles.label}>
          Résumé
        </label>
        <textarea
          id="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
          className={`${styles.input} ${styles.textarea}`}
        />
      </section>

      <div className={styles.buttonGroup}>
        <button type="submit" className={styles.button}>
          {book ? "Modifier" : "Créer"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className={styles.button}>
            Annuler
          </button>
        )}
      </div>
    </form>
  );
};
