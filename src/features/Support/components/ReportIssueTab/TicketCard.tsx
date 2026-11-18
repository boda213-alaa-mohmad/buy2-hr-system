"use client";
import { Ticket } from "lucide-react";
import styles from "./TicketCard.module.css";
import { TicketCardProps } from "../../types/support";

interface TicketCardComponentProps {
  ticket: TicketCardProps;
  onClick?: () => void;
}

export default function TicketCard({
  ticket,
  onClick,
}: TicketCardComponentProps) {
  const getStatusClass = (status: string) => {
    switch (status) {
      case "Open":
        return styles.statusOpen;
      case "In progress":
        return styles.statusInProgress;
      case "Solved":
        return styles.statusSolved;
      default:
        return "";
    }
  };

  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <Ticket size={20} />
        </div>
        <div className={styles.cardInfo}>
          <h3 className={styles.cardTitle}>{ticket.title}</h3>
          <span className={styles.ticketNumber}>{ticket.ticketNumber}</span>
        </div>
        <span
          className={`${styles.statusBadge} ${getStatusClass(ticket.status ?? "Open")}`}
        >
          {ticket.status}
        </span>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.ticketDate}>{ticket.date}</span>
      </div>
    </div>
  );
}
