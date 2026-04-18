"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type Mode = "petani" | "penyuluh";

export function ModeComparisonSection() {
  const [active, setActive] = useState<Mode>("petani");
  const [sectionRef, isVisible] = useScrollReveal({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="bg-langit-cerah py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8">
        <h2
          className={`text-center font-[family-name:var(--font-playfair)] text-3xl font-bold text-hijau-tua sm:text-4xl reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-1" : ""}`}
        >
          Dua Cara Melihat, Satu Data
        </h2>
        <p
          className={`mx-auto mt-3 max-w-2xl text-center font-[family-name:var(--font-source-sans)] text-base text-tanah-kering sm:text-lg reveal-base reveal-up ${isVisible ? "revealed reveal-normal reveal-delay-2" : ""}`}
        >
          Petani butuh peringatan praktis. Penyuluh butuh data lengkap. Keduanya
          tersedia.
        </p>

        {/* Toggle */}
        <div
          className={`mx-auto mt-8 flex w-fit rounded-full mode-toggle-pill p-1 reveal-base reveal-scale ${isVisible ? "revealed reveal-normal reveal-delay-3" : ""}`}
        >
          <button
            onClick={() => setActive("petani")}
            className={`rounded-full px-5 py-2 font-[family-name:var(--font-source-sans)] text-sm font-semibold mode-toggle-btn ${
              active === "petani"
                ? "active"
                : "text-hijau-tua hover:bg-hijau-tua/5"
            }`}
          >
            Mode Petani
          </button>
          <button
            onClick={() => setActive("penyuluh")}
            className={`rounded-full px-5 py-2 font-[family-name:var(--font-source-sans)] text-sm font-semibold mode-toggle-btn ${
              active === "penyuluh"
                ? "active"
                : "text-hijau-tua hover:bg-hijau-tua/5"
            }`}
          >
            Mode Penyuluh
          </button>
        </div>

        {/* Phone mockup */}
        <div
          className={`mt-10 flex justify-center reveal-base reveal-up ${isVisible ? "revealed reveal-slow reveal-delay-4" : ""}`}
        >
          <div className="w-full max-w-sm">
            {/* Phone frame */}
            <div className="phone-frame">
              {/* Notch */}
              <div className="phone-notch" />

              {/* Content */}
              <div className="px-4 py-4" key={active}>
                <div className="mode-content-enter">
                  {active === "petani" ? <PetaniMock /> : <PenyuluhMock />}
                </div>
              </div>

              {/* Bottom bar */}
              <div className="flex justify-center pb-2 pt-1">
                <div className="h-1 w-24 rounded-full bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PetaniMock() {
  return (
    <div className="space-y-3 font-[family-name:var(--font-source-sans)]">
      {/* Header */}
      <div className="flex items-center gap-2">
        <span className="text-2xl">&#x1F33E;</span>
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            Kab. Indramayu, Jawa
          </h3>
          <p className="text-xs text-gray-500">Wilayah ZOM 139</p>
        </div>
      </div>

      {/* Risk badge */}
      <div className="rounded-xl bg-red-50 p-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center rounded-full bg-red-600 px-2.5 py-0.5 text-xs font-bold text-white">
            Risiko Tinggi
          </span>
        </div>
        <p className="mt-2 text-sm font-medium text-red-800">
          Kemarau mulai Mei 2026. Hujan jauh di bawah normal.
        </p>
      </div>

      {/* Simple recommendations */}
      <div className="space-y-2 rounded-xl bg-amber-50 p-3">
        <p className="text-xs font-bold uppercase text-amber-700">
          Yang Perlu Dilakukan
        </p>
        <ul className="space-y-1.5 text-sm text-gray-700">
          <li className="flex gap-2">
            <span>&#x26A0;&#xFE0F;</span>
            <span>Jangan tanam padi baru setelah April</span>
          </li>
          <li className="flex gap-2">
            <span>&#x1F4A7;</span>
            <span>Siapkan irigasi cadangan</span>
          </li>
          <li className="flex gap-2">
            <span>&#x1F331;</span>
            <span>Pertimbangkan palawija tahan kering</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

function PenyuluhMock() {
  return (
    <div className="space-y-3 font-[family-name:var(--font-source-sans)]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-bold text-gray-900">
            ZOM 139 &mdash; Kab. Indramayu
          </h3>
          <p className="text-xs text-gray-500">
            Pulau Jawa &middot; Sifat: Bawah Normal
          </p>
        </div>
        <span className="inline-flex items-center rounded-full bg-red-600 px-2 py-0.5 text-[10px] font-bold text-white">
          Tinggi
        </span>
      </div>

      {/* Data table */}
      <div className="overflow-hidden rounded-lg border border-gray-200">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-gray-50 text-left text-gray-500">
              <th className="px-2 py-1.5 font-medium">Bulan</th>
              <th className="px-2 py-1.5 font-medium">Prakiraan</th>
              <th className="px-2 py-1.5 font-medium">Normal</th>
              <th className="px-2 py-1.5 font-medium">Delta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {[
              { m: "Apr", p: 180, n: 220, d: -40 },
              { m: "Mei", p: 85, n: 150, d: -65 },
              { m: "Jun", p: 32, n: 80, d: -48 },
              { m: "Jul", p: 12, n: 45, d: -33 },
              { m: "Agu", p: 5, n: 30, d: -25 },
              { m: "Sep", p: 15, n: 55, d: -40 },
            ].map((r) => (
              <tr key={r.m}>
                <td className="px-2 py-1.5 font-medium text-gray-700">
                  {r.m}
                </td>
                <td className="px-2 py-1.5 text-gray-600">{r.p} mm</td>
                <td className="px-2 py-1.5 text-gray-600">{r.n} mm</td>
                <td
                  className={`px-2 py-1.5 font-medium ${r.d < 0 ? "text-red-600" : "text-green-600"}`}
                >
                  {r.d > 0 ? "+" : ""}
                  {r.d}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Audit info */}
      <div className="rounded-lg bg-slate-50 p-2.5 text-xs text-slate-600">
        <p className="font-semibold text-slate-700">Data Audit</p>
        <p className="mt-0.5">
          Awal MK: Dasarian II Mei &middot; Puncak: Juli
        </p>
        <p>Total prakiraan: 329 mm vs Normal 580 mm</p>
      </div>
    </div>
  );
}
