"use client";

import { useCompare } from "@/hooks/useCompare";
import { useMode } from "@/hooks/useMode";
import { zomById } from "@/data";
import { RiskBadge } from "@/components/shared/RiskBadge";
import { SifatBadge } from "@/components/shared/SifatBadge";
import { RainfallChart } from "@/components/zom/RainfallChart";
import {
  X,
  Trash2,
  ArrowRight,
  Columns3,
  Share2,
} from "lucide-react";
import Link from "next/link";
import { totalRainfall, totalNormal, formatDelta, generateShareText } from "@/lib/utils";
import type { ZomEntry } from "@/lib/types";

export default function BandingkanPage() {
  const { compareIds, removeCompare, clearCompare } = useCompare();
  const { mode } = useMode();

  const zoms = compareIds
    .map((id) => zomById.get(id))
    .filter((z): z is ZomEntry => z !== undefined);

  if (zoms.length < 2) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900">Bandingkan Wilayah</h2>

        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 py-16 text-center">
          <Columns3 size={48} className="mb-4 text-gray-300" />
          <h3 className="text-base font-semibold text-gray-600">
            {zoms.length === 0
              ? "Belum ada wilayah yang dipilih"
              : "Tambah minimal 1 wilayah lagi"}
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            Pilih 2–4 wilayah dari halaman Cari untuk membandingkan
          </p>
          <Link
            href="/cari"
            className="mt-4 flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-green-700"
          >
            Cari Wilayah <ArrowRight size={16} />
          </Link>
        </div>

        {zoms.length === 1 && (
          <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                {mode === "penyuluh" && <p className="text-xs text-gray-400">{zoms[0].zom}</p>}
                <p className="text-sm font-semibold text-gray-900">{zoms[0].name}</p>
              </div>
              <button
                onClick={() => removeCompare(zoms[0].id)}
                className="text-gray-400 hover:text-red-500"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const handleShareAll = async () => {
    const text = zoms.map((z) => generateShareText(z)).join("\n\n---\n\n");
    if (navigator.share) {
      try {
        await navigator.share({ title: "Perbandingan Wilayah — Petani BMKG", text });
      } catch {}
    } else {
      await navigator.clipboard.writeText(text);
      alert("Disalin ke clipboard!");
    }
  };

  // Highlights
  const driestIdx = zoms.reduce(
    (min, z, i) => (totalRainfall(z.curahHujan) < totalRainfall(zoms[min].curahHujan) ? i : min),
    0
  );
  const wettestIdx = zoms.reduce(
    (max, z, i) => (totalRainfall(z.curahHujan) > totalRainfall(zoms[max].curahHujan) ? i : max),
    0
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Perbandingan ({zoms.length} wilayah)
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleShareAll}
            className="rounded-lg border border-gray-200 bg-white p-2 text-gray-500 hover:bg-gray-50"
          >
            <Share2 size={16} />
          </button>
          <button
            onClick={clearCompare}
            className="flex items-center gap-1 rounded-lg border border-red-200 bg-white px-3 py-1.5 text-xs font-medium text-red-500 hover:bg-red-50"
          >
            <Trash2 size={14} /> Hapus
          </button>
        </div>
      </div>

      {/* Comparison highlights */}
      <div className="rounded-xl border border-amber-100 bg-amber-50 p-3">
        <p className="text-xs font-medium text-amber-700 mb-1">Ringkasan Perbandingan</p>
        <ul className="space-y-0.5 text-xs text-amber-600">
          <li>
            Wilayah terkering:{" "}
            <span className="font-semibold">{mode === "petani" ? zoms[driestIdx].name : zoms[driestIdx].zom}</span> (
            {totalRainfall(zoms[driestIdx].curahHujan)} mm)
          </li>
          <li>
            Wilayah terbasah:{" "}
            <span className="font-semibold">{mode === "petani" ? zoms[wettestIdx].name : zoms[wettestIdx].zom}</span> (
            {totalRainfall(zoms[wettestIdx].curahHujan)} mm)
          </li>
        </ul>
      </div>

      {/* Comparison table */}
      <div className="overflow-x-auto rounded-xl border border-gray-100 bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50 text-xs text-gray-500">
              <th className="px-3 py-2 text-left font-medium">Atribut</th>
              {zoms.map((z) => (
                <th key={z.id} className="px-3 py-2 text-center font-medium">
                  <div className="flex items-center justify-center gap-1">
                    <span className="max-w-[100px] truncate">{mode === "petani" ? z.name.split(",")[0] : z.zom}</span>
                    <button
                      onClick={() => removeCompare(z.id)}
                      className="text-gray-300 hover:text-red-500"
                    >
                      <X size={12} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-xs">
            <CompareRow label="Wilayah" values={zoms.map((z) => z.name)} />
            <CompareRow label="Pulau" values={zoms.map((z) => z.island)} />
            <CompareRow
              label="Risiko"
              values={zoms.map((z) => z.risikoKekeringan)}
              render={(v) => <RiskBadge risiko={v as ZomEntry["risikoKekeringan"]} />}
            />
            <CompareRow
              label="Sifat Hujan"
              values={zoms.map((z) => z.sifatHujan)}
              render={(v) => <SifatBadge sifat={v as ZomEntry["sifatHujan"]} />}
            />
            <CompareRow label="Awal Kemarau" values={zoms.map((z) => z.awalMusimKemarau)} />
            <CompareRow label="Puncak" values={zoms.map((z) => z.puncakKemarau)} />
            <CompareRow
              label="Total CH"
              values={zoms.map((z) => `${totalRainfall(z.curahHujan)} mm`)}
            />
            <CompareRow
              label="Total Normal"
              values={zoms.map((z) => `${totalNormal(z.curahHujan)} mm`)}
            />
            <CompareRow
              label="Selisih"
              values={zoms.map((z) => {
                const d = totalRainfall(z.curahHujan) - totalNormal(z.curahHujan);
                return formatDelta(d) + " mm";
              })}
            />
          </tbody>
        </table>
      </div>

      {/* Individual charts */}
      <div className="grid gap-3 sm:grid-cols-2">
        {zoms.map((z) => (
          <div key={z.id}>
            <Link
              href={`/zom/${z.id}`}
              className="mb-1 block text-xs font-semibold text-gray-700 hover:text-green-600"
            >
              {mode === "petani" ? z.name.split(",")[0] : z.zom} →
            </Link>
            <RainfallChart data={z.curahHujan} compact />
          </div>
        ))}
      </div>
    </div>
  );
}

function CompareRow({
  label,
  values,
  render,
}: {
  label: string;
  values: string[];
  render?: (v: string) => React.ReactNode;
}) {
  return (
    <tr className="border-b border-gray-50">
      <td className="px-3 py-2 font-medium text-gray-600 whitespace-nowrap">
        {label}
      </td>
      {values.map((v, i) => (
        <td key={i} className="px-3 py-2 text-center text-gray-700">
          {render ? render(v) : v}
        </td>
      ))}
    </tr>
  );
}
