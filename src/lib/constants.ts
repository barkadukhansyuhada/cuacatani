import type { Island, RisikoKekeringan, SifatHujan, PredCategory } from "./types";

export const ISLANDS: Island[] = [
  "Sumatera",
  "Jawa",
  "Kalimantan",
  "Bali & Nusa Tenggara",
  "Sulawesi",
  "Maluku & Papua",
];

export const RISIKO_COLORS: Record<RisikoKekeringan, { bg: string; text: string; border: string }> = {
  Tinggi: { bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
  Sedang: { bg: "bg-amber-100", text: "text-amber-700", border: "border-amber-300" },
  Rendah: { bg: "bg-green-100", text: "text-green-700", border: "border-green-300" },
};

export const RISIKO_CHART_COLORS: Record<RisikoKekeringan, string> = {
  Tinggi: "#dc2626",
  Sedang: "#d97706",
  Rendah: "#16a34a",
};

export const SIFAT_COLORS: Record<SifatHujan, { bg: string; text: string }> = {
  "Bawah Normal": { bg: "bg-orange-50", text: "text-orange-600" },
  Normal: { bg: "bg-blue-50", text: "text-blue-600" },
  "Atas Normal": { bg: "bg-emerald-50", text: "text-emerald-600" },
};

export const PRED_CATEGORY_COLORS: Record<PredCategory, string> = {
  "<50": "#ef4444",
  "50-150": "#f59e0b",
  "150-300": "#3b82f6",
  ">=300": "#16a34a",
};

export const PRED_CATEGORY_LABELS: Record<PredCategory, string> = {
  "<50": "< 50 mm",
  "50-150": "50–150 mm",
  "150-300": "150–300 mm",
  ">=300": "≥ 300 mm",
};

export const MONTH_LABELS: Record<string, string> = {
  Apr: "April",
  Mei: "Mei",
  Jun: "Juni",
  Jul: "Juli",
  Agu: "Agustus",
  Sep: "September",
};

export const ISLAND_EMOJI: Record<Island, string> = {
  Sumatera: "🏝️",
  Jawa: "🌾",
  Kalimantan: "🌿",
  "Bali & Nusa Tenggara": "🏖️",
  Sulawesi: "⛰️",
  "Maluku & Papua": "🌴",
};

export const AWAL_KEMARAU_ORDER: Record<string, number> = (() => {
  const months = [
    "Februari", "Maret", "April", "Mei", "Juni", "Juli",
    "Agustus", "September", "Oktober", "November", "Desember",
  ];
  const dasarian = ["Dasarian I", "Dasarian II", "Dasarian III"];
  const order: Record<string, number> = { "Sudah MK": 0 };
  let idx = 1;
  for (const m of months) {
    for (const d of dasarian) {
      order[`${m} ${d}`] = idx++;
    }
  }
  order["Tipe 1 Musim"] = idx;
  return order;
})();
