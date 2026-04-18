import type { ReactNode } from "react";

export function StatCard({
  label,
  value,
  icon,
  color = "text-gray-900",
  sub,
}: {
  label: string;
  value: string | number;
  icon: ReactNode;
  color?: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium text-gray-500">{label}</p>
          <p className={`mt-1 text-2xl font-bold ${color}`}>{value}</p>
          {sub && <p className="mt-0.5 text-xs text-gray-400">{sub}</p>}
        </div>
        <div className="rounded-lg bg-gray-50 p-2 text-gray-400">{icon}</div>
      </div>
    </div>
  );
}
