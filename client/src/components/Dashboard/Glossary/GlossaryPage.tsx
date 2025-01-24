import { useState } from "react";
import { useGlossary } from "../../../contexts/GlossaryContexts";
import type { GlossaryItem } from "../../../types/Glossary";
import { GlossaryForm } from "./GlossaryForm";
import { GlossaryList } from "./GlossaryList";

enum GlossaryFormMode {
  VIEW = "view",
  CREATE = "create",
  EDIT = "edit",
}

export const GlossaryPage = () => {
  const { glossaryItems, createItem, updateItem, deleteItem } = useGlossary();
  const [mode, setMode] = useState<GlossaryFormMode>(GlossaryFormMode.VIEW);
  const [editingItem, setEditingItem] = useState<GlossaryItem | undefined>();

  const handleSubmit = (itemData: Omit<GlossaryItem, "id">) => {
    if (mode === GlossaryFormMode.EDIT && editingItem) {
      updateItem(editingItem.id, itemData);
    } else {
      createItem(itemData);
    }
    setMode(GlossaryFormMode.VIEW);
    setEditingItem(undefined);
  };

  const handleEdit = (item: GlossaryItem) => {
    setEditingItem(item);
    setMode(GlossaryFormMode.EDIT);
  };

  const handleCancel = () => {
    setMode(GlossaryFormMode.VIEW);
    setEditingItem(undefined);
  };

  return (
    <main>
      <h1>Glossaire</h1>

      {mode === GlossaryFormMode.VIEW ? (
        <button type="button" onClick={() => setMode(GlossaryFormMode.CREATE)}>
          Ajouter un mot
        </button>
      ) : (
        <section>
          <h2>
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
        onDelete={deleteItem}
      />
    </main>
  );
};
