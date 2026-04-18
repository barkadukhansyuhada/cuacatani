import type { DashboardStats } from "./types";
import { MONTH_LABELS } from "./constants";
import { totalRainfall } from "./utils";

export function generateInsights(stats: DashboardStats): string[] {
  const insights: string[] = [];
  const { totalZom, byRisiko, bySifat, type1Musim, sudahMK, driestZom, wettestZom } = stats;

  const pctTinggi = ((byRisiko.Tinggi / totalZom) * 100).toFixed(1);
  insights.push(
    `${byRisiko.Tinggi} dari ${totalZom} wilayah (${pctTinggi}%) memiliki risiko kekeringan Tinggi — mayoritas wilayah Indonesia perlu waspada kekeringan di musim kemarau 2026.`
  );

  const pctBawah = ((bySifat["Bawah Normal"] / totalZom) * 100).toFixed(1);
  insights.push(
    `Curah hujan di ${bySifat["Bawah Normal"]} wilayah (${pctBawah}%) diprakirakan Bawah Normal, artinya lebih kering dari biasanya.`
  );

  if (byRisiko.Rendah > 0) {
    insights.push(
      `Hanya ${byRisiko.Rendah} wilayah yang memiliki risiko kekeringan Rendah — curah hujan di sana diprakirakan di atas normal.`
    );
  }

  if (type1Musim > 0) {
    insights.push(
      `${type1Musim} wilayah bertipe 1 musim — tidak memiliki musim kemarau yang tegas, sehingga pola tanam perlu disesuaikan dengan sebaran hujan setempat.`
    );
  }

  if (sudahMK > 0) {
    insights.push(
      `${sudahMK} wilayah sudah memasuki musim kemarau — hindari memulai tanam padi baru kecuali irigasi sangat memadai.`
    );
  }

  const driestTotal = totalRainfall(driestZom.curahHujan);
  insights.push(
    `Wilayah terkering: ${driestZom.name} dengan total prakiraan ${driestTotal} mm selama Apr–Sep.`
  );

  const wettestTotal = totalRainfall(wettestZom.curahHujan);
  insights.push(
    `Wilayah terbasah: ${wettestZom.name} dengan total prakiraan ${wettestTotal} mm selama Apr–Sep.`
  );

  insights.push(
    `Rata-rata total prakiraan curah hujan Apr–Sep seluruh Indonesia: ${stats.avgTotalRainfall} mm.`
  );

  return insights;
}
