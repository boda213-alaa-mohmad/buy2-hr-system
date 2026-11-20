import { AlertTriangle, X } from "lucide-react";
import styles from "./AlertCards.module.css";

export default function DiscardConfirmModal({
  onClose,
  onConfirm,
}: {
  onClose: () => void;
  onConfirm: () => void;
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

        <h3 className={styles.title}>Discard changes?</h3>
        <p className={styles.description}>
          Are you sure you want to discard your changes? Any unsaved data will
          be lost.
        </p>

        <div className={styles.actionsRow}>
          <button type="button" className={styles.cancelBtn} onClick={onClose}>
            Cancel
          </button>
          <button
            type="button"
            className={styles.primaryBtn}
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
