import AttendanceCard from "@/features/Dashboard/components/AttendanceCard";
import DashboardHeader from "@/features/Dashboard/components/DashboardHeader";
import TaskCard from "@/features/Dashboard/components/TaskCard";

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
    </div>
  );
}
