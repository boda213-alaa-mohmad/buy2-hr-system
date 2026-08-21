import DashboardCard from "@/Components/shared/card/DashboardCard";
import { Fingerprint } from "lucide-react";
import styles from "./AttendanceCard.module.css";

export default function AttendanceCard() {
  return (
    <DashboardCard
      title="Attendance"
      subtitle="Get to work, but don't forget to have a break."
    >
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.infoSide}>
            <div className={styles.statusBox}>
              <div className={styles.fingerIcon} aria-hidden="true">
                <Fingerprint size={24} />
              </div>
              <p className={styles.statusText}>
                {"You've not marked yourself as present today."}
              </p>
            </div>

            <div className={styles.timeIndicators}>
              <div className={styles.timeItem}>
                <span
                  className={`${styles.badge} ${styles.greenBadge}`}
                  aria-hidden="true"
                ></span>
                <span>
                  Clock in <strong className={styles.greenline}>--</strong>
                </span>
              </div>
              <div className={styles.timeItem}>
                <span
                  className={`${styles.badge} ${styles.redBadge}`}
                  aria-hidden="true"
                ></span>
                <span>
                  Clock out <strong className={styles.redline}>--</strong>
                </span>
              </div>
            </div>
          </div>

          <div
            className={styles.timerSide}
            role="region"
            aria-label="Worked time tracker"
          >
            <div className={styles.circleTimer}>
              <span className={styles.timeText} aria-live="polite">
                00:00
              </span>
              <span className={styles.timeLabel}>Worked today</span>
            </div>
          </div>
        </div>

        <button type="button" className={styles.clockInBtn}>
          Clock in
        </button>
      </div>
    </DashboardCard>
  );
}
