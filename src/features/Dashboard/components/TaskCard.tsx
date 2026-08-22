import styles from "./TaskCard.module.css";
import DashboardCard from "@/Components/shared/card/DashboardCard";

interface ProgressCircleProps {
  percentage: number;
  color: string;
}

function ProgressCircle({ percentage, color }: ProgressCircleProps) {
  const radius = 36;
  const circumference = 2 * Math.PI * radius; // 226.19
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className={styles.circleContainer}>
      <svg className={styles.svgCircle} viewBox="0 0 90 90">
        <circle
          cx="45"
          cy="45"
          r={radius}
          className={styles.bgCircle}
          strokeWidth="8"
        />
        <circle
          cx="45"
          cy="45"
          r={radius}
          stroke={color}
          strokeWidth="8"
          className={styles.progressCircle}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <span className={styles.percentageText}>{percentage}%</span>
    </div>
  );
}

export default function TaskCard() {
  const tasksData = [
    { label: "My Day", percentage: 84, count: 20, color: "#1e3a8a" },
    { label: "Completed", percentage: 48, count: 20, color: "#22c55e" },
    { label: "To Do", percentage: 48, count: 20, color: "#ef4444" },
    { label: "In Progress", percentage: 48, count: 20, color: "#f97316" },
  ];

  return (
    <div className={styles.container}>
      <DashboardCard
        title="Tasks"
        subtitle="Follow up with your tasks progress."
        actions="View All"
      >
        <div className={styles.tasksContainer}>
          {tasksData.map((task, index) => {
            return (
              <div key={index} className={styles.taskItem}>
                <ProgressCircle
                  color={task.color}
                  percentage={task.percentage}
                />
                <div className={styles.taskMeta}>
                  <span className={styles.label}>{task.label}</span>
                  <span className={styles.count}>{task.count}</span>
                </div>
              </div>
            );
          })}
        </div>
      </DashboardCard>
    </div>
  );
}
