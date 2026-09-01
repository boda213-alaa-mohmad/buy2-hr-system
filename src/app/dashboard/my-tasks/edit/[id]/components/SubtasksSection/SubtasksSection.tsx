import styles from "./SubtasksSection.module.css";
import { Trash2 } from "lucide-react";

export default function SubtasksSection() {
  return (
    <section className={styles.subTaskCard} aria-labelledby="subtasks-title">
      <div className={styles.cardHeader}>
        <h2 id="subtasks-title" className={styles.title}>
          Revision 1: Fixing Navbar at Dashboard Page
        </h2>

        <button type="button" className={styles.actions} aria-label="Add Task">
          + Add Task
        </button>
      </div>

      <div className={styles.subTaskContainer}>
        <div className={styles.subTasks}>
          <p>Change the icons to font awesome icons.</p>
          <button
            type="button"
            className={styles.trashBtn}
            aria-label="Delete subtask"
          >
            <Trash2 size={20} className={styles.trashIcon} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.subTasks}>
          <p>Change the icons to font awesome icons.</p>
          <button
            type="button"
            className={styles.trashBtn}
            aria-label="Delete subtask"
          >
            <Trash2 size={20} className={styles.trashIcon} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.subTasks}>
          <p>Change the icons to font awesome icons.</p>
          <button
            type="button"
            className={styles.trashBtn}
            aria-label="Delete subtask"
          >
            <Trash2 size={20} className={styles.trashIcon} aria-hidden="true" />
          </button>
        </div>

        <div className={styles.subTasks}>
          <p>Change the icons to font awesome icons.</p>
          <button
            type="button"
            className={styles.trashBtn}
            aria-label="Delete subtask"
          >
            <Trash2 size={20} className={styles.trashIcon} aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
