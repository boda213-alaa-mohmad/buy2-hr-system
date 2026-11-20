"use client";

import { Status } from "@/features/Support/types/support";
import { Ticket } from "@/types/Ticket";
import { useState, createContext } from "react";

export interface TicketContextType {
  ticket: Ticket;
  allTickets: Ticket[];
  onSetTicket: (newTicket: Ticket) => void;
  onSetAllTickets: (tickets: Ticket[]) => void;
}

export const TicketContext = createContext<TicketContextType>({
  ticket: {
    subject: "",
    description: "",
    status: "" as Status,
    category: "",
  },
  allTickets: [],
  onSetTicket: () => {},
  onSetAllTickets: () => {},
});

export default function TicketProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ticket, setTicket] = useState<Ticket>({
    subject: "",
    description: "",
    category: "",
    status: "" as Status,
  });
  const [allTickets, setAllTickets] = useState<Ticket[]>([]);

  return (
    <TicketContext.Provider
      value={{
        ticket,
        allTickets,
        onSetTicket: (newTicket) => {
          setTicket(newTicket);
        },
        onSetAllTickets: () => {
          setAllTickets((prev) => [...prev, ticket]);
        },
      }}
    >
      {children}
    </TicketContext.Provider>
  );
}
