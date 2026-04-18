import type { ZomEntry, ZomAuditEntry, Island, DashboardStats, RisikoKekeringan, SifatHujan } from "@/lib/types";
import rawData from "./pmk2026_zom_all.json";

export const zomData: ZomEntry[] = rawData as ZomEntry[];

export const zomById = new Map<string, ZomEntry>(
  zomData.map((z) => [z.id, z])
);

export const zomByIsland = new Map<Island, ZomEntry[]>();
for (const z of zomData) {
  const arr = zomByIsland.get(z.island) || [];
  arr.push(z);
  zomByIsland.set(z.island, arr);
}

function computeStats(): DashboardStats {
  const byIsland = {} as Record<Island, number>;
  const byRisiko = { Tinggi: 0, Sedang: 0, Rendah: 0 } as Record<RisikoKekeringan, number>;
  const bySifat = { "Bawah Normal": 0, Normal: 0, "Atas Normal": 0 } as Record<SifatHujan, number>;
  let type1Musim = 0;
  let sudahMK = 0;
  let totalRain = 0;
  let driest: ZomEntry = zomData[0];
  let wettest: ZomEntry = zomData[0];
  let driestVal = Infinity;
  let wettestVal = -Infinity;

  for (const z of zomData) {
    byIsland[z.island] = (byIsland[z.island] || 0) + 1;
    byRisiko[z.risikoKekeringan]++;
    bySifat[z.sifatHujan]++;
    if (z.awalMusimKemarau === "Tipe 1 Musim") type1Musim++;
    if (z.awalMusimKemarau === "Sudah MK") sudahMK++;
    const sum = z.curahHujan.reduce((s, c) => s + c.value, 0);
    totalRain += sum;
    if (sum < driestVal) { driestVal = sum; driest = z; }
    if (sum > wettestVal) { wettestVal = sum; wettest = z; }
  }

  return {
    totalZom: zomData.length,
    byIsland,
    byRisiko,
    bySifat,
    type1Musim,
    sudahMK,
    avgTotalRainfall: Math.round(totalRain / zomData.length),
    driestZom: driest,
    wettestZom: wettest,
  };
}

export const dashboardStats: DashboardStats = computeStats();

let auditCache: ZomAuditEntry[] | null = null;

export async function loadAuditData(): Promise<ZomAuditEntry[]> {
  if (auditCache) return auditCache;
  const res = await fetch("/data/pmk2026_zom_all_audit.json");
  auditCache = (await res.json()) as ZomAuditEntry[];
  return auditCache;
}

export function getAuditEntry(
  auditData: ZomAuditEntry[],
  id: string
): ZomAuditEntry | undefined {
  return auditData.find((z) => z.id === id);
}
