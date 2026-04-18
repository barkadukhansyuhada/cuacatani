"use client";

import type { DashboardStats, Island, RisikoKekeringan } from "@/lib/types";
import { ISLANDS } from "@/lib/constants";
import { zomByIsland } from "@/data";
import { RiskBadge } from "@/components/shared/RiskBadge";
import Link from "next/link";

function getDominantRisk(island: Island): RisikoKekeringan {
  const zoms = zomByIsland.get(island) || [];
  const counts: Record<RisikoKekeringan, number> = { Tinggi: 0, Sedang: 0, Rendah: 0 };
  for (const z of zoms) counts[z.risikoKekeringan]++;
  return counts.Tinggi >= counts.Sedang ? "Tinggi" : counts.Sedang >= counts.Rendah ? "Sedang" : "Rendah";
}

export function IslandSummary({ stats }: { stats: DashboardStats }) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <h3 className="mb-3 text-sm font-semibold text-gray-700">
        Ringkasan per Pulau
      </h3>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {ISLANDS.map((island) => {
          const count = stats.byIsland[island] || 0;
          const dominant = getDominantRisk(island);
          return (
            <Link
              key={island}
              href={`/cari?island=${encodeURIComponent(island)}`}
              className="rounded-lg border border-gray-100 p-3 transition-colors hover:bg-gray-50"
            >
              <p className="text-xs font-medium text-gray-500">{island}</p>
              <p className="text-lg font-bold text-gray-900">{count}</p>
              <div className="mt-1">
                <RiskBadge risiko={dominant} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
