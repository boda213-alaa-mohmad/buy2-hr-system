import { Clock3 } from "lucide-react";
import styles from "@/Components/Layouts/header/Header.module.css";

export default function DashboardHeader() {
  return (
    <div className={styles.profileCard}>
      <div className={styles.greet}>
        <h2>Hello Mohmed 👋🏻</h2>
        <p>Good Morning</p>
      </div>

      <div className={styles.dateContainer}>
        <div className={styles.clock}>
          <Clock3 size={40} />
        </div>
        <div className={styles["date-and-time"]}>
          <p>Current Date and Time</p>
          <p>26 September 2023, 12:10 PM</p>
        </div>
      </div>
    </div>
  );
}
