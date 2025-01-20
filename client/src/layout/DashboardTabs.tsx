import { BookPage } from "../components/Dashboard/Book/BookPage";
import { Tab } from "../components/Dashboard/Common/Tab";
import TabList from "../components/Dashboard/Common/TabList";
import { EpisodePage } from "../components/Dashboard/Episode/EpisodePage";
import { GlossaryPage } from "../components/Dashboard/Glossary/GlossaryPage";

export const DashboardTabs = () => {
  return (
    <TabList defaultTab="books">
      <Tab id="books" label="Livres">
        <BookPage />
      </Tab>
      <Tab id="episodes" label="Épisodes">
        <EpisodePage />
      </Tab>
      <Tab id="glossary" label="Glossaire">
        <GlossaryPage />
      </Tab>
    </TabList>
  );
};
