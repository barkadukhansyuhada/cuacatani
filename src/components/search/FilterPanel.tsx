"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Filter } from "lucide-react";
import type { Island, RisikoKekeringan, SifatHujan, FilterState } from "@/lib/types";
import { ISLANDS, RISIKO_COLORS, SIFAT_COLORS } from "@/lib/constants";

interface FilterPanelProps {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  resultCount: number;
}

export function FilterPanel({ filters, onChange, resultCount }: FilterPanelProps) {
  const [open, setOpen] = useState(false);

  const hasFilters =
    filters.islands.length > 0 ||
    filters.risiko.length > 0 ||
    filters.sifat.length > 0;

  const toggleIsland = (island: Island) => {
    const next = filters.islands.includes(island)
      ? filters.islands.filter((i) => i !== island)
      : [...filters.islands, island];
    onChange({ ...filters, islands: next });
  };

  const toggleRisiko = (r: RisikoKekeringan) => {
    const next = filters.risiko.includes(r)
      ? filters.risiko.filter((x) => x !== r)
      : [...filters.risiko, r];
    onChange({ ...filters, risiko: next });
  };

  const toggleSifat = (s: SifatHujan) => {
    const next = filters.sifat.includes(s)
      ? filters.sifat.filter((x) => x !== s)
      : [...filters.sifat, s];
    onChange({ ...filters, sifat: next });
  };

  const clearAll = () => onChange({ ...filters, islands: [], risiko: [], sifat: [] });

  return (
    <div className="rounded-xl border border-gray-100 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-3 text-sm font-medium text-gray-700"
      >
        <span className="flex items-center gap-2">
          <Filter size={16} />
          Filter
          {hasFilters && (
            <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
              {filters.islands.length + filters.risiko.length + filters.sifat.length}
            </span>
          )}
        </span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {open && (
        <div className="border-t border-gray-100 px-3 pb-3 pt-2 space-y-3">
          <div>
            <p className="mb-1.5 text-xs font-semibold text-gray-500">Pulau</p>
            <div className="flex flex-wrap gap-1.5">
              {ISLANDS.map((island) => (
                <button
                  key={island}
                  onClick={() => toggleIsland(island)}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    filters.islands.includes(island)
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {island}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold text-gray-500">Risiko Kekeringan</p>
            <div className="flex flex-wrap gap-1.5">
              {(["Tinggi", "Sedang", "Rendah"] as RisikoKekeringan[]).map((r) => (
                <button
                  key={r}
                  onClick={() => toggleRisiko(r)}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    filters.risiko.includes(r)
                      ? `${RISIKO_COLORS[r].bg} ${RISIKO_COLORS[r].text} ring-1 ring-current`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-1.5 text-xs font-semibold text-gray-500">Sifat Hujan</p>
            <div className="flex flex-wrap gap-1.5">
              {(["Bawah Normal", "Normal", "Atas Normal"] as SifatHujan[]).map((s) => (
                <button
                  key={s}
                  onClick={() => toggleSifat(s)}
                  className={`rounded-full px-2.5 py-1 text-xs font-medium transition-colors ${
                    filters.sifat.includes(s)
                      ? `${SIFAT_COLORS[s].bg} ${SIFAT_COLORS[s].text} ring-1 ring-current`
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {hasFilters && (
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs text-gray-500">{resultCount} wilayah ditemukan</span>
              <button
                onClick={clearAll}
                className="text-xs font-medium text-red-500 hover:text-red-600"
              >
                Hapus semua filter
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
