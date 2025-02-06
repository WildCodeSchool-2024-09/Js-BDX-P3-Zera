import { createContext, useContext, useEffect, useState } from "react";
import type { GlossaryItem } from "../types/Glossary";

interface GlossaryContextType {
  glossaryItems: GlossaryItem[];
  createGlossary: (item: Omit<GlossaryItem, "id">) => Promise<void>;
  updateGlossary: (id: number, item: Omit<GlossaryItem, "id">) => Promise<void>;
  deleteGlossary: (id: number) => Promise<void>;
  isLoading: boolean;
  error: Error | null;
}

const GlossaryContext = createContext<GlossaryContextType | null>(null);

export const GlossaryProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [glossaryItems, setGlossary] = useState<GlossaryItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGlossary = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/glossary`,
        );
        if (!response.ok)
          throw new Error("Erreur lors du chargement des épisodes");
        const data = await response.json();
        setGlossary(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Une erreur est survenue"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchGlossary();
  }, []);

  const createGlossary = async (glossaryData: Omit<GlossaryItem, "id">) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/glossary`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(glossaryData),
        },
      );
      if (!response.ok) throw new Error("Erreur lors de la création");
      const data = await response.json();
      const newItem = { ...glossaryData, id: data.insertId };
      setGlossary((prev) => [...prev, newItem]);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateGlossary = async (
    id: number,
    itemData: Omit<GlossaryItem, "id">,
  ) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/glossary/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(itemData),
        },
      );

      if (!response.ok) throw new Error("Erreur lors de la mise à jour");
      setGlossary((prev) =>
        prev.map((item) => (item.id === id ? { ...itemData, id } : item)),
      );
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
  const deleteGlossary = async (id: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/glossary/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!response.ok) throw new Error("Erreur lors de la suppression");
      setGlossary((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlossaryContext.Provider
      value={{
        glossaryItems,
        createGlossary,
        updateGlossary,
        deleteGlossary,
        isLoading,
        error,
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
