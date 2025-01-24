import type { TabProps } from "../../../types/Tab";
import styles from "./Tab.module.css";

export const Tab = ({
  id,
  label,
  isActive,
  onSelect,
  onKeyDown,
  className,
}: TabProps) => {
  return (
    <button
      role="tab"
      id={`${id}-tab`}
      aria-selected={isActive}
      aria-controls={`${id}-panel`}
      tabIndex={isActive ? 0 : -1}
      type="button"
      onClick={() => onSelect?.(id)}
      onKeyDown={onKeyDown}
      className={`${styles.tab} ${className || ""}`}
    >
      {label}
    </button>
  );
};
