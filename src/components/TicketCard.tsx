import type { Ticket, Agent } from "../types/ticket";
import { StatusBadge } from "./StatusBadge";
import { PriorityBadge } from "./PriorityBadge";

interface TicketCardProps {
  ticket: Ticket;
  agent?: Agent;
}

export function TicketCard({ ticket, agent }: TicketCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <div className="flex justify-between items-center gap-2 ">
        <h2 className="font-semibold">{ticket.subject}</h2>
        <StatusBadge status={ticket.status} />
      </div>
      <p className="text-sm text-gray-500 mt-1">Client: {ticket.client.name}</p>
      <p className="text-sm text-gray-500 mt-1">
        Assigned to: {agent ? `${agent.name} ${agent.lastName}` : "Unassigned"}
      </p>
      <PriorityBadge priority={ticket.priority} />
    </article>
  );
}
