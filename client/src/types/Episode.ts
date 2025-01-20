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
  bookId: string;
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
  episode?: Episode;
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
  bookId: string;
  illustration: string;
  paragraphs: Paragraph[];
  choices: Choice[];
};
