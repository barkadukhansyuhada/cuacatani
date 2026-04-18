import type { RisikoKekeringan } from "@/lib/types";
import { RISIKO_COLORS } from "@/lib/constants";

export function RiskBadge({ risiko }: { risiko: RisikoKekeringan }) {
  const c = RISIKO_COLORS[risiko];
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ${c.bg} ${c.text}`}
    >
      {risiko}
    </span>
  );
}
