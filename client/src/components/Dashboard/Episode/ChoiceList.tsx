import type { Choice, Episode } from "../types";

interface ChoiceListProps {
  choices: Choice[];
  episodes: Episode[];
  onChange: (
    id: number,
    field: "text" | "nextEpisodeId",
    value: string,
  ) => void;
  onAdd: () => void;
  onDelete: (id: number) => void;
}

const ChoiceList = ({
  choices,
  episodes,
  onChange,
  onAdd,
  onDelete,
}: ChoiceListProps) => {
  return (
    <section>
      <h4>Choix</h4>
      {choices.map((choice) => (
        <div key={choice.id}>
          <input
            aria-label="text"
            type="text"
            value={choice.text}
            onChange={(e) => onChange(choice.id, "text", e.target.value)}
          />
          <select
            aria-label="nextEpisodeId"
            value={choice.nextEpisodeId || ""}
            onChange={(e) =>
              onChange(choice.id, "nextEpisodeId", e.target.value)
            }
          >
            <option value="" disabled>
              Sélectionner un épisode suivant
            </option>
            {episodes.map((ep) => (
              <option key={ep.id} value={ep.id}>
                {ep.title}
              </option>
            ))}
          </select>
          <button
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Êtes-vous sûr de vouloir supprimer cet épisode ?",
                )
              ) {
                onDelete(choice.id);
              }
            }}
          >
            Supprimer
          </button>
        </div>
      ))}
      <button type="button" onClick={onAdd}>
        Ajouter un choix
      </button>
    </section>
  );
};

export default ChoiceList;
