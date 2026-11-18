"use client";

import { TicketCardProps } from "../../types/support";
import styles from "./ReportIssueTab.module.css";
import TicketCard from "./TicketCard";
import EmptyTicketsState from "./EmptyTicketsState";
import { MOCK_TICKETS } from "../../data/mockSupportData";

export default function ReportIssueTab({
  onTicketClick,
  valueReport,
}: {
  onTicketClick: (ticket: TicketCardProps) => void;
  valueReport: string;
}) {
  function getFilteredTickets() {
    return MOCK_TICKETS.filter((item) => {
      return item.title.toLowerCase().includes(valueReport.toLowerCase());
    });
  }

  const filteredTickets = getFilteredTickets();

  return (
    <>
      {MOCK_TICKETS.length === 0 ? (
        <EmptyTicketsState />
      ) : filteredTickets.length === 0 ? (
        <div className={styles.container}>
          <p className={styles.noResults}>
            No Reports found matching your search.
          </p>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.ticketsGrid}>
            {filteredTickets.map((ticket) => (
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
