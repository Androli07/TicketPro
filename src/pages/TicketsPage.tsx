import { useEffect, useState } from "react";
import { getTickets } from "../api/ticketsApi";
import type { Ticket } from "../types/ticket";
import { TicketCard } from "../components/TicketCard";

export function TicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadTickets() {
      try {
        const data = await getTickets();
        setTickets(data);
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
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    </main>
  );
}
