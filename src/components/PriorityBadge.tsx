import type { TicketPriority } from "../types/ticket";

const priorityStyles: Record<TicketPriority, string> = {
  high: "bg-red-100 text-red-700",
  medium: "bg-amber-100 text-amber-700",
  low: "bg-gray-100 text-gray-600",
};

const priorityLabels: Record<TicketPriority, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
};

interface PrioritySylesProps {
  priority: TicketPriority;
}

export function PriorityBadge({ priority }: PrioritySylesProps) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-xs inline-block mt-2 font-medium ${priorityStyles[priority]}`}
    >
      {priorityLabels[priority]}
    </span>
  );
}
