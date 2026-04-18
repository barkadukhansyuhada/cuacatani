"use client";

import type { ZomEntry } from "@/lib/types";
import { useMode } from "@/hooks/useMode";
import { useCompare } from "@/hooks/useCompare";
import { RiskBadge } from "@/components/shared/RiskBadge";
import { SifatBadge } from "@/components/shared/SifatBadge";
import { RainfallChart } from "@/components/zom/RainfallChart";
import { DeltaTable } from "@/components/zom/DeltaTable";
import { RekomendasiList } from "@/components/zom/RekomendasiList";
import { AuditPanel } from "@/components/zom/AuditPanel";
import {
  MapPin,
  Calendar,
  Sun,
  Plus,
  Check,
  Share2,
  ArrowLeft,
  Printer,
  AlertTriangle,
  Droplets,
  ShieldAlert,
} from "lucide-react";
import { isSpecialAwal, generateShareText, totalRainfall, totalNormal, formatDelta, getDriestMonth } from "@/lib/utils";
import { MONTH_LABELS } from "@/lib/constants";
import Link from "next/link";

export function ZomDetailClient({ zom }: { zom: ZomEntry }) {
  const { mode } = useMode();
  const { addCompare, removeCompare, isComparing, compareIds } = useCompare();
  const comparing = isComparing(zom.id);

  const totVal = totalRainfall(zom.curahHujan);
  const totNorm = totalNormal(zom.curahHujan);
  const totDelta = totVal - totNorm;
  const driest = getDriestMonth(zom);

  const handleShare = async () => {
    const text = generateShareText(zom);
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Petani BMKG — ${zom.name}`,
          text,
          url: window.location.href,
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text + "\n" + window.location.href);
      alert("Disalin ke clipboard!");
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Link
          href="/cari"
          className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
        >
          <ArrowLeft size={20} />
        </Link>
        <div className="min-w-0 flex-1">
          {mode === "penyuluh" && (
            <p className="text-xs font-medium text-gray-400">{zom.zom}</p>
          )}
          <h2 className="text-base font-bold leading-snug text-gray-900">
            {zom.name}
          </h2>
        </div>
      </div>

      {/* Peringatan praktis untuk petani */}
      {mode === "petani" && zom.risikoKekeringan === "Tinggi" && (
        <div className="flex gap-3 rounded-xl border border-red-200 bg-red-50 p-3">
          <ShieldAlert size={20} className="mt-0.5 shrink-0 text-red-500" />
          <div>
            <p className="text-sm font-semibold text-red-700">
              Peringatan: Risiko Kekeringan Tinggi
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-red-600">
              Wilayah ini diprakirakan lebih kering dari biasanya. Siapkan
              cadangan air, periksa irigasi, dan pertimbangkan varietas tahan
              kering.
            </p>
          </div>
        </div>
      )}

      {mode === "petani" && zom.awalMusimKemarau === "Sudah MK" && (
        <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-3">
          <AlertTriangle size={20} className="mt-0.5 shrink-0 text-amber-500" />
          <div>
            <p className="text-sm font-semibold text-amber-700">
              Wilayah Sudah Memasuki Kemarau
            </p>
            <p className="mt-0.5 text-xs leading-relaxed text-amber-600">
              Jangan memulai tanam padi baru kecuali irigasi Anda sangat
              memadai. Fokus pada tanaman palawija atau perawatan tanaman
              yang sudah ada.
            </p>
          </div>
        </div>
      )}

      {/* Key info grid */}
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <InfoCard
          icon={<MapPin size={14} />}
          label="Pulau"
          value={zom.island}
        />
        <InfoCard
          icon={<Calendar size={14} />}
          label="Mulai Kemarau"
          value={
            zom.awalMusimKemarau === "Tipe 1 Musim"
              ? "Tidak tegas"
              : zom.awalMusimKemarau === "Sudah MK"
                ? "Sudah kemarau"
                : zom.awalMusimKemarau
          }
          highlight={isSpecialAwal(zom.awalMusimKemarau)}
        />
        <InfoCard
          icon={<Sun size={14} />}
          label="Paling Kering"
          value={zom.puncakKemarau}
        />
        <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
          <p className="text-[10px] text-gray-400">Risiko & Sifat</p>
          <div className="mt-1 flex flex-wrap gap-1">
            <RiskBadge risiko={zom.risikoKekeringan} />
            <SifatBadge sifat={zom.sifatHujan} />
          </div>
        </div>
      </div>

      {/* Ringkasan sederhana untuk petani */}
      {mode === "petani" && (
        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
          <div className="flex items-start gap-3">
            <Droplets size={20} className="mt-0.5 shrink-0 text-blue-500" />
            <div className="text-sm leading-relaxed text-blue-800">
              {totDelta < -50 ? (
                <p>
                  Hujan diprakirakan <strong>jauh lebih sedikit</strong> dari
                  biasanya ({Math.abs(totDelta)} mm lebih kering). Bulan paling
                  kering: <strong>{MONTH_LABELS[driest.month] || driest.month}</strong> ({driest.value} mm).
                  Siapkan strategi penghematan air.
                </p>
              ) : totDelta < 0 ? (
                <p>
                  Hujan diprakirakan <strong>sedikit lebih kering</strong> dari
                  biasanya ({Math.abs(totDelta)} mm kurang). Bulan paling
                  kering: <strong>{MONTH_LABELS[driest.month] || driest.month}</strong>.
                  Pantau ketersediaan air secara berkala.
                </p>
              ) : totDelta === 0 ? (
                <p>
                  Hujan diprakirakan <strong>normal</strong> seperti biasanya.
                  Tetap pantau kondisi cuaca lokal.
                </p>
              ) : (
                <p>
                  Hujan diprakirakan <strong>lebih banyak</strong> dari biasanya
                  (+{totDelta} mm). Waspadai potensi banjir atau genangan di
                  lahan. Bulan paling kering:{" "}
                  <strong>{MONTH_LABELS[driest.month] || driest.month}</strong>.
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Total rainfall summary */}
      <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <p className="text-[10px] text-gray-400">
              {mode === "petani" ? "Prakiraan Hujan" : "Prakiraan Apr–Sep"}
            </p>
            <p className="text-xl font-bold text-blue-600">{totVal}</p>
            <p className="text-[10px] text-gray-400">mm</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">
              {mode === "petani" ? "Biasanya" : "Normal Apr–Sep"}
            </p>
            <p className="text-xl font-bold text-gray-500">{totNorm}</p>
            <p className="text-[10px] text-gray-400">mm</p>
          </div>
          <div>
            <p className="text-[10px] text-gray-400">Selisih</p>
            <p
              className={`text-xl font-bold ${
                totDelta < 0
                  ? "text-red-600"
                  : totDelta > 0
                    ? "text-green-600"
                    : "text-gray-400"
              }`}
            >
              {formatDelta(totDelta)}
            </p>
            <p className="text-[10px] text-gray-400">mm</p>
          </div>
        </div>
      </div>

      <RainfallChart data={zom.curahHujan} />

      {mode === "penyuluh" && <DeltaTable data={zom.curahHujan} />}

      <RekomendasiList items={zom.rekomendasiTanam} />

      {mode === "penyuluh" && <AuditPanel zomId={zom.id} />}

      {/* Action buttons */}
      <div className="flex gap-2 no-print">
        <button
          onClick={() => (comparing ? removeCompare(zom.id) : addCompare(zom.id))}
          disabled={!comparing && compareIds.length >= 4}
          className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
            comparing
              ? "bg-green-50 text-green-700 border border-green-200"
              : compareIds.length >= 4
                ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {comparing ? <Check size={16} /> : <Plus size={16} />}
          {comparing ? "Ditambahkan" : "Bandingkan"}
        </button>
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <Share2 size={16} />
        </button>
        <button
          onClick={() => window.print()}
          className="flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
        >
          <Printer size={16} />
        </button>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  value,
  highlight = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
      <div className="flex items-center gap-1 text-gray-400">
        {icon}
        <span className="text-[10px]">{label}</span>
      </div>
      <p
        className={`mt-1 text-sm font-semibold ${
          highlight ? "text-amber-600" : "text-gray-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}
