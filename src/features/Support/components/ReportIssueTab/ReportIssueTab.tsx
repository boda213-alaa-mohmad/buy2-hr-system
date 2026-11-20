"use client";
import { TicketCardProps, Status } from "../../types/support";
import styles from "./ReportIssueTab.module.css";
import TicketCard from "./TicketCard";
import EmptyTicketsState from "./EmptyTicketsState";
import { MOCK_TICKETS } from "../../data/mockSupportData";
import { useContext } from "react";
import { TicketContext } from "@/context/ticketProvider";

export default function ReportIssueTab({
  onTicketClick,
  valueReport,
  valueOption,
}: {
  onTicketClick: (ticket: TicketCardProps) => void;
  valueReport: string;
  valueOption: Status;
}) {
  const { allTickets } = useContext(TicketContext);

  const formattedNewTickets: TicketCardProps[] = allTickets.map(
    (item, index) => ({
      id: `custom-${index}-${item.subject}`,
      title: item.subject,
      ticketNumber: `300${100 + index}`,
      status:
        item.status === "Open" ||
        item.status === "In progress" ||
        item.status === "Solved"
          ? item.status
          : "Open",
      date: "Just now",
      description: item.description,
      category: item.category,
    }),
  );

  const combinedTickets: TicketCardProps[] = [
    ...formattedNewTickets,
    ...MOCK_TICKETS,
  ];

  const ticketsToDisplay = combinedTickets.filter((ticket) => {
    const matchesSearch = ticket.title
      .toLowerCase()
      .includes(valueReport.toLowerCase());

    const matchesStatus =
      valueOption === "All" || ticket.status === valueOption;

    return matchesSearch && matchesStatus;
  });

  return (
    <>
      {combinedTickets.length === 0 ? (
        <EmptyTicketsState />
      ) : ticketsToDisplay.length === 0 ? (
        <div className={styles.container}>
          <p className={styles.noResults}>
            No tickets found
            {valueReport ? ` matching "${valueReport}"` : ""}
            {valueOption !== "All" ? ` with status "${valueOption}"` : ""}.
          </p>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.ticketsGrid}>
            {ticketsToDisplay.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => onTicketClick(ticket)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
