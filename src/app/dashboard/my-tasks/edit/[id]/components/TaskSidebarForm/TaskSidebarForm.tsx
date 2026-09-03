"use client";
import { ChevronUp, Search } from "lucide-react";
import styles from "./TaskSidebarForm.module.css";
import { mockLists } from "@/features/Mytasks/components/TaskHeaderInput";
import { useState } from "react";

export default function TaskSidebarForm() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectListName, setselectListName] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const filteredList = mockLists.filter((list) => {
    return list.name.toLowerCase().includes(input.toLowerCase().trim());
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* List Name */}
        <div className={styles.fieldGroup}>
          <label id="list-label" className={styles.fieldLabel}>
            List Name
          </label>

          <button
            type="button"
            className={styles.chooseWithChevronUp}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-labelledby="list-label"
          >
            <span className={styles.title}>
              {selectListName ? selectListName : "General Task"}
            </span>
            <ChevronUp
              size={20}
              className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
              aria-hidden="true"
            />
          </button>

          {isOpen && (
            <div className={styles.listContainer}>
              {/* input + searchIcon */}
              <div className={styles.inputWithSearchIcon}>
                <Search
                  size={20}
                  className={styles.searchIcon}
                  aria-hidden="true"
                />
                <input
                  type="text"
                  placeholder="Search"
                  className={styles.input}
                  aria-label="Search lists"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>

              <ul
                className={styles.listItems}
                role="listbox"
                aria-labelledby="list-label"
              >
                {filteredList.length > 0 ? (
                  filteredList.map((list) => (
                    <li
                      key={list.id}
                      className={styles["listItem-radioCircle"]}
                      role="option"
                      aria-selected={selectListName === list.name}
                      tabIndex={0}
                      onClick={() => {
                        setselectListName(list.name);
                        setIsOpen(false);
                        setInput("");
                      }}
                    >
                      <span className={styles.item}>{list.name}</span>
                      <span
                        className={`${styles.radioCircle} ${
                          selectListName === list.name ? styles.selected : ""
                        }`}
                        aria-hidden="true"
                      />
                    </li>
                  ))
                ) : (
                  <li
                    className={styles.noResults}
                    role="option"
                    aria-selected="false"
                  >
                    No lists found
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        {/* status */}
        <div></div>

        {/* due date */}
        <div></div>

        {/* Assign to */}
        <div></div>

        {/* priority */}
        <div></div>

        {/* remind me */}
        <div></div>

        {/* repeat */}
        <div></div>
      </div>
    </div>
  );
}
