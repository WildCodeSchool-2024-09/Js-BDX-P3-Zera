import { useState } from "react";
import { useGlossary } from "../../../contexts/GlossaryContexts";
import type { GlossaryItem } from "../../../types/Glossary";
import { GlossaryForm } from "./GlossaryForm";
import { GlossaryList } from "./GlossaryList";
import styles from "./GlossaryPage.module.css";

enum GlossaryFormMode {
  VIEW = "view",
  CREATE = "create",
  EDIT = "edit",
}

export const GlossaryPage = () => {
  const { glossaryItems, createGlossary, updateGlossary, deleteGlossary } =
    useGlossary();
  const [mode, setMode] = useState<GlossaryFormMode>(GlossaryFormMode.VIEW);
  const [editingItem, setEditingItem] = useState<GlossaryItem | null>(null);

  const handleSubmit = (itemData: Omit<GlossaryItem, "id">) => {
    if (mode === GlossaryFormMode.EDIT && editingItem) {
      updateGlossary(editingItem.id, itemData);
    } else {
      createGlossary(itemData);
    }
    setMode(GlossaryFormMode.VIEW);
    setEditingItem(null);
  };

  const handleEdit = (item: GlossaryItem) => {
    setEditingItem(item);
    setMode(GlossaryFormMode.EDIT);
  };

  const handleCancel = () => {
    setMode(GlossaryFormMode.VIEW);
    setEditingItem(null);
  };

  return (
    <main className={styles.glossaryPageMain}>
      <h1 className={styles.titleGlossaryPage}>Glossaire</h1>

      {mode === GlossaryFormMode.VIEW ? (
        <button type="button" onClick={() => setMode(GlossaryFormMode.CREATE)}>
          Ajouter un mot
        </button>
      ) : (
        <section>
          <h2 className={styles.titleGlossaryPage}>
            {mode === GlossaryFormMode.EDIT
              ? "Modification d'un mot"
              : "Ajout d'un nouveau mot"}
          </h2>
          <GlossaryForm
            item={editingItem}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </section>
      )}

      <GlossaryList
        items={glossaryItems}
        onEdit={handleEdit}
        onDelete={deleteGlossary}
      />
    </main>
  );
};
