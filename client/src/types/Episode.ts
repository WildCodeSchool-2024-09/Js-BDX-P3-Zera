export interface Paragraph {
  id: number;
  content: string;
}

export interface Choice {
  id: number;
  text: string;
  nextEpisodeId: string;
}

export interface Episode {
  id: number;
  title: string;
  books_id: number;
  illustration: string;
  paragraphs: {
    id: number;
    content: string;
  }[];
  choices: Choice[];
  to_register: boolean;
  is_free: boolean;
  type: string;
}

export enum EpisodeFormMode {
  VIEW = "view",
  CREATE = "create",
  EDIT = "edit",
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

export type SubmissionData = Omit<FormData, "paragraphs"> & {
  paragraphs: string[];
};

export interface EpisodeFormProps {
  episode: Episode | null;
  onSubmit: (episodeData: FormData) => void;
  onCancel: () => void;
}

export interface EpisodeListProps {
  episodes: Episode[];
  onEdit: (episode: Episode) => void;
  onDelete: (id: number) => void;
}
