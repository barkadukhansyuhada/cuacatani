import type { ZomEntry, CurahHujanEntry } from "./types";
import { AWAL_KEMARAU_ORDER } from "./constants";

export function totalRainfall(ch: CurahHujanEntry[]): number {
  return ch.reduce((sum, e) => sum + e.value, 0);
}

export function totalNormal(ch: CurahHujanEntry[]): number {
  return ch.reduce((sum, e) => sum + e.normal, 0);
}

export function deltaRainfall(entry: CurahHujanEntry): number {
  return entry.value - entry.normal;
}

export function deltaPercent(entry: CurahHujanEntry): number {
  if (entry.normal === 0) return 0;
  return ((entry.value - entry.normal) / entry.normal) * 100;
}

export function awalKemarauSortValue(awal: string): number {
  return AWAL_KEMARAU_ORDER[awal] ?? 999;
}

export function isSpecialAwal(awal: string): boolean {
  return awal === "Tipe 1 Musim" || awal === "Sudah MK";
}

export function formatDelta(val: number): string {
  const sign = val > 0 ? "+" : "";
  return `${sign}${Math.round(val)}`;
}

export function formatDeltaPercent(entry: CurahHujanEntry): string {
  const pct = deltaPercent(entry);
  const sign = pct > 0 ? "+" : "";
  return `${sign}${Math.round(pct)}%`;
}

export function getDriestMonth(zom: ZomEntry): CurahHujanEntry {
  return zom.curahHujan.reduce((min, e) => (e.value < min.value ? e : min));
}

export function generateShareText(zom: ZomEntry): string {
  return [
    `Prakiraan Kemarau 2026 — ${zom.name}`,
    `Wilayah: ${zom.zom}`,
    `Pulau: ${zom.island}`,
    `Risiko Kekeringan: ${zom.risikoKekeringan}`,
    `Sifat Hujan: ${zom.sifatHujan}`,
    `Awal Kemarau: ${zom.awalMusimKemarau}`,
    `Puncak Kemarau: ${zom.puncakKemarau}`,
    "",
    "Sumber: BMKG PMK 2026 | Petani BMKG App",
  ].join("\n");
}

export function exportFilteredCsv(zoms: ZomEntry[]): string {
  const header = "ID,ZOM,Nama,Pulau,Awal Kemarau,Sifat Hujan,Risiko Kekeringan,Puncak Kemarau,Apr,Mei,Jun,Jul,Agu,Sep,Normal Apr,Normal Mei,Normal Jun,Normal Jul,Normal Agu,Normal Sep";
  const rows = zoms.map((z) => {
    const vals = z.curahHujan.map((c) => c.value).join(",");
    const norms = z.curahHujan.map((c) => c.normal).join(",");
    return `"${z.id}","${z.zom}","${z.name}","${z.island}","${z.awalMusimKemarau}","${z.sifatHujan}","${z.risikoKekeringan}","${z.puncakKemarau}",${vals},${norms}`;
  });
  return [header, ...rows].join("\n");
}

export function downloadCsv(content: string, filename: string): void {
  const blob = new Blob([content], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}
