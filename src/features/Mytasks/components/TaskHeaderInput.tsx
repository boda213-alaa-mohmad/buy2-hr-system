"use client";
import styles from "./TaskHeaderInput.module.css";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";

const mockLists = [
  { id: "1", name: "My design requests" },
  { id: "2", name: "Development team tasks" },
  { id: "3", name: "Backend bugs team" },
  { id: "4", name: "List for developers" },
  { id: "5", name: "Any list for now" },
  { id: "6", name: "Draft tasks for dev ops" },
  { id: "7", name: "Frontend tasks" },
  { id: "8", name: "QA testing tasks" },
  { id: "9", name: "Product improvements" },
  { id: "10", name: "DevOps deployment tasks" },
];

export default function TaskHeaderInput() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      {/* input + button */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter name task"
          className={styles.taskInput}
        />
        <button
          type="button"
          className={styles.dropdownBtn}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          aria-expanded={isOpen}
        >
          <span>Select from lists</span>
          <ChevronDown
            size={18}
            className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
            aria-hidden="true"
          />
        </button>
      </div>

      {isOpen && (
        <div className={styles.dropdownMenu}>
          {/* search + input */}
          <div className={styles.searchWrapper}>
            <Search size={22} className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search"
              className={styles.searchInput}
            />
          </div>

          {/* items mocklists */}
          <ul className={styles.lists}>
            {mockLists.map((item) => {
              return (
                <li key={item.id} className={styles.listItem}>
                  <span className={styles.listName}>{item.name}</span>
                  <span className={styles.radioCircle} />
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
