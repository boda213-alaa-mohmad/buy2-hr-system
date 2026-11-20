import { AlertTriangle, X } from "lucide-react";
import styles from "./AlertCards.module.css";

export default function IncompleteFieldsModal({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modalCard}>
        <button type="button" className={styles.closeBtn} aria-label="Close">
          <X size={20} onClick={onClose} />
        </button>

        <div className={`${styles.iconCircle} ${styles.warningCircle}`}>
          <AlertTriangle size={26} className={styles.warningIcon} />
        </div>

        <h3 className={styles.title}>Incomplete fields!</h3>
        <p className={styles.description}>
          Please fill in all required fields before saving the ticket.
        </p>

        <div className={styles.singleBtnWrapper}>
          <button type="button" className={styles.primaryBtn} onClick={onClose}>
            Okay
          </button>
        </div>
      </div>
    </div>
  );
}
