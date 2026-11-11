import styles from "./Rewards.module.css";

const rewardsList = [
  { id: 1, name: "Netflix", type: "netflix" },
  { id: 2, name: "Waffarha", type: "waffarha" },
  { id: 3, name: "Amazon", type: "amazon" },
  { id: 4, name: "Spotify", type: "spotify" },
  { id: 5, name: "Netflix", type: "netflix" },
  { id: 6, name: "Netflix", type: "netflix" },
  { id: 7, name: "Waffarha", type: "waffarha" },
  { id: 8, name: "Amazon", type: "amazon" },
  { id: 9, name: "Spotify", type: "spotify" },
  { id: 10, name: "Netflix", type: "netflix" },
];

export default function Rewards() {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>Rewards</h3>
          <p className={styles.subtitle}>
            Purchase these rewards at the store.
          </p>
        </div>
        <button className={styles.viewAllBtn}>View all</button>
      </div>

      <div className={styles.grid}>
        {rewardsList.map((reward) => (
          <div key={reward.id} className={styles.rewardItem}>
            <span className={`${styles.brandLogo} ${styles[reward.type]}`}>
              {reward.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
