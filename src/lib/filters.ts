import type { ZomEntry, FilterState, SortField, SortDirection } from "./types";
import { awalKemarauSortValue, totalRainfall } from "./utils";

const RISIKO_ORDER = { Tinggi: 0, Sedang: 1, Rendah: 2 } as const;

export function filterZom(data: ZomEntry[], filters: FilterState): ZomEntry[] {
  return data.filter((z) => {
    if (filters.search) {
      const q = filters.search.toLowerCase();
      const match =
        z.name.toLowerCase().includes(q) ||
        z.zom.toLowerCase().includes(q) ||
        z.id.toLowerCase().includes(q) ||
        z.island.toLowerCase().includes(q);
      if (!match) return false;
    }
    if (filters.islands.length > 0 && !filters.islands.includes(z.island)) return false;
    if (filters.risiko.length > 0 && !filters.risiko.includes(z.risikoKekeringan)) return false;
    if (filters.sifat.length > 0 && !filters.sifat.includes(z.sifatHujan)) return false;
    return true;
  });
}

export function sortZom(
  data: ZomEntry[],
  field: SortField,
  direction: SortDirection
): ZomEntry[] {
  const sorted = [...data].sort((a, b) => {
    let cmp = 0;
    switch (field) {
      case "name":
        cmp = a.name.localeCompare(b.name, "id");
        break;
      case "island":
        cmp = a.island.localeCompare(b.island, "id");
        break;
      case "risikoKekeringan":
        cmp = RISIKO_ORDER[a.risikoKekeringan] - RISIKO_ORDER[b.risikoKekeringan];
        break;
      case "awalMusimKemarau":
        cmp = awalKemarauSortValue(a.awalMusimKemarau) - awalKemarauSortValue(b.awalMusimKemarau);
        break;
      case "totalCurahHujan":
        cmp = totalRainfall(a.curahHujan) - totalRainfall(b.curahHujan);
        break;
    }
    return cmp;
  });
  return direction === "desc" ? sorted.reverse() : sorted;
}

export const defaultFilters: FilterState = {
  search: "",
  islands: [],
  risiko: [],
  sifat: [],
};
