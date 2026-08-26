"use client";
import TaskHeaderInput from "@/features/Mytasks/components/TaskHeaderInput";
import styles from "./page.module.css";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function AddTask() {
  return (
    <section className={styles.container} aria-labelledby="add-task-heading">
      {/* Header Container */}
      <div className={styles.header}>
        {/* Back Link */}
        <Link
          href="/dashboard/my-tasks"
          className={styles.backBtn}
          aria-label="Back to My Tasks"
        >
          <ChevronLeft size={20} aria-hidden="true" />
          <span className={styles.backText}>Back</span>
        </Link>

        {/* Page Title */}
        <h2 className={styles.title}>Add Task</h2>
      </div>
      <TaskHeaderInput />
    </section>
  );
}
