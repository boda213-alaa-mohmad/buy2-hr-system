"use client";
import { Task } from "@/types/task";
import TaskHeaderInput, { mockLists } from "./TaskHeaderInput";
import { useState } from "react";

interface AddTaskType {
  onAddTask: (newTask: Task) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskType) {
  const [input, setInput] = useState<string>("");
  const [selectedListId, setSelectedListId] = useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) return;

    const selectedList = mockLists.find((item) => item.id === selectedListId);
    const listName = selectedList ? selectedList.name : "General Tasks";

    onAddTask({
      id: String(Date.now()),
      title: input,
      listName: listName,
      priority: "Low",
      dueDate: "Set due date",
      status: "default",
      assignee: {
        avatar: `https://i.pravatar.cc/100?img=8`,
        name: "Mohamed Ahmed",
      },
    });

    setInput("");
    setSelectedListId("");
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <TaskHeaderInput
        taskTitle={input}
        onTaskTitleChange={onChange}
        selectedListId={selectedListId}
        onListSelect={(id) => setSelectedListId(id)}
      />
    </form>
  );
}
