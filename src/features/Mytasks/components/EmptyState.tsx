"use client";
import styles from "./EmptyState.module.css";
import { ClipboardList } from "lucide-react";
import Link from "next/link";

export default function EmptyState() {
  const tasks: number = 0;

  return (
    <section className={styles.container} aria-labelledby="tasks-heading">
      {/* Header Section */}
      <div className={styles.header}>
        <h2 id="tasks-heading" className={styles.title}>
          My Tasks
        </h2>

        {/* تحويل الزرار لـ Link مصفف بنفس الـ Class */}
        <Link
          href="/dashboard/my-tasks/add-task"
          className={styles.addTaskBtn}
          aria-label="Create a new task"
        >
          + Add Task
        </Link>
      </div>

      {/* Empty State Content */}
      <div className={styles.emptyContent} role="status" aria-live="polite">
        {tasks === 0 && (
          <div className={styles.emptyBox}>
            <ClipboardList
              size={44}
              className={styles.icon}
              aria-hidden="true"
            />
            <p className={styles.description}>
              {
                "You don't have any tasks right now. Start by creating your first task!"
              }
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
