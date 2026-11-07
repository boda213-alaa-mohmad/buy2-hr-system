export type ChooseType = "FAQ" | "Report issue";

export interface SupportViewProps {
  choose: ChooseType;
  onTabChange: (tab: ChooseType) => void;
}

export interface TicketCardProps {
  id: string;
  title: string;
  ticketNumber: string;
  status: "Open" | "In progress" | "Solved";
  date: string;
  onClick?: () => void;
}
