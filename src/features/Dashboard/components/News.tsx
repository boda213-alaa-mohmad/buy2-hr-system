import DashboardCard from "@/Components/shared/card/DashboardCard";
import styles from "./News.module.css";
import Image from "next/image";

export default function News() {
  return (
    <DashboardCard
      title="News"
      subtitle="Everything new in the company will be here"
      actions="View All"
    >
      {/* card top */}
      <div className={`${styles.card} ${styles["first-card"]}`}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>How to Write a Business Plan</h3>
            <time className={styles.time}>Added June 27, 2023 | 12:00 PM</time>
          </div>
          <p className={styles.paragraph}>
            The executive summary provides a snapshot of your business and its
            plans. This section should include your business&apos;s name,
            location, products or services, mission statement, and the purpose
            of the plan. It should be concise yet compelling enough to capture
            the reader&apos;s interest. Aim for clarity and brevity, as this
            section often determines whether investors will read further
          </p>
        </div>
      </div>

      {/* card bottom */}
      <div className={`${styles.card} ${styles["second-card"]}`}>
        <div className={styles.imgContainer}>
          <Image
            src="/images/Image frame.png"
            alt="image frame"
            width={200}
            height={200}
          />
        </div>
        <div className={styles.content}>
          <div className={styles.header}>
            <h3 className={styles.title}>How to Write a Business Plan</h3>
            <time className={styles.time}>Added June 27, 2023 | 12:00 PM</time>
          </div>
          <p className={styles.paragraph}>
            The executive summary provides a snapshot of your business
          </p>
        </div>
      </div>
    </DashboardCard>
  );
}
