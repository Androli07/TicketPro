import type { Ticket } from "../types/ticket";
import { StatusBadge } from "./StatusBadge";

interface TicketCardProps {
  ticket: Ticket;
}

export function TicketCard({ ticket }: TicketCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center gap-2 ">
        <h2 className="font-semibold">{ticket.subject}</h2>
        <StatusBadge status={ticket.status} />
      </div>
      <p className="text-sm text-gray-500 mt-1">{ticket.client.name}</p>
      <p className="text-sm text-gray-500 mt-1">{ticket.priority}</p>
    </article>
  );
}
