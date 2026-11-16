import Rewards from "@/features/Profile/Rewards";
import ProfileHeader from "@/features/Profile/ProfileHeader";
import TasksProgress from "@/features/Profile/TasksProgress";
import styles from "./page.module.css";
import MyTeam from "@/features/Profile/MyTeam";
import ProfileProvider from "@/context/profileProvider";
export default function ProfilePage() {
  return (
    <ProfileProvider>
      <div className={styles.profileContainer}>
        <ProfileHeader />
        <div className={styles.rowSection}>
          <Rewards />
          <TasksProgress />
        </div>
        <MyTeam />
      </div>
    </ProfileProvider>
  );
}
