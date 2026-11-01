import type { Ticket, Agent } from "../types/ticket";

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
