import type { ReactNode } from "react";
import { BookProvider } from "../contexts/BookContexts";
import { EpisodeProvider } from "../contexts/EpisodeContexts";
import { GlossaryProvider } from "../contexts/GlossaryContexts";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <BookProvider>
      <EpisodeProvider>
        <GlossaryProvider>{children}</GlossaryProvider>
      </EpisodeProvider>
    </BookProvider>
  );
};
