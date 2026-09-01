"use client";
import styles from "./TaskDescription.module.css";

export default function TaskDescription() {
  return (
    <section className={styles.container} aria-labelledby="task-desc-title">
      <div className={styles.inputContainer}>
        <h2 id="task-desc-title" className={styles.title}>
          Task Description
        </h2>
        <textarea
          id="task-description"
          aria-labelledby="task-desc-title"
          placeholder="Enter the description"
          className={styles.desc}
          // todo: don't remove that code it's important
          //   onChange={(e) => {
          //     e.currentTarget.style.height = "auto";
          //     e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
          //   }}
        />
      </div>
    </section>
  );
}
