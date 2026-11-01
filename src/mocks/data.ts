import type { Agent, Ticket, Message } from "../types/ticket";

export const agents: Agent[] = [
  {
    id: "agent-1",
    name: "Camila",
    lastName: "Rojas",
    email: "camila.rojas@ticketpro.cl",
    role: "admin",
    status: "busy",
  },

  {
    id: "agent-2",
    name: "Andrew",
    lastName: "Oliveiros",
    email: "andrew.oli@ticketpro.cl",
    role: "agent",
    status: "online",
  },

  {
    id: "agent-3",
    name: "Francisca",
    lastName: "Sol",
    email: "francisca.sol@ticketpro.cl",
    role: "agent",
    status: "away",
  },
];

export const tickets: Ticket[] = [
  {
    id: "tkt-100",
    status: "in_progress",
    priority: "low",
    subject: "Question about service",
    description:
      "I recently paid for the premium service but I don't know how to use it, is there a tutorial for it?",
    client: { name: "Mathew Jones", email: "mat.jones@gmail.com" },
    assignedAgentId: "agent-2",
    createdAt: "2026-10-30T14:25:00Z",
    updatedAt: "2026-10-30T14:25:00Z",
  },
  {
    id: "tkt-101",
    status: "in_progress",
    priority: "high",
    subject: "Payment declined at checkout",
    description:
      "Every time I try to pay with my credit card I get an error message. I've tried three times already.",
    client: { name: "María Pérez", email: "maria.perez@gmail.com" },
    assignedAgentId: "agent-2",
    createdAt: "2026-10-31T09:10:00Z",
    updatedAt: "2026-10-31T09:45:00Z",
  },
  {
    id: "tkt-102",
    status: "pending",
    priority: "medium",
    subject: "Change shipping address",
    description:
      "I moved last week and need to update the shipping address for my next order.",
    client: { name: "Jorge López", email: "jorge.lopez@outlook.com" },
    assignedAgentId: "agent-3",
    createdAt: "2026-10-30T16:00:00Z",
    updatedAt: "2026-10-30T18:20:00Z",
  },
  {
    id: "tkt-103",
    status: "solved",
    priority: "low",
    subject: "Duplicate invoice",
    description:
      "I received the same invoice twice this month. Was I charged twice?",
    client: { name: "Ana Torres", email: "ana.torres@gmail.com" },
    assignedAgentId: "agent-2",
    createdAt: "2026-10-28T11:30:00Z",
    updatedAt: "2026-10-29T10:15:00Z",
  },
  {
    id: "tkt-104",
    status: "unattended",
    priority: "high",
    subject: "Can't log in to my account",
    description:
      "I reset my password but the login page keeps saying my credentials are invalid.",
    client: { name: "Diego Muñoz", email: "diego.munoz@yahoo.com" },
    assignedAgentId: null,
    createdAt: "2026-10-31T10:05:00Z",
    updatedAt: "2026-10-31T10:05:00Z",
  },
  {
    id: "tkt-105",
    status: "archived",
    priority: "medium",
    subject: "Request for refund",
    description: "The product arrived damaged and I would like a full refund.",
    client: { name: "Sofía Herrera", email: "sofia.herrera@gmail.com" },
    assignedAgentId: "agent-1",
    createdAt: "2026-10-20T13:40:00Z",
    updatedAt: "2026-10-25T09:00:00Z",
  },
];

export const messages: Message[] = [
  {
    id: "msg-1",
    ticketId: "tkt-101",
    authorType: "client",
    agentId: null,
    content: "Hi, every time I try to pay I get an error with my card.",
    createdAt: "2026-10-31T09:10:00Z",
  },
  {
    id: "msg-2",
    ticketId: "tkt-101",
    authorType: "agent",
    agentId: "agent-2",
    content: "Hi María, could you tell me the exact error message you see?",
    createdAt: "2026-10-31T09:30:00Z",
  },
  {
    id: "msg-3",
    ticketId: "tkt-101",
    authorType: "client",
    agentId: null,
    content: "It says 'Transaction declined by issuer'.",
    createdAt: "2026-10-31T09:45:00Z",
  },
];
