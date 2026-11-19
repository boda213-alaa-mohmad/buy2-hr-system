import Link from "next/link";
import styles from "./page.module.css";
import { ChevronDown, ChevronLeft } from "lucide-react";

const chooseCategory: { id: string; title: string; value: string }[] = [
  { id: "1", title: "Technical Support", value: "technical" },
  { id: "2", title: "Billing & Account", value: "billing" },
  { id: "3", title: "General Inquiry", value: "general" },
];

const chooseStatus: {
  id: string;
  title: string;
  value: string;
  color: string;
}[] = [
  { id: "1", title: "Open", value: "Open", color: "#4f4bac" },
  { id: "2", title: "In Progress", value: "In progress", color: "#C24C53" },
  { id: "3", title: "Solved", value: "Solved", color: "#18cc2a" },
];

export default function NewTicket() {
  return (
    <>
      <header className={styles.header} role="banner">
        <div className={styles.leftSection}>
          <Link
            href="/dashboard/support"
            className={styles.backBtn}
            aria-label="Back to my support page"
          >
            <ChevronLeft size={18} aria-hidden="true" />
            <span>Back</span>
          </Link>

          <h1 className={styles.title}>New Ticket</h1>
        </div>

        <nav aria-label="Task action controls" className={styles.rightSection}>
          <button
            type="button"
            className={styles.discardBtn}
            aria-label="Discard changes"
          >
            Discard
          </button>

          <button
            type="button"
            className={styles.saveBtn}
            aria-label="Save ticket changes"
          >
            Save ticket
          </button>
        </nav>
      </header>

      <div className={styles.container}>
        {/* Row 1: Subject & Description */}
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Subject</label>
            <input type="text" placeholder="Select" className={styles.input} />
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Description</label>
            <input type="text" placeholder="Select" className={styles.input} />
          </div>
        </div>

        {/* Row 2: Category & Status */}
        <div className={styles.row}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>Category</label>

            <div className={styles.selectWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled hidden>
                  Select
                </option>

                {chooseCategory.map((category) => (
                  <option key={category.id} value={category.value}>
                    {category.title}
                  </option>
                ))}
              </select>

              <ChevronDown className={styles.arrowIcon} size={18} />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>Status</label>

            <div className={styles.selectWrapper}>
              <select className={styles.select} defaultValue="">
                <option value="" disabled hidden>
                  Select
                </option>

                {chooseStatus.map((status) => (
                  <option
                    key={status.id}
                    value={status.value}
                    style={{ color: status.color }}
                  >
                    {status.title}
                  </option>
                ))}
              </select>

              <ChevronDown className={styles.arrowIcon} size={18} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
