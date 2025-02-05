import { useState } from "react";
import { useBooks } from "../../../contexts/BookContexts";
import { useEpisode } from "../../../contexts/EpisodeContexts";
import type {
  Choice,
  EpisodeFormProps,
  FormData,
  Paragraph,
} from "../../../types/Episode";
import styles from "./EpisodeForm.module.css";

export const EpisodeForm = ({
  episode,
  onSubmit,
  onCancel,
}: EpisodeFormProps) => {
  const { books } = useBooks();
  const { episodes } = useEpisode();

  const [formData, setFormData] = useState<FormData>({
    title: episode?.title || "",
    books_id: episode?.books_id || "",
    type: "SF",
    illustration: episode?.illustration || "",
    paragraphs: episode?.paragraphs || [{ id: 1, content: "" }],
    choices: episode?.choices || [],
    to_register: false,
    is_free: false,
  });

  const handleChange = (field: keyof FormData, value: string | Paragraph[]) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handleChange("illustration", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleParagraphChange = (id: number, content: string) => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs.map((p) =>
        p.id === id ? { ...p, content } : p,
      ),
    }));
  };

  const addParagraph = () => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: [
        ...prev.paragraphs,
        { id: prev.paragraphs.length + 1, content: "" },
      ],
    }));
  };

  const removeParagraph = (id: number) => {
    setFormData((prev) => ({
      ...prev,
      paragraphs: prev.paragraphs
        .filter((p) => p.id !== id)
        .map((p, index) => ({ ...p, id: index + 1 })),
    }));
  };

  const handleChoiceChange = (
    index: number,
    field: keyof Choice,
    value: string,
  ) => {
    setFormData((prev) => ({
      ...prev,
      choices: prev.choices.map((choice, i) =>
        i === index
          ? {
              ...choice,
              [field]: value,
              id: choice.id || Date.now().toString(),
            }
          : choice,
      ),
    }));
  };

  const addChoice = () => {
    setFormData((prev) => ({
      ...prev,
      choices: [
        ...prev.choices,
        { id: Date.now().toString(), text: "", nextEpisodeId: "" },
      ],
    }));
  };

  const removeChoice = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      choices: prev.choices.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.episodeForm}>
      <section className={styles.episodeSection}>
        <label htmlFor="book" className={styles.episodeLabel}>
          Livre parent
        </label>
        <select
          id="book"
          value={formData.books_id}
          onChange={(e) => handleChange("books_id", e.target.value)}
          required
          className={styles.episodeSelect}
        >
          <option value="">Sélectionner un livre</option>
          {books.map((book) => (
            <option key={book.id} value={book.id}>
              {book.title}
            </option>
          ))}
        </select>
      </section>

      <section className={styles.episodeSection}>
        <label htmlFor="title" className={styles.episodeLabel}>
          Titre de l'épisode
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => handleChange("title", e.target.value)}
          required
          className={styles.episodeInput}
        />
      </section>

      <section className={styles.episodeIllustrationSection}>
        <label
          htmlFor="illustration"
          className={styles.episodeIllustrationLabel}
        >
          Illustration
        </label>
        <input
          type="file"
          id="illustration"
          accept="image/*"
          onChange={handleImageChange}
          className={styles.episodeFileInput}
        />
        {formData.illustration && (
          <img
            src={formData.illustration}
            alt="Aperçu"
            className={styles.episodeFormPreview}
          />
        )}
        <button
          onClick={() => {
            setFormData((prev) => ({ ...prev, illustration: "" }));
            const illustrationInput = document.getElementById(
              "illustration",
            ) as HTMLInputElement | null;
            if (illustrationInput) {
              illustrationInput.value = "";
            }
          }}
          className={styles.episodeDeleteButton}
          type="button"
        >
          Supprimer l'importation
        </button>
      </section>

      <section className={styles.paragraphsSectionEpisode}>
        <h3 className={styles.episodeTitle}>Paragraphes :</h3>
        {formData.paragraphs.map((paragraph) => (
          <div key={paragraph.id} className={styles.episodeParagraphContainer}>
            <label
              htmlFor={`paragraph-${paragraph.id}`}
              className={styles.episodeParagraphLabel}
            >
              Paragraphe {paragraph.id}
            </label>
            <textarea
              id={`paragraph-${paragraph.id}`}
              value={paragraph.content}
              onChange={(e) =>
                handleParagraphChange(paragraph.id, e.target.value)
              }
              required
              className={styles.episodeTextArea}
            />
            {paragraph.id > 1 && (
              <button
                type="button"
                onClick={() => {
                  if (
                    window.confirm(
                      "Êtes-vous sûr de vouloir supprimer ce paragraphe ?",
                    )
                  ) {
                    removeParagraph(paragraph.id);
                  }
                }}
                className={styles.epidoseRemoveButton}
              >
                Supprimer
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addParagraph}
          className={styles.episodeAddButton}
        >
          Ajouter un paragraphe
        </button>
      </section>

      <section className={styles.episodeChoicesSection}>
        <h3 className={styles.episodeTitle}>Choix</h3>
        {formData.choices.map((choice, index) => (
          <div key={choice.id} className={styles.episodeChoiceContainer}>
            <input
              type="text"
              value={choice.text}
              onChange={(e) =>
                handleChoiceChange(index, "text", e.target.value)
              }
              placeholder="Texte du choix"
              className={styles.episodeChoiceInput}
            />
            <select
              value={choice.nextEpisodeId}
              onChange={(e) =>
                handleChoiceChange(index, "nextEpisodeId", e.target.value)
              }
              className={styles.episodeChoiceSelect}
            >
              <option value="">Sélectionner l'épisode suivant</option>
              {episodes
                .filter(
                  (ep) =>
                    ep.books_id === formData.books_id && ep.id !== episode?.id,
                )
                .map((ep) => (
                  <option key={ep.id} value={ep.id}>
                    {ep.title}
                  </option>
                ))}
            </select>
            <button
              className={styles.episodeRemoveButton}
              type="button"
              onClick={() => {
                if (
                  window.confirm(
                    "Êtes-vous sûr de vouloir supprimer ce choix ?",
                  )
                ) {
                  removeChoice(index);
                }
              }}
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addChoice}
          className={styles.episodeAddButton}
        >
          Ajouter un choix
        </button>
      </section>

      <div className={styles.episodeFormActions}>
        <button type="submit" className={styles.episodeSubmitButton}>
          {episode ? "Modifier" : "Créer"}
        </button>
        <button
          type="button"
          onClick={onCancel}
          className={styles.episodeCancelButton}
        >
          Annuler
        </button>
      </div>
    </form>
  );
};
