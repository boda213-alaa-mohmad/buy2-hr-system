"use client";
import { useState } from "react";
import styles from "./SubtasksSection.module.css";
import { Plus, Trash2 } from "lucide-react";
import ConfirmModal from "@/Components/shared/ConfirmModal/ConfirmModal";

export default function SubtasksSection() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [taskToDelete, setTaskToDelete] = useState<number | null>(null);
  const [isOpenDelete, setIsOpenDelete] = useState<boolean>(false);
  const [inputSubTask, setInputSubTask] = useState<string>("");
  const [subtasks, setSubtasks] = useState([
    { id: 1, title: "Change the icons to font awesome icons." },
    { id: 2, title: "Adjust the size to responsive mobile." },
    { id: 3, title: "Activate the navigation buttons to direct the users." },
    { id: 4, title: "Fix layout overflow on desktop view." },
  ]);

  // adding subTask
  function addSubTask() {
    if (!inputSubTask.trim()) return;
    setSubtasks([...subtasks, { title: inputSubTask.trim(), id: Date.now() }]);
    setIsOpen(false);
    setInputSubTask("");
  }

  // deleting item
  function deleteSubTask(id: number) {
    setSubtasks(subtasks.filter((item) => item.id !== id));
  }

  return (
    <section className={styles.subTaskCard} aria-labelledby="subtasks-title">
      <div className={styles.cardHeader}>
        <h2 id="subtasks-title" className={styles.title}>
          Revision 1: Fixing Navbar at Dashboard Page
        </h2>

        <button
          type="button"
          className={styles.actions}
          aria-label="Add Task"
          onClick={() => setIsOpen(true)}
        >
          + Add Task
        </button>
      </div>

      {isOpen && (
        <ConfirmModal
          variant="success"
          icon={<Plus size={48} className={styles.icon} />}
          onClose={() => setIsOpen(false)}
        >
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Enter The Sub Task"
              className={styles.desc}
              value={inputSubTask}
              onChange={(e) => setInputSubTask(e.target.value)}
              aria-label="Subtask title"
            />
          </div>
          <button type="button" className={styles.submit} onClick={addSubTask}>
            Submit
          </button>
        </ConfirmModal>
      )}

      <div className={styles.subTaskContainer}>
        {subtasks.length > 0 ? (
          subtasks.map((item) => (
            <div className={styles.subTasks} key={item.id}>
              <p>{item.title}</p>
              <button
                type="button"
                className={styles.trashBtn}
                aria-label={`Delete subtask: ${item.title}`}
                onClick={() => {
                  setTaskToDelete(item.id);
                  setIsOpenDelete(true);
                }}
              >
                <Trash2
                  size={20}
                  className={styles.trashIcon}
                  aria-hidden="true"
                />
              </button>
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No subTasks Yet</p>
        )}
      </div>

      {isOpenDelete && (
        <ConfirmModal
          variant="danger"
          icon={<Trash2 size={48} className={styles.trashIcon} />}
          onClose={() => {
            setIsOpenDelete(false);
          }}
        >
          <div className={styles.containerMessageDeleting}>
            <h2 className={styles.message}>Delete Task?</h2>
            <p className={styles.confirmMessage}>
              Are you sure you want to delete this task? This action is
              irreversible!
            </p>
            <div className={styles.btnContainer}>
              <button
                className={`${styles.btn} ${styles.cancel}`}
                onClick={() => {
                  setIsOpenDelete(false);
                }}
              >
                cancel
              </button>
              <button
                className={`${styles.btn} ${styles.delete}`}
                onClick={() => {
                  if (taskToDelete) deleteSubTask(taskToDelete);
                  setIsOpenDelete(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </ConfirmModal>
      )}
    </section>
  );
}
