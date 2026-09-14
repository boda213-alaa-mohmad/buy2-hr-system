import { Ticket } from "lucide-react";
import styles from "./TicketCard.module.css";

interface TicketCardProps {
  id: string;
  title: string;
  ticketNumber: string;
  status: "Open" | "In progress" | "Solved";
  date: string;
  onClick: () => void;
}

export default function TicketCard({
  title,
  ticketNumber,
  status,
  date,
  onClick,
}: TicketCardProps) {
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
          <h3 className={styles.cardTitle}>{title}</h3>
          <span className={styles.ticketNumber}>{ticketNumber}</span>
        </div>
        <span className={`${styles.statusBadge} ${getStatusClass(status)}`}>
          {status}
        </span>
      </div>
      <div className={styles.cardFooter}>
        <span className={styles.ticketDate}>{date}</span>
      </div>
    </div>
  );
}
