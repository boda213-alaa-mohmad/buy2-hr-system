"use client";
import styles from "./page.module.css";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import AddTaskForm from "@/features/Mytasks/components/AddTaskForm";
import TaskList, { initialTasks } from "@/features/Mytasks/components/TaskList";
import { Task } from "@/types/task";

export default function AddTask() {
  const [tasks, setTasks] = useState(initialTasks);

  //? adding task
  function handleAddTask(newTask: Task) {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  //! deleting task
  function handleDeleteTask(id: string) {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  }

  return (
    <section className={styles.container} aria-labelledby="add-task-heading">
      {/* Header Container */}
      <div className={styles.header}>
        {/* Back Link */}
        <Link
          href="/dashboard/my-tasks"
          className={styles.backBtn}
          aria-label="Back to My Tasks"
        >
          <ChevronLeft size={20} aria-hidden="true" />
          <span className={styles.backText}>Back</span>
        </Link>

        {/* Page Title */}
        <h2 className={styles.title}>Add Task</h2>
      </div>

      <AddTaskForm onAddTask={handleAddTask} />
      <TaskList task={tasks} onDeleteTask={handleDeleteTask} />
    </section>
  );
}
