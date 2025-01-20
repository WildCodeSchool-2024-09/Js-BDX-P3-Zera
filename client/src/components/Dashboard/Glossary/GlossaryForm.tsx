// components/glossary/GlossaryForm.tsx
import { useState } from "react";
import type { GlossaryItem } from "../../../types/Glossary";

interface GlossaryFormProps {
  item?: GlossaryItem;
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
    <form onSubmit={handleSubmit}>
      <section>
        <h2>Information du mot</h2>

        <label htmlFor="word">Mot</label>
        <input
          type="text"
          id="word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
          required
        />

        <label htmlFor="definition">Définition</label>
        <textarea
          id="definition"
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
          required
        />
      </section>

      <button type="submit">{item ? "Modifier" : "Créer"}</button>
      <button type="button" onClick={onCancel}>
        Annuler
      </button>
    </form>
  );
};
