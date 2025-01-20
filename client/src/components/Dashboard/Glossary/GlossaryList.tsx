// components/glossary/GlossaryList.tsx
import type { GlossaryItem } from "../../../types/Glossary";

interface GlossaryListProps {
  items: GlossaryItem[];
  onEdit: (item: GlossaryItem) => void;
  onDelete: (id: string) => void;
}

export const GlossaryList = ({
  items,
  onEdit,
  onDelete,
}: GlossaryListProps) => {
  const sortedItems = [...items].sort((a, b) => a.word.localeCompare(b.word));

  return (
    <section>
      <h2>Liste des mots</h2>
      {sortedItems.map((item) => (
        <article key={item.id}>
          <h3>{item.word}</h3>
          <p>{item.definition}</p>

          <button type="button" onClick={() => onEdit(item)}>
            Modifier
          </button>
          <button type="button" onClick={() => onDelete(item.id)}>
            Supprimer
          </button>
        </article>
      ))}
    </section>
  );
};
