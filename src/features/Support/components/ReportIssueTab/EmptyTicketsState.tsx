import Image from "next/image";
import styles from "./EmptyTicketsState.module.css";

export default function EmptyTicketsState() {
  return (
    <div className={styles.container}>
      <div>
        <Image
          src="/images/empty-tickets.png"
          alt="empty tickets image"
          width={300}
          height={300}
        />
      </div>
      <h2 className={styles.title}>No tickets history</h2>
      <p className={styles.desc}>
        You have not submitted any support tickets yet, when you have any
        troubles, come back.
      </p>
    </div>
  );
}
