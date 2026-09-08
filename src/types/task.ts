export interface Task {
  id: string;
  title: string;
  listName: string;
  dueDate?: string;
  priority: "Low" | "Medium" | "High";
  assignee: {
    name: string;
    avatar: string;
  };
  status?: "default" | "editing" | "overdue";
}

export type SettingsTab =
  | "password"
  | "language"
  | "about"
  | "terms"
  | "privacy";

// export interface PasswordRequirement {
//   id: string;
//   label: string;
//   isValid: boolean;
// }
