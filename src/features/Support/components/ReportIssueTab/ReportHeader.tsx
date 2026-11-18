"use client";
import Link from "next/link";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import styles from "./ReportHeader.module.css";

export default function ReportHeader({
  onChangeInputReport,
}: {
  onChangeInputReport: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
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
            onChange={onChangeInputReport}
          />
        </div>

          <div className={styles.actionsGroup}>
            <button type="button" className={styles.filterButton}>
              <SlidersHorizontal size={16} aria-hidden="true" />
              <span>Filter</span>
            </button>

          <Link
            href="/dashboard/support/new-ticket"
            className={styles.addButton}
          >
            <Plus size={18} aria-hidden="true" />
            <span>Add ticket</span>
          </Link>
        </div>
      </div>

      <h2 className={styles.sectionTitle}>My tickets</h2>
    </div>
  );
}
