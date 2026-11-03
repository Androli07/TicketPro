import type { TicketStatus } from "../types/ticket";

const statusStyles: Record<TicketStatus, string> = {
  unattended: "bg-red-100 text-red-700",
  in_progress: "bg-blue-100 text-blue-700",
  pending: "bg-amber-100 text-amber-700",
  solved: "bg-green-100 text-green-700",
  archived: "bg-gray-100 text-gray-600",
};

interface StatusBadgeProps {
  status: TicketStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs font-medium ${statusStyles[status]}`}
    >
      {status}
    </span>
  );
}
