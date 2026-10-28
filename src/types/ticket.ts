export type AgentRole = "agent" | "admin";

export interface Agent {
  name: string;
  lastName: string;
  email: string;
  role: AgentRole;
  isOnline: boolean;
  id: string;
}
