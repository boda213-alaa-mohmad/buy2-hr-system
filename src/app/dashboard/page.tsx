import AttendanceCard from "@/features/Dashboard/components/AttendanceCard";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import RecognitionCard from "@/features/Dashboard/components/RecognitionCard";
import RequestCard from "@/features/Dashboard/components/RequestsCard";
import TaskCard from "@/features/Dashboard/components/TaskCard";
import UpcomingMeetingsCard from "@/features/Dashboard/components/UpcomingMeetingsCard";
import styles from "./page.module.css";
import { Rewards } from "@/features/Dashboard/components/Rewards";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />
      <div className={styles.row}>
        <AttendanceCard />
        <TaskCard />
      </div>
      <div className={styles.row}>
        <UpcomingMeetingsCard />
        <RequestCard />
      </div>
      <div className={styles.row}>
        {/* className={styles.column} */}
        <div>
          <RecognitionCard />
          <Rewards />
        </div>
      </div>
    </div>
  );
}
