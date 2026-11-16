"use client";
import Image from "next/image";
import styles from "./MyTeam.module.css";
import Link from "next/link";
import { teamMembers } from "@/data/teamMembers";

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
        <Link href="/dashboard/profile/my-team">
          <button className={styles.viewAllBtn}>View all</button>
        </Link>
      </div>

      <div className={styles.carouselContainer}>
        <div className={styles.membersGrid}>
          {teamMembers.slice(0, 6).map((member) => (
            <div key={member.id} className={styles.memberCard}>
              <div className={styles.memberInfoWrapper}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={member.image}
                    alt="image user"
                    width={45}
                    height={45}
                  />
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
