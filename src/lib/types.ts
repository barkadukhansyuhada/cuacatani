export type Island =
  | "Sumatera"
  | "Jawa"
  | "Kalimantan"
  | "Bali & Nusa Tenggara"
  | "Sulawesi"
  | "Maluku & Papua";

export type RisikoKekeringan = "Tinggi" | "Sedang" | "Rendah";

export type SifatHujan = "Bawah Normal" | "Normal" | "Atas Normal";

export type RainfallMonth = "Apr" | "Mei" | "Jun" | "Jul" | "Agu" | "Sep";

export type PredCategory = "<50" | "50-150" | "150-300" | ">=300";

export interface CurahHujanEntry {
  month: RainfallMonth;
  value: number;
  normal: number;
}

export interface ZomEntry {
  id: string;
  name: string;
  island: Island;
  zom: string;
  awalMusimKemarau: string;
  sifatHujan: SifatHujan;
  puncakKemarau: string;
  curahHujan: CurahHujanEntry[];
  rekomendasiTanam: string[];
  risikoKekeringan: RisikoKekeringan;
}

export interface CurahHujanAuditEntry {
  month: RainfallMonth;
  predCategoryDasarian: [PredCategory, PredCategory, PredCategory];
  predRepresentativeValue: number;
  normalDasarian: [number, number, number];
  normal: number;
}

export interface ZomAuditEntry extends ZomEntry {
  sourceCode: string;
  type1Musim: boolean;
  curahHujanAudit: CurahHujanAuditEntry[];
}

export type AppMode = "petani" | "penyuluh";

export interface FilterState {
  search: string;
  islands: Island[];
  risiko: RisikoKekeringan[];
  sifat: SifatHujan[];
}

export type SortField =
  | "name"
  | "island"
  | "risikoKekeringan"
  | "awalMusimKemarau"
  | "totalCurahHujan";

export type SortDirection = "asc" | "desc";

export interface SortState {
  field: SortField;
  direction: SortDirection;
}

export interface DashboardStats {
  totalZom: number;
  byIsland: Record<Island, number>;
  byRisiko: Record<RisikoKekeringan, number>;
  bySifat: Record<SifatHujan, number>;
  type1Musim: number;
  sudahMK: number;
  avgTotalRainfall: number;
  driestZom: ZomEntry;
  wettestZom: ZomEntry;
}
