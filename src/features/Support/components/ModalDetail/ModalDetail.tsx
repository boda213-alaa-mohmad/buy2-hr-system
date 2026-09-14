import { Send, X } from "lucide-react";
import styles from "./ModalDetail.module.css";

export default function ModalDetail({ onClose }: { onClose: () => void }) {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.wrapper}>
          {/* header ---> ticket details with X */}
          <header className={styles.header}>
            <h3>Ticket Details</h3>
            <X size={30} onClick={onClose} />
          </header>

          {/* content ticket */}
          <div className={styles["content-ticket-card"]}>
            <div className={styles.ticketContent}>
              <p>Ticket ID</p>
              <p>1234</p>
            </div>
            <div className={styles.ticketContent}>
              <p>Subject</p>
              <p>{"can't update the app"}</p>
            </div>
            <div className={styles.ticketContent}>
              <p>Submitted</p>
              <p>Mar 3, 2022</p>
            </div>
            <div className={styles.ticketContent}>
              <p>Ticket Status</p>
              <p>Open</p>
            </div>
            <div className={styles.ticketContent}>
              <p>Description</p>
              <p>Can’t update the app</p>
            </div>
            <div className={styles.ticketContent}>
              <p>Category</p>
              <p>update</p>
            </div>
          </div>

          {/* comments */}
          <div className={styles.comments}>
            {/* comment header */}
            <div className={styles.commentHeader}>Comments</div>
            {/* content */}
            <div className={styles.commentCard}>
              {/* header */}
              <div className={styles.commentContent}>
                <p>My Name</p>
                <p>3m ago</p>
              </div>

              {/* descrptiion */}
              <p className={styles.commentDesc}>
                Why can’t I update the app? It keeps reloading the same page.
                Please help.
              </p>
            </div>
            <div className={styles.commentCard}>
              {/* header */}
              <div className={styles.commentContent}>
                <p>My Name</p>
                <p>3m ago</p>
              </div>

              {/* descrptiion */}
              <p className={styles.commentDesc}>
                Why can’t I update the app? It keeps reloading the same page.
                Please help.
              </p>
            </div>

            <div className={styles.commentCard}>
              {/* header */}
              <div className={styles.commentContent}>
                <p>My Name</p>
                <p>3m ago</p>
              </div>

              {/* descrptiion */}
              <p className={styles.commentDesc}>
                Why can’t I update the app? It keeps reloading the same page.
                Please help.
              </p>
            </div>

            {/* footer */}
            <div className={styles.inputWrapper}>
              <input
                type="text"
                placeholder="Add comment"
                className={styles.commentInput}
              />
              <button
                type="button"
                className={styles.sendBtn}
                aria-label="Send comment"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
