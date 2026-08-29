"use client";
import styles from "./TaskHeaderInput.module.css";
import { ChevronDown, Search } from "lucide-react";
import { useState } from "react";
import { useRef, useEffect } from "react";

export const mockLists = [
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

type TaskHeaderInputProps = {
  taskTitle: string;
  onTaskTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedListId: string | null;
  onListSelect: (id: string) => void;
};

export default function TaskHeaderInput({
  onTaskTitleChange,
  taskTitle,
  selectedListId,
  onListSelect,
}: TaskHeaderInputProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const myDivRef = useRef<HTMLDivElement>(null);

  // todo: happens when first rendering
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // todo: for click outside document to close the menu list
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        myDivRef.current &&
        !myDivRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const filterMockLists = mockLists.filter((item) => {
    return item.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const selectedItem = mockLists.find((item) => item.id === selectedListId);

  return (
    <div className={styles.wrapper} ref={myDivRef}>
      {/* input + button */}
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter name task"
          ref={inputRef}
          className={styles.taskInput}
          value={taskTitle}
          onChange={onTaskTitleChange}
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
                const isSelect = item.id === selectedListId;
                return (
                  <li
                    key={item.id}
                    className={styles.listItem}
                    onClick={() => {
                      onListSelect(item.id);
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
