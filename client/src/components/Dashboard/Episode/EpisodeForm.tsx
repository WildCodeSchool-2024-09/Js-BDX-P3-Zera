import { useState } from "react";
import { useBooks } from "../../../contexts/BookContexts";
import { useEpisode } from "../../../contexts/EpisodeContexts";
import type {
  Choice,
  EpisodeFormProps,
  FormData,
  Paragraph,
} from "../../../types/Episode";

export const EpisodeForm = ({
  episode,
  onSubmit,
  onCancel,
}: EpisodeFormProps) => {
  const { books } = useBooks();
  const { episodes } = useEpisode();

  const [formData, setFormData] = useState<FormData>({
    title: episode?.title || "",
    bookId: episode?.bookId || "",
    illustration: episode?.illustration || "",
    paragraphs: episode?.paragraphs || [{ id: 1, content: "" }],
    choices: episode?.choices || [],
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
    <form onSubmit={handleSubmit}>
      <label htmlFor="book">Livre parent</label>
      <select
        id="book"
        value={formData.bookId}
        onChange={(e) => handleChange("bookId", e.target.value)}
        required
      >
        <option value="">Sélectionner un livre</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title}
          </option>
        ))}
      </select>

      <label htmlFor="title">Titre de l'épisode</label>
      <input
        type="text"
        id="title"
        value={formData.title}
        onChange={(e) => handleChange("title", e.target.value)}
        required
      />

      <label htmlFor="illustration">Illustration</label>
      <input
        type="file"
        id="illustration"
        accept="image/*"
        onChange={handleImageChange}
      />
      {formData.illustration && (
        <img
          src={formData.illustration}
          alt="Aperçu"
          className="w-48 h-48 object-cover rounded"
        />
      )}

      <h3>Paragraphes</h3>
      {formData.paragraphs.map((paragraph) => (
        <div key={paragraph.id}>
          <label htmlFor={`paragraph-${paragraph.id}`}>
            Paragraphe {paragraph.id}
            <textarea
              id={`paragraph-${paragraph.id}`}
              value={paragraph.content}
              onChange={(e) =>
                handleParagraphChange(paragraph.id, e.target.value)
              }
              required
            />
          </label>
          {paragraph.id > 1 && (
            <button type="button" onClick={() => removeParagraph(paragraph.id)}>
              Supprimer
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={addParagraph}>
        Ajouter un paragraphe
      </button>

      <h3>Choix</h3>
      {formData.choices.map((choice, index) => (
        <div key={choice.id}>
          <input
            type="text"
            value={choice.text}
            onChange={(e) => handleChoiceChange(index, "text", e.target.value)}
            placeholder="Texte du choix"
            required
          />
          <select
            value={choice.nextEpisodeId}
            onChange={(e) =>
              handleChoiceChange(index, "nextEpisodeId", e.target.value)
            }
            required
          >
            <option value="">Sélectionner l'épisode suivant</option>
            {episodes
              .filter(
                (ep) => ep.bookId === formData.bookId && ep.id !== episode?.id,
              )
              .map((ep) => (
                <option key={ep.id} value={ep.id}>
                  {ep.title}
                </option>
              ))}
          </select>
          <button type="button" onClick={() => removeChoice(index)}>
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" onClick={addChoice}>
        Ajouter un choix
      </button>

      <button type="submit">{episode ? "Modifier" : "Créer"}</button>
      <button type="button" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
};
