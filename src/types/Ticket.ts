import { Status } from "@/features/Support/types/support";

export interface Ticket {
  subject: string;
  description: string;
  category: string;
  status: Status;
}