export interface TabProps {
  id: string;
  label: string;
  children?: React.ReactNode;
  isActive?: boolean;
  onSelect?: (id: number) => void;
  className?: string;
  onKeyDown?: (event: React.KeyboardEvent) => void;
}

export interface TabListProps {
  children: React.ReactElement<TabProps>[];
  defaultTab?: string;
}
