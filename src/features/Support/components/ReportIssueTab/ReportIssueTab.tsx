import styles from "./ReportIssueTab.module.css";
import TicketCard from "./TicketCard";

export const MOCK_TICKETS = [
  {
    id: "1",
    title: "How to uninstall the...",
    ticketNumber: "334533",
    status: "Open",
    date: "Mar 23, 2022",
  },
  {
    id: "2",
    title: "How to uninstall the...",
    ticketNumber: "334589",
    status: "Solved",
    date: "Mar 23, 2022",
  },
  {
    id: "3",
    title: "How to uninstall the...",
    ticketNumber: "334612",
    status: "In progress",
    date: "Mar 23, 2022",
  },
  {
    id: "4",
    title: "How to uninstall the...",
    ticketNumber: "334670",
    status: "Open",
    date: "Mar 23, 2022",
  },
  {
    id: "5",
    title: "How to uninstall the...",
    ticketNumber: "334715",
    status: "Solved",
    date: "Mar 23, 2022",
  },
  {
    id: "6",
    title: "How to uninstall the...",
    ticketNumber: "334780",
    status: "In progress",
    date: "Mar 23, 2022",
  },
  {
    id: "7",
    title: "How to uninstall the...",
    ticketNumber: "334821",
    status: "Open",
    date: "Mar 23, 2022",
  },
  {
    id: "8",
    title: "How to uninstall the...",
    ticketNumber: "334899",
    status: "Solved",
    date: "Mar 23, 2022",
  },
  {
    id: "9",
    title: "How to uninstall the...",
    ticketNumber: "334942",
    status: "In progress",
    date: "Mar 23, 2022",
  },
  {
    id: "10",
    title: "How to uninstall the...",
    ticketNumber: "335011",
    status: "Solved",
    date: "Mar 23, 2022",
  },
  {
    id: "11",
    title: "How to uninstall the...",
    ticketNumber: "335084",
    status: "In progress",
    date: "Mar 23, 2022",
  },
  {
    id: "12",
    title: "How to uninstall the...",
    ticketNumber: "335120",
    status: "Solved",
    date: "Mar 23, 2022",
  },
];
export default function ReportIssueTab() {
  return (
    <div className={styles.container}>
      <div className={styles.ticketsGrid}>
        {MOCK_TICKETS.map((ticket) => (
          <TicketCard
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            ticketNumber={ticket.ticketNumber}
            status={ticket.status as "Open" | "In progress" | "Solved"}
            date={ticket.date}
          />
        ))}
      </div>
    </div>
  );
}
