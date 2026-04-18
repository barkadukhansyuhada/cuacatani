"use client";

import Link from "next/link";
import type { ZomEntry } from "@/lib/types";
import { RiskBadge } from "@/components/shared/RiskBadge";
import { SifatBadge } from "@/components/shared/SifatBadge";
import { useCompare } from "@/hooks/useCompare";
import { useMode } from "@/hooks/useMode";
import { Plus, Check, MapPin, Calendar } from "lucide-react";
import { isSpecialAwal } from "@/lib/utils";

export function ZomCard({ zom }: { zom: ZomEntry }) {
  const { addCompare, removeCompare, isComparing, compareIds } = useCompare();
  const { mode } = useMode();
  const comparing = isComparing(zom.id);
  const maxCH = Math.max(...zom.curahHujan.map((c) => Math.max(c.value, c.normal)));

  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/zom/${zom.id}`} className="block p-4">
        <div className="mb-2 flex items-start justify-between gap-2">
          <div className="min-w-0 flex-1">
            {mode === "penyuluh" && (
              <p className="text-xs font-medium text-gray-400">{zom.zom}</p>
            )}
            <h3 className="mt-0.5 text-sm font-semibold leading-snug text-gray-900 line-clamp-2">
              {zom.name}
            </h3>
          </div>
          <RiskBadge risiko={zom.risikoKekeringan} />
        </div>

        <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin size={12} /> {zom.island}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {isSpecialAwal(zom.awalMusimKemarau) ? (
              <span className="font-medium text-amber-600">{zom.awalMusimKemarau}</span>
            ) : (
              zom.awalMusimKemarau
            )}
          </span>
        </div>

        {mode === "penyuluh" && (
          <div className="mb-3">
            <SifatBadge sifat={zom.sifatHujan} />
          </div>
        )}

        {/* Mini sparkline */}
        <div className="flex items-end gap-1 h-10">
          {zom.curahHujan.map((c) => (
            <div key={c.month} className="flex flex-1 items-end gap-px h-full">
              <div
                className="flex-1 rounded-sm bg-blue-400"
                style={{ height: `${maxCH > 0 ? (c.value / maxCH) * 100 : 0}%` }}
                title={`${c.month}: ${c.value} mm`}
              />
              <div
                className="flex-1 rounded-sm bg-gray-200"
                style={{ height: `${maxCH > 0 ? (c.normal / maxCH) * 100 : 0}%` }}
                title={`Normal: ${c.normal} mm`}
              />
            </div>
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-gray-400">
          {zom.curahHujan.map((c) => (
            <span key={c.month}>{c.month}</span>
          ))}
        </div>
      </Link>

      <div className="border-t border-gray-50 px-4 py-2">
        <button
          onClick={(e) => {
            e.preventDefault();
            comparing ? removeCompare(zom.id) : addCompare(zom.id);
          }}
          disabled={!comparing && compareIds.length >= 4}
          className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-1.5 text-xs font-medium transition-colors ${
            comparing
              ? "bg-green-50 text-green-700"
              : compareIds.length >= 4
                ? "cursor-not-allowed bg-gray-50 text-gray-300"
                : "bg-gray-50 text-gray-600 hover:bg-gray-100"
          }`}
        >
          {comparing ? <Check size={14} /> : <Plus size={14} />}
          {comparing ? "Ditambahkan" : "Bandingkan"}
        </button>
      </div>
    </div>
  );
}
