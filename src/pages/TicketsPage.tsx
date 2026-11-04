import { useEffect, useState } from "react";
import { getTickets, getAgents } from "../api/ticketsApi";
import type { Ticket } from "../types/ticket";
import { TicketCard } from "../components/TicketCard";
import type { Agent } from "../types/ticket";

export function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [agents, setAgents] = useState<Agent[]>([]);

  useEffect(() => {
    async function loadTickets() {
      try {
        const [ticketsData, agentsData] = await Promise.all([
          getTickets(),
          getAgents(),
        ]);
        setTickets(ticketsData);
        setAgents(agentsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ocurrió un error inesperado",
        );
      } finally {
        setIsLoading(false);
      }
    }

    loadTickets();
  }, []);
  if (isLoading) {
    return <p>Cargando tickets...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold text-blue-600">Tickets</h1>
      <div className="flex flex-col gap-3">
        {tickets.map((ticket) => {
          const agent = agents.find((a) => a.id === ticket.assignedAgentId);
          return <TicketCard key={ticket.id} ticket={ticket} agent={agent} />;
        })}
      </div>
    </main>
  );
}
