import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTicketMessages, getAgents, getTicket } from "../api/ticketsApi";
import type { Ticket, Message, Agent } from "../types/ticket";

export function TicketDetailPage() {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [agents, setAgents] = useState<Agent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { id } = useParams();

  useEffect(() => {
    async function loadTicketDetail() {
      if (!id) {
        return;
      }
      setIsLoading(true);
      setError(null);
      try {
        const [ticketData, messagesData, agentsData] = await Promise.all([
          getTicket(id),
          getTicketMessages(id),
          getAgents(),
        ]);
        setTicket(ticketData);
        setMessages(messagesData);
        setAgents(agentsData);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Ocurrió un error inesperado",
        );
      } finally {
        setIsLoading(false);
      }
    }
    loadTicketDetail();
  }, [id]);

  if (isLoading) {
    return <p className="p-6">Cargando ticket...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-600">{error}</p>;
  }

  if (!ticket) {
    return <p className="p-6">Ticket not found</p>;
  }

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-2 text-2xl font-bold">{ticket.subject}</h1>
      <p className="text-gray-700">{ticket.description}</p>
      <p className="mt-4 text-sm text-gray-500">{messages.length} messages</p>
    </main>
  );
}
