// Mapping kode ZOM prefix → nama provinsi + koordinat pusat
export interface ProvinceInfo {
  code: string;
  name: string;
  lat: number;
  lng: number;
}

export const PROVINCE_MAP: Record<string, ProvinceInfo> = {
  ACEH: { code: "ACEH", name: "Aceh", lat: 4.695, lng: 96.749 },
  SUMUT: { code: "SUMUT", name: "Sumatera Utara", lat: 2.116, lng: 99.545 },
  SUMBAR: { code: "SUMBAR", name: "Sumatera Barat", lat: -0.739, lng: 100.800 },
  RIAU: { code: "RIAU", name: "Riau", lat: 0.293, lng: 101.706 },
  KEPRI: { code: "KEPRI", name: "Kepulauan Riau", lat: 0.916, lng: 104.450 },
  JAMBI: { code: "JAMBI", name: "Jambi", lat: -1.610, lng: 103.613 },
  BENGKULU: { code: "BENGKULU", name: "Bengkulu", lat: -3.794, lng: 102.259 },
  SUMSEL: { code: "SUMSEL", name: "Sumatera Selatan", lat: -3.319, lng: 104.914 },
  BABEL: { code: "BABEL", name: "Bangka Belitung", lat: -2.741, lng: 106.440 },
  LAMPUNG: { code: "LAMPUNG", name: "Lampung", lat: -4.558, lng: 105.406 },
  BANTENDKI: { code: "BANTENDKI", name: "Banten & DKI Jakarta", lat: -6.405, lng: 106.064 },
  JABAR: { code: "JABAR", name: "Jawa Barat", lat: -6.889, lng: 107.611 },
  JATENG: { code: "JATENG", name: "Jawa Tengah", lat: -7.150, lng: 110.140 },
  DIY: { code: "DIY", name: "DI Yogyakarta", lat: -7.797, lng: 110.370 },
  JATIM: { code: "JATIM", name: "Jawa Timur", lat: -7.536, lng: 112.238 },
  BALI: { code: "BALI", name: "Bali", lat: -8.409, lng: 115.189 },
  NTB: { code: "NTB", name: "Nusa Tenggara Barat", lat: -8.652, lng: 117.362 },
  NTT: { code: "NTT", name: "Nusa Tenggara Timur", lat: -8.657, lng: 121.079 },
  KALBAR: { code: "KALBAR", name: "Kalimantan Barat", lat: -0.278, lng: 109.910 },
  KALTENG: { code: "KALTENG", name: "Kalimantan Tengah", lat: -1.681, lng: 113.382 },
  KALSEL: { code: "KALSEL", name: "Kalimantan Selatan", lat: -3.092, lng: 115.283 },
  KALTIM: { code: "KALTIM", name: "Kalimantan Timur", lat: 1.693, lng: 116.419 },
  KALTARA: { code: "KALTARA", name: "Kalimantan Utara", lat: 3.073, lng: 116.041 },
  SULUT: { code: "SULUT", name: "Sulawesi Utara", lat: 0.625, lng: 123.975 },
  GORONTALO: { code: "GORONTALO", name: "Gorontalo", lat: 0.544, lng: 123.057 },
  SULTENG: { code: "SULTENG", name: "Sulawesi Tengah", lat: -1.430, lng: 121.446 },
  SULBAR: { code: "SULBAR", name: "Sulawesi Barat", lat: -2.844, lng: 119.232 },
  SULSEL: { code: "SULSEL", name: "Sulawesi Selatan", lat: -3.669, lng: 119.974 },
  SULTRA: { code: "SULTRA", name: "Sulawesi Tenggara", lat: -4.145, lng: 122.175 },
  MALUKU: { code: "MALUKU", name: "Maluku", lat: -3.239, lng: 130.145 },
  MALUT: { code: "MALUT", name: "Maluku Utara", lat: 1.571, lng: 127.809 },
  PAPBAR: { code: "PAPBAR", name: "Papua Barat", lat: -1.337, lng: 133.174 },
  PAPUA: { code: "PAPUA", name: "Papua", lat: -4.269, lng: 138.080 },
  PAPSEL: { code: "PAPSEL", name: "Papua Selatan", lat: -6.895, lng: 139.695 },
};

export function getProvinceFromZom(zomCode: string): ProvinceInfo | undefined {
  const code = zomCode.replace("ZOM ", "").replace(/ /g, "");
  const prefix = code.split("_")[0];
  return PROVINCE_MAP[prefix];
}

export function getProvinceCode(zomCode: string): string {
  return zomCode.replace("ZOM ", "").split("_")[0];
}
