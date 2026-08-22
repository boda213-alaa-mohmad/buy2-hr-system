import styles from "./DashboardCard.module.css";
interface DashboardCardProps {
  title: string;
  subtitle: string;
  actions?: React.ReactNode;
  children: React.ReactNode;
}

export default function DashboardCard({
  title,
  subtitle,
  actions,
  children,
}: DashboardCardProps) {
  return (
    <div className={styles.cardContainer}>
      {/* <div className={styles.cardHeader}> */}
      <div className={styles.cardHeader}>
        <div>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>
            {/* {subtitle && <p className={styles.subtitle}>{subtitle}</p>} */}
            {subtitle}
          </p>
        </div>
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
      {/* </div> */}
      <div className={styles.cardBody}>{children}</div>
    </div>
  );
}
