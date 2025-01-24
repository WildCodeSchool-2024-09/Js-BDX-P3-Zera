import type { GlossaryItem } from "../../../types/Glossary";
import styles from "./GlossaryList.module.css";

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
    <section className={styles.glossaryList}>
      {sortedItems.map((item) => (
        <article key={item.id} className={styles.glossaryItem}>
          <h3>{item.word}</h3>
          <p>{item.definition}</p>

          <button
            type="button"
            onClick={() => onEdit(item)}
            className={styles.button}
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={() => onDelete(item.id)}
            className={styles.button}
          >
            Supprimer
          </button>
        </article>
      ))}
    </section>
  );
};
