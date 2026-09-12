"use client";
import styles from "./SupportView.module.css";
import { SupportViewProps } from "../../types/support";

export default function SupportView({ choose, onTabChange }: SupportViewProps) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Support</h1>

        <div
          className={styles.tabsContainer}
          role="tablist"
          aria-label="Support sections"
        >
          <button
            role="tab"
            aria-selected={choose === "FAQ"}
            aria-controls="faq-panel"
            id="faq-tab"
            tabIndex={choose === "FAQ" ? 0 : -1}
            className={`${styles.tabBtn} ${choose === "FAQ" ? styles.active : ""}`}
            onClick={() => onTabChange("FAQ")}
          >
            Frequently asked questions
          </button>

          <button
            role="tab"
            aria-selected={choose === "Report issue"}
            aria-controls="report-panel"
            id="report-tab"
            tabIndex={choose === "Report issue" ? 0 : -1}
            className={`${styles.tabBtn} ${choose === "Report issue" ? styles.active : ""}`}
            onClick={() => onTabChange("Report issue")}
          >
            Report Issue
          </button>
        </div>
      </header>
    </div>
  );
}
