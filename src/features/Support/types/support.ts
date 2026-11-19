export type ChooseType = "FAQ" | "Report issue";

// ? I do that because I will pass this to filter button (open, in progress, solved)
export type Status = "All" | "Open" | "In progress" | "Solved";
export interface SupportViewProps {
  choose: ChooseType;
  onTabChange: (tab: ChooseType) => void;
}

export interface TicketCardProps {
  id: string;
  title: string;
  ticketNumber: string;
  status?: Status;
  date: string;
  description: string;
  category: string;
  onClick?: () => void;
}
