import { Bell, Hexagon } from "lucide-react";
import styles from "./FAQCategoryCard.module.css";

export default function FAQCategoryCard() {
  return (
    <div className={styles.gridContainer}>
      <button className={`${styles.card} ${styles.primaryCard}`}>
        <Bell className={styles.icon} size={28} aria-hidden="true" />
        <span className={styles.title}>Questions about getting started</span>
      </button>

      <button className={`${styles.card} ${styles.secondaryCard}`}>
        <Hexagon className={styles.icon} size={28} aria-hidden="true" />
        <span className={styles.title}>Questions about privacy</span>
      </button>
    </div>
  );
}
