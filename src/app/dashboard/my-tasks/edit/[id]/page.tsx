import styles from "./page.module.css";
import EditHeader from "./components/EditHeader/EditHeader";
import SubtasksSection from "./components/SubtasksSection/SubtasksSection";
import TaskSidebarForm from "./components/TaskSidebarForm/TaskSidebarForm";
import TaskDescription from "./components/TaskDescription/TaskDescription";
import Attachments from "./components/AttachmentsSection/AttachmentsSection";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>My Post: {id}</div>
        <EditHeader />
        {/* content page */}

        {/* container */}
        <div>
          <div className={styles["subTask-and-taskSidebar"]}>
            <SubtasksSection />
            <TaskSidebarForm />
          </div>

          <TaskDescription />
          <Attachments />

        </div>
      </div>
    </div>
  );
}
