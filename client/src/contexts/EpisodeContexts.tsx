import { createContext, useContext, useState } from "react";
import type { Episode } from "../types/Episode";

interface EpisodeContextType {
  episodes: Episode[];
  createEpisode: (episode: Omit<Episode, "id">) => void;
  updateEpisode: (id: string, episode: Omit<Episode, "id">) => void;
  deleteEpisode: (id: string) => void;
}

const EpisodeContext = createContext<EpisodeContextType | undefined>(undefined);

export const EpisodeProvider = ({
  children,
}: { children: React.ReactNode }) => {
  const [episodes, setEpisodes] = useState<Episode[]>([]);

  const createEpisode = (episodeData: Omit<Episode, "id">) => {
    const newEpisode = {
      ...episodeData,
      id: crypto.randomUUID(),
    };
    setEpisodes((prev) => [...prev, newEpisode]);
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
  };

  return (
    <EpisodeContext.Provider value={value}>{children}</EpisodeContext.Provider>
  );
};

export const useEpisode = () => {
  const context = useContext(EpisodeContext);
  if (context === undefined) {
    throw new Error("useEpisode must be used within a EpisodeProvider");
  }
  return context;
};
