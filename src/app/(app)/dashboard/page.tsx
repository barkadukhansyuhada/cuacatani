import { dashboardStats, zomData } from "@/data";
import { generateInsights } from "@/lib/insights";
import { StatCard } from "@/components/dashboard/StatCard";
import { RiskBreakdownBar } from "@/components/dashboard/RiskBreakdownBar";
import { IslandSummary } from "@/components/dashboard/IslandSummary";
import { InsightList } from "@/components/dashboard/InsightList";
import { DashboardMap } from "@/components/dashboard/DashboardMap";
import {
  MapPin,
  AlertTriangle,
  CloudRain,
  Thermometer,
  Calendar,
  Droplets,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const stats = dashboardStats;
  const insights = generateInsights(stats);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-bold text-gray-900">
          Prakiraan Kemarau 2026
        </h2>
        <p className="text-sm text-gray-500">
          Ringkasan untuk {stats.totalZom} wilayah prakiraan di Indonesia
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <StatCard
          label="Total Wilayah"
          value={stats.totalZom}
          icon={<MapPin size={20} />}
          sub="seluruh Indonesia"
        />
        <StatCard
          label="Risiko Tinggi"
          value={stats.byRisiko.Tinggi}
          icon={<AlertTriangle size={20} />}
          color="text-red-600"
          sub={`${((stats.byRisiko.Tinggi / stats.totalZom) * 100).toFixed(0)}% wilayah`}
        />
        <StatCard
          label="Lebih Kering"
          value={stats.bySifat["Bawah Normal"]}
          icon={<CloudRain size={20} />}
          color="text-amber-600"
          sub="hujan di bawah normal"
        />
        <StatCard
          label="Rata-rata Hujan"
          value={`${stats.avgTotalRainfall}`}
          icon={<Droplets size={20} />}
          color="text-blue-600"
          sub="mm total Apr–Sep"
        />
        <StatCard
          label="Tanpa Kemarau Tegas"
          value={stats.type1Musim}
          icon={<Thermometer size={20} />}
          sub="hujan merata setahun"
        />
        <StatCard
          label="Sudah Kemarau"
          value={stats.sudahMK}
          icon={<Calendar size={20} />}
          color="text-red-500"
          sub="jangan tanam padi baru"
        />
      </div>

      <RiskBreakdownBar stats={stats} />

      <DashboardMap />

      <InsightList insights={insights} />

      <IslandSummary stats={stats} />

      <Link
        href="/cari"
        className="block rounded-xl bg-green-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700"
      >
        Cari Wilayah Prakiraan
      </Link>
    </div>
  );
}
