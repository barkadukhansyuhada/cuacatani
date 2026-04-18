"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { zomData } from "@/data";
import { filterZom, sortZom, defaultFilters } from "@/lib/filters";
import { exportFilteredCsv, downloadCsv } from "@/lib/utils";
import type { FilterState, SortField, SortDirection, Island } from "@/lib/types";
import { SearchBar } from "@/components/search/SearchBar";
import { FilterPanel } from "@/components/search/FilterPanel";
import { SortSelect } from "@/components/search/SortSelect";
import { ZomCard } from "@/components/zom/ZomCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { Download } from "lucide-react";

export function CariContent() {
  const searchParams = useSearchParams();
  const initialIsland = searchParams.get("island");

  const [filters, setFilters] = useState<FilterState>(() => {
    const f = { ...defaultFilters };
    if (initialIsland) {
      f.islands = [initialIsland as Island];
    }
    return f;
  });
  const [sortField, setSortField] = useState<SortField>("risikoKekeringan");
  const [sortDir, setSortDir] = useState<SortDirection>("asc");
  const [searchDebounced, setSearchDebounced] = useState(filters.search);

  useEffect(() => {
    const timer = setTimeout(() => setSearchDebounced(filters.search), 200);
    return () => clearTimeout(timer);
  }, [filters.search]);

  const results = useMemo(() => {
    const withSearch = { ...filters, search: searchDebounced };
    const filtered = filterZom(zomData, withSearch);
    return sortZom(filtered, sortField, sortDir);
  }, [filters, searchDebounced, sortField, sortDir]);

  const handleExport = () => {
    const csv = exportFilteredCsv(results);
    downloadCsv(csv, "petani-bmkg-zom-2026.csv");
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Cari Wilayah Prakiraan</h2>
        <button
          onClick={handleExport}
          disabled={results.length === 0}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 disabled:opacity-40"
        >
          <Download size={14} />
          CSV
        </button>
      </div>

      <SearchBar
        value={filters.search}
        onChange={(v) => setFilters((f) => ({ ...f, search: v }))}
      />

      <FilterPanel
        filters={filters}
        onChange={setFilters}
        resultCount={results.length}
      />

      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">
          {results.length} dari {zomData.length} wilayah
        </p>
        <SortSelect
          field={sortField}
          direction={sortDir}
          onChange={(f, d) => {
            setSortField(f);
            setSortDir(d);
          }}
        />
      </div>

      {results.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid gap-3 sm:grid-cols-2">
          {results.map((zom) => (
            <ZomCard key={zom.id} zom={zom} />
          ))}
        </div>
      )}
    </div>
  );
}
