"use client";
import styles from "./TaskCard.module.css";
import { Pencil, Trash2, Eye, Calendar, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Task } from "@/types/task";
import { useState } from "react";

// todo: <TaskCard key={task.id} task={task} onDelete={deleteTask} /> later

export const initialTasks: Task[] = [
  {
    id: "1",
    title: "Revision 1: Fixing Navbar at Dashboard Page",
    listName: "Backend bugs team",
    dueDate: "Set due date",
    priority: "Low",
    assignee: {
      name: "Ahmed Mohmed",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    status: "default",
  },
  {
    id: "2",
    title: "Design Responsive Card Components",
    listName: "Frontend team",
    dueDate: "25 Aug",
    priority: "Medium",
    assignee: {
      name: "Mohamed Ahmed",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    status: "editing",
  },
  {
    id: "3",
    title: "Update UI/UX icons for Task Manager",
    listName: "Design team",
    dueDate: "12 Aug",
    priority: "High",
    assignee: {
      name: "Ahemd Ali",
      avatar: "https://i.pravatar.cc/100?img=18",
    },
    status: "overdue",
  },
  {
    id: "4",
    title: "Setup CI/CD pipeline on GitHub Actions",
    listName: "DevOps team",
    dueDate: "Set due date",
    priority: "High",
    assignee: {
      name: "Omar Hassan",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    status: "default",
  },
  {
    id: "5",
    title: "Write unit tests for authentication flow",
    listName: "QA team",
    dueDate: " Set due date",
    priority: "Medium",
    assignee: {
      name: "Nour Khaled",
      avatar: "https://i.pravatar.cc/100?img=4",
    },
    status: "default",
  },
  {
    id: "6",
    title: "Fix push notification issues on iOS",
    listName: "Mobile team",
    dueDate: "Set due date",
    priority: "Low",
    assignee: {
      name: "Kareem Mahmoud",
      avatar: "https://i.pravatar.cc/100?img=7",
    },
    status: "default",
  },
  {
    id: "7",
    title: "Prepare landing page copy and graphic assets",
    listName: "Marketing team",
    dueDate: "Set due date",
    priority: "Low",
    assignee: {
      name: "Youssef Ibrahim",
      avatar: "https://i.pravatar.cc/100?img=17",
    },
    status: "default",
  },
];

export default function TaskCard() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  console.log(tasks);

  function deleteTask(id: string) {
    setTasks(
      tasks.filter((task) => {
        return task.id !== id;
      }),
    );
  }

  return (
    <section className={styles.container}>
      {tasks.map((task) => {
        return (
          <div className={styles.card} key={task.id}>
            <header className={styles.header}>
              <h3 className={styles["list-name"]}>{task.listName}</h3>
              <div className={styles.iconsContainer}>
                <Pencil
                  size={20}
                  className={`${styles.pencil} ${styles.icons}`}
                />
                <Trash2
                  size={20}
                  className={`${styles.trash} ${styles.icons}`}
                  onClick={() => {
                    deleteTask(task.id);
                  }}
                />
                <Eye size={20} className={`${styles.eye} ${styles.icons}`} />
              </div>
            </header>

            <div className={styles.contentCard}>
              {/* content task */}
              <div className={styles.taskName}>
                <p>{task.title}</p>
              </div>

              {/* date with low or high */}
              <div className={styles.containerDate}>
                <div className={styles.calendarWithText}>
                  <p>{task.dueDate}</p>
                  <Calendar size={20} className={styles.icons} />
                </div>
                {/* low or high or medium */}
                <div className={styles.chevronDownWithText}>
                  <ChevronDown
                    className={`${styles.chevronDown} ${styles.icons} `}
                    size={20}
                  />
                  <span>{task.priority}</span>
                </div>
              </div>

              {/* footer card */}
              <div className={styles.footer}>
                <Image
                  className={styles.img}
                  src={task.assignee.avatar}
                  alt="avatar"
                  width={40}
                  height={40}
                />
                <p>{task.assignee.name}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
