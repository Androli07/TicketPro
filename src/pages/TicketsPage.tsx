import { useEffect, useState } from "react";
import { getTickets } from "../api/ticketsApi";
import type { Ticket } from "../types/ticket";

export function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    async function loadTickets() {
      const data = await getTickets();
      setTickets(data);
    }

    loadTickets();
  }, []);

  return (
    <main>
      <h1>Tickets</h1>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.priority} - {ticket.subject} - {ticket.status}
          </li>
        ))}
      </ul>
    </main>
  );
}
