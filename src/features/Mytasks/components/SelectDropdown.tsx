"use client";
import { useState, useEffect, useRef } from "react";
import { ChevronUp, Search } from "lucide-react";
import styles from "./SelectDropdown.module.css";

interface Option {
  id: string;
  name: string;
}

interface SelectDropdownProps {
  label: string;
  id: string;
  options: Option[];
  placeholder?: string;
  hasSearch?: boolean;
  value: string;
  onChange: (value: string) => void;
}

export default function SelectDropdown({
  label,
  id,
  options,
  placeholder = "Select...",
  hasSearch,
  value,
  onChange,
}: SelectDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const myDivRef = useRef<HTMLDivElement>(null);

  //  for click outside document to close the menu list
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
  }, []);

  const filteredOptions = hasSearch
    ? options.filter((opt) =>
        opt.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      )
    : options;

  return (
    <div className={styles.fieldGroup} ref={myDivRef}>
      <label id={`${id}-label`} className={styles.fieldLabel}>
        {label}
      </label>

      <button
        type="button"
        className={styles.chooseWithChevronUp}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby={`${id}-label`}
      >
        <span className={styles.title}>{value || placeholder}</span>
        <ChevronUp
          size={20}
          className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div className={styles.listContainer}>
          {hasSearch && (
            <div className={styles.inputWithSearchIcon}>
              <Search size={20} aria-hidden="true" />
              <input
                type="text"
                placeholder="Search"
                className={styles.input}
                aria-label="Search lists"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          )}

          <ul
            className={styles.listItems}
            role="listbox"
            aria-labelledby={`${id}-label`}
          >
            {filteredOptions.length > 0 ? (
              filteredOptions.map((list) => (
                <li
                  key={list.id}
                  className={styles["listItem-radioCircle"]}
                  role="option"
                  aria-selected={value === list.name}
                  tabIndex={0}
                  onClick={() => {
                    onChange(list.name);
                    setIsOpen(false);
                    setSearchQuery("");
                  }}
                >
                  <span className={styles.item}>{list.name}</span>
                  <span
                    className={`${styles.radioCircle} ${
                      value === list.name ? styles.selected : ""
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
  );
}
