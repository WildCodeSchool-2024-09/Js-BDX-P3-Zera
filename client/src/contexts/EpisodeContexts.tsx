import { createContext, useContext, useEffect, useState } from "react";
import type { Episode } from "../types/Episode";

interface EpisodeContextType {
  episodes: Episode[];
  createEpisode: (episode: Omit<Episode, "id">) => void;
  updateEpisode: (id: string, episode: Omit<Episode, "id">) => void;
  deleteEpisode: (id: string) => void;
}

const EpisodeContext = createContext<EpisodeContextType | null>(null);

export const EpisodeProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/episodes`,
        );
        if (!response.ok)
          throw new Error("Erreur lors du chargement des épisodes");
        const data = await response.json();
        setEpisodes(data);
      } catch (err) {
        setError(
          err instanceof Error ? err : new Error("Une erreur est survenue"),
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const createEpisode = async (episodeData: Omit<Episode, "id">) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/episodes`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(episodeData),
        },
      );

      if (!response.ok) throw new Error("Erreur lors de la création du livre");

      const data = await response.json();
      const newEpisode = { ...episodeData, id: data.insertId };
      setEpisodes((prev) => [...prev, newEpisode]);
    } catch (err) {
      setError(
        err instanceof Error ? err : new Error("Une erreur est survenue"),
      );
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateEpisode = (id: string, episodeData: Omit<Episode, "id">) => {
    setEpisodes((prev) =>
      prev.map((episode) =>
        episode.id === id ? { ...episodeData, id } : episode,
      ),
    );
  };

  const deleteEpisode = (id: string) => {
    setEpisodes((prev) => prev.filter((episode) => episode.id !== id));
  };

  const value = {
    episodes,
    createEpisode,
    updateEpisode,
    deleteEpisode,
    isLoading,
    error,
  };

  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
};

export const useEpisode = () => {
  const context = useContext(EpisodeContext);
  if (context === null) {
    throw new Error("useEpisode must be used within a EpisodeProvider");
  }
  return context;
};
