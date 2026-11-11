import { User } from "lucide-react";
import styles from "./MyTeam.module.css";

const teamMembers = [
  { id: 1, name: "Saif Ahmed", role: "React developer", score: 88 },
  { id: 2, name: "Sayed Essam", role: "Flutter developer", score: 88 },
  { id: 3, name: "Hala Ahmed", role: "UI/UX Designer", score: 88 },
  { id: 4, name: "Mohamed Ali", role: "Backend developer", score: 90 },
  { id: 5, name: "Saif Ahmed", role: "React developer", score: 88 },
  { id: 6, name: "Sayed Essam", role: "Flutter developer", score: 88 },
];

export default function MyTeam() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>My team</h3>
          <p className={styles.subtitle}>
            Here you can see all the members at your team.
          </p>
        </div>
        <button className={styles.viewAllBtn}>View all</button>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.membersGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.memberInfoWrapper}>
                <div className={styles.avatarWrapper}>
                  <User size={28} className={styles.avatarIcon} />
                </div>
                <div className={styles.textContainer}>
                  <h4 className={styles.memberName}>{member.name}</h4>
                  <span className={styles.jobDescription}>{member.role}</span>
                </div>
              </div>
              <span className={styles.score}>{member.score}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
