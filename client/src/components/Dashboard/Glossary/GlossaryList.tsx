import type { GlossaryItem } from "../../../types/Glossary";
import styles from "./GlossaryList.module.css";

interface GlossaryListProps {
  items: GlossaryItem[];
  onEdit: (item: GlossaryItem) => void;
  onDelete: (id: number) => void;
}

export const GlossaryList = ({
  items,
  onEdit,
  onDelete,
}: GlossaryListProps) => {
  const sortedItems = [...items].sort((a, b) => a.word.localeCompare(b.word));

  return (
    <section className={styles.glossaryListSection}>
      {sortedItems.map((item) => (
        <article key={item.id} className={styles.glossaryItem}>
          <h3 className={styles.glossaryListTitle}>{item.word}</h3>
          <p>{item.definition}</p>

          <button
            type="button"
            onClick={() => onEdit(item)}
            className={styles.glossaryListAddButton}
          >
            Modifier
          </button>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Êtes-vous sûr de vouloir supprimer cet élément ?",
                )
              ) {
                onDelete(item.id);
              }
            }}
            className={styles.glossaryListDeleteButton}
          >
            Supprimer
          </button>
        </article>
      ))}
    </section>
  );
};
