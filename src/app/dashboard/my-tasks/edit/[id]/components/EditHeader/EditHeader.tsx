import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import styles from "./EditHeader.module.css";

export default function EditHeader() {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.leftSection}>
        <Link
          href="/dashboard/my-tasks"
          className={styles.backBtn}
          aria-label="Back to my tasks dashboard"
        >
          <ChevronLeft size={18} aria-hidden="true" />
          <span>Back</span>
        </Link>
        <h1 className={styles.title}>Edit Task</h1>
      </div>

      <nav aria-label="Task action controls" className={styles.rightSection}>
        <button
          type="button"
          className={styles.discardBtn}
          aria-label="Discard changes"
        >
          Discard
        </button>
        <button
          type="button"
          className={styles.saveBtn}
          aria-label="Save task changes"
        >
          Save Task
        </button>
      </nav>
    </header>
  );
}
