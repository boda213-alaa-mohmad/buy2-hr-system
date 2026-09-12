export type ChooseType = "FAQ" | "Report issue";

export interface SupportViewProps {
  choose: ChooseType;
  onTabChange: (tab: ChooseType) => void;
}
