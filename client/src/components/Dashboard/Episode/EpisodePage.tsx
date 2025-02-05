import { useState } from "react";
import { useEpisode } from "../../../contexts/EpisodeContexts";
import { EpisodeFormMode } from "../../../types/Episode";
import type { Episode } from "../../../types/Episode.d.ts";
import { EpisodeForm } from "./EpisodeForm";
import { EpisodeList } from "./EpisodeList";
import styles from "./EpisodePage.module.css";

export const EpisodePage = () => {
  const { episodes, createEpisode, updateEpisode, deleteEpisode } =
    useEpisode();
  const [mode, setMode] = useState<EpisodeFormMode>(EpisodeFormMode.VIEW);
  const [selectedEpisode, setSelectedEpisode] = useState<Episode | null>(null);

  const handleSubmit = (episodeData: Omit<Episode, "id">) => {
    if (mode === EpisodeFormMode.EDIT && selectedEpisode) {
      updateEpisode(selectedEpisode.id, episodeData);
    } else {
      createEpisode(episodeData);
    }
    setMode(EpisodeFormMode.VIEW);
    setSelectedEpisode(null);
  };

  const handleEdit = (episode: Episode) => {
    setSelectedEpisode(episode);
    setMode(EpisodeFormMode.EDIT);
  };

  const handleCancel = () => {
    setMode(EpisodeFormMode.VIEW);
    setSelectedEpisode(null);
  };

  return (
    <main className={styles.episodePageMain}>
      <h1 className={styles.titleEpisodePage}>Gestion des épisodes</h1>

      {mode === EpisodeFormMode.VIEW ? (
        <button
          type="button"
          className={styles.episodePageCreateButton}
          onClick={() => setMode(EpisodeFormMode.CREATE)}
        >
          Créer un nouvel épisode
        </button>
      ) : (
        <section>
          <h2 className={styles.titleEpisodePage}>
            {mode === EpisodeFormMode.EDIT
              ? "Modification d'un épisode"
              : "Création d'un épisode"}
          </h2>
          <EpisodeForm
            episode={selectedEpisode}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </section>
      )}

      {mode === EpisodeFormMode.VIEW && (
        <EpisodeList
          episodes={episodes}
          onEdit={handleEdit}
          onDelete={deleteEpisode}
        />
      )}
    </main>
  );
};
