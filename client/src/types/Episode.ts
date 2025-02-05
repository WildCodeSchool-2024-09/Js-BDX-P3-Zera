export interface Paragraph {
  id: number;
  content: string;
}

export interface Choice {
  id: string;
  text: string;
  nextEpisodeId: string;
}

export interface Episode {
  id: string;
  title: string;
  books_id: string;
  illustration: string;
  paragraphs: Paragraph[];
  choices: Choice[];
}

export enum EpisodeFormMode {
  VIEW = "view",
  CREATE = "create",
  EDIT = "edit",
}

export interface EpisodeFormProps {
  episode: Episode | null;
  onSubmit: (episodeData: Omit<Episode, "id">) => void;
  onCancel: () => void;
}

export interface EpisodeListProps {
  episodes: Episode[];
  onEdit: (episode: Episode) => void;
  onDelete: (id: string) => void;
}

export type FormData = {
  title: string;
  books_id: string;
  type: string;
  illustration: string;
  paragraphs: Paragraph[];
  choices: Choice[];
  to_register: boolean;
  is_free: boolean;
};
