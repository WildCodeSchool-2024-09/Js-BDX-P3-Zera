export interface Episode {
  id: number;
  title: string;
  is_free: boolean;
  to_register: boolean;
  books_id: number;
  type: string;
  illustration: Illustration;
  paragraphs: Paragraph[];
  choices: Choice[];
}

export interface Illustration {
  id: number;
  url: string;
  episodes_id: number;
}

export interface Paragraph {
  id: number;
  content: string;
  episodes_id: number;
}

export interface Choice {
  id: number;
  text: string;
  path: string;
  nextEpisodeId?: number; // Add this line
}

export interface Book {
  episodes: Episode[];
  id: number;
  title: string;
  summary: string;
  illustration: string;
}

export interface GlossaryItem {
  id: number;
  word: string;
  definition: string;
}
