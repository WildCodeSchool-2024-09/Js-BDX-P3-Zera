import { useState } from "react";
import type { Choice } from "../../../types/Episode";

interface ChoiceFormProps {
  existingEpisodes: Array<{ id: string; title: string }>;
  choices: Choice[];
  onChange: (newChoices: Choice[]) => void;
}

export const ChoiceForm = ({
  existingEpisodes,
  choices,
  onChange,
}: ChoiceFormProps) => {
  const [currentChoice, setCurrentChoice] = useState<Choice>({
    id: Date.now(),
    text: "",
    nextEpisodeId: "",
  });

  const handleAddChoice = () => {
    onChange([...choices, { ...currentChoice, id: Date.now() }]);
    setCurrentChoice({
      id: Date.now(),
      text: "",
      nextEpisodeId: "",
    });
  };

  const handleUpdateChoice = (id: number, updatedChoice: Partial<Choice>) => {
    onChange(
      choices.map((choice) =>
        choice.id === id ? { ...choice, ...updatedChoice } : choice,
      ),
    );
  };

  const handleRemoveChoice = (id: number) => {
    onChange(choices.filter((choice) => choice.id !== id));
  };

  return (
    <>
      <h2>Choix disponibles</h2>

      <section>
        <h3>Ajouter un choix</h3>
        <textarea
          value={currentChoice.text}
          onChange={(e) =>
            setCurrentChoice((prev) => ({
              ...prev,
              text: e.target.value,
            }))
          }
          placeholder="Texte du choix (optionnel)"
        />

        <select
          aria-label="targetEpisodeId"
          value={currentChoice.nextEpisodeId}
          onChange={(e) =>
            setCurrentChoice((prev) => ({
              ...prev,
              targetEpisodeId: e.target.value,
            }))
          }
        >
          <option value="">Sélectionner un épisode (optionnel)</option>
          {existingEpisodes.map((episode) => (
            <option key={episode.id} value={episode.id}>
              {episode.title}
            </option>
          ))}
        </select>

        <button type="button" onClick={handleAddChoice}>
          Ajouter ce choix
        </button>
      </section>

      <section>
        <h3>Choix existants</h3>
        {choices.length === 0 ? (
          <p>Aucun choix ajouté.</p>
        ) : (
          choices.map((choice) => (
            <article key={choice.id}>
              <textarea
                value={choice.text}
                onChange={(e) =>
                  handleUpdateChoice(choice.id, { text: e.target.value })
                }
                placeholder="Texte du choix (optionnel)"
              />
              <select
                aria-label="targetEpisodeId"
                value={choice.nextEpisodeId}
                onChange={(e) =>
                  handleUpdateChoice(choice.id, {
                    nextEpisodeId: e.target.value,
                  })
                }
              >
                <option value="">Sélectionner un épisode (optionnel)</option>
                {existingEpisodes.map((episode) => (
                  <option key={episode.id} value={episode.id}>
                    {episode.title}
                  </option>
                ))}
              </select>
              <button
                type="button"
                onClick={() => handleRemoveChoice(choice.id)}
              >
                Supprimer
              </button>
            </article>
          ))
        )}
      </section>
    </>
  );
};
