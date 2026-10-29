export type AgentRole = "agent" | "admin";
export type AgentStatus = "online" | "offline" | "away" | "busy";
export type TicketPriority = "high" | "medium" | "low";
export type TicketStatus =
  | "unattended"
  | "in_progress"
  | "pending"
  | "solved"
  | "archived";

export type MessageAuthor = "client" | "agent";

export interface Client {
  name: string;
  email: string;
}

export interface Agent {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: AgentRole;
  status: AgentStatus;
}

export interface Ticket {
  id: string;
  status: TicketStatus;
  priority: TicketPriority;
  subject: string;
  description: string;
  client: Client;
  assignedAgentId: Agent["id"] | null;
  createdAt: string;
  updatedAt: string;
}

export interface Message {
  id: string;
  ticketId: Ticket["id"];
  authorType: MessageAuthor;
  agentId: Agent["id"] | null;
  content: string;
  createdAt: string;
}
