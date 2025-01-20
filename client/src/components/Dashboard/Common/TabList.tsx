import React, { useState } from "react";
import type { TabListProps, TabProps } from "../../../types/Tab";
const TabList = ({ children, defaultTab }: TabListProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || "");

  const tabs = React.Children.toArray(children).filter(React.isValidElement);

  const handleKeyDown = (event: React.KeyboardEvent, currentIndex: number) => {
    let newIndex: number | null = null;

    switch (event.key) {
      case "ArrowRight":
        newIndex = currentIndex === tabs.length - 1 ? 0 : currentIndex + 1;
        break;
      case "ArrowLeft":
        newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
        break;
      case "Home":
        newIndex = 0;
        break;
      case "End":
        newIndex = tabs.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    const newTab = tabs[newIndex] as React.ReactElement<TabProps>;
    setActiveTab(newTab.props.id);
  };

  return (
    <main className="dashboard">
      <nav className="tab-navigation" aria-label="Dashboard section">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isActive: activeTab === child.props.id,
              onSelect: setActiveTab,
              onKeyDown: (e: React.KeyboardEvent) =>
                handleKeyDown(e, tabs.indexOf(child)),
            });
          }
          return child;
        })}
      </nav>

      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.props.id === activeTab) {
          return (
            <section
              id={`${child.props.id}-panel`}
              aria-labelledby={`${child.props.id}-tab`}
              className="tab-panel"
            >
              {child.props.children}
            </section>
          );
        }
        return null;
      })}
    </main>
  );
};

export default TabList;
