import { http, HttpResponse, delay } from "msw";
import { agents, tickets, messages } from "./data";

export const handlers = [
  http.get("/api/tickets", async () => {
    await delay(800);
    return HttpResponse.json(tickets);
  }),
  http.get("/api/agents", async () => {
    await delay(800);
    return HttpResponse.json(agents);
  }),
  http.get("/api/tickets/:id", async ({ params }) => {
    await delay(800);
    const ticket = tickets.find((t) => t.id === params.id);

    if (!ticket) {
      return new HttpResponse(null, { status: 404 });
    }

    return HttpResponse.json(ticket);
  }),
  http.get("/api/tickets/:id/messages", async ({ params }) => {
    await delay(800);
    const ticketMessages = messages.filter((m) => m.ticketId === params.id);

    return HttpResponse.json(ticketMessages);
  }),
];
