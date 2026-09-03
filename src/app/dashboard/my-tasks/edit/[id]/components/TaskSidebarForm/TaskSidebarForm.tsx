"use client";
import { useState } from "react";
import styles from "./TaskSidebarForm.module.css";
import SelectDropdown from "@/features/Mytasks/components/SelectDropdown";
import { mockLists } from "@/features/Mytasks/components/TaskHeaderInput";

const statusOptions = [
  {
    id: "1",
    name: "To-do",
    color: "#e11d48",
    bgColor: "#ffe4e6",
  },
  {
    id: "2",
    name: "Completed",
    color: "#16a34a",
    bgColor: "#dcfce7",
  },
  {
    id: "3",
    name: "In progress",
    color: "#ea580c",
    bgColor: "#ffedd5",
  },
];

export default function TaskSidebarForm() {
  const [formData, setFormData] = useState({
    listName: "",
    status: "",
  });

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* List Name */}
        <SelectDropdown
          id="list-name"
          label="List Name"
          placeholder="Select task"
          options={mockLists}
          hasSearch={true}
          value={formData.listName}
          onChange={(val) => setFormData({ ...formData, listName: val })}
        />

        {/* Status */}
        <SelectDropdown
          id="status"
          label="Status"
          options={statusOptions}
          placeholder="Select status"
          value={formData.status}
          onChange={(val) => setFormData({ ...formData, status: val })}
        />
      </div>
    </div>
  );
}
