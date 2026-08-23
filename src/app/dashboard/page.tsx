import AttendanceCard from "@/features/Dashboard/components/AttendanceCard";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import RecognitionCard from "@/features/Dashboard/components/RecognitionCard";
import RequestCard from "@/features/Dashboard/components/RequestsCard";
import TaskCard from "@/features/Dashboard/components/TaskCard";
import UpcomingMeetingsCard from "@/features/Dashboard/components/UpcomingMeetingsCard";

export default function DashboardPage() {
  return (
    <div>
      <DashboardHeader />
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <AttendanceCard />
        <TaskCard />
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
        }}
      >
        <UpcomingMeetingsCard />
        <RequestCard />
      </div>
      <div>
        <RecognitionCard />
      </div>
    </div>
  );
}
