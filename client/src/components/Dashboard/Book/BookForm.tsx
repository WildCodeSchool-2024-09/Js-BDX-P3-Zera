import { type ChangeEvent, type FormEvent, useEffect, useState } from "react";
import type { BookFormProps } from "../../../types/Book";
import styles from "./BookForm.module.css";

export const BookForm = ({ book, onSubmit, onCancel }: BookFormProps) => {
  const [formData, setFormData] = useState({
    title: book?.title ?? "",
    resume: book?.resume ?? "",
    illustration: book?.illustration ?? "",
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title,
        resume: book.resume,
        illustration: book.illustration,
      });
    }
  }, [book]);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          illustration: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <section className={styles.formSection}>
        <label htmlFor="title">Titre</label>
        <input
          id="title"
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, title: e.target.value }))
          }
          required
          className={styles.input}
        />
      </section>

      <section className={styles.formSection}>
        <label htmlFor="illustration">Illustration</label>
        <input
          id="illustration"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.input}
        />
        {formData.illustration && (
          <img
            src={formData.illustration}
            alt="Prévisualisation"
            className={styles.preview}
          />
        )}
      </section>

      <section className={styles.formSection}>
        <label htmlFor="resume">Résumé</label>
        <textarea
          id="resume"
          value={formData.resume}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, resume: e.target.value }))
          }
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
