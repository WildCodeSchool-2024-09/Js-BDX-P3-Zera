import { useState } from "react";
import type { GlossaryItem } from "../../../types/Glossary";
import styles from "./GlossaryForm.module.css";

interface GlossaryFormProps {
  item: GlossaryItem | null;
  onSubmit: (itemData: Omit<GlossaryItem, "id">) => void;
  onCancel: () => void;
}

export const GlossaryForm = ({
  item,
  onSubmit,
  onCancel,
}: GlossaryFormProps) => {
  const [word, setWord] = useState(item?.word || "");
  const [definition, setDefinition] = useState(item?.definition || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      word: word.trim(),
      definition: definition.trim(),
    });
  };

  return (
    <form className={styles.glossaryForm} onSubmit={handleSubmit}>
      <section className={styles.glossarySection}>
        <label htmlFor="word" className={styles.glossaryLabel}>
          Mot
        </label>
        <input
          type="text"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          className={styles.glossaryWord}
          required
        />

        <label htmlFor="definition" className={styles.glossaryLabel}>
          Définition
        </label>
        <textarea
          id="definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          className={styles.glossaryDefinition}
          required
        />
      </section>

      <button type="submit" className={styles.glossarySubmitButton}>
        {item ? "Modifier" : "Créer"}
      </button>
      <button
        type="button"
        className={styles.glossaryCancelButton}
        onClick={onCancel}
      >
        Annuler
      </button>
    </form>
  );
};
