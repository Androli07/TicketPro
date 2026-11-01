import { http, HttpResponse, delay } from "msw";
import { agents, tickets } from "./data";

export const handlers = [
  http.get("/api/tickets", async () => {
    await delay(800);
    return HttpResponse.json(tickets);
  }),
  http.get("/api/agents", async () => {
    await delay(800);
    return HttpResponse.json(agents);
  }),
];
