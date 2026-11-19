"use client";
import Link from "next/link";
import { useState } from "react";
import { Search, SlidersHorizontal, Plus } from "lucide-react";
import styles from "./ReportHeader.module.css";
import { Status } from "../../types/support";
export default function ReportHeader({
  valueReport,
  onChangeInputReport,
  onFilter,
  chooseOption,
}: {
  valueReport: string;
  onChangeInputReport: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFilter: (status: Status) => void;
  chooseOption: Status;
}) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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
            value={valueReport}
            onChange={onChangeInputReport}
          />
        </div>

        <div className={styles.actionsGroup}>
          {/* Filter Wrapper */}
          <div className={styles.filterWrapper}>
            <button
              type="button"
              className={styles.filterButton}
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <SlidersHorizontal size={16} aria-hidden="true" />
              <span>{chooseOption}</span>
            </button>

            {isFilterOpen && (
              <div className={styles.filterDropdown}>
                <button
                  type="button"
                  onClick={() => {
                    onFilter("All");
                    setIsFilterOpen(false);
                  }}
                  className={styles.filterOption}
                >
                  <span className={`${styles.statusDot} ${styles.dotAll}`} />
                  <span>All</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    onFilter("Open");
                    setIsFilterOpen(false);
                  }}
                  className={styles.filterOption}
                >
                  <span className={`${styles.statusDot} ${styles.dotOpen}`} />
                  <span>Open</span>
                </button>
                <button
                  type="button"
                  className={styles.filterOption}
                  onClick={() => {
                    onFilter("In progress");
                    setIsFilterOpen(false);
                  }}
                >
                  <span
                    className={`${styles.statusDot} ${styles.dotInProgress}`}
                  />
                  <span>In progress</span>
                </button>
                <button
                  type="button"
                  className={styles.filterOption}
                  onClick={() => {
                    onFilter("Solved");
                    setIsFilterOpen(false);
                  }}
                >
                  <span className={`${styles.statusDot} ${styles.dotSolved}`} />
                  <span>Solved</span>
                </button>
              </div>
            )}
          </div>

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
