import { useParams } from "react-router";

export function TicketDetailPage() {
  const { id } = useParams();

  return (
    <main className="mx-auto max-w-4xl p-6">
      <h1 className="mb-4 text-3xl font-bold text-blue-600">Ticket {id}</h1>
    </main>
  );
}
