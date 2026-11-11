import styles from "./TasksProgress.module.css";

const taskStats = [
  { id: 1, label: "My Day", count: 20, percentage: 84, type: "myDay" },
  { id: 2, label: "Completed", count: 20, percentage: 48, type: "completed" },
  { id: 3, label: "To Do", count: 20, percentage: 48, type: "todo" },
  {
    id: 4,
    label: "In Progress",
    count: 20,
    percentage: 48,
    type: "inProgress",
  },
];

export default function TasksProgress() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Tasks</h3>
          <p className={styles.subtitle}>Follow up with your tasks progress.</p>
        </div>
        <button className={styles.viewAllBtn}>View All</button>
      </div>

      <div className={styles.circlesContainer}>
        {taskStats.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <div
              className={`${styles.circularProgress} ${styles[task.type]}`}
              style={{
                background: `conic-gradient(var(--progress-color) ${task.percentage}%, #f1f5f9 0%)`,
              }}
            >
              <div className={styles.innerCircle}>
                <span className={styles.percentageText}>
                  {task.percentage}%
                </span>
              </div>
            </div>

            <div className={styles.taskFooter}>
              <span className={styles.taskLabel}>{task.label}</span>
              <span className={styles.taskCount}>{task.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
