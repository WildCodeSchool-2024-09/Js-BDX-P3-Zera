import { createContext, useContext, useState } from "react";
import type { GlossaryItem } from "../types/Glossary";

interface GlossaryContextType {
  glossaryItems: GlossaryItem[];
  createItem: (item: Omit<GlossaryItem, "id">) => void;
  updateItem: (id: string, item: Omit<GlossaryItem, "id">) => void;
  deleteItem: (id: string) => void;
}

const GlossaryContext = createContext<GlossaryContextType | null>(null);

export const GlossaryProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [glossaryItems, setGlossaryItems] = useState<GlossaryItem[]>([]);

  const createItem = (itemData: Omit<GlossaryItem, "id">) => {
    const newItem = {
      ...itemData,
      id: crypto.randomUUID(),
    };
    setGlossaryItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id: string, itemData: Omit<GlossaryItem, "id">) => {
    setGlossaryItems((prev) =>
      prev.map((item) => (item.id === id ? { ...itemData, id } : item)),
    );
  };

  const deleteItem = (id: string) => {
    setGlossaryItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <GlossaryContext.Provider
      value={{
        glossaryItems,
        createItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </GlossaryContext.Provider>
  );
};

export const useGlossary = () => {
  const context = useContext(GlossaryContext);
  if (context === null) {
    throw new Error("useGlossary must be used within a GlossaryProvider");
  }
  return context;
};
