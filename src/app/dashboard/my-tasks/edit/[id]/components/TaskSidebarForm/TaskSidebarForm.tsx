"use client";
import { useState } from "react";
import styles from "./TaskSidebarForm.module.css";
import SelectDropdown from "@/features/Mytasks/components/SelectDropdown";
import { mockLists } from "@/features/Mytasks/components/TaskHeaderInput";

const statusOptions = [
  { id: "1", name: "To Do" },
  { id: "2", name: "In Progress" },
  { id: "3", name: "Completed" },
];

const priorityOptions = [
  { id: "1", name: "Low" },
  { id: "2", name: "Medium" },
  { id: "3", name: "High" },
];

export default function TaskSidebarForm() {
  const [formData, setFormData] = useState({
    listName: "",
    status: "",
    priority: "",
  });
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {/* listname */}
        <SelectDropdown
          id="list-name"
          label="List Name"
          options={mockLists}
          hasSearch={true}
          value={formData.listName}
          onChange={(val) => setFormData({ ...formData, listName: val })}
        />
      </div>
    </div>
  );
}
