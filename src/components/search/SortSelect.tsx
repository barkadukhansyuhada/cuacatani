"use client";

import type { SortField, SortDirection } from "@/lib/types";
import { ArrowUpDown } from "lucide-react";

const SORT_OPTIONS: { label: string; field: SortField }[] = [
  { label: "Nama Wilayah", field: "name" },
  { label: "Pulau", field: "island" },
  { label: "Risiko Kekeringan", field: "risikoKekeringan" },
  { label: "Awal Kemarau", field: "awalMusimKemarau" },
  { label: "Total Curah Hujan", field: "totalCurahHujan" },
];

export function SortSelect({
  field,
  direction,
  onChange,
}: {
  field: SortField;
  direction: SortDirection;
  onChange: (field: SortField, direction: SortDirection) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown size={14} className="text-gray-400" />
      <select
        value={field}
        onChange={(e) => onChange(e.target.value as SortField, direction)}
        className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs text-gray-700 focus:border-green-400 focus:outline-none"
      >
        {SORT_OPTIONS.map((opt) => (
          <option key={opt.field} value={opt.field}>
            {opt.label}
          </option>
        ))}
      </select>
      <button
        onClick={() => onChange(field, direction === "asc" ? "desc" : "asc")}
        className="rounded-lg border border-gray-200 bg-white px-2 py-1.5 text-xs text-gray-600 hover:bg-gray-50"
      >
        {direction === "asc" ? "A→Z" : "Z→A"}
      </button>
    </div>
  );
}
