import styles from "./page.module.css";
import EditHeader from "./components/EditHeader/EditHeader";
import SubtasksSection from "./components/SubtasksSection/SubtasksSection";

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
          {/* left side */}
          <div>
            <SubtasksSection />
          </div>

          {/* right side */}
          <div></div>
        </div>
      </div>
    </div>
  );
}
