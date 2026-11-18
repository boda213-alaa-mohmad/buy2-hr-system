"use client";

import { TicketCardProps } from "../../types/support";
import styles from "./ReportIssueTab.module.css";
import TicketCard from "./TicketCard";
import EmptyTicketsState from "./EmptyTicketsState";
import { MOCK_TICKETS } from "../../data/mockSupportData";
import { Status } from "@/app/dashboard/support/page";

export default function ReportIssueTab({
  onTicketClick,
  valueReport,
  valueOption,
}: {
  onTicketClick: (ticket: TicketCardProps) => void;
  valueReport: string;
  valueOption: Status;
}) {
 const ticketsToDisplay = MOCK_TICKETS.filter((ticket) => {
   const matchesSearch = ticket.title
     .toLowerCase()
     .includes(valueReport.trim().toLowerCase());

   const matchesStatus = valueOption === "All" || ticket.status === valueOption;

   return matchesSearch && matchesStatus;
 });

  return (
    <>
      {MOCK_TICKETS.length === 0 ? (
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
