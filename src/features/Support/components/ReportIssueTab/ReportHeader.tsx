import { Search, SlidersHorizontal, Plus } from "lucide-react";
import styles from "./ReportHeader.module.css";

export default function ReportHeader() {
  return (
    <div className={styles.container}>
      {/* Header Controls */}
      <div className={styles.headerContainer}>
        <div className={styles.searchWrapper}>
          <Search className={styles.searchIcon} size={18} aria-hidden="true" />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Search"
            aria-label="Search tickets"
          />
        </div>

        <div className={styles.actionsGroup}>
          <button type="button" className={styles.filterButton}>
            <SlidersHorizontal size={16} aria-hidden="true" />
            <span>Filter</span>
          </button>

          <button type="button" className={styles.addButton}>
            <Plus size={18} aria-hidden="true" />
            <span>Add ticket</span>
          </button>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>My tickets</h2>
    </div>
  );
}
