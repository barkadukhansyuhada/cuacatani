"use client";

import type { DashboardStats } from "@/lib/types";
import { RISIKO_CHART_COLORS } from "@/lib/constants";

export function RiskBreakdownBar({ stats }: { stats: DashboardStats }) {
  const { byRisiko, totalZom } = stats;
  const segments = [
    { label: "Tinggi", count: byRisiko.Tinggi, color: RISIKO_CHART_COLORS.Tinggi },
    { label: "Sedang", count: byRisiko.Sedang, color: RISIKO_CHART_COLORS.Sedang },
    { label: "Rendah", count: byRisiko.Rendah, color: RISIKO_CHART_COLORS.Rendah },
  ];

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Distribusi Risiko Kekeringan
      </h3>
      <div className="flex h-6 overflow-hidden rounded-full">
        {segments.map((s) => {
          const pct = (s.count / totalZom) * 100;
          if (pct === 0) return null;
          return (
            <div
              key={s.label}
              style={{ width: `${pct}%`, backgroundColor: s.color }}
              className="flex items-center justify-center text-[10px] font-bold text-white"
              title={`${s.label}: ${s.count} (${pct.toFixed(1)}%)`}
            >
              {pct > 8 ? `${pct.toFixed(0)}%` : ""}
            </div>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
        {segments.map((s) => (
          <div key={s.label} className="flex items-center gap-1.5 text-xs">
            <span
              className="inline-block h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: s.color }}
            />
            <span className="text-gray-600">
              {s.label}: <span className="font-semibold">{s.count}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
