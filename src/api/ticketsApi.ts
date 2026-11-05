import type { Ticket, Agent, Message } from "../types/ticket";

export async function getTickets(): Promise<Ticket[]> {
  const response = await fetch("/api/tickets");

  if (!response.ok) {
    throw new Error(`Error al obtener los tickets: ${response.status}`);
  }
  return response.json();
}

export async function getAgents(): Promise<Agent[]> {
  const response = await fetch("/api/agents");

  if (!response.ok) {
    throw new Error(`Error al obtener a los agentes: ${response.status}`);
  }

  return response.json();
}

export async function getTicket(id: string): Promise<Ticket> {
  const response = await fetch(`/api/tickets/${id}`);

  if (!response.ok) {
    throw new Error(`Error al obtener el ticket: ${response.status}`);
  }

  return response.json();
}

export async function getTicketMessages(id: string): Promise<Message[]> {
  const response = await fetch(`/api/tickets/${id}/messages`);

  if (!response.ok) {
    throw new Error(`Error al obtener los mensajes: ${response.status}`);
  }
  return response.json();
}
