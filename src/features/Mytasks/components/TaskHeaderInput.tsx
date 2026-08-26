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
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filterMockLists = mockLists.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const selectedItem = mockLists.find((item) => item.id === selectedId);

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
          <span>{selectedItem ? selectedItem.name : "Select from lists"}</span>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* items mocklists */}
          <ul className={styles.lists}>
            {filterMockLists.length > 0 ? (
              filterMockLists.map((item) => {
                const isSelect = item.id === selectedId;
                return (
                  <li
                    key={item.id}
                    className={styles.listItem}
                    onClick={() => {
                      setSelectedId(item.id);
                      setIsOpen(false);
                    }}
                  >
                    <span className={styles.listName}>{item.name}</span>
                    <span
                      className={`${styles.radioCircle} ${
                        isSelect ? styles.selected : ""
                      }`}
                    />
                  </li>
                );
              })
            ) : (
              <li className={styles.noResults}>No items found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
